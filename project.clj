(defproject clj-opencv "0.1-SNAPSHOT"
  :description "Identify key points and edges to use for good looking Delauney triangulation."
  :url "https://www.example.com/TODO"
  :min-lein-version "2.0.0"
  :injections [(clojure.lang.RT/loadLibrary org.opencv.core.Core/NATIVE_LIBRARY_NAME)]
  :test-paths ["test"]
  :resource-paths ["rsc"]
  :plugins [[lein-gorilla "0.4.0"]
            [lein-auto "0.1.3"]
            [lein-ring "0.9.7"]
            [lein-lambda "0.2.0"]]
  :auto {:default {:file-pattern #"\.(clj)$"}}
  :main opencv3.ok
  :repositories [["vendredi" "https://repository.hellonico.info/repository/hellonico/"]]
  :aliases {"notebook" ["gorilla" ":ip" "0.0.0.0" ":port" "10000"]}
  :profiles {:dev {:resource-paths ["resources"]
                   :dependencies [; used for proto repl
                                  [org.clojure/tools.nrepl "0.2.11"]
                                  ; proto repl
                                  [proto-repl "0.3.1"]
                                  ; use to start a gorilla repl
                                  [gorilla-repl "0.4.0"]
                                  [seesaw "1.4.5"]
                                  ; aws lambda
                                  [javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.1"]]}
             :uberjar {:aot :all}}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/tools.cli "0.3.5"]
                 [origami "0.1.10"]])
