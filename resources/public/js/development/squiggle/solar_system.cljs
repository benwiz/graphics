(ns squiggle.solar-system
  (:require ;[clojure.math.numeric-tower :as math]
            [quil.core :as q :include-macros true]))

(defn pow [x n] (reduce * (repeat n x)))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/ellipse-mode :radius)
  { :sun {
    :h 38
    :s 230
    :v 230
    :x 0
    :y 0
    :size 10
  } :mercury {
    :h 15
    :s 175
    :v 175
    :x -40
    :y 35
    :size 4
    :theta 0
    :orbit {
      :x 3
      :y -3
      :h 50
      :v 40
      :r 0
    }
  } :venus {
    :h 39
    :s 175
    :v 175
    :x 40
    :y 40
    :size 6
    :orbit {
      :x 3
      :y -3
      :h 70
      :v 50
      :r 0
    }
  } :earth {
    :h 100
    :s 175
    :v 175
    :x -50
    :y -50
    :size 6
    :orbit {
      :x 3
      :y -3
      :h 80
      :v 60
      :r 0
    }
  } :mars {
    :h 0
    :s 175
    :v 175
    :x 60
    :y -60
    :size 6
    :orbit {
      :x 3
      :y -3
      :h 100
      :v 70
      :r 0
    }
  } :jupiter {
    :h 5
    :s 175
    :v 175
    :x 40
    :y -97
    :size 8
    :orbit {
      :x 3
      :y -3
      :h 115
      :v 100
      :r 0
    }
  } :saturn {
    :h 33
    :s 175
    :v 175
    :x -90
    :y 78
    :size 7
    :orbit {
      :x 3
      :y -3
      :h 130
      :v 115
      :r 0
    }
  } :uranus {
    :h 230
    :s 175
    :v 175
    :x -80
    :y 98
    :size 7
    :orbit {
      :x 3
      :y -3
      :h 142
      :v 125
      :r 0
    }
  } :neptune {
    :h 250
    :s 175
    :v 175
    :x -148
    :y -1
    :size 6
    :orbit {
      :x 3
      :y -3
      :h 149
      :v 125
      :r 0
    }
  }})

(defn update-state [state]
  "Update :x and :y based on previous
  values and the ellipse.
  x=h*cos(θ)
  y=v*sin(θ)

  Calculate angular velocity by `2 radians / seconds_in_that_planets_year = radians / second`"
  (-> state
    ; Mercury
    (assoc-in [:mercury :x] (* (:h (:orbit (:mercury state))) (js/Math.cos (:theta (:mercury state)))))
    (assoc-in [:mercury :y] (* (:v (:orbit (:mercury state))) (js/Math.sin (:theta (:mercury state)))))
    (assoc-in [:mercury :theta] (+ (:theta (:mercury state)) (* (* 0.263 (js/Math.pow 10 -6)) 1000000))) ; 2.63 * 10^-7 is angular velocity
    ; Venus
    (assoc-in [:venus :x] (* (:h (:orbit (:venus state))) (js/Math.cos (:theta (:venus state)))))
    (assoc-in [:venus :y] (* (:v (:orbit (:venus state))) (js/Math.sin (:theta (:venus state)))))
    (assoc-in [:venus :theta] (+ (:theta (:venus state)) (* (* 0.103 (js/Math.pow 10 -6)) 1000000)))
    ; Earth
    (assoc-in [:earth :x] (* (:h (:orbit (:earth state))) (js/Math.cos (:theta (:earth state)))))
    (assoc-in [:earth :y] (* (:v (:orbit (:earth state))) (js/Math.sin (:theta (:earth state)))))
    (assoc-in [:earth :theta] (+ (:theta (:earth state)) (* (* 0.635 (js/Math.pow 10 -7)) 1000000)))
    ; Mars
    (assoc-in [:mars :x] (* (:h (:orbit (:mars state))) (js/Math.cos (:theta (:mars state)))))
    (assoc-in [:mars :y] (* (:v (:orbit (:mars state))) (js/Math.sin (:theta (:mars state)))))
    (assoc-in [:mars :theta] (+ (:theta (:mars state)) (* (* 0.337 (js/Math.pow 10 -7)) 1000000)))
    ; Jupiter
    (assoc-in [:jupiter :x] (* (:h (:orbit (:jupiter state))) (js/Math.cos (:theta (:jupiter state)))))
    (assoc-in [:jupiter :y] (* (:v (:orbit (:jupiter state))) (js/Math.sin (:theta (:jupiter state)))))
    (assoc-in [:jupiter :theta] (+ (:theta (:jupiter state)) (* (* 0.541 (js/Math.pow 10 -8)) 1000000)))
    ; Saturn
    (assoc-in [:saturn :x] (* (:h (:orbit (:saturn state))) (js/Math.cos (:theta (:saturn state)))))
    (assoc-in [:saturn :y] (* (:v (:orbit (:saturn state))) (js/Math.sin (:theta (:saturn state)))))
    (assoc-in [:saturn :theta] (+ (:theta (:saturn state)) (* (* 0.215 (js/Math.pow 10 -8)) 1000000)))
    ; Uranus
    (assoc-in [:uranus :x] (* (:h (:orbit (:uranus state))) (js/Math.cos (:theta (:uranus state)))))
    (assoc-in [:uranus :y] (* (:v (:orbit (:uranus state))) (js/Math.sin (:theta (:uranus state)))))
    (assoc-in [:uranus :theta] (+ (:theta (:uranus state)) (* (* 0.741 (js/Math.pow 10 -9)) 1000000)))
    ; Neptune
    (assoc-in [:neptune :x] (* (:h (:orbit (:neptune state))) (js/Math.cos (:theta (:neptune state)))))
    (assoc-in [:neptune :y] (* (:v (:orbit (:neptune state))) (js/Math.sin (:theta (:neptune state)))))
    (assoc-in [:neptune :theta] (+ (:theta (:neptune state)) (* (* 0.385 (js/Math.pow 10 -9)) 1000000)))
  ))

(defn draw-state [state]
  ; Clear screen
  (q/background 0)
  ; Set origin to center
  (q/with-translation [(/ (q/width) 2)
                          (/ (q/height) 2)]
    ; Sun
    (q/no-stroke)
    (q/fill (:h (:sun state)) (:s (:sun state)) (:v (:sun state)))
    (q/ellipse (:x (:sun state)) (:y (:sun state))
              (:size (:sun state)) (:size (:sun state)))
    ; Mercury
    (q/no-stroke)
    (q/fill (:h (:mercury state)) (:s (:mercury state)) (:v (:mercury state)))
    (q/ellipse (:x (:mercury state)) (:y (:mercury state))
              (:size (:mercury state)) (:size (:mercury state)))
    (q/no-fill)
    (q/stroke (:h (:mercury state)) (:s (:mercury state)) (:v (:mercury state)))
    ; (q/rotate (:r (:orbit (:mercury state))))
    (q/ellipse (:x (:orbit (:mercury state))) (:y (:orbit (:mercury state)))
               (:h (:orbit (:mercury state))) (:v (:orbit (:mercury state))))
    ; Venus
    (q/no-stroke)
    (q/fill (:h (:venus state)) (:s (:venus state)) (:v (:venus state)))
    (q/ellipse (:x (:venus state)) (:y (:venus state))
              (:size (:venus state)) (:size (:venus state)))
    (q/no-fill)
    (q/stroke (:h (:venus state)) (:s (:venus state)) (:v (:venus state)))
    ; (q/rotate (:r (:orbit (:venus state))))
    (q/ellipse (:x (:orbit (:venus state))) (:y (:orbit (:venus state)))
               (:h (:orbit (:venus state))) (:v (:orbit (:venus state))))
    ; Earth
    (q/no-stroke)
    (q/fill (:h (:earth state)) (:s (:earth state)) (:v (:earth state)))
    (q/ellipse (:x (:earth state)) (:y (:earth state))
              (:size (:earth state)) (:size (:earth state)))
    (q/no-fill)
    (q/stroke (:h (:earth state)) (:s (:earth state)) (:v (:earth state)))
    ; (q/rotate (:r (:orbit (:earth state))))
    (q/ellipse (:x (:orbit (:earth state))) (:y (:orbit (:earth state)))
               (:h (:orbit (:earth state))) (:v (:orbit (:earth state))))
    ; Mars
    (q/no-stroke)
    (q/fill (:h (:mars state)) (:s (:mars state)) (:v (:mars state)))
    (q/ellipse (:x (:mars state)) (:y (:mars state))
              (:size (:mars state)) (:size (:mars state)))
    (q/no-fill)
    (q/stroke (:h (:mars state)) (:s (:mars state)) (:v (:mars state)))
    ; (q/rotate (:r (:orbit (:mars state))))
    (q/ellipse (:x (:orbit (:mars state))) (:y (:orbit (:mars state)))
               (:h (:orbit (:mars state))) (:v (:orbit (:mars state))))
    ; Jupiter
    (q/no-stroke)
    (q/fill (:h (:jupiter state)) (:s (:jupiter state)) (:v (:jupiter state)))
    (q/ellipse (:x (:jupiter state)) (:y (:jupiter state))
              (:size (:jupiter state)) (:size (:jupiter state)))
    (q/no-fill)
    (q/stroke (:h (:jupiter state)) (:s (:jupiter state)) (:v (:jupiter state)))
    ; (q/rotate (:r (:orbit (:jupiter state))))
    (q/ellipse (:x (:orbit (:jupiter state))) (:y (:orbit (:jupiter state)))
               (:h (:orbit (:jupiter state))) (:v (:orbit (:jupiter state))))
    ; Saturn
    (q/no-stroke)
    (q/fill (:h (:saturn state)) (:s (:saturn state)) (:v (:saturn state)))
    (q/ellipse (:x (:saturn state)) (:y (:saturn state))
              (:size (:saturn state)) (:size (:saturn state)))
    (q/no-fill)
    (q/stroke (:h (:saturn state)) (:s (:saturn state)) (:v (:saturn state)))
    ; (q/rotate (:r (:orbit (:saturn state))))
    (q/ellipse (:x (:orbit (:saturn state))) (:y (:orbit (:saturn state)))
               (:h (:orbit (:saturn state))) (:v (:orbit (:saturn state))))
    ; Uranus
    (q/no-stroke)
    (q/fill (:h (:uranus state)) (:s (:uranus state)) (:v (:uranus state)))
    (q/ellipse (:x (:uranus state)) (:y (:uranus state))
              (:size (:uranus state)) (:size (:uranus state)))
    (q/no-fill)
    (q/stroke (:h (:uranus state)) (:s (:uranus state)) (:v (:uranus state)))
    ; (q/rotate (:r (:orbit (:uranus state))))
    (q/ellipse (:x (:orbit (:uranus state))) (:y (:orbit (:uranus state)))
               (:h (:orbit (:uranus state))) (:v (:orbit (:uranus state))))
    ; Neptune
    (q/no-stroke)
    (q/fill (:h (:neptune state)) (:s (:neptune state)) (:v (:neptune state)))
    (q/ellipse (:x (:neptune state)) (:y (:neptune state))
              (:size (:neptune state)) (:size (:neptune state)))
    (q/no-fill)
    (q/stroke (:h (:neptune state)) (:s (:neptune state)) (:v (:neptune state)))
    ; (q/rotate (:r (:orbit (:neptune state))))
    (q/ellipse (:x (:orbit (:neptune state))) (:y (:orbit (:neptune state)))
               (:h (:orbit (:neptune state))) (:v (:orbit (:neptune state))))
    ))
