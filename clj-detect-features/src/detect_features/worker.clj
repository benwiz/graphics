(ns detect-features.worker
  (:require [opencv3.core :refer :all]))

(defn run
  "Run."
  []
  (println "Using OpenCV Version: " VERSION "..")
  (->
   (imread "resources/cat.jpg")
   (cvt-color! COLOR_RGB2GRAY)
   (imwrite "grey-neko.jpg")
   (println "A new gray neko has arise!")))
