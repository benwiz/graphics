(ns com.benwiz.squiggle.listen
  (:require [cljs.core.async :as async]
            [cljs-audiocapture.core :refer [capture-audio]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def current-frame (atom nil))

;; TODO i'm pretty sure this isn't quite right. I think sliding buffer isn't giving me precisely what I want. Or, more likely, I need to fft to get my expectation

(go
  (let [{:keys [audio-chan error]} (async/<! (capture-audio (async/sliding-buffer 10)))]
    (if error
      (js/console.error error)
      (do
        (async/put! audio-chan :start)
        ; Infinitely consume frames and print to console.
        (loop []
          ; (.log js/console (async/<! audio-chan))
          (reset! current-frame (async/<! audio-chan))
          (recur))))))

(comment

  )

; (audio)
