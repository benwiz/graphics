(ns com.benwiz.squiggle.sketch-20201206
  (:require [quil.core :as q :include-macros true]
            [com.benwiz.squiggle.listen :as listen]))

;; TODO try to not let succeeding lines overlap

(defn setup
  []
  (q/frame-rate 10)
  (q/background 255)
  (q/stroke 0 0 0)
  (let [y 0.02]
    {:t          0.02
     :first-y    y
     :y          y
     :max-y      (q/height)
     :curr-max-y 0}))

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
  [{:keys [t y max-y first-y curr-max-y lines] :as state}]
  (let [^js frame @listen/current-frame
        t-delta   (if frame
                    (q/map-range (/ (reduce (fn [acc x]
                                              (+ acc (js/Math.abs x)))
                                            0
                                            frame)
                                    (.-length frame))
                                 0 4000 0 0.2)
                    0.02)
        new-state (-> state
                      (update :t + t-delta)
                      (update :y (fn [y]
                                   (int (if (> y max-y)
                                          first-y
                                          (+ y 10)))))
                      (update :lines
                              (fn [lines]
                                (if frame
                                  (let [points (-> (into []
                                                         (comp
                                                           (map-indexed (fn [idx x]
                                                                          [x (max (-> lines (nth idx (last lines)) second second)
                                                                                  (* y (q/noise (/ (dec x) 300) t)))])))
                                                         (range (inc (q/width)))))]
                                    (into []
                                          (map-indexed (fn [idx point]
                                                         [;; Previous point
                                                          (nth points idx)
                                                          ;; Current point
                                                          point]))
                                          (drop 1 points)))
                                  lines))))]
    (-> new-state
        (update :curr-max-y (fn [curr-max-y]
                              (reduce (fn [acc [[_ y1] [_ y2]]]
                                        (max acc y1 y2))
                                      curr-max-y
                                      (:lines new-state)))))))

(defn draw
  [{:keys [y max-y lines]}]
  (if (> y max-y)
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
           (assoc state :y (:first-y state)))
    :p (do (q/no-loop)
           state)
    :s (do (q/start-loop)
           state)
    :e (do (q/save "resources/out/test.png")
           state)
    state))
