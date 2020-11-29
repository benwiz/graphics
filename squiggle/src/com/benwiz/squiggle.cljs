(ns ^:figwheel-hooks com.benwiz.squiggle
  (:require ;; [goog.dom :as gdom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ;; [com.benwiz.squiggle.primitive :as primitive]
            [com.benwiz.squiggle.delaunay-monsters :as delaunay-monsters]
            ;; [com.benwiz.squiggle.game-of-life :as game-of-life]
            [com.benwiz.squiggle.pointillism :as pointillism]
            [com.benwiz.squiggle.solar-system :as solar-system]
            [com.benwiz.squiggle.ten-print-remake :as ten-print-remake]
            [com.benwiz.squiggle.tentacles :as tentacles]
            ))

(prn "hello")

(defn ^:export run-sketch
  []
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
  #_(q/defsketch sketch-game-of-life
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
    :size [608 300] ;; 4 grid-column-gap
    :setup pointillism/setup-georges-seurat
    :update pointillism/update-state
    :draw pointillism/draw-state
    :middleware [m/fun-mode])
  #_(q/defsketch sketch-primitive-starry-night
    :host "primitive-starry-night"
    :size [300 300]
    :setup primitive/setup-starry-night
    :update primitive/update-state
    :draw primitive/draw-state
    :middleware [m/fun-mode])
  #_(q/defsketch sketch-delaunay-monsters
    :host "delaunay-monsters"
    :size [300 300]
    :setup delaunay-monsters/setup
    :update delaunay-monsters/update-state
    :draw delaunay-monsters/draw-state
    :mouse-clicked delaunay-monsters/mouse-clicked
    :middleware [m/fun-mode]))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(run-sketch)
