(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 20)
  {:color 200
    :x 0
    :y 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (:color state)
    :x (:x state)
    :y (:y state)})

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 20)
  ; Set circle color.
  (q/fill (:color state) 255 255)
      ; Draw the circle.
      (q/ellipse (:x state) (:y state) 50 50))
