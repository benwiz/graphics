(ns squiggle.listen
  (:require [cljs.core.async :as async]
            [cljs-audiocapture.core :refer [capture-audio]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def current-frame 19)

(go
  (let [{:keys [audio-chan error]} (async/<! (capture-audio (async/sliding-buffer 10)))]
    (if error
      (js/console.error error)
      (do
        (async/put! audio-chan :start)
        ; Infinitely consume frames and print to console. TODO: Figure out how to get this data not here but in delaunay-monsters
        (loop []
          ; (.log js/console (async/<! audio-chan))
          (def current-frame (async/<! audio-chan))
          (recur))))))

; (go (println (async/<! audio-chan)))

; (audio)
