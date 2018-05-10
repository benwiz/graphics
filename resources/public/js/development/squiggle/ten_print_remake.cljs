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
  {:hue (:hue state)
    :x (:x state)
    :y (:y state)})

(defn draw-state [state]
  (q/fill (:hue state) 255 255)
      ; Draw the circle.
      (q/ellipse (:x state) (:y state) 50 50))
