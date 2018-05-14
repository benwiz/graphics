(ns squiggle.tentacles
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 0)
  (q/stroke 0 0 255)
  { :size 50
    :hue (rand-int 360)
    :x (/ (q/width) 2)
    :y (/ (q/height) 2)})

(defn update-state [state]
  ; Reduce size by 5. If 0 make it 50. Change hue if size is 50.
  (let [next-size (- (:size state) 5)
        size (if (= next-size 0) 50 next-size)
        hue (if (= size 50) (rand-int 360) (:hue state))
        x-direction (if (= size 50) (rand-nth [-1 1]) (:x-direction state))
        y-direction (if (= size 50) (rand-nth [-1 1]) (:y-direction state))
        x (if (= size 50)
                (q/mouse-x)
                (+ (:x state) (* (+ (rand-int 10) 5) x-direction)))
        y (if (= size 50)
                (q/mouse-y)
                (+ (:y state) (* (+ (rand-int 10) 5) y-direction)))]
    { :size size
      :hue hue
      :x-direction x-direction
      :y-direction y-direction
      :x x
      :y y}))

(defn draw-state [state]
  (q/fill (:hue state) 250 250)
  (q/ellipse (:x state) (:y state) (:size state) (:size state)))
