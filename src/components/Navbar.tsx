import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <nav
      className="w-full fixed top-0 z-50 bg-[#0a192f] border-b border-gray-700 text-white shadow-sm"
      data-aos="fade-left">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-10 hover:text-blue-300 cursor-pointer"
          />
          <h1 className="text-2xl font-bold hover:text-blue-400 cursor-pointer">
            PAZYLOV
          </h1>
        </div>

        <ul className="flex gap-9 text-lg">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
