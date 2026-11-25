import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-red-400 to-rose-400 text-transparent bg-clip-text">
          Krishna Sharma
        </span>
      </motion.h1>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 relative flex justify-center"
      >
        <img
          src={profile}
          alt="profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-800"
        />

        {/* glow below */}
        <div className="absolute w-60 h-60 bg-rose-500/20 blur-3xl rounded-full -z-10"></div>
      </motion.div>

      {/* ROLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-300 text-lg"
      >
        Full Stack Developer | Java | Python | React
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-400 max-w-xl leading-relaxed"
      >
        I build scalable web applications and intelligent systems using modern
        technologies like React, Spring Boot, and Machine Learning.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >

        {/* View Projects */}
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg text-white font-medium hover:opacity-90 hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition"
        >
          View Projects
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/krishnasocialcont001-source"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-600 rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1x4GnxsV9fqb_EBEMn8GBZjQAQpV2mGjJ/view?usp=sharing"
          target="_blank"
          className="px-6 py-3 border border-rose-500 text-rose-400 rounded-lg hover:bg-rose-500 hover:text-white transition"
        >
          View Resume
        </a>

      </motion.div>

      {/* SMALL LINE */}
      <p className="mt-6 text-sm italic text-gray-500">
        This portfolio itself is made on React and Tailwind CSS
      </p>

    </section>
  )
}