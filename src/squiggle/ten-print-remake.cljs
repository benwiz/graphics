(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(defn next-x [x]
  (let [desired-x (+ x (/ (q/width) 10))]
    (if (> desired-x (q/width)) 0 desired-x)))

(defn next-y [x y]
  (if (= x (q/width)) (+ y (/ (q/width) 10)) y))

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
    :x (next-x (:x state))
    :y (next-y (:x state) (:y state))})

(defn draw-state [state]
  (println state)
  (q/fill (:hue state) 255 255)
    (q/ellipse (:x state) (:y state) 10 10))
