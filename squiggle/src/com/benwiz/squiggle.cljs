(ns ^:figwheel-hooks com.benwiz.squiggle
  (:require [cemerick.url :as url]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [com.benwiz.squiggle.game-of-life :as game-of-life]
            [com.benwiz.squiggle.noise-scape :as noise-scape]
            [com.benwiz.squiggle.pointillism :as pointillism]
            [com.benwiz.squiggle.solar-system :as solar-system]
            [com.benwiz.squiggle.ten-print-remake :as ten-print-remake]
            [com.benwiz.squiggle.tentacles :as tentacles]
            [com.benwiz.squiggle.sketch-20201204 :as sketch-20201204]
            [com.benwiz.squiggle.sketch-20201204b :as sketch-20201204b]
            [com.benwiz.squiggle.sketch-20201206 :as sketch-20201206]
            ;; [goog.dom :as gdom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def query (walk/keywordize-keys (:query (url/url (-> js/window .-location .-href)))))
(def w (or (:w query) 400))
(def h (or (:h query) w))
(def gap 8)
(def sketches (into #{}
                    (remove empty?)
                    (str/split (:sketches query) #",")))

(defn ^:export run-sketch
  []
  (let [^js app (js/document.getElementById "app")]
    (let [id "ten-print"]
      (when (or (empty? sketches) (sketches "ten-print"))
        (q/defsketch sketch-ten-print
          :host id
          :size [w h]
          :setup ten-print-remake/setup
          :update ten-print-remake/update-state
          :draw ten-print-remake/draw-state
          :middleware [m/fun-mode])))
    (let [id "solar-system"]
      (when (or (empty? sketches) (sketches "solar-system"))
        (q/defsketch sketch-solar-system
          :host id
          :size [w h]
          :setup solar-system/setup
          :update solar-system/update-state
          :draw solar-system/draw-state
          :middleware [m/fun-mode])))
    (let [id "game-of-life"]
      (when (or (empty? sketches) (sketches "game-of-life"))
        (q/defsketch sketch-game-of-life
          :host id
          :size [w h]
          :setup game-of-life/setup
          :update game-of-life/update-state
          :draw game-of-life/draw-state
          :middleware [m/fun-mode])))
    (let [id "tentacles"]
      (when (or (empty? sketches) (sketches "tentacles"))
        (q/defsketch sketch-tentacles
          :host id
          :size [w h]
          :setup tentacles/setup
          :update tentacles/update-state
          :draw tentacles/draw-state
          :middleware [m/fun-mode])))
    (let [id "pointillism-starry-night"]
      (when (or (empty? sketches) (sketches "pointillism-starry-night"))
        (q/defsketch sketch-pointillism-starry-night
          :host id
          :size [w h]
          :setup pointillism/setup-starry-night
          :update pointillism/update-state
          :draw pointillism/draw-state
          :middleware [m/fun-mode])))
    (let [id "pointillism-girl-with-pearl-earing"]
      (when (or (empty? sketches) (sketches "pointillism-girl-with-pearl-earing"))
        (q/defsketch sketch-pointillism-girl-with-pearl-earing
          :host id
          :size [w h]
          :setup pointillism/setup-girl-with-pearl-earing
          :update pointillism/update-state
          :draw pointillism/draw-state
          :middleware [m/fun-mode])))
    (let [id "pointillism-picasso-face"]
      (when (or (empty? sketches) (sketches "pointillism-picasso-face"))
        (q/defsketch sketch-pointillism-picasso-face
          :host id
          :size [w h]
          :setup pointillism/setup-picasso-face
          :update pointillism/update-state
          :draw pointillism/draw-state
          :middleware [m/fun-mode])))
    (let [id "pointillism-georges-seurat"]
      (when (or (empty? sketches) (sketches "pointillism-georges-seurat"))
        (q/defsketch sketch-pointillism-georges-seurat
          :host id
          :size [(+ (* 2 w) 8) h] ;; 4 grid-column-gap
          :setup pointillism/setup-georges-seurat
          :update pointillism/update-state
          :draw pointillism/draw-state
          :middleware [m/fun-mode])))
    (let [id "noise-scape-lines"]
      (when (or (empty? sketches) (sketches id))
        (q/defsketch sketch-noise-scape-lines
          :host id
          :size [w h]
          :setup noise-scape/setup
          :update noise-scape/update-state
          :draw noise-scape/draw
          :key-pressed noise-scape/key-pressed
          :middleware [m/fun-mode])))
    (let [id "sketch-20201204"]
      (when (or (empty? sketches) (sketches id))
        (q/defsketch sketch-sketch-20201204
          :host id
          :size [w h]
          :setup sketch-20201204/setup
          :update sketch-20201204/update-state
          :draw sketch-20201204/draw
          :key-pressed sketch-20201204/key-pressed
          :middleware [m/fun-mode])))
    (let [id "sketch-20201204b"]
      (when (or (empty? sketches) (sketches id))
        (q/defsketch sketch-sketch-20201204b
          :host id
          :size [w h]
          :setup sketch-20201204b/setup
          :update sketch-20201204b/update-state
          :draw sketch-20201204b/draw
          :key-pressed sketch-20201204b/key-pressed
          :middleware [m/fun-mode])))
    (let [id "sketch-20201206"]
      (when (or (empty? sketches) (sketches id))
        (q/defsketch sketch-sketch-20201206
          :host id
          :size [w h]
          :setup sketch-20201206/setup
          :update sketch-20201206/update-state
          :draw sketch-20201206/draw
          :key-pressed sketch-20201206/key-pressed
          :middleware [m/fun-mode])))))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(run-sketch)
