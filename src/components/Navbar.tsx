import { Link, scrollSpy } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    scrollSpy.update();
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className="w-full fixed top-0 z-50 bg-[#0a192f] border-b border-gray-700 text-white shadow-sm"
      data-aos="fade-left">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-10 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />

          {isHomePage ? (
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="text-2xl font-bold hover:text-blue-400 cursor-pointer">
              PAZYLOV
            </Link>
          ) : (
            <RouterLink to="/">
              <h1 className="text-2xl font-bold hover:text-blue-400 cursor-pointer">
                PAZYLOV
              </h1>
            </RouterLink>
          )}
        </div>

        <ul className="flex gap-9 text-lg">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active">
              Home
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active">
              About
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active">
              Portfolio
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
