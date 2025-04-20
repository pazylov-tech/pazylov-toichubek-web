import React, { useEffect } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectOfferForm: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div
      className="bg-[#2e3e5c] rounded-2xl p-8 w-full max-w-xl shadow-lg text-white"
      data-aos="zoom-in">
      <div className="mb-2">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span role="img" aria-label="folder" className="text-red-300">
            📁
          </span>
          Project Offer
        </h2>
        <p className="text-sm text-slate-200 mt-1">
          Want to collaborate? Send a short description and any related docs!
        </p>
      </div>

      <form className="space-y-4">
        <h2 className="text-2xl font-bold ml-4 flex items-center">Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="w-full pl-4 pr-4 py-2 bg-[#465774] rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <h2 className="text-2xl font-bold ml-4 flex items-center">
          Description
        </h2>
        <textarea
          placeholder="Write your offer and a short project description…"
          rows={5}
          required
          className="w-full pl-4 pr-4 py-2 bg-[#465774] rounded-xl text-white placeholder-white placeholder-opacity-60 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <div>
          <div className="text-sm text-gray-300 mb-1">Documents (optional)</div>
          <label className="w-full bg-red-300 bg-opacity-40 text-red-900 py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-opacity-60 transition">
            <FaPaperclip />
            Attach your document
            <input type="file" className="hidden" />
          </label>
          <p className="text-xs text-gray-400 mt-1">Max file size: 5MB</p>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200">
          <FaPaperPlane /> Post Offer
        </button>
      </form>
    </div>
  );
};

export default ProjectOfferForm;
