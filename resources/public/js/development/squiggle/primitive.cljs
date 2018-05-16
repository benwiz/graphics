(ns squiggle.primitive
  (:require [quil.core :as q :include-macros true]))

(defn setup [filename]
  (q/background 255 200 100)
  (let [path (if (= (.-hostname (.-location js/window)) "benwiz.io")
                 (str "/squiggle/assets/images/" filename)
                 (str "/assets/images/" filename))]
  { :target (q/request-image path)
  }))

(defn setup-starry-night []
  (setup "starry-night.jpg"))

(defn update-state [state]
  state)

(defn draw-state [state]
  )
