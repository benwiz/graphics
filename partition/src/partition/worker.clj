(ns partition.worker
  (:require [delaunay-triangulation.core :as delaunay]
            [aws.sdk.s3 :as s3-old] ; TODO: Stop using this
            ; [amazonica.aws.s3 :as s3]
            ; [amazonica.aws.s3transfer :as s3transfer]
            [cheshire.core :as cheshire]
            [clojure.java.io :as io])
  (:import
   [java.io File]
   [java.awt.image BufferedImage]
   [javax.imageio ImageIO]
   [java.awt Color]))

(def cred {:access-key (System/getenv "AWS_ACCESS_KEY_ID")
           :secret-key (System/getenv "AWS_SECRET_ACCESS_KEY")})
(def bucket "lowpoly")

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
      bi)))
      ; (ImageIO/write bi "jpg" (File. file)))))

(defn run
  "Run."
  [context]
  ; (println "\nContext:\n" context)
  (println (keys context))
  (let [; Get folder name
        key (-> context :Records (get 0) :s3 :object :key (clojure.string/split #"points") (get 0))
        ; Download image and JSON
        image (:content (s3-old/get-object cred bucket (str key "start.jpg")))
        points (cheshire/parse-string (slurp (:content (s3-old/get-object cred bucket (str key "points.json")))))
        ; Identify triangles
        triangles (delaunay-triangulation points)]
    ; (with-open [in (io/input-stream image)
    ;             out (io/output-stream "image.jpg")]
    ;             ; https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure
    ;   (io/copy in out)
    ; (let [image (ImageIO/read "...")
    ;       image-output-stream (ByteArrayOutputStream.)]
    ;   (ImageIO/write image "jpg" image-output-stream)
    ;   (jpeg-response (ByteArrayInputStream (.toByteArray image-output-stream))))

    ; (s3/put-object :bucket-name bucket
    ;                :key (str key "triangles.jpg")
    ;                 ; :metadata {:server-side-encryption "AES256"}
    ;                :file (draw 200 200 image "out.jpg"))
    triangles))
