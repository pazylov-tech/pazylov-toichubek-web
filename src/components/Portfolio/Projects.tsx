import { projectItems } from './projectItems';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="text-white py-8" id="projects">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="w-72 h-auto rounded-2xl shadow-md hover:scale-105 transition duration-300 overflow-hidden bg-[#112240] flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl w-full h-40 object-cover"
            />
            <div className="p-4 text-center flex flex-col justify-between h-full">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-center gap-4 text-sm">
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-300 hover:text-cyan-100">
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex items-center gap-1 text-pink-300 hover:text-pink-100">
                  Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
