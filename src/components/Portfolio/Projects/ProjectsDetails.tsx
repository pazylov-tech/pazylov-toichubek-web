import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsItems } from './projectsItems.ts';
import { ArrowLeft, ExternalLink, GitPullRequest } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsItems.find((item) => item.slug === slug);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const goToProjects = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('projects');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (!project) {
    return (
      <div className="text-white text-center p-10">
        <p className="text-xl">Project not found.</p>
        <Link to="/" className="text-cyan-400 hover:underline mt-4 block">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      className="relative max-w-4xl mx-auto px-6 py-10 text-white"
      data-aos="fade-up">
      <button
        onClick={goToProjects}
        className="text-cyan-300 flex items-center gap-2 mb-4 mt-20 hover:underline bg-[#112240] px-3 py-1 rounded-full w-fit">
        <ArrowLeft size={16} />
        Back to Projects
      </button>

      <div className="relative">
        {project.features && project.features.length > 0 && (
          <div
            className="absolute top-0 -right-85 w-77 bg-[#0a192f] border border-cyan-500 p-4 rounded-xl shadow-lg"
            data-aos="fade-left">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
              <span className="text-yellow-400">⭐</span> Key Features:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-cyan-100 text-sm">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-6"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-6">{project.details}</p>

      <div className="flex gap-4 mt-6 flex-wrap">
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a192f] text-cyan-300 border border-cyan-300 hover:bg-cyan-300 hover:text-[#0a192f] transition-colors duration-300 shadow-md">
            Live Demo <ExternalLink size={17} />
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a192f] text-cyan-300 border border-cyan-300 hover:bg-cyan-300 hover:text-[#0a192f] transition-colors duration-300 shadow-md">
            GitHub <GitPullRequest size={17} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsDetails;
