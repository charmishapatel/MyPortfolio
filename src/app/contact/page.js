'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 py-16">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        Contact Me
      </motion.h2>

      <motion.p className="mb-6 text-gray-400 text-center max-w-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
        I’m currently open to work, collaborations, and freelance opportunities. Reach out!
      </motion.p>

      <div className="flex gap-6">
        <a href="mailto:yourmail@example.com" className="px-5 py-2 border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition">Email Me</a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">LinkedIn</a>
      </div>
    </section>
  );
}
