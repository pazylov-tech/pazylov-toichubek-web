import { TabType } from './types';

interface CardProps {
  title: string;
  tab: TabType;
}

const Card: React.FC<CardProps> = ({ title, tab }) => {
  return (
    <div className="bg-blue-700 p-6 rounded-xl shadow hover:shadow-xl transition">
      <p className="text-lg font-semibold mb-2">
        {title} ({tab})
      </p>
      <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
        Details →
      </button>
    </div>
  );
};

export default Card;
