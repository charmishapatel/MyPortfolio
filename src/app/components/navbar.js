'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          {/* Github icons */}
          <a href="https://github.com/charmishapatel" target="_blank" rel="noreferrer">
            <Image 
              src="/images/github.png" 
              alt="GitHub" 
              width={24} height={24} 
              className="invert hover:opacity-75 transition" />
          </a>

          {/* Linkedin icons */}
          <a href="https://www.linkedin.com/in/charmisha-patel-a7521428a" target="_blank" rel="noreferrer">
            <Image 
              src="/images/linkedin.png" 
              alt="LinkedIn" 
              width={24} height={24} 
              className="invert hover:opacity-75 transition" />
          </a>

          {/* Instagram icons */}
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <Image 
            src="/images/instagram.png" 
            alt="Instagram" 
            width={24} height={24} 
            className="invert hover:opacity-75 transition" />
          </a>
        </div>

        {/* Navigation Bar */}
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
