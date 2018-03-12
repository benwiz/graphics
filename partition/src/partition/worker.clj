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
  [a b c]
  (println a)
  (println b)
  (println c)
  ; TODO: Download start image
  ; TODO: Download json file from S3

  ; TODO: Parse file
  ; TODO: Pass to delaunay-triangulation

  ; TODO: Write json file to s3
  ; TODO: Draw triangles on start image and write to s3
  (delaunay-triangulation [[2 3] [-4 9.3] [4 3] [2 2]]))
