'use client';
import Image from 'next/image';


// logo by : https://icons8.com/icons/set/react-logo

const skills = [
  { name: 'React', img: '/images/skills/react.png' },
  { name: 'Next.js', img: '/images/skills/nextjs.png' },
  { name: 'HTML', img: '/images/skills/html.png' },
  { name: 'CSS', img: '/images/skills/css.png' },
  { name: 'JavaScript', img: '/images/skills/javascript.png' },
  { name: 'TypeScript', img: '/images/skills/typescript.png' },
  { name: 'Tailwind CSS', img: '/images/skills/tailwind.png' },
  { name: 'Firebase', img: '/images/skills/firebase.png' },
  { name: 'PostgreSQL', img: '/images/skills/postgresql.png' },
  { name: 'Node.js', img: '/images/skills/node.png' },
  { name: 'Express.js', img: '/images/skills/expressjs.png' },
  { name: 'Figma', img: '/images/skills/figma.png' },
  { name: 'Git/GitHub', img: '/images/skills/github.png' },
  { name: 'Python', img: '/images/skills/python.png' },
  { name: 'Docker', img: '/images/skills/docker.png' },
  { name: 'MySQL', img: '/images/skills/mysql.png' },


];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-[#111827] text-white px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
        {skills.map(({ name, img }) => (
          <div
            key={name}
            className="group relative flex flex-col items-center justify-center mt-2"
          >
            <Image
              src={img}
              alt={name}
              width={90}
              height={90}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 transition text-sm text-gray-300">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
