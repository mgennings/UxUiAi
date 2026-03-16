/* ================================================
   AUDIO TOGGLE — floating minimal button, muted by default
   Ben Böhmer — Cappadocia
   ================================================ */

import { useRef, useState, useCallback } from 'react'

export default function AudioToggle() {
  const audioRef  = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        // Autoplay policy blocked — user needs another gesture; that's fine
      }
    }
  }, [playing])

  return (
    <>
      {/* Audio element — loop, no autoplay */}
      <audio
        ref={audioRef}
        src="/audio/cappadocia.mp3"
        loop
        preload="none"
      />

      {/* Floating toggle button */}
      <button
        className={`audio-toggle${playing ? ' playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause audio' : 'Play audio — Ben Böhmer, Cappadocia'}
        title={playing ? 'Pause' : 'Play — Ben Böhmer · Cappadocia'}
      >
        {/* Animated waveform visualization */}
        <div className="audio-waveform" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <span>{playing ? 'playing' : 'sound'}</span>
      </button>
    </>
  )
}
