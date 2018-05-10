(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 20)
  {:hue 200
    :x 0
    :y 0})

(defn update-state [state]
  ; Update sketch state by changing circle hue and position.
  {:hue (rand-int 255)
    :x (+ (:x state) (/ (q/width) 10))
    :y (+ (:y state) (/ (q/height) 10))})

(defn draw-state [state]
  (q/fill (:hue state) 255 255)
      ; Draw the circle.
      (q/ellipse (:x state) (:y state) 10 10))
