import {
  FaDownload,
  FaProjectDiagram,
  FaGraduationCap,
  FaGlobe,
} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section
      id="about"
      className="w-full h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f] text-white py-20 px-6"
      data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16" data-aos="zoom-up">
          <h2 className="text-6xl font-bold">About Me</h2>
          <p className="text-red-400 text-xl mt-2">Creating Innovations</p>
        </div>

        {/* Main Grid */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="zoom-up"
          data-aos-delay="90">
          <div>
            <h3 className="text-5xl font-semibold mb-4">Hello, I’m</h3>
            <h3 className="text-4xl text-red-400 font-semibold mb-4">
              Toichubek Pazylov
            </h3>

            <p className="text-2xl-lg leading-relaxed text-gray-300 mb-11">
              Tech-savvy and dedicated Software Engineer student. Eager to
              contribute to team success through result-driven work. Persistent
              young specialist adaptable to new challenges and driven to gain
              valuable experience in a professional environment.
            </p>

            {/* Buttons */}
            <div className="flex gap-9 mb-10" data-aos="fade-up">
              <a
                href="/cv.pdf"
                download
                className="bg-red-500 hover:bg-red-600 text-white text-2xl px-4 py-3 rounded-lg flex items-center gap-2 shadow-md">
                Download CV <FaDownload />
              </a>
              <a
                // href="#projects"
                className="bg-gray-700 hover:bg-gray-600 text-white text-2xl px-4 py-3 rounded-lg flex items-center gap-3 shadow-md">
                View Projects &lt;/&gt;
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center mb-12 ml-14">
            <img
              src="/profile.png"
              alt="Toichubek"
              className="w-80 h-80 object-cover rounded-full border-2 border-gray-600 shadow-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 start">
          {/* Projects */}
          <div
            className="bg-[#1e2a44] p-6 rounded-xl shadow-md hover:bg-gray-600"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="flex items-center justify-between text-white text-3xl mb-3">
              <FaProjectDiagram className="text-blue-400" />
              <p className="font-bold">5</p>
            </div>
            <h4 className="text-xl font-semibold">TOTAL PROJECTS</h4>
            <p className="text-gray-400 text-sm mb-2">Variety of projects</p>
          </div>

          {/* Education */}
          <div
            className="bg-[#1e2a44] p-6 rounded-xl shadow-md hover:bg-gray-600"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="flex items-center justify-between text-white text-3xl mb-3">
              <FaGraduationCap className="text-blue-400" />
              <p className="font-bold">3</p>
            </div>
            <h4 className="text-xl font-semibold">EDUCATION</h4>
            <p className="text-gray-400 text-sm mb-2">Degree & Certificates</p>
          </div>

          {/* Experience */}
          <div
            className="bg-[#1e2a44] p-6 rounded-xl shadow-md hover:bg-gray-600"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="flex items-center justify-between text-white text-3xl mb-3">
              <FaGlobe className="text-blue-400" />
              <p className="font-bold">1</p>
            </div>
            <h4 className="text-xl font-semibold">YEARS OF EXPERIENCE</h4>
            <p className="text-gray-400 text-sm mb-2">
              Continuous learning journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
