(ns squiggle.pointillism
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (let [path (if (= (.-hostname (.-location js/window)) "benwiz.io")
                 (str "/squiggle/assets/images/" "starry-night.jpg")
                 (str "/assets/images/" "starry-night.jpg"))]
  (q/frame-rate 120)
  (q/background 0)
  { :x 0
    :y 0
    :r 0
    :g 0
    :b 0
    :size 0
    :image (q/request-image path)}))

(defn update-state [state]
  (if (:image state)
    (if (> (.-width (:image state)) 0)
      (let [x (rand-int (q/width))
            y (rand-int (q/height))
            rgb (q/get-pixel (:image state) x y)]
        { :x x
          :y y
          :c rgb
          :size (rand-int 10)
          :image (:image state)
        })
      state)
    state))

(defn draw-state [state]
  (q/stroke (:c state))
  (q/fill (:c state))
  (if (= (rand-int 2) 0) (q/no-fill))
  (q/ellipse (:x state) (:y state) (:size state) (:size state)))
