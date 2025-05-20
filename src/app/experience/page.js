'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 py-16">
      <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full max-w-3xl hover:scale-[1.02] hover:shadow-xl transition duration-300"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-teal-300">
            CodeBlazer – Frontend + Team Lead
          </h3>
          <span className="text-sm text-gray-400">Jan 2024 – Mar 2024</span>
        </div>

        <p className="text-gray-300 mb-2">
          Collaborated with a team of developers to build and launch the official club website using React, Tailwind, and Firebase.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
          <li>Led UI planning and layout for mobile-first design</li>
          <li>Managed GitHub repo with PR reviews and issue tracking</li>
          <li>Integrated Firebase Auth and Firestore for dynamic content</li>
          <li>Conducted weekly Agile-style team standups</li>
        </ul>
      </motion.div>
    </section>
  );
}
