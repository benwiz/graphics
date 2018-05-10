(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(defn next-x [x r]
  (let [desired-x (+ x (/ (q/width) r))]
    (if (> desired-x (q/width)) 0 desired-x)))

(defn next-y [x y r]
  (if (>= (if (= x (q/width)) (+ y (/ (q/width) r)) y) 240)
    0
    (if (= x (q/width)) (+ y (/ (q/width) r)) y)))

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
    :x (next-x (:x state) 10)
    :y (next-y (:x state) (:y state) 10)})

(defn draw-state [state]
  (println state)
  (q/fill (:hue state) 255 255)
    (q/ellipse (:x state) (:y state) 10 10))
