'use client';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-[#111827] text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {["React", "Next.js", "Tailwind CSS", "Firebase", "PostgreSQL", "Node.js", "Framer Motion", "Git/GitHub"].map(skill => (
          <div key={skill} className="bg-white/10 px-4 py-3 rounded-md shadow">{skill}</div>
        ))}
      </div>
    </section>
  );
}
