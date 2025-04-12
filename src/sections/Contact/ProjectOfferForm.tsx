import React from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

const ProjectOfferForm: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 w-full max-w-xl">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="text-red-300">📁</span> Project Offer
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="input-style"
          required
        />
        <textarea
          placeholder="Write your offer and a short project description…"
          className="input-style resize-none"
          rows={5}
          required
        />

        <div className="text-sm text-gray-300">Documents (optional)</div>
        <label className="bg-red-300 bg-opacity-40 text-red-900 py-2 px-4 rounded-lg inline-flex items-center gap-2 cursor-pointer hover:bg-opacity-60 transition">
          <FaPaperclip />
          Attach your document
          <input type="file" className="hidden" />
        </label>
        <p className="text-xs text-gray-400">Max file size: 5MB</p>

        <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-xl w-full font-semibold transition flex items-center justify-center gap-2">
          <FaPaperPlane /> Post Offer
        </button>
      </form>
    </div>
  );
};

export default ProjectOfferForm;
