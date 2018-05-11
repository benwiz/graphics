(ns squiggle.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [squiggle.example :as example]
            [squiggle.ten-print-remake :as ten-print-remake]
            [squiggle.solar-system :as solar-system]
            [squiggle.game-of-life :as game-of-life]))

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
    :size [300 300]
    :setup ten-print-remake/setup
    :update ten-print-remake/update-state
    :draw ten-print-remake/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-solar-system
    :host "solar-system"
    :size [300 300]
    :setup solar-system/setup
    :update solar-system/update-state
    :draw solar-system/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-game-of-life
    :host "game-of-life"
    :size [300 300]
    :setup game-of-life/setup
    :update game-of-life/update-state
    :draw game-of-life/draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
