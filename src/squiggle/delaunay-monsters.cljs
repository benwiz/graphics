(ns squiggle.delaunay-monsters
  (:require [quil.core :as q :include-macros true]
            [squiggle.delaunay :as delaunay]))

(defn point []
  { :x (rand-int (q/width))
    :y (rand-int (q/height))
    :d 0
    :h 200})

(defn coords [point]
  [(:x point) (:y point)])

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

(defn draw-triangle [triangle]
  (let [a (get triangle 0)
        b (get triangle 1)
        c (get triangle 2)]
    (q/line (get a 0) (get a 1) (get b 0) (get b 1))
    (q/line (get b 0) (get b 1) (get c 0) (get c 1))
    (q/line (get c 0) (get c 1) (get a 0) (get a 1))))

(defn setup []
  (q/stroke 255 0 0)
  (q/fill 255 0 0)
  { :triangles []
    :points (repeatedly 5 point)})

(defn update-state [state]
  { ; Calculate triangles to draw from previous state
    :triangles (:triangles (delaunay/triangulate (map coords (:points state))))
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
  (mapv draw-point (:points state))
  (mapv draw-triangle (:triangles state)))
