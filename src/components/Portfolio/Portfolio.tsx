import { useState } from 'react';
import TabSwitcher from './TabSwitcher';
import GridContent from './GridContent';
import { TabType } from './types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  return (
    <section className="w-full  h-screen bg-gradient-to-b from-[#0a192f] to-[#0a020c] text-white">
      <div className="text-center mb-15" data-aos="fade-up">
        <h2 className="text-6xl font-bold text-white">Portfolio Showcase</h2>
        <p className="mt-5 text-cyan-600 max-w-xl mx-auto">
          Explore my path through projects, apps, games, and more. Education,
          certificates, and tech knowledge I've gained along the way.
        </p>
      </div>

      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20"
        data-aos="zoom-out">
        <GridContent type={activeTab} />
      </div>
    </section>
  );
};

export default Portfolio;
