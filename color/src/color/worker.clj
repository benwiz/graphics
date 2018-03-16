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
  "Get average color of each triangles then make the whole triangle that color.
  In the future do something more interesting than average color. HSV is a good starting place."
  [image triangles]
  (let [bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (println (type g))
      (reduce (fn [idk-what-this-is triangle]
                ; TODO: Get average color of each triangle and make it that color.
                  ; TODO: Get all points within polygon
                  ; TODO: For each point, sum RGB values
                  ; TODO: Take average of RGB values

                ; https://stackoverflow.com/questions/11075505/get-all-points-within-a-triangle
                ; Introduction:
                ; The general idea was to get the triangle's edges (y-Wise) for every x in it's range,
                ; and then you have all the y's that exist within the triangle for every single x,
                ; which with simple conversion turns into all points within the triangle.
                ; You can look at it as if you cut the triangle into stripes, each being of width 1.
                ; So for X=0, on the line between A and B, the Y is 6, and on the line between A and C,
                ; the Y is -2, so you can see that the stripe of X=0 is between -2 and 6. Therefore,
                ; you can tell that (0, -2) (0, -1) (0, 0) ... (0, 5) (0, 6) are all in the triangle.
                ; Doing that for X's between the smallest and the largest within the triangle,
                ; and you have all the points in the triangle!


                ; For now, fill polygon with a color
                (.setColor g (Color. (rand-int 256) (rand-int 256) (rand-int 256)))
                (.fillPolygon g
                              (int-array (map (fn [point] (get point 0)) triangle))
                              (int-array (map (fn [point] (get point 1)) triangle))
                              (count triangle))
                bi)
              ; Reduce won't handle the last element so we add an additional element.
              (conj triangles [0 0])))))

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
