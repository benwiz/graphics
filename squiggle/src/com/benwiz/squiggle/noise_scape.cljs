(ns com.benwiz.squiggle.noise-scape
  (:require [quil.core :as q :include-macros true]))

(defn setup
  []
  ;; (q/background 255)
  (q/stroke 0 0 0)
  {:t 0.02
   :y (* 0.05 (q/height))
   :max-y (* 0.9 (q/height))})

(defn update-state
  [state]
  (let [y-delta 10
        t-delta (* 0.0066 y-delta)]
    (-> state
        (update :t + t-delta)
        (update :y + y-delta))))

(defn draw
  [{:keys [t y max-y]}]
  (if (> y max-y)
    (q/no-loop)
    (doseq [x (range 1 (q/width))]
      (q/line (dec x) (+ y
                         ;; Perlin Noise
                         (* (* (q/height) 0.1)
                            (q/noise (/ (dec x) 100) t)))
              x (+ y
                   ;; Perlin Noise
                   (* (* (q/height) 0.1)
                      (q/noise (/ x 100) t)))))))

(defn key-pressed
  []
  ;; TODO need real resume, maybe have to store state in atom
  (case (q/key-as-keyword)
    :p (q/no-loop)
    :s (q/start-loop)
    :e (q/save "resources/out/test.png")
    nil))
