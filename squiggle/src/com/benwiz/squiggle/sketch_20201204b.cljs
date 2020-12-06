(ns com.benwiz.squiggle.sketch-20201204b
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.squiggle.listen :as listen]))

(defn setup
  []
  (q/background 255)
  (q/stroke 0 0 0)
  {:y     (* 0.1 (q/height))
   :max-y (* 0.9 (q/height))})

;; http://terpconnect.umd.edu/~toh/spectrum/Smoothing.html
(defn unweighted-sliding-average-smooth
  [points n]
  (assert (odd? n))
  (let [ext (quot n 2)]
    (into []
          (map-indexed (fn [idx [x _y]]
                         [x (-> (apply + (into [] ;; when offset is 0, that is _y from above
                                               (map (fn [offset]
                                                      (let [adjusted-idx (+ idx ext)]
                                                        (second (nth points (+ adjusted-idx offset))))))
                                               (range (- ext) (inc ext))))
                                (/ n))]))
          (drop ext (drop-last ext points)))))

(defn update-state
  [{:keys [y max-y] :as state}]
  (let [y-delta 10]
    (-> state
        (update :y (fn [y]
                     (if (<= y max-y)
                       (+ y y-delta)
                       (* 0.1 (q/height)))))
        (update :lines
                (fn [lines]
                  ;; TODO this is a lot of intermediate structures, probably can handle this all with a single reduce
                  (if-let [frame @listen/current-frame]
                    (let [points (-> (into []
                                           (comp
                                             (map (fn [x]
                                                    [x (+ y
                                                          (q/map-range (aget frame (int (q/map-range x 0 (dec (q/width)) 0 4096)))
                                                                       -20000 20000
                                                                       (- (* 0.1 (q/height))) (* 0.1 (q/height))))])))
                                           (range (q/width)))
                                     #_(unweighted-sliding-average-smooth 3))]
                      (into []
                            (map-indexed (fn [idx point]
                                           [;; Previous point
                                            (nth points idx)
                                            ;; Current point
                                            point]))
                            (drop 1 points)))
                    lines))))))

(defn draw
  [{:keys [y max-y lines]}]
  (if (> y max-y)
    (q/no-loop)
    #_(q/background 255)
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
