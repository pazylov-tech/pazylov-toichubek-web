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
    `w-75 flex items-center justify-center gap-3 px-4 py-12 rounded-lg text-3xl font-height transition duration-200
     ${isActive ? 'bg-blue-800 text-white' : 'bg-[#112240] text-blue-200 hover:bg-[#1a2c50]'}`;

  return (
    <div
      className="flex justify-center gap-20 mb-19 flex-wrap"
      data-aos="zoom-out"
      data-aos-delay="90">
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
