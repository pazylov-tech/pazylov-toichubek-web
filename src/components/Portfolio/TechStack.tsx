import React from 'react';

const techStack = [
  { name: 'JavaScript', icon: '/icons/js.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'HTML', icon: '/icons/html.png' },
  { name: 'CSS', icon: '/icons/css.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'Node JS', icon: '/icons/node.png' },
  { name: 'C++', icon: '/icons/cpp.png' },
  { name: 'Python', icon: '/icons/python.png' },
  // { name: 'SQL', icon: '/icons/sql.png' },
  { name: 'TypeScript', icon: '/icons/ts.png' },
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 sm:px-8">
      {techStack.map((tech, idx) => (
        <div
          key={idx}
          className="bg-[#112240] rounded-xl p-4 flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-md transition duration-300">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 mb-2 object-contain"
          />
          <p className="text-sm font-medium">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
