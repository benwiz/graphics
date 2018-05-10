(ns squiggle.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [squiggle.ten-print-remake :as ten-print-remake]
            [squiggle.example :as example]))

; this function is called in index.html
(defn ^:export run-sketch []
  ; (q/defsketch sketch-example
  ;   :host "example"
  ;   :size [500 500]
  ;   :setup example/setup
  ;   :update example/update-state
  ;   :draw example/draw-state
  ;   :middleware [m/fun-mode])
  (q/defsketch sketch-ten-print-remake
    :host "ten-print-remake"
    :size [240 240]
    :setup ten-print-remake/setup
    :update ten-print-remake/update-state
    :draw ten-print-remake/draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
