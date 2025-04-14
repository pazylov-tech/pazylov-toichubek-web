import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projectItems = [
  {
    title: 'PAZYLOV',
    image: '/projects-icons/pazylov.png',
    description:
      'My personal website and first pet project. Built with TypeScript, React, Vite and TailwindCSS.',
    liveDemoLink: 'https://toichubek.com',
    detailsLink: '#',
  },
  {
    title: 'SOLO',
    image: '/projects-icons/solo.png',
    description: 'An anime-based concept app inspired by Solo Leveling.',
    liveDemoLink: '#',
    detailsLink: '#',
  },
  {
    title: 'ReadMeet',
    image: '/projects-icons/read-meet.png',
    description:
      'A beautifully designed app that blends the love of reading with meaningful connection. ReadMeet brings stories — and people — together.',
    liveDemoLink: '#',
    detailsLink: '#',
  },
  {
    title: 'AUCA Connect',
    image: '/projects-icons/auca-connect.png',
    description:
      'An app for the university & And my possible senior thesis project.',
    liveDemoLink: '#',
    detailsLink: '#',
  },
  {
    title: 'Convertly',
    image: '/projects-icons/convertly.png',
    description:
      'An app bridging the gap between units with elegance and speed. Convertly is a sleek and intuitive web application designed to make unit conversions effortless.',
    liveDemoLink: '#',
    detailsLink: '#',
  },
  {
    title: 'Go',
    image: '/projects-icons/go.png',
    description:
      'Frontend contribution to Kyrgyz Go Federation website. Worked on layout, responsiveness, and visual structure.',
    liveDemoLink: '#',
    detailsLink: '#',
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-x-100 gap-y-15 p-4 ml-65"
      data-aos="zoom-in-up">
      {projectItems.map((project, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className="w-70 h-40 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition duration-300 flex items-center justify-center overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl max-w-full max-h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">
              {project.title}
            </h3>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#0a192f] bg-opacity-95 backdrop-blur-lg rounded-xl p-8 w-full mx-4 sm:w-2/3 lg:w-1/2 relative shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-400 hover:text-cyan-100">
              &times;
            </button>
            <img
              src={projectItems[selected].image}
              alt={projectItems[selected].title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-3 text-cyan-400 text-center">
              {projectItems[selected].title}
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              {projectItems[selected].description}
            </p>
            <div className="flex justify-center gap-6 text-sm">
              {projectItems[selected].liveDemoLink && (
                <a
                  href={projectItems[selected].liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-200 transition">
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {projectItems[selected].detailsLink && (
                <a
                  href={projectItems[selected].detailsLink}
                  className="flex items-center gap-1 text-red-300 hover:text-red-200 transition">
                  Details <ArrowRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
