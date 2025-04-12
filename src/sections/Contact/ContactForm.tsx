import React from 'react';
import SocialLinks from './SocialLinks';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-sm text-slate-300 mb-6">
        Have something to discuss? Send me a message and I’ll get to you.
      </p>

      <form className="space-y-4">
        <input type="text" placeholder="Your name" className="input-style" />
        <input type="email" placeholder="Your Email" className="input-style" />
        <textarea
          placeholder="Your message"
          rows={4}
          className="input-style resize-none"
        />

        <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-xl w-full font-semibold transition">
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactForm;
