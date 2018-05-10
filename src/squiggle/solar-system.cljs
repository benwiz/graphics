(ns squiggle.solar-system
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  {:sun {
    :h 38
    :s 230
    :v 230
    :x 0
    :y 0
    :size 20
  } :mercury {
    :h 0
    :s 175
    :v 175
    :x -35
    :y 30
    :size 10
  }})

(defn update-state [state]
  state)

(defn draw-state [state]
  ; Clear screen
  (q/background 0)
  ; Set origin to center
  (q/with-translation [(/ (q/width) 2)
                          (/ (q/height) 2)]
    ; Sun
    (q/fill (:h (:sun state)) (:s (:sun state)) (:v (:sun state)))
    (q/ellipse (:x (:sun state)) (:y (:sun state))
              (:size (:sun state)) (:size (:sun state)))
    ; Mercury
    (q/fill (:h (:mercury state)) (:s (:mercury state)) (:v (:mercury state)))
    (q/ellipse (:x (:mercury state)) (:y (:mercury state))
              (:size (:mercury state)) (:size (:mercury state)))))
