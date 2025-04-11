import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const educationItems = [
  {
    name: 'AUCA',
    image: '/education-icons/auca.jpeg',
    description:
      "Pursuing a Bachelor's degree in Software Engineering & Liberal Arts and Science concentrating in Mathematical Modeling at AUCA.",
  },
  {
    name: 'EPAM Systems',
    image: '/education-icons/epam.png',
    description:
      'Intern at EPAM, working on Engineering Excel Bootcamp and Project Management School to strengthen full-stack skills.',
  },
  {
    name: 'TimelySkills',
    image: '/education-icons/timelyskills.png',
    description:
      'Frontend Intern working on real-world web projects using React, TypeScript, Tailwind, and best practices.',
  },
  {
    name: 'Stepik',
    image: '/education-icons/stepik.jpg',
    description:
      'Completed CS and problem-solving courses at Stepik to reinforce algorithmic thinking and backend basics.',
  },
  {
    name: 'Codeсademy',
    image: '/education-icons/codecademy.png',
    description:
      'Learned web development foundations and backend intro through interactive lessons.',
  },
  {
    name: 'Coursera',
    image: '/education-icons/coursera.png',
    description:
      'Took university-level CS courses in Python, software architecture, and intro to AI.',
  },
];

const Education: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-x-100 gap-y-15 p-4 ml-65"
      data-aos="flip-up">
      {educationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className="w-70 h-40 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition duration-300 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-2xl max-w-full max-h-full object-contain"
          />
        </div>
      ))}

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-transparent bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#0a192f] bg-opacity-80 backdrop-blur-lg rounded-xl p-8 w-full mx-4 relative shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-400 hover:text-cyan-100">
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-500">
              {educationItems[selected].name}
            </h2>
            <p className="text-gray-400 text-center">
              {educationItems[selected].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
