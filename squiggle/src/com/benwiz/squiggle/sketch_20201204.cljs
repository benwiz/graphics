(ns com.benwiz.squiggle.sketch-20201204
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.squiggle.listen :as listen]))

(defn setup
  []
  ;; (q/background 255)
  (q/stroke 0 0 0)
  {:y     (* 0.33 (q/height))
   :max-y (* 0.9 (q/height))})

(defn update-state
  [{:keys [y] :as state}]
  (let [y-delta 10]
    (-> state
        #_(update :y + y-delta)
        (update :lines
                (fn [lines]
                  (if-let [frame @listen/current-frame]
                    (into []
                          (map (fn [x]
                                 [[(dec x) (+ y
                                              ;; Microphone Noise
                                              (q/map-range (aget frame (int (q/map-range (dec x) 0 (dec (q/width)) 0 4096)))
                                                           -20000 20000
                                                           (- (* 0.1 (q/height))) (* 0.1 (q/height))))]
                                  [x (+ y
                                        (q/map-range (aget frame (int (q/map-range x 0 (dec (q/width)) 0 4096)))
                                                     -20000 20000
                                                     (- (* 0.1 (q/height))) (* 0.1 (q/height))))]]))
                          (range 1 (q/width)))
                    lines))))))

(defn draw
  [{:keys [y max-y lines]}]
  (q/background 255)
  (if (> y max-y)
    (q/no-loop)
    (doseq [[p1 p2] lines]
      (q/line p1 p2))))

(defn key-pressed
  [state event]
  ;; TODO need real resume, maybe have to store state in atom
  (case (q/key-as-keyword)
    :p (q/no-loop)
    :s (q/start-loop)
    :e (q/save "resources/out/test.png")
    nil)
  state)
