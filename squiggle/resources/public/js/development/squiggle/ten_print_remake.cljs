(ns squiggle.ten-print-remake
  (:require [quil.core :as q :include-macros true]))

(def percent 10)
(def palette
  [0 50 100 200 280])

(defn next-x [x r]
  (let [desired-x (+ x (/ (q/width) r))]
    (if (> desired-x (q/width)) 0 desired-x)))

(defn next-y [x y r]
  (let [desired-y (if (= x (q/width)) (+ y (/ (q/height) r)) y)]
    (if (>= desired-y (q/height))
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

(defn cell [x y]
  { :x x
    :y y
    :width (/ (q/width) percent)
    :height (/ (q/height) percent)})

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 20 0 0)
  {:hue 200
    :x 0
    :y 0})

(defn update-state [state]
  ; Update sketch state by changing circle hue and position.
  {:hue (rand-nth palette) ; (rand-int 255)
    :x (next-x (:x state) percent)
    :y (next-y (:x state) (:y state) percent)})

(defn draw-state [state]
  ; Clear "cell" by painting it black
  (let [rect (cell (:x state) (:y state))]
    (q/fill 20 0 0)
    (q/stroke 20 0 0)
    (q/rect (:x rect) (:y rect) (:width rect) (:height rect)))
  ; Draw line
  (let [direction (rand-nth [down-right down-left])
        coords (direction (:x state) (:y state))]
  (q/stroke (:hue state) 255 255)
    (q/line (:x1 coords) (:y1 coords)
            (:x2 coords) (:y2 coords))))
