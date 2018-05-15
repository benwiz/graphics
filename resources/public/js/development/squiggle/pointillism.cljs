(ns squiggle.pointillism
  (:require [quil.core :as q :include-macros true]))

(defn setup [filename]
  (let [path (if (= (.-hostname (.-location js/window)) "benwiz.io")
                 (str "/squiggle/assets/images/" filename)
                 (str "/assets/images/" filename))]
    (q/frame-rate 120)
    (q/background 0)
    { :i 0
      :x 0
      :y 0
      :r 0
      :g 0
      :b 0
      :size 0
      :image (q/request-image path)}))

(defn setup-starry-night []
  (setup "starry-night.jpg"))

(defn setup-girl-with-pearl-earing []
  (setup "girl-with-pearl-earing.jpg"))

(defn setup-picasso-face []
  (setup "picasso-face.jpg"))

(defn setup-georges-seurat []
  (setup "georges-seurat.jpg"))

(defn update-state [state]
  (if (:image state)
    (if (> (.-width (:image state)) 0)
      (let [x (rand-int (q/width))
            y (rand-int (q/height))
            rgb (q/get-pixel (:image state) x y)]
        { :i (inc (:i state))
          :x x
          :y y
          :c rgb
          ; Every 2000 iterations reduce the max size by 1 with a minimum max size of 4
          :size (rand-int (Math/max (- 10 (Math/floor (/ (:i state) 2000))) 4))
          :image (:image state)})
      state)
    state))

(defn draw-state [state]
  (q/stroke (:c state))
  (q/fill (:c state))
  (if (= (rand-int 2) 0) (q/no-fill))
  (q/ellipse (:x state) (:y state) (:size state) (:size state)))
