import Lottie from 'lottie-react';
import Animation from '../assets/heroAnimation.json';
import { FaGithub, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-white flex items-center">
      <div
        className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up">
        {/* Hero Text */}
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <h1 className="text-7xl font-bold">Full-Stack</h1>
          <h1 className="text-7xl font-bold text-red-400 mt-3">Developer</h1>

          <p className="text-xl text-gray-300 mt-5">AUCA & EPAM Systems</p>
          <p className="text-md text-gray-400 mt-4">
            Aspiring Full-Stack Engineer. Determined to learn, grow, and excel
            in Software Engineering.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex gap-3 mt-9">
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              C, C#, C++
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              Java
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              JS, React
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              Python
            </span>
          </div>

          <div className="flex gap-7 mt-9">
            <button className="bg-blue-500 px-11 py-4 text-lg rounded-md text-white flex items-center gap-2 hover:bg-blue-400">
              Projects <FiExternalLink />
            </button>
            <button className="bg-gray-800 px-11 py-4 text-lg rounded-md text-white flex items-center gap-2 hover:bg-gray-500">
              Contact <FiMail />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-10 mt-9 text-4xl">
            <a
              href="https://github.com/pazylov-tech"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:text-gray-400" />
            </a>

            <a
              href="https://t.me/pazylovt"
              target="_blank"
              rel="noopener noreferrer">
              <FaTelegram className="cursor-pointer hover:text-gray-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/toichubek-pazylov-2ab426262/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-gray-400" />
            </a>

            <a
              href="https://www.instagram.com/pazylovv.t/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Hero Animation */}
        <div className="hidden md:flex justify-center">
          <Lottie animationData={Animation} className="w-155" loop autoplay />
        </div>
      </div>
    </section>
  );
};

export default Hero;
