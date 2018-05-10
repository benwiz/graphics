(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(def percent 10)

(defn next-x [x r]
  (let [desired-x (+ x (/ (q/width) r))]
    (if (> desired-x (q/width)) 0 desired-x)))

(defn next-y [x y r]
  (let [desired-y (if (= x (q/width)) (+ y (/ (q/width) r)) y)]
    (if (>= desired-y 240)
      0
      desired-y)))

(defn down-right [x y]
  {:x1 x
    :y1 y
    :x2 (+ x (/ (q/width) percent))
    :y2 (+ y (/ (q/height) percent))})

(defn down-left [x y]
  {:x1 (+ x (/ (q/width) percent))
    :y1 y
    :x2 x
    :y2 (+ y (/ (q/height) percent))})

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
    :x (next-x (:x state) percent)
    :y (next-y (:x state) (:y state) percent)})

(defn draw-state [state]
  (q/stroke (:hue state) 255 255)
  (let [coords (down-left (:x state) (:y state))]
    (q/line (:x1 coords) (:y1 coords)
            (:x2 coords) (:y2 coords))))
