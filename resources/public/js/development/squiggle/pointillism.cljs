(ns squiggle.pointillism
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/background 0)
  [
    {:x 50 :y 50 :r 200 :g 0 :b 0 :size 30}
  ])

(defn update-state [state]
  state)

(defn draw-state [state]
  (mapv (fn [point]
    (q/fill (:r point) (:g point) (:b point))
    (q/ellipse (:x point) (:y point) (:size point) (:size point)))
  state))
