import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-8 px-4 mt-16 shadow-inner border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left side */}
        <div>
          <div className="flex items-center gap-1">
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 w-10 hover:text-blue-300 cursor-pointer"
            />
            <h3 className="text-xl font-semibold text-cyan-400">PAZYLOV</h3>
            <p className="text-sm ml-4">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/pazylov-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/toichubek-pazylov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/pazylovt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/pazylovv.t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaInstagram />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=pazylovtoichubek7@gmail.com&subject=Hello&body=I%20saw%20your%20profile!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
