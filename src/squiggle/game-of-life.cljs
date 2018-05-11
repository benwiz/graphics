(ns squiggle.game-of-life
  (:require [quil.core :as q :include-macros true]
            [clojure.core.matrix :as m]))

; Rules to Conway's Game of Life (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
;
; The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of
; square "cells", each of which is in one of two possible states, alive or dead,
; (or "populated" and "unpopulated" respectively). Every cell interacts with its eight
; neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
; At each step in time, the following transitions occur:
;
; 1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
; 2. Any live cell with two or three live neighbors lives on to the next generation.
; 3. Any live cell with more than three live neighbors dies, as if by overpopulation.
; 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
;
; The initial pattern constitutes the seed of the system. The first generation is created by
; applying the above rules simultaneously to every cell in the seed—births and deaths occur
; simultaneously, and the discrete moment at which this happens is sometimes called a tick
; (in other words, each generation is a pure function of the preceding one). The rules continue
; to be applied repeatedly to create further generations.

(def matrix-width 10)
(def matrix-height 10)

(defn n-live-neighbors [state i j]
  (get
    (frequencies [
      (if (and (> i 0) (> j 0))
        (m/mget state (- i 1) (- j 1)) -1)
      (if (> j 0 )
        (m/mget state i (- j 1)) -1)
      (if (and (< i (- matrix-width 1)) (> j 0))
        (m/mget state (+ i 1) (- j 1)) -1)
      (if (> i 0)
        (m/mget state (- i 1) j) -1)
      (if (< i (- matrix-width 1))
        (m/mget state (+ i 1) j) -1)
      (if (and (> i 0) (< j (- matrix-height 1)))
        (m/mget state (- i 1) (+ j 1)) -1)
      (if (< j (- matrix-height 1))
        (m/mget state i (+ j 1)) -1)
      (if (and (< i (- matrix-width 1)) (< j (- matrix-height 1)))
        (m/mget state (+ i 1) (+ j 1)) -1)])
    1))

(defn tick [state index value]
  (let [i (nth index 0)
        j (nth index 1)
        n (n-live-neighbors state i j)]
        (println (= value 0) (= n 3))
        (if (= value 1)
          (cond
            (< n 2) 0
            (> n 3) 0
            :else 1)
          (cond
            (= n 3) 1
            :else 0))))

(defn draw-cell [index value]
  (let [i (nth index 0)
        j (nth index 1)
        cell-width (/ (q/width) matrix-width)
        cell-height (/ (q/height) matrix-height)
        x (* i cell-width)
        y (* j cell-height)]
    (if (= value 1)
      (q/rect x y cell-width cell-height))))

(defn setup []
  (q/frame-rate 2)
  (q/color-mode :hsb)
  (q/background 0)
  (q/fill 0 0 255)
  ; (q/stroke 0 0 255)
  (->
    (m/new-matrix matrix-width matrix-height)
    (m/mset 3 3 1)
    (m/mset 4 3 1)
    (m/mset 5 3 1)))

(defn update-state [state]
  (q/background 0)
  (m/emap-indexed (fn [index value] (tick state index value)) state))

(defn draw-state [state]
  (m/emap-indexed draw-cell state))
