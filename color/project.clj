(defproject color "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.6.0"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-json "0.4.0"]
                 [uswitch/lambada "0.1.2"]
                 [cheshire "5.7.1"]
                 [ring-apigw-lambda-proxy "0.3.0"]
                 [clj-aws-s3 "0.3.10"]] ; TODO: Stop using this
  :plugins [[lein-ring "0.9.7"]
            [lein-lambda "0.2.0"]]
  :ring {:handler color.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.1"]]}
   :uberjar {:aot :all}}
  :lambda {:credentials {:region "us-east-1"
                         :profile "personal"}
           :function {:name "color"
                      :handler "color.lambda.LambdaFn"}
           :api-gateway {:name "color"}
           :stages {"production" {:warmup {:enable false}}
                    "staging"    {}}}
  ; For local runs.
  :main color.lambda)
