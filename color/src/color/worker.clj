(ns color.worker
  (:require [aws.sdk.s3 :as s3-old] ; TODO: Stop using this
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

(defn draw
  "https://stackoverflow.com/questions/6973290/generate-and-save-a-png-image-in-clojure"
  [image triangles]
  (let [bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (println (type g))
      (reduce (fn [idk-what-this-is triangle]
                ; TODO: Get average color of each triangle and make it that color.
                ; TODO: In the future do something more interesting than average color. HSV is a good starting place.
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
  (let [; Get folder name
        key (-> context :Records (get 0) :s3 :object :key (clojure.string/split #"triangles") (get 0))
        ; Download image and JSON
        image (:content (s3-old/get-object cred bucket (str key "start.jpg")))
        triangles (cheshire/parse-string (slurp (:content (s3-old/get-object cred bucket (str key "triangles.json")))))]
    ; Draw on image
    (let [image (draw image triangles)
          image-output-stream (ByteArrayOutputStream.)]
      (ImageIO/write image "jpg" image-output-stream)
      ; Upload image to S3 (TODO: use .getSize to get size of bytearrayinputstream)
      (s3-old/put-object cred bucket (str key "lowpoly.jpg") (ByteArrayInputStream. (.toByteArray image-output-stream))))
    nil))
