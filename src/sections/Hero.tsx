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
          <div className="flex gap-4 mt-7">
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-amber-800">
              C, C#
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-amber-800">
              Java, C++
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-amber-800">
              JS, TS
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-amber-800">
              Python, React
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
          <div className="flex ml-10 gap-10 mt-10 text-4xl">
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
              href="www.linkedin.com/in/toichubek-pazylov"
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
        <div className="hidden md:flex justify-center mb-17">
          <Lottie
            animationData={Animation}
            className="w-200 h-200"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
