import React from 'react';

interface GridContentProps {
  type: 'projects' | 'tech' | 'education';
}

const dummyData = {
  projects: [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
  ],
  tech: ['React', 'Tailwind', 'TypeScript', 'C++', 'Java', 'JavaScript'],
  education: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'],
};

const GridContent: React.FC<GridContentProps> = ({ type }) => {
  return (
    <>
      {dummyData[type].map((item, index) => (
        <div
          key={index}
          className="bg-[#112240] p-6 rounded-2xl shadow-lg text-white hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            {item} ({type})
          </h3>
          <p className="text-blue-200 text-sm mb-4">
            Some short description here...
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
            Details →
          </button>
        </div>
      ))}
    </>
  );
};

export default GridContent;
