(ns squiggle.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [squiggle.ten-print-remake :as ten-print-remake]
            [squiggle.solar-system :as solar-system]
            [squiggle.game-of-life :as game-of-life]
            [squiggle.tentacles :as tentacles]
            [squiggle.pointillism :as pointillism]))

; This function is called in index.html
(defn ^:export run-sketch []
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
    :middleware [m/fun-mode])
  (q/defsketch sketch-tentacles
    :host "tentacles"
    :size [300 300]
    :setup tentacles/setup
    :update tentacles/update-state
    :draw tentacles/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-pointillism-starry-night
    :host "pointillism-starry-night"
    :size [300 300]
    :setup pointillism/setup-starry-night
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-pointillism-girl-with-pearl-earing
    :host "pointillism-girl-with-pearl-earing"
    :size [300 300]
    :setup pointillism/setup-girl-with-pearl-earing
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-pointillism-picasso-face
    :host "pointillism-picasso-face"
    :size [300 300]
    :setup pointillism/setup-picasso-face
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-pointillism-georges-seurat
    :host "pointillism-georges-seurat"
    :size [604 300] ; 4 to account for gutters
    :setup pointillism/setup-georges-seurat
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode])
  (q/defsketch sketch-pointillism-deep-space
    :host "pointillism-deep-space"
    :size [300 300]
    :setup pointillism/setup-deep-space
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
