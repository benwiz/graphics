(defproject squiggle "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://benwiz.io/squiggle"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [quil "2.7.1"]
                 [org.clojure/clojurescript "1.10.238"]
                 [net.mikera/core.matrix "0.62.0"]
                 [cljs-audiocapture "0.1.4"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler
             {:main "squiggle.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler
             {:main "squiggle.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}]})
