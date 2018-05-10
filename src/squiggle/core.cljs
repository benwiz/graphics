(ns squiggle.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [squiggle.ten-print-remake :as ten-print-remake]
            [squiggle.squiggle2 :as squiggle2]))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch sketch-ten-print-remake
    :host "ten-print-remake"
    :size [240 240]
    ; setup function called only once, during sketch initialization.
    :setup ten-print-remake/setup
    ; update-state is called on each iteration before draw-state.
    :update ten-print-remake/update-state
    :draw ten-print-remake/draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))
  ; (q/defsketch sketch-squiggle2
  ;   :host "squiggle2"
  ;   :size [500 500]
  ;   :setup squiggle2/setup
  ;   :update squiggle2/update-state
  ;   :draw squiggle2/draw-state
  ;   :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
