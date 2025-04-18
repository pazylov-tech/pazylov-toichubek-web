import { projectItems } from './projectItems';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="text-white py-8" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-90 gap-x-120 gap-y-5 place-items-center">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="w-85 h-auto rounded-2xl shadow-md hover:scale-105 transition duration-300 overflow-hidden bg-[#112240] flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl w-full h-52 object-cover"
            />
            <div className="p-4 text-center flex flex-col justify-between h-full pt-1">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1 line-clamp-1">
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
                  className="flex items-center gap-1 border border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-[#112240] px-3 py-1 rounded-full transition duration-200">
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
