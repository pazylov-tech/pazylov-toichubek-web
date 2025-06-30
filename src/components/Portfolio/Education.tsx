import React, { useEffect, useState, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const educationItems = [
  {
    name: 'AUCA',
    image: '/education-icons/auca.jpeg',
    description:
      "Pursuing a Bachelor's double major degree in Software Engineering & Liberal Arts and Science concentrating in Mathematical Modeling at AUCA.",
  },
  {
    name: 'EPAM Systems',
    image: '/education-icons/epam.png',
    description:
      'Intern at EPAM Systems, currently enrolled in the Engineering Excel Bootcamp and participating in the Project Management School to enhance full-stack development and leadership skills.',
  },
  {
    name: 'TimelySkills',
    image: '/education-icons/timelyskills.png',
    description:
      'Frontend Intern working on real-world web projects using React, TypeScript, Tailwind, and best practices. Received real-world experience in working with a team and communicating with clients.',
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
  }, []);

  const [selected, setSelected] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setSelected(index);
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
    }, 150); // same duration as animation
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 250);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    if (selected !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selected]);

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-x-100 gap-y-15 p-4 ml-65 mt-12"
        data-aos="flip-up">
        {educationItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="w-70 h-40 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition duration-300 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-2xl max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}>
          <div
            ref={modalRef}
            className={`bg-[#0a192f] text-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md relative transform transition-all duration-300
            ${
              isOpening
                ? 'scale-95 opacity-0 translate-y-2'
                : isClosing
                  ? 'scale-95 opacity-0 translate-y-2'
                  : 'scale-100 opacity-100 translate-y-0'
            }`}>
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl">
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={educationItems[selected].image}
                alt={educationItems[selected].name}
                className="w-24 h-24 object-contain rounded-xl mb-4"
              />
              <h2 className="text-2xl font-semibold text-center mb-2">
                {educationItems[selected].name}
              </h2>
              <p className="text-gray-300 text-center">
                {educationItems[selected].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;
