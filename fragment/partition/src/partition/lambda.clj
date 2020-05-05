(ns partition.lambda
  (:require [uswitch.lambada.core :refer [deflambdafn]]
            [clojure.java.io :as io]
            [ring.middleware.apigw :refer [wrap-apigw-lambda-proxy]]
            [cheshire.core :as cheshire]
            [partition.worker :as worker]))

; (def lambda-handler (wrap-apigw-lambda-proxy app {:scheduled-event-route "/warmup"})

(deflambdafn partition.lambda.LambdaFn [in out context]
  (with-open [writer (io/writer out)]
    (println "Starting Lambda...")
    (let [body (-> in io/reader (cheshire/parse-stream keyword))
          result (worker/run body)]
      (with-open [w (io/writer out)]
        (cheshire/generate-stream result w)
        (println "Lambda finished.")))))

(defn -main
  "A function to enable easier local development."
  []
  ; Note the `true` in parse-string, this returns keywords
  (let [uuid "cat"
        body (cheshire/parse-string "{\"Records\":[{\"eventVersion\":\"2.0\",\"eventTime\":\"2018-03-11T14:50:46.631Z\",\"requestParameters\":{\"sourceIPAddress\":\"98.163.206.197\"},\"s3\":{\"configurationId\":\"367c003d-db1a-4a71-9e34-b47f90c71a86\",\"object\":{\"eTag\":\"fa02ebd6d522c72806a428c309d13756\",\"sequencer\":\"005AA54246862A53B6\",\"key\":\"1/points.json\",\"size\":162446},\"bucket\":{\"arn\":\"arn:aws:s3:::lowpoly\",\"name\":\"lowpoly\",\"ownerIdentity\":{\"principalId\":\"AX2FA51TPHMAJ\"}},\"s3SchemaVersion\":\"1.0\"},\"responseElements\":{\"x-amz-id-2\":\"xhK79IlgCRf1wX7Xh8imG7+xSbtZfl9AQJIPVkzUazYyetsFVKI2MSz4aC7q3moZSzZyvE4WYNM=\",\"x-amz-request-id\":\"F4A63ED2826C8B0D\"},\"awsRegion\":\"us-east-1\",\"eventName\":\"ObjectCreated:Put\",\"userIdentity\":{\"principalId\":\"AX2FA51TPHMAJ\"},\"eventSource\":\"aws:s3\"}]}" true)
        result (worker/run body)]))
