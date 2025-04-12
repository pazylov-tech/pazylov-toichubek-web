import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-3 mt-4">
      <a
        href="https://linkedin.com/in/yourprofile"
        className="social-button bg-blue-600">
        <FaLinkedin /> Let’s Connect on LinkedIn
      </a>
      <div className="flex gap-3">
        <a
          href="https://github.com/pazylovt"
          className="social-button bg-gray-700">
          <FaGithub /> @pazylovt
        </a>
        <a href="https://t.me/pazylovt" className="social-button bg-blue-500">
          <FaTelegram /> @pazylovt
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
