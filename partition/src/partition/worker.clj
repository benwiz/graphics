(ns partition.worker
  (:require [delaunay-triangulation.core :as delaunay]))

(defn delaunay-triangulation
  [points]
  (let [{:keys [points edges triangles]} (delaunay/triangulate points)]
    ; (println "point" points)
    ; (println "edge" edges)
    (println "triangle" triangles)
    triangles))

(defn run
  "Run."
  [context]
  (println "Context:\n" context)
  (println (keys context))
  (let [key
    ; (get (get (get (get
        (get context :Records)
    ;  0) :s3) :object) :key)
]
    (println "Key:\n" key)
    ; TODO: Download start image
    ; TODO: Download json file from S3

    ; TODO: Parse file
    ; TODO: Pass to delaunay-triangulation

    ; TODO: Write json file to s3
    ; TODO: Draw triangles on start image and write to s3
    (delaunay-triangulation [[2 3] [-4 9.3] [4 3] [2 2]])))
