import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../Contact/ContactForm';
import ProjectOfferForm from '../Contact/ProjectOfferForm';

const Contact: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-[#0a020c] to-[#0a192f] text-white py-20 px-6"
      data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="zoom-up">
          <h2 className="text-6xl font-bold">Contact Me</h2>
          <p className="text-sky-300 text-xl mt-2">
            Leave me a message in case of having questions, and I’ll get back to
            you soon.
          </p>
        </div>

        {/* Forms */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-aos="zoom-up"
          data-aos-delay="100">
          <ContactForm />
          <ProjectOfferForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
