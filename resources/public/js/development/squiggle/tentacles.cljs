(ns squiggle.tentacles
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  (q/background 0)
  (q/stroke 0)
  { :size 50
    :hue 50
    :x (/ (q/width) 2)
    :y (/ (q/height) 2)})

(defn update-state [state]
  { :size (:size state)
    :hue (rand-int 360)
    :x (q/mouse-x)
    :y (q/mouse-y)})

(defn draw-state [state]
  (if (q/mouse-pressed?)
    (do
      (q/fill (:hue state) 250 250)
      (q/ellipse (:x state) (:y state) (:size state) (:size state)))))
