import { useEffect, useRef, useState } from "react"

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const userMutedRef = useRef(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.2

    const cleanup = () => {
      document.removeEventListener("pointerdown", tryPlay)
      document.removeEventListener("keydown", tryPlay)
    }

    const tryPlay = () => {
      if (!audioRef.current || userMutedRef.current) {
        cleanup()
        return
      }
      audioRef.current
        .play()
        .then(() => {
          cleanup()
        })
        .catch(() => {})
    }

    // Attempt autoplay immediately; fall back to first valid user gesture if blocked
    tryPlay()
    document.addEventListener("pointerdown", tryPlay)
    document.addEventListener("keydown", tryPlay)

    return cleanup
  }, [])

  const toggleMute = () => {
    const nextMuted = !muted
    userMutedRef.current = nextMuted
    if (audioRef.current) {
      audioRef.current.muted = nextMuted
      if (!nextMuted) {
        audioRef.current.volume = 0.2
        audioRef.current.play().catch(() => {})
      }
    }
    setMuted(nextMuted)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        loop
        preload="auto"
      />

      {/* Fixed mute/unmute button — bottom right */}
      <button
        onClick={toggleMute}
        title={muted ? "Unmute music" : "Mute music"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full
          bg-black/60 border border-rose-500/60 text-rose-400
          hover:bg-rose-500/20 hover:border-rose-400 hover:scale-110
          shadow-[0_0_16px_rgba(244,63,94,0.3)]
          transition duration-300 backdrop-blur-md cursor-pointer"
      >
        {muted ? (
          /* Muted icon */
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M11 5L6 9H2v6h4l5 4V5zm8.07 2.93a1 1 0 0 0-1.41 1.41A7.92 7.92 0 0 1 20 12a7.92 7.92 0 0 1-2.34 5.66 1 1 0 1 0 1.41 1.41A9.9 9.9 0 0 0 22 12a9.9 9.9 0 0 0-2.93-7.07zM2.1 2.1 .69 3.51 5 7.83V9H2v6h3v.17l3.59 3.59L10 20.17V5.83L7.83 3.66 2.1 2.1zM10 5.83v14.34L6 16.17V15H3V9h3V7.83L10 5.83z"/>
            <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          /* Sound icon */
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
    </>
  )
}
