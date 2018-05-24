(ns squiggle.delaunay-monsters
  (:require [quil.core :as q :include-macros true]))

(defn point []
  { :x (rand-int (q/width))
    :y (rand-int (q/height))
    :d 0
    :h 200})

(defn update-point [point]
  (if (<= (:h point) 0)
      nil
      { :x (:x point)
        :y (:y point)
        :d (:d point)
        :h (dec (:h point))}))

(defn draw-point [point]
  (q/ellipse (:x point) (:y point) 10 10))

(defn setup []
  { :points (repeatedly 5 point)
  })

(defn update-state [state]
  { :points (lazy-cat
              (remove nil? (map update-point (:points state)))
              (if (= (rand-int 10) 0)
                  [(point)]
                  []))
  })

(defn draw-state [state]
  (q/background 0 0 0)
  ; Draw points. Remove this eventually.
  (mapv draw-point (:points state)))
