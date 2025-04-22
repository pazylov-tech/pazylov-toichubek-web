import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-8 px-4 mt-16 shadow-inner border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left side */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 w-10 hover:text-blue-300 cursor-pointer"
            />
            <h3 className="text-xl font-semibold text-cyan-400">PAZYLOV</h3>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Toichubek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/toichubek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/yourtelegramusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}
