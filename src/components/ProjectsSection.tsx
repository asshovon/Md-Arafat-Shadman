import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Code2
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Web Development', 'AI/ML', 'Cybersecurity', 'Software', 'Design'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-400 border border-teal-500/20">
          <FolderGit2 className="w-3.5 h-3.5" /> Engineering & Creative Portfolio
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Projects & Practical Systems
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Real-world implementations spanning web development with React at IEEE Computer Society Bangladesh Chapter, deep learning diagnostic tools, cybersecurity scanners, and visual branding design.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/10'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-6 transition-all duration-200 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              
              {/* Category & Period */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  {project.category}
                </span>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {project.period}
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-teal-400/90 font-medium mt-0.5">
                  {project.role} {project.organization ? `• ${project.organization}` : ''}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Key Contributions:</span>
                {project.highlights.slice(0, 3).map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Action Links */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Open Source / Portfolio Item</span>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
