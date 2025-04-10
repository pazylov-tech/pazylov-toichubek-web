import React, { useState } from 'react';

const educationItems = [
  {
    name: 'American University of Central Asia',
    image: '/education-icons/auca.jpeg',
    description:
      "Pursuing a Bachelor's double major degree in Software Engineering and in Liberal Arts and Science concentrating in Mathematical Modeling at AUCA.",
  },
  {
    name: 'EPAM Systems',
    image: '/education-icons/epam.jpeg',
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
    image: '/education-icons/stepik.jpeg',
    description:
      'Completed CS and problem-solving courses at Stepik to reinforce algorithmic thinking and backend basics.',
  },
  {
    name: 'Codecademy',
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
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-35 p-6">
      {educationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className="bg-white rounded-2xl p-5 shadow-md cursor-pointer hover:scale-105 transition duration-300 flex items-center h-50 w-50">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-30 object-contain"
          />
        </div>
      ))}

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black">
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-2">
              {educationItems[selected].name}
            </h2>
            <p className="text-gray-700">
              {educationItems[selected].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
