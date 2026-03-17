/* ================================================
   AUDIO TOGGLE — floating minimal button, muted by default
   Ben Böhmer — Cappadocia (live above Cappadocia for Cercle)
   Volume fades in over 5 seconds via rAF loop on first play.
   Media Session API populates lock-screen / notification player.
   ================================================ */

import { useRef, useState, useCallback, useEffect } from "react"

// iOS Safari requires an absolute URL for artwork — relative paths are ignored
const ARTWORK_PATH = "/images/misc/Ben-Bohmer+Romain-Garcia-Cappadocia.png"

function setMediaSession(onPlay, onPause) {
  if (!("mediaSession" in navigator)) return

  const artworkUrl = window.location.origin + ARTWORK_PATH

  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Cappadocia",
    artist: "Ben Böhmer",
    album: "Live above Cappadocia · Cercle",
    artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }],
  })

  navigator.mediaSession.setActionHandler("play", onPlay)
  navigator.mediaSession.setActionHandler("pause", onPause)
  // Loop: seekto/previoustrack/nexttrack not applicable — clear them
  navigator.mediaSession.setActionHandler("previoustrack", null)
  navigator.mediaSession.setActionHandler("nexttrack", null)
}

export default function AudioToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const fadeRafRef = useRef(null)

  // Cancel any running fade on unmount
  useEffect(
    () => () => {
      if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current)
    },
    [],
  )

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      if (fadeRafRef.current) {
        cancelAnimationFrame(fadeRafRef.current)
        fadeRafRef.current = null
      }
      audio.pause()
      setPlaying(false)
      if ("mediaSession" in navigator)
        navigator.mediaSession.playbackState = "paused"
    } else {
      try {
        audio.volume = 0
        await audio.play()
        setPlaying(true)

        // Populate lock-screen player (once is enough — metadata doesn't change)
        setMediaSession(
          () => {
            audio.play()
            setPlaying(true)
          },
          () => {
            audio.pause()
            setPlaying(false)
          },
        )
        if ("mediaSession" in navigator)
          navigator.mediaSession.playbackState = "playing"

        // Fade in to full volume over 5 000 ms at ~60 fps
        const DURATION = 5000
        const start = performance.now()
        const fade = (now) => {
          audio.volume = Math.min(1, (now - start) / DURATION)
          if (audio.volume < 1) {
            fadeRafRef.current = requestAnimationFrame(fade)
          } else {
            fadeRafRef.current = null
          }
        }
        fadeRafRef.current = requestAnimationFrame(fade)
      } catch {
        // Autoplay policy blocked — user needs another gesture; that's fine
      }
    }
  }, [playing])

  return (
    <>
      {/* Audio element — loop, no autoplay */}
      <audio ref={audioRef} src="/audio/cappadocia.mp3" loop preload="none" />

      {/* Floating toggle button */}
      <button
        className={`audio-toggle${playing ? " playing" : ""}`}
        onClick={toggle}
        aria-label={
          playing ? "Pause audio" : "Play audio — Ben Böhmer, Cappadocia"
        }
        title={playing ? "Pause" : "Play — Ben Böhmer · Cappadocia"}
      >
        {/* Animated waveform visualization */}
        <div className="audio-waveform" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <span>{playing ? "playing" : "sound"}</span>
      </button>
    </>
  )
}
