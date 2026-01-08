import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects, Project } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card glass-card rounded-2xl overflow-hidden group ${project.featured ? 'md:col-span-2' : ''
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-muted to-surface-dark overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`/images/${project.src}`}
            alt={project.imagePrompt}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
            >
              <Github size={20} />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-mono">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View More Link */}
        <div className="flex items-center gap-2 text-primary text-sm font-mono group/link cursor-pointer">
          <span>View Details</span>
          <ArrowRight
            size={16}
            className="transform transition-transform group-hover/link:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4">
            {'// Projects'}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development,
            AI integration, and cloud architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 border-2 border-primary/50 text-primary font-mono font-semibold rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              {showAll ? 'Show Less' : `View All ${projects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
