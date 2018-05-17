(ns squiggle.primitive
  (:require [quil.core :as q :include-macros true]))

(defn error [t p]
  (- p t))

(defn mse [target prediction]
  "(From 1 to N (prediction_i - target_i)^2) / N"
  (/
    (reduce + (map error target prediction))
    (count prediction)))

(defn setup [filename]
  (q/frame-rate 1)
  (q/background 255 200 105)
  (let [path (if (= (.-hostname (.-location js/window)) "benwiz.io")
                 (str "/squiggle/assets/images/" filename)
                 (str "/assets/images/" filename))]
  { :target-image (q/load-image path)
    :prediction-pixels (q/pixels)}))

(defn setup-starry-night []
  (setup "starry-night.jpg"))

(defn update-state [state]
  (println (mse
    (q/pixels (:target-image state))
    (:prediction-pixels state)))
  state)

(defn draw-state [state]
  )
