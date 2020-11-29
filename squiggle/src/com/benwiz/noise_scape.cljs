(ns com.benwiz.squiggle.noise-scape
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.noise :as noise]
            [clojure.core.matrix.impl.defaults :as d]))

(defn setup
  []
  {:t 0.02
   :y 0})

(defn update-state
  [state]
  (-> state
      (update :t + 0.02)
      (update :y inc)))

(defn draw
  [{:keys [t y]}]
  ;; (q/background 240)
  (q/stroke 0 0 0)
  (doseq [x (range 0 (q/width))]
    (q/point x (+ y
                  (* (* (q/height) 0.3)
                     (q/noise (/ x 100) t))))))
