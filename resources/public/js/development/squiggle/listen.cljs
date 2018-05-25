(ns squiggle.listen
  (:require [cljs.core.async :as async]
            [cljs-audiocapture.core :refer [capture-audio]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn audio []
  (go
    ; This will work while browser runs
    (let [{:keys [audio-chan error]} (async/<! (capture-audio (async/sliding-buffer 10)))]
      (if error
        (js/console.error error)
        (do
          (async/put! audio-chan :start)
          ; Print first 5 frames to console
          (loop [counter 4]
            (.log js/console (async/<! audio-chan))
            (if (zero? counter)
              (async/put! audio-chan :pause)
              (recur (dec counter)))))))))

; (go (println (async/<! audio-chan)))
