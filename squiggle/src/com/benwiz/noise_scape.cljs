(ns com.benwiz.squiggle.noise-scape
  (:require [quil.core :as q :include-macros true]))

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

(defn key-pressed
  []
  ;; TODO need real resume, maybe have to store state in atom
  (case (q/key-as-keyword)
    :p (q/no-loop)
    :s (q/start-loop)
    :e (q/save "resources/out/test.png")
    nil))
