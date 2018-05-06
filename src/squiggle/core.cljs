(ns squiggle.core)

(println "Hello!")
(.setProperty
 (.-style
  (.querySelector js/document "#myspan"))
 "color"
 "red")
(.log js/console "Hi, from ClojureScript!")
