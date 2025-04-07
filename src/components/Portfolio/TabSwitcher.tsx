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
    { key: 'projects', label: 'Projects', icon: <FaLaptopCode /> },
    { key: 'tech', label: 'Tech Stack', icon: <FaCode /> },
    { key: 'education', label: 'Education', icon: <FaGraduationCap /> },
  ] as const;

  const tabButtonStyle = (isActive: boolean) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition duration-200
     ${isActive ? 'bg-blue-600 text-white' : 'bg-[#112240] text-blue-200 hover:bg-[#1a2c50]'}`;

  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={tabButtonStyle(activeTab === tab.key)}>
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
