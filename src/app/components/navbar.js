'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Charmisha.dev</h1>
        <div className="space-x-6 text-white font-medium">
          <a href="#home" className="hover:text-teal-300 transition">Home</a>
          <a href="#skills" className="hover:text-teal-300 transition">Skills</a>
          <a href="#experience" className="hover:text-teal-300 transition">Experience</a>
          <a href="#projects" className="hover:text-teal-300 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
