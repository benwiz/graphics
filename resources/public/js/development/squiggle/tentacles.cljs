(ns squiggle.tentacles
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  (q/background 0)
  (q/stroke 0)
  { :size 50
    :hue (rand-int 360)
    :x (/ (q/width) 2)
    :y (/ (q/height) 2)})

(defn update-state [state]
  ; Reduce size by 5. If 0 make it 50. Change hue if size is 50.
  (let [size (if (= (- (:size state) 5) 0) 50 (- (:size state) 5))
        hue (:hue state)
        x (q/mouse-x)
        y (q/mouse-y)]
  { :size size
    :hue hue
    :x x
    :y y}))

(defn draw-state [state]
  (if (q/mouse-pressed?)
    (do
      (q/fill (:hue state) 250 250)
      (q/ellipse (:x state) (:y state) (:size state) (:size state)))))
