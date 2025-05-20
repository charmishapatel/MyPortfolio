'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-white text-xl font-bold">Charmisha.dev</h1>
        <div className="space-x-6 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
