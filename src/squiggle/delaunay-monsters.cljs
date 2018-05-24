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
      ; TODO: Move x, y, and d according to d (and according to health?)
      { :x (:x point)
        :y (:y point)
        :d (:d point)
        :h (dec (:h point))}))

(defn draw-point [point]
  (q/ellipse (:x point) (:y point) 10 10))

(defn setup []
  { :triangles []
    :points (repeatedly 5 point)})

(defn update-state [state]
  { ; Calculate triangles to draw from previous state
    :triangles []
    ; Generate points for next state
    :points (lazy-cat
              ; Kill points
              (remove nil?
                ; Move points (maybe I should kill first, then move that subset... doesn't really matter unless movements start considering other points)
                (map update-point (:points state)))
              ; Birth point
              (if (= (rand-int 10) 0)
                  [(point)]
                  []))})

(defn draw-state [state]
  (q/background 0 0 0)
  ; Draw points. Remove this eventually.
  (mapv draw-point (:points state)))
