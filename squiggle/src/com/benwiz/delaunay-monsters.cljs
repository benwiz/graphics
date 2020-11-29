(ns com.benwiz.squiggle.delaunay-monsters
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.squiggle.delaunay :as delaunay]
            [com.benwiz.squiggle.listen :as listen]
            [cljs.core.async :as async])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def num-points 10)
(def step 2)
(def edge-rate 4)
(def triangle-rate 10)
(def birth-rate 15)

(defn point []
  { :x (rand-int (q/width))
    :y (rand-int (q/height))
    :a (rand (* 2 (.-PI js/Math))) ; angle to move at
    :h 150})

(defn coords [point]
  [(:x point) (:y point)])

(defn update-point [point]
  (let [min-x -100
        max-x (+ (q/width) 100)
        min-y -100
        max-y (+ (q/height) 100)]
    (if (<= (:h point) 0)
        nil
        (if (or (< (:x point) min-x) (> (:x point) max-x) (< (:y point) min-y) (> (:y point) max-y))
            ; If outside bounds
            { :x (if (< (:x point) min-x) min-x
                     (if (> (:x point) max-x) max-x
                     (+ (:x point) (* step (q/cos (:a point))))))
              :y (if (< (:y point) min-y) min-y
                     (if (> (:y point) max-y) max-y
                     (+ (:y point) (* step (q/sin (:a point))))))
              :a (+ (:a point) (.-PI js/Math) (- (rand (.-PI js/Math)) (/ (.-PI js/Math) 2)))
              ; :a (if (< (:x point) min-x) min-x
              ;        (if (> (:x point) max-x) max-x
              ;        (+ (:x point) (* step (q/cos (:a point))))))
              :h (dec (:h point))}
            ; Else, inside bounds
            { :x (+ (:x point) (* step (q/cos (:a point))))
              :y (+ (:y point) (* step (q/sin (:a point))))
              :a (:a point)
              :h (dec (:h point))}))))

(defn draw-point [point]
  (q/fill 255 0 0)
  (q/ellipse (:x point) (:y point) 10 10))

(defn draw-edges [triangle]
  ; Only draw edge if this roll is successful
  (if (= (rand-int edge-rate) 0)
      (let [a (get triangle 0)
            b (get triangle 1)
            c (get triangle 2)]
        (q/stroke (rand-int 255) 0 0)
        (q/line (get a 0) (get a 1) (get b 0) (get b 1))
        (q/line (get b 0) (get b 1) (get c 0) (get c 1))
        (q/line (get c 0) (get c 1) (get a 0) (get a 1)))))

(defn draw-triangles [triangle]
  ; Only draw triangle if this roll is successful
  (if (= (rand-int triangle-rate) 0)
      ; Get edges
      (let [a (get triangle 0)
            b (get triangle 1)
            c (get triangle 2)]
        ; Set color and draw triangle
        (q/fill (rand-int 255) 0 0)
        (q/triangle (get a 0) (get a 1)
                    (get b 0) (get b 1)
                    (get c 0) (get c 1)))))

(defn setup []
  (q/frame-rate 30)
  ; (q/no-loop)
  { :triangles []
    :points (repeatedly num-points point)
    ; :audio-channel (listen/audio)
  })

(defn update-state [state]
  ; (println listen/current-frame) ; use this : http://funcool.github.io/octet/latest/

  { ; Calculate triangles to draw from previous state
    :triangles (:triangles (delaunay/triangulate (map coords (:points state))))
    ; Generate points for next state
    :points (lazy-cat
              ; Kill points
              (remove nil?
                ; Move points (maybe I should kill first, then move that subset... doesn't really matter unless movements start considering other points)
                (map update-point (:points state)))
              ; Birth point
              (if (= (rand-int birth-rate) 0)
                  [(point)]
                  []))
    :audio-channel (:audio-channel state)})

(defn draw-state [state]
  (q/background 0 0 0)
  ; (mapv draw-point (:points state))
  (mapv draw-edges (:triangles state))
  (mapv draw-triangles (:triangles state)))

(defn mouse-clicked [state event]
  (println "click")
  ; This is an experiment for sound frames. Depending on how those work may be able to use (q/no-loop) in setup
  (if (= 0.5 step)
      (def step 10.0)
      (def step 0.5))
  (q/redraw)
  state)
