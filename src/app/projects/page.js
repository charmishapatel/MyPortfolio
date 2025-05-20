'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#111827] text-white px-6 py-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl w-full">
        <motion.div
          className="bg-white/5 p-6 rounded-xl border border-white/10 shadow hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">EventEve</h3>
          <p className="text-sm text-gray-300 mb-4">
            Full-stack event service platform built with Next.js, PostgreSQL, Firebase Auth.
          </p>
          <div className="flex gap-3 text-sm">
            <a href="https://eventeve.vercel.app" target="_blank" rel="noreferrer" className="text-teal-400 underline">Live</a>
            <a href="https://github.com/yourgithub/eventeve" target="_blank" rel="noreferrer" className="text-gray-400 underline">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
