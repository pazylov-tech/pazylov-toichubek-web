import React from 'react';
import { TabType } from './types';
import TechStack from './TechStack';
import Education from './Education';
import Projects from './Projects';

interface GridContentProps {
  type: TabType;
}

const GridContent: React.FC<GridContentProps> = ({ type }) => {
  if (type === 'tech') return <TechStack />;
  if (type === 'education') return <Education />;
  if (type === 'projects') return <Projects />;

  return null; // fallback
};

export default GridContent;
