import React from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

interface TabSwitcherProps {
  activeTab: 'projects' | 'tech' | 'education';
  setActiveTab: (tab: 'projects' | 'tech' | 'education') => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { key: 'projects', label: 'Projects', icon: <FaLaptopCode size={28} /> },
    { key: 'tech', label: 'Tech Stack', icon: <FaCode size={28} /> },
    {
      key: 'education',
      label: 'Education',
      icon: <FaGraduationCap size={28} />,
    },
  ] as const;

  const isActive = (tabKey: string) => activeTab === tabKey;

  return (
    <div
      className="flex justify-center w-full mb-15"
      data-aos="zoom-out"
      data-aos-delay="90">
      <div className="flex gap-15 bg-[#112240] p-2 rounded-xl w-full max-w-6xl justify-center h-37">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-col items-center justify-center px-6 py-4 rounded-lg font-medium transition duration-200 relative w-77 m-2
              ${isActive(tab.key) ? 'bg-blue-700 text-white shadow-lg' : 'text-blue-200 hover:bg-[#1a2c50]'}`}>
            {isActive(tab.key) && (
              <span className="absolute inset-0 bg-blue-700 rounded-lg -z-10"></span>
            )}
            <div className="mb-2">{tab.icon}</div>
            <span className="text-lg">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
