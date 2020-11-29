(ns ^:figwheel-hooks com.benwiz.squiggle
  (:require ;; [com.benwiz.squiggle.primitive :as primitive]
   ;; [com.benwiz.squiggle.delaunay-monsters :as delaunay-monsters]
   [com.benwiz.squiggle.game-of-life :as game-of-life]
   [cemerick.url :as url]
   [clojure.walk :as walk]
   [com.benwiz.squiggle.noise-scape :as noise-scape]
   [com.benwiz.squiggle.pointillism :as pointillism]
   [com.benwiz.squiggle.solar-system :as solar-system]
   [com.benwiz.squiggle.ten-print-remake :as ten-print-remake]
   [com.benwiz.squiggle.tentacles :as tentacles]
   ;; [goog.dom :as gdom]
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [clojure.string :as str]))

(def query (walk/keywordize-keys (:query (url/url (-> js/window .-location .-href)))))
(def w (or (:w query) 400))
(def h (or (:h query) w))
(def gap 8)
(def sketches (into #{}
                    (str/split (:sketches query) #",")))

(defn ^:export run-sketch
  []
  (when (or (empty? sketches) (sketches "ten-print"))
    (q/defsketch sketch-ten-print
      :host "ten-print"
      :size [w h]
      :setup ten-print-remake/setup
      :update ten-print-remake/update-state
      :draw ten-print-remake/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "solar-system"))
    (q/defsketch sketch-solar-system
      :host "solar-system"
      :size [w h]
      :setup solar-system/setup
      :update solar-system/update-state
      :draw solar-system/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "game-of-life"))
    (q/defsketch sketch-game-of-life
      :host "game-of-life"
      :size [w h]
      :setup game-of-life/setup
      :update game-of-life/update-state
      :draw game-of-life/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "tentacles"))
    (q/defsketch sketch-tentacles
      :host "tentacles"
      :size [w h]
      :setup tentacles/setup
      :update tentacles/update-state
      :draw tentacles/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "pointillism-starry-night"))
    (q/defsketch sketch-pointillism-starry-night
      :host "pointillism-starry-night"
      :size [w h]
      :setup pointillism/setup-starry-night
      :update pointillism/update-state
      :draw pointillism/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "pointillism-girl-with-pearl-earing"))
    (q/defsketch sketch-pointillism-girl-with-pearl-earing
      :host "pointillism-girl-with-pearl-earing"
      :size [w h]
      :setup pointillism/setup-girl-with-pearl-earing
      :update pointillism/update-state
      :draw pointillism/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "pointillism-picasso-face"))
    (q/defsketch sketch-pointillism-picasso-face
      :host "pointillism-picasso-face"
      :size [w (into #{}h)]
      :setup pointillism/setup-picasso-face
      :update pointillism/update-state
      :draw pointillism/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "pointillism-georges-seurat"))
    (q/defsketch sketch-pointillism-georges-seurat
      :host "pointillism-georges-seurat"
      :size [(+ (* 2 w) 8) h] ;; 4 grid-column-gap
      :setup pointillism/setup-georges-seurat
      :update pointillism/update-state
      :draw pointillism/draw-state
      :middleware [m/fun-mode]))
  (when (or (empty? sketches) (sketches "noise-scape-lines"))
    (q/defsketch sketch-noise-scape-lines
      :host "noise-scape-lines"
      :size [w h]
      :setup noise-scape/setup
      :update noise-scape/update-state
      :draw noise-scape/draw
      :key-pressed noise-scape/key-pressed
      :middleware [m/fun-mode]))
  #_(q/defsketch sketch-delaunay-monsters ;; dont draw because it is seizure inducing
    :host "delaunay-monsters"
    :size [w h]
    :setup delaunay-monsters/setup
    :update delaunay-monsters/update-state
    :draw delaunay-monsters/draw-state
    ;; :mouse-clicked delaunay-monsters/mouse-clicked
    :middleware [m/fun-mode])
  #_(q/defsketch sketch-primitive-starry-night
    :host "primitive-starry-night"
    :size [w h]
    :setup primitive/setup-starry-night
    :update primitive/update-state
    :draw primitive/draw-stat
    :middleware [m/fun-mode]))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(run-sketch)
