(ns squiggle.primitive
  (:require [quil.core :as q :include-macros true]))

(def max-i 600)

(defn error [t p]
  (Math/pow (- p t) 2))

(defn mse [target prediction]
  "(From 1 to N (prediction_i - target_i)^2) / N"
  (/
    (reduce + (map error target prediction))
    (count prediction)))

(defn draw-shape [shape]
  (apply q/ellipse shape))

(defn setup [filename]
  (q/frame-rate 60)
  (q/background 255 255 255)
  (let [path (if (= (.-hostname (.-location js/window)) "benwiz.io")
                 (str "/squiggle/assets/images/" filename)
                 (str "/assets/images/" filename))]
  { :i 0
    :target-image (q/load-image path)
    :prediction-pixels (q/pixels)
    :shapes []
    :next-shape [150 150 10 10]
    :best-shape nil
    :best-mse 9007199254740991
    :try-count 0}))

(defn setup-starry-night []
  (setup "starry-night.jpg"))

(defn update-state [state]
  "Calculate mse,
  if mse is lower than best-mse then update best-shape and best-mse,
  if try-count is MAX then add best-shape to shapes vector,
  prepare next-shape vector (special case is try-count is MAX),
  update try-count or reset to 0"
  (let [prediction-pixels (q/pixels)
        mse (mse
              (q/pixels (:target-image state))
              prediction-pixels)]
    { :i (if (< (:i state) max-i) (inc (:i state)) 0)
      :target-image (:target-image state)
      :prediction-pixels prediction-pixels
      :shapes (if (< (:i state) 0) (:shapes state) (conj (:shapes state) (:best-shape state)))
      :next-shape [(rand-int (q/width)) (rand-int (q/height)) 10 10]
      :best-shape (if (< mse (:best-mse state)) (:next-shape state) (:best-shape state))
      :best-mse (if (< (:i state) max-i)
                    (if (< mse (:best-mse state)) mse (:best-mse state))
                    9007199254740991)}))

(defn draw-state [state]
  ; Clear background and set color
  (q/background 255 255 255)
  (q/no-stroke)
  (q/fill (rand-int 255) (rand-int 255) (rand-int 255))
  ; Draw all confirmed shapes
  (dorun (map draw-shape (:shapes state)))
  ; Draw next test shape
  (draw-shape (:next-shape state)))
