import React from 'react';
import { TabType } from './types';
import TechStack from './TechStack';
import Education from './Education';

interface GridContentProps {
  type: TabType;
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
};

const GridContent: React.FC<GridContentProps> = ({ type }) => {
  if (type === 'tech') {
    return <TechStack />;
  }
  if (type === 'education') {
    return <Education />;
  }

  return (
    <>
      {dummyData[type].map((item, index) => (
        <div
          key={index}
          className="bg-[#112240] p-6 rounded-2xl shadow-lg text-white hover:shadow-xl transition duration-300 flex flex-col">
          <h3 className="text-xl font-semibold mb-1">
            {item} ({type})
          </h3>
          <p className="text-blue-200 text-sm mb-25">
            Some short description here...
          </p>
          <div className="mt-auto self-end">
            <button className="bg-blue-900 hover:bg-blue-700 text-red-300 px-3 py-1 rounded-lg transition duration-200">
              Details →
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default GridContent;
