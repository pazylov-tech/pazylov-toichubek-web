import Lottie from 'lottie-react';
import Animation from '../assets/heroAnimation.json';
import { FaGithub, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

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
          <div className="flex gap-4 mt-7 flex-wrap">
            {['C, C#', 'Java, C++', 'JS, TS', 'Python, React'].map(
              (tech, index) => (
                <span
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-white transform transition-transform duration-300 hover:scale-110 hover:bg-red-500 shadow-md">
                  {tech}
                </span>
              ),
            )}
          </div>

          <div className="flex gap-7 mt-9">
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={370}
              offset={-80}
              className="bg-blue-500 px-11 py-4 text-lg rounded-md text-white flex items-center gap-2 hover:bg-blue-400 transition-all cursor-pointer">
              Projects <FiExternalLink />
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={370}
              offset={-80}
              className="bg-gray-800 px-11 py-4 text-lg rounded-md text-white flex items-center gap-2 hover:bg-gray-500 transition-all cursor-pointer">
              Contact <FiMail />
            </ScrollLink>
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
              href="https://www.linkedin.com/in/toichubek-pazylov/"
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
