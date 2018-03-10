(defproject partition "0.1.0-SNAPSHOT"
  :description "Partition with provided points. Delaunay triangulation, Voronoi."
  :url "http://benwiz.io/lowpoly"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.6.0"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-json "0.4.0"]
                 [uswitch/lambada "0.1.2"]
                 [cheshire "5.7.1"]
                 [ring-apigw-lambda-proxy "0.3.0"]
                 [trystan/delaunay-triangulation "1.0.1"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-lambda "0.2.0"]]
  :ring {:handler partition.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.1"]]}
   :uberjar {:aot :all}}
  :lambda {:function {:name "lowpoly-partition"
                      :handler "partition.lambda.LambdaFn"}
           :api-gateway {:name "partition"}
           :stages {"production" {:warmup {:enable true}}
                    "staging"    {}}}
  ; For local runs. Probably needs to be off in projection.
  :main partition.lambda)
