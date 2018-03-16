(ns partition.worker
  (:require [delaunay-triangulation.core :as delaunay]
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

(def cred {:access-key (System/getenv "AWS_ACCESS_KEY_ID")
           :secret-key (System/getenv "AWS_SECRET_ACCESS_KEY")})
(def bucket "lowpoly")

(defn delaunay-triangulation
  [points]
  (let [{:keys [points edges triangles]} (delaunay/triangulate points)]
    ; TODO: Clean to make all coordinates integers
    triangles))

(defn draw
  "Take width, height, and the map of mines. Save to a file.
  Supposed to take a generate-random-map{,-perc} mapping.
  https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure"
  [image triangles]
  (let [bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (reduce (fn [idk-what-this-is triangle]
                (let [a (get triangle 0)
                      b (get triangle 1)
                      c (get triangle 2)]
                  (.drawLine g (get a 0) (get a 1) (get b 0) (get b 1))
                  (.drawLine g (get b 0) (get b 1) (get c 0) (get c 1))
                  (.drawLine g (get c 0) (get c 1) (get a 0) (get a 1))
                  bi))
              triangles))))
      ; (ImageIO/write bi "jpg" (File. file)))))

(defn run
  "Run."
  [context]
  ; (println "\nContext:\n" context)
  (println cred)
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
