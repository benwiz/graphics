(ns com.benwiz.squiggle.sketch-20201206
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.squiggle.listen :as listen]))

;; TODO try to not let succeeding lines overlap

(defn setup
  []
  (q/frame-rate 10)
  (q/background 255)
  (q/stroke 0 0 0)
  {:t          0.02
   :y          (q/height)
   :curr-min-y (q/height)})

;; http://terpconnect.umd.edu/~toh/spectrum/Smoothing.html
#_(defn- unweighted-sliding-average-smooth
    [points n]
    (assert (odd? n))
    (let [ext (quot n 2)]
      (into []
            (map-indexed (fn [idx [x _y]]
                           [x (-> (apply + (into [] ;; when offset is 0, that is _y from above
                                                 (m
                                                   ap (fn [offset]
                                                        (let [adjusted-idx (+ idx ext)]
                                                          (second (nth points (+ adjusted-idx offset))))))
                                                 (range (- ext) (inc ext))))
                                  (/ n))]))
            (drop ext (drop-last ext points)))))

(defn update-state
  [{:keys [y lines] :as state}]
  (let [^js frame @listen/current-frame
        t   (if frame
              (q/map-range (/ (reduce (fn [acc x]
                                        (+ acc (js/Math.abs x)))
                                      0
                                      frame)
                              (.-length frame))
                           0 4000 0.0 0.01)
              0.02)
        lines     (if frame
                    ;; TODO use fewer intermediate structures
                    (let [points (-> (into []
                                           (map-indexed (fn [idx x]
                                                          [x (min (or (-> lines (nth idx (last lines)) second second) js/Infinity)
                                                                  (* y (q/noise (* x t))))]))
                                           (range (inc (q/width)))))]
                      (into []
                            (map-indexed (fn [idx point]
                                           [;; Previous point
                                            (nth points idx)
                                            ;; Current point
                                            point]))
                            (drop 1 points)))
                    lines)]
    (-> state
        (assoc :t t)
        (update :y (fn [y]
                     (int (if (neg? y)
                            (q/height)
                            (- y 10)))))
        (assoc :lines lines)
        (update :curr-min-y (fn [curr-min-y]
                              (reduce (fn [acc [[_ y1] [_ y2]]]
                                        (min acc y1 y2))
                                      curr-min-y
                                      lines))))))

(defn draw
  [{:keys [y lines]}]
  (if (neg? y)
    (q/no-loop)
    (doseq [[p1 p2] lines]
      (q/line p1 p2))))

(defn key-pressed
  [state event]
  ;; TODO need real resume, maybe have to store state in atom
  (case (q/key-as-keyword)
    :r (do (q/no-loop)
           (q/background 255)
           (q/start-loop)
           (assoc state :y 0))
    :p (do (q/no-loop)
           state)
    :s (do (q/start-loop)
           state)
    :e (do (q/save "resources/out/test.png")
           state)
    state))
