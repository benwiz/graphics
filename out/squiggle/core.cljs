(ns squiggle.core)

(println "Hi, from Clojure!!")
(.setProperty
    (.-style
        (.querySelector js/document "#myspan"))
        "color"
        "red")
