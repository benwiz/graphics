(ns partition.worker
  (:require [delaunay-triangulation.core :as delaunay]))

(defn delaunay-triangulation
  [points]
  (let [{:keys [points edges triangles]} (delaunay/triangulate points)]
    (println "point" points)
    (println "edge" edges)
    (println "triangle" triangles)))

(defn run
  "Run."
  []
  (delaunay-triangulation [[2 3] [-4 9.3] [4 3] [2 2]]))
