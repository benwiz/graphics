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

(defn slope
  "Calculate slope from two points"
  [point1 point2]
  (try
    (/
     (- (get point1 1) (get point2 1))
     (- (get point1 0) (get point2 0)))
    (catch ArithmeticException e Double/POSITIVE_INFINITY)))

(defn y
  "Point slope form!
  y - b = m (x - a)
  y = m (x - a) + b"
  [point1 point2]
  (+
   (* (slope point1 point2)
      (- (get point1 0)
         (get point2 0)))
   (get point2 1)))

(defn get-colors-for-x
  "Get color for every y-value in the x column"
  [bi x y1 y2]
  ; (println x ": " (min y1 y2) "to" (max y1 y2))
  (map (fn [y]
      [(.getRed (Color. (.getRGB bi x y)))
       (.getGreen (Color. (.getRGB bi x y)))
       (.getBlue (Color. (.getRGB bi x y)))
       (.getAlpha (Color. (.getRGB bi x y)))])
    (range (min y1 y2) (max y1 y2))))

(defn get-colors
  "Get each pixel's color for the given triangle. Input triangle is sorted by x-value. (i.e. rasterize)"
  ; https://stackoverflow.com/questions/8957028/getting-a-list-of-locations-within-a-triangle-in-the-form-of-x-y-positions
  [bi triangle]
  (let [x1 (get (nth triangle 0) 0)
        y1 (get (nth triangle 0) 1)
        x2 (get (nth triangle 1) 0)
        y2 (get (nth triangle 1) 1)
        x3 (get (nth triangle 2) 0)
        y3 (get (nth triangle 2) 1)
        A1 (- y2 y1)
        B1 (- x1 x2)
        C1 (- (* x2 y1) (* x1 y2))
        A2 (- y3 y2)
        B2 (- x2 x3)
        C2 (- (* x3 y2) (* x2 y3))
        x-range (concat (range x1 x2) (range (inc x2) (inc x3)))] ; [x1, x2), (x2, x3]
          (apply concat
            (map (fn [x]
                (let [y-top (int (/ (- (* -1 A1 x) C1) (if (= B1 0.0) -1.0 B1))) ; The if statement is a messy hack for avoiding divide by 0
                      y-bot (int (/ (- (* -1 A2 x) C2 1) (if (= (+ B2 1) 0.0) -1.0 (+ B2 1))))] ; NOTE: The `x` in this function may be wrong, stackoverflow said y but didn't think that made sense
                  ; TODO: These constrains are probably causing incorrect averages for edge triangles. It would be better to just skip the
                  ; points that are out-of-bounds.
                  (get-colors-for-x bi
                                    (min (.getWidth bi) x)
                                    (min (.getHeight bi) (max 0 y-bot))
                                    (min (.getHeight bi) (max 0 y-top)))))
              x-range))
  )
)

(defn draw
  "Get average color of each triangles then make the whole triangle that color.
  In the future do something more interesting than average color. HSV is a good starting place."
  [image triangles]
  (let [bi (ImageIO/read (io/input-stream image))
        g (.createGraphics bi)]
    (do
      (reduce (fn [idk-what-this-is triangle]
                ; Get min X
                ; Get max X
                ; For each X between min and max
                ; Get min Y
                  ; Get max Y
                  ; Create points for each Y between min and max

                (let [colors (get-colors bi (sort-by first triangle))]

                  (if (not (empty? colors)) ; This should never be false, if it is we will have an uncolored triangle
                    (let [total-rgb (apply map + colors)
                          average-color-map (map
                                             (fn [value] (int (/ value (count colors))))
                                             total-rgb)
                          average-color (vec average-color-map)]

                      ; Fill polygon with color
                      (.setColor g (Color. (get average-color 0) (get average-color 1) (get average-color 2)))
                      ; (.setColor g (Color. 0 200 0))
                      (.fillPolygon g
                                    (int-array (map (fn [point] (get point 0)) triangle))
                                    (int-array (map (fn [point] (get point 1)) triangle))
                                    (count triangle)))
                    (println "There was a triangle where no pixel colors could be collected. Oh no!"))
                  bi))
              ; Reduce won't handle the last element so we add an additional element.
              (conj triangles [[0 0] [0 0] [0 0]])))))

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
