'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6"
    >
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 max-w-5xl w-full text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Hi, I am <span className="text-teal-400">Charmisha</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
            A UX-focused Full-Stack Developer turning bold ideas into beautiful, performant digital experiences.
          </p>
          <a
            href="#skills"
            className="mt-6 inline-block px-6 py-2 border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition font-medium"
          >
            Check Out My Work
          </a>
        </motion.div>

        {/* Avatar Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            width={208}
            height={208}
            className="object-cover"
          />
        </div>

        </motion.div>
      </div>
    </section>
  );
}
