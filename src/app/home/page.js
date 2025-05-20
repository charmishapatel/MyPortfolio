'use client';

import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 max-w-5xl w-full text-white shadow-2xl">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Hi, I’m <span className="text-teal-400">Charmisha</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            A UX-focused Full-Stack Developer turning bold ideas into beautiful, performant digital experiences.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-2 border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition font-medium"
          >
            Check Out My Work
          </a>
        </motion.div>

        {/* Floating Card Example */}
        <div className="absolute top-[-50px] right-[-30px] w-40 h-40 bg-gray-200/10 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl z-10 flex items-center justify-center text-sm text-white">
          Floating Card
        </div>
      </div>
    </div>
  );
}
