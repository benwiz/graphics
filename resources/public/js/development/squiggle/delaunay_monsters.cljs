(ns squiggle.delaunay-monsters
  (:require [quil.core :as q :include-macros true]))

(defn point []
  { :x (rand-int (q/width))
    :y (rand-int (q/height))
    :d 0
    :h 100})

(defn draw-point [point]
  (q/point (:x point) (:y point) 10 10))

(defn setup []
  { :points (repeatedly 5 point)
  })

(defn update-state [state]
  state)

(defn draw-state [state]
  (println (type (:points state)) (:points state))
  (mapv draw-point (:points state)))
