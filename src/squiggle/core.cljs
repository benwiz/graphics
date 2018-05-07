(ns squiggle.core
    (:require [quil.core :as q]
              [quil.middleware :as m]))

(println "Hello!")
(.setProperty
 (.-style
  (.querySelector js/document "#myspan"))
 "color" "red")
(.log js/console "Hi, from ClojureScript!")
