import { useParams, Link } from 'react-router-dom';
import { projectsItems } from './projectsItems.ts';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectsDetails = () => {
  const { slug } = useParams();
  const project = projectsItems.find((item) => item.slug === slug);

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
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <Link
        to="/"
        className="text-cyan-300 flex items-center gap-2 mb-6 mt-15 hover:underline bg-[#112240] px-3 py-1 rounded-full w-fit">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>
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
