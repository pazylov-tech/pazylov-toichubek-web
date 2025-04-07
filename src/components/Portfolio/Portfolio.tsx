import { useState } from 'react';
import TabSwitcher from './TabSwitcher';
import GridContent from './GridContent';
import { TabType } from './types';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  return (
    <section className="py-16 px-4 md:px-20 bg-[#0a192f] text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Portfolio Showcase</h2>
        <p className="mt-2 text-blue-200 max-w-xl mx-auto">
          Explore my path through projects, apps, games, and more. Education,
          certificates, and tech knowledge I've gained along the way.
        </p>
      </div>

      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
        <GridContent type={activeTab} />
      </div>
    </section>
  );
};

export default Portfolio;
