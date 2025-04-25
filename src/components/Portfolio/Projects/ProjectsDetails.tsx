import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsItems } from './projectsItems.ts';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectsDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsItems.find((item) => item.slug === slug);

  useEffect(() => {
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
    <div className="max-w-4xl mx-auto px-6 py-10 text-white" data-aos="fade-up">
      <button
        onClick={goToProjects}
        className="text-cyan-300 flex items-center gap-2 mb-4 mt-20 hover:underline bg-[#112240] px-3 py-1 rounded-full w-fit">
        <ArrowLeft size={16} />
        Back to Projects
      </button>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-6">{project.details}</p>
      {project.liveDemoLink && (
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-300 hover:text-cyan-100">
          View Live Demo <ExternalLink size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default ProjectsDetails;
