(ns partition.worker
  (:require [delaunay-triangulation.core :as delaunay]
            [aws.sdk.s3 :as s3]
            [cheshire.core :as cheshire]
            [clojure.java.io :as io])
  (:import
   [java.io File]
   [java.awt.image BufferedImage]
   [javax.imageio ImageIO]
   [java.awt Color]))

(def cred {:access-key (System/getenv "AWS_ACCESS_KEY_ID")
           :secret-key (System/getenv "AWS_SECRET_ACCESS_KEY")})

(defn delaunay-triangulation
  [points]
  (let [{:keys [points edges triangles]} (delaunay/triangulate points)]
    triangles))

(defn draw
  "Take width, height, and the map of mines. Save to a file.
  Supposed to take a generate-random-map{,-perc} mapping.
  https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure"
  [width height image file]
  (let [block 5 ; block size
        ; bi (BufferedImage. (* block width) (* block height) BufferedImage/TYPE_INT_ARGB)
        ; bi (ImageIO/read (io/file source)))
        bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (.drawLine g 50 200 200 300)
      (ImageIO/write bi "jpg" (File. file)))))

(defn run
  "Run."
  [context]
  ; (println "\nContext:\n" context)
  (println (keys context))
  (let [; Get folder name
        key (-> context :Records (get 0) :s3 :object :key (clojure.string/split #"points") (get 0))
        ; Download image and JSON
        image (:content (s3/get-object cred "lowpoly" (str key "start.jpg")))
        points (cheshire/parse-string (slurp (:content (s3/get-object cred "lowpoly" (str key "points.json")))))
        ; Identify triangles
        triangles (delaunay-triangulation points)]
    ; Draw triangles on start image and write to s3
    (draw 200 200 image "out.jpg")
    ; (with-open [in (io/input-stream image)
    ;             out (io/output-stream "image.jpg")]
    ;             ; https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure
    ;   (io/copy in out)
    ; TODO: Write json file to s3 (image first, data second)
    triangles))
