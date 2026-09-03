import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="glass-card rounded-xl p-6 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="text-xs font-mono text-neon-emerald bg-neon-emerald/10 px-2 py-1 rounded border border-neon-emerald/20">
          {project.category}
        </div>
        <div className="flex gap-3 text-zinc-500">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
      <p className="text-zinc-400 text-sm mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map(tech => (
          <span key={tech} className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      {project.architectureNotes && (
        <button 
          onClick={() => onOpenModal(project)}
          className="mt-auto flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-neon-cyan transition-colors"
        >
          Architecture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
