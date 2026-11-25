import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import MusicPlayer from "./components/MusicPlayer"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const floatingLights = [
  {
    className: "top-[-6rem] left-[-6rem] w-96 h-96 bg-red-600/25",
    animate: { x: [0, 140, 40, 0], y: [0, 90, 180, 0], scale: [1, 1.15, 0.95, 1] },
    duration: 16,
  },
  {
    className: "top-1/3 right-[-8rem] w-[28rem] h-[28rem] bg-rose-500/20",
    animate: { x: [0, -160, -60, 0], y: [0, 110, -70, 0], scale: [1, 0.9, 1.12, 1] },
    duration: 20,
  },
  {
    className: "bottom-[-6rem] left-1/4 w-80 h-80 bg-red-500/20",
    animate: { x: [0, 120, -90, 0], y: [0, -130, -40, 0], scale: [1, 1.1, 0.92, 1] },
    duration: 18,
  },
]

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="relative min-h-screen bg-black bg-gradient-to-br from-black via-black to-rose-950 text-white overflow-x-hidden">
      {/* 🔥 FLOATING BACKGROUND LIGHTS + CURSOR GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingLights.map((light, i) => (
          <motion.div
            key={i}
            animate={light.animate}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${light.className} blur-3xl rounded-full`}
          />
        ))}

        <div
          className="absolute top-0 left-0 w-72 h-72 bg-rose-500/25 blur-3xl rounded-full"
          style={{
            transform: `translate(${pos.x - 144}px, ${pos.y - 144}px)`
          }}
        />
      </div>

      <Toaster position="top-right" />
      <MusicPlayer />

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App