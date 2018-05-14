(ns squiggle.tentacles
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 0)
  (q/stroke 0 0 255)
  { :size 50
    :hue (rand-int 360)
    :sat 255
    :val 255
    :x-direction 1
    :y-direction 1
    :x (/ (q/width) 2)
    :y (/ (q/height) 2)})

(defn update-state [state]
  ; Reduce size by 5. If 0 make it 50. Change hue if size is 50.
  (let [next-size (- (:size state) 5)
        size (if (= next-size 0) 50 next-size)
        hue (if (= size 50) (rand-int 360) (:hue state))
        sat (if (= size 50) (+ (rand-int 105) 150) (:sat state))
        val (if (= size 50) (+ (rand-int 105) 150) (:val state))
        x-direction (if (= size 50) (rand-nth [-1 1]) (:x-direction state))
        y-direction (if (= size 50) (rand-nth [-1 1]) (:y-direction state))
        x (if (= size 50)
                (q/mouse-x)
                (+ (:x state) (* (+ (rand-int 10) 3) x-direction)))
        y (if (= size 50)
                (q/mouse-y)
                (+ (:y state) (* (+ (rand-int 10) 3) y-direction)))]
    { :size size
      :hue hue
      :sat sat
      :val val
      :x-direction x-direction
      :y-direction y-direction
      :x x
      :y y}))

(defn draw-state [state]
  (q/fill (:hue state) (:sat state) (:val state))
  (q/ellipse (:x state) (:y state) (:size state) (:size state)))
