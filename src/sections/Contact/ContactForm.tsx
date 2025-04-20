import React, { useEffect } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactForm: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div
      className="bg-[#2e3e5c] rounded-2xl p-8 w-full max-w-md shadow-lg text-white"
      data-aos="zoom-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-sm text-slate-200 mt-1">
            Have something to discuss? Send me a message and I’ll get to you.
          </p>
        </div>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70"
            size={20}
          />
          <input
            type="text"
            placeholder="Your name"
            className="w-full pl-10 pr-4 py-3 bg-[#465774] rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70"
            size={20}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-3 bg-[#465774] rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div className="relative">
          <MessageSquare
            className="absolute left-3 top-3 text-white opacity-70"
            size={20}
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full pl-10 pr-4 py-2 bg-[#465774] rounded-xl text-white placeholder-white placeholder-opacity-60 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <button className="w-full bg-[#985f63] hover:bg-[#0a192f] text-white font-bold py-3 rounded-xl transition-all duration-200">
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="space-y-3 mt-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#465774] hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 w-full">
          <FaLinkedin className="text-lg" />
          Let’s Connect on LinkedIn
        </a>

        <div className="flex gap-3">
          <a
            href="https://github.com/pazylov-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#465774] hover:bg-gray-800 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 w-1/2">
            <FaGithub className="text-lg" />
            @pazylov-tech
          </a>

          <a
            href="https://t.me/pazylovt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#465774] hover:bg-[#0a197f] text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 w-1/2">
            <FaTelegram className="text-lg" />
            @pazylovt
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
