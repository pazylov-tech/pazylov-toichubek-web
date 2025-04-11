import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const techStack = [
  { name: 'JavaScript', icon: '/tech-icons/js.svg' },
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'HTML', icon: '/tech-icons/html.svg' },
  { name: 'CSS', icon: '/tech-icons/css.svg' },
  { name: 'Tailwind CSS', icon: '/tech-icons/tailwind.jpg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  { name: 'Node JS', icon: '/tech-icons/node.png' },
  { name: 'C++', icon: '/tech-icons/cpp.svg' },
  { name: 'Python', icon: '/tech-icons/python.svg' },
  { name: 'TypeScript', icon: '/tech-icons/ts.svg' },
];

const TechStack: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="w-full flex justify-start" data-aos="zoom-out">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 gap-x-55 px-4 sm:px-70 py-10">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="bg-[#112240] rounded-3xl p-6 flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-lg transition-all duration-300 w-40 h-40 sm:w-48 sm:h-48">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 sm:w-25 sm:h-20 mb-3 object-contain"
            />
            <p className="text-base sm:text-lg font-semibold text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
