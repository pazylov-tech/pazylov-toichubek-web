import React from 'react';
import ContactForm from '../Contact/ContactForm';
import ProjectOfferForm from '../Contact/ProjectOfferForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a2b4c] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Contact Me</h1>
      <p className="text-center text-sky-300 mb-12">
        Leave me a message in case of having questions, and I’ll get back to you
        soon.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto">
        <ContactForm />
        <ProjectOfferForm />
      </div>
    </div>
  );
};

export default Contact;
