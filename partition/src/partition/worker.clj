(ns partition.worker
  (:require ;[delaunay-triangulation.core :as delaunay]
   [partition.delaunay :as delaunay]
   [aws.sdk.s3 :as s3-old] ; TODO: Stop using this
            ; [amazonica.aws.s3 :as s3]
            ; [amazonica.aws.s3transfer :as s3transfer]
   [cheshire.core :as cheshire]
   [clojure.java.io :as io])
  (:import
   [java.io ByteArrayOutputStream ByteArrayInputStream]
   [java.awt.image BufferedImage]
   [javax.imageio ImageIO]
   [java.awt Color]))

; There's something not right with the AWS IAM Role so I'm including my personal keys. Stupid.
(def cred {:access-key (System/getenv "MY_AWS_ACCESS_KEY_ID")
           :secret-key (System/getenv "MY_AWS_SECRET_ACCESS_KEY")})
(def bucket "lowpoly")

(defn delaunay-triangulation
  [points]
  (println "NUM POINTS:" (count points))
  (let [{:keys [_ _ triangles]} (delaunay/triangulate points)]
    ; TODO: Clean to make all coordinates integers
    (println "NUM TRIANGLES:" (count triangles))
    triangles))

(defn draw
  "Take width, height, and the map of mines. Save to a file.
  Supposed to take a generate-random-map{,-perc} mapping.
  https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure"
  [image triangles]
  ; Reduce won't handle the last element so we add an additional element.
  (println "triangle:" (get triangles 0))
  (conj triangles [0 0])
  ; Do the main stuff
  (let [bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (reduce (fn [idk-what-this-is triangle]
                (.drawPolygon g
                              (int-array (map (fn [point] (get point 0)) triangle))
                              (int-array (map (fn [point] (get point 1)) triangle))
                              (count triangle))

                ; (.setColor g (Color. (rand-int 255) (rand-int 255) (rand-int 255)))
                ; (.fillPolygon g
                ;               (int-array (map (fn [point] (get point 0)) triangle))
                ;               (int-array (map (fn [point] (get point 1)) triangle))
                ;               (count triangle))
                bi)
              triangles))))

(defn run
  "Run."
  [context]
  ; (println "\nContext:\n" context)
  (let [; Get folder name
        key (-> context :Records (get 0) :s3 :object :key (clojure.string/split #"points") (get 0))
        ; Download image and JSON
        image (:content (s3-old/get-object cred bucket (str key "start.jpg")))
        points (cheshire/parse-string (slurp (:content (s3-old/get-object cred bucket (str key "points.json")))))
        ; Identify triangles
        triangles (delaunay-triangulation points)]
    ; Draw on image
    (let [image (draw image triangles)
          image-output-stream (ByteArrayOutputStream.)]
      (ImageIO/write image "jpg" image-output-stream)
      ; Upload image to S3 (TODO: use .getSize to get size of bytearrayinputstream)
      (s3-old/put-object cred bucket (str key "triangles.jpg") (ByteArrayInputStream. (.toByteArray image-output-stream))))
    ; Write string to S3. TODO: May need to foce this upload to happen second
    (s3-old/put-object cred bucket (str key "triangles.json") (cheshire/generate-string triangles))
    nil))
