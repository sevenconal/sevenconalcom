import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, ArrowUpRight, Github, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'mobile' | 'automation'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#090d16] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Mini Case Studies & Projeler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Problem Odaklı <span className="text-emerald-400">Çalışan Uygulamalar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Sadece kart görsellerinden oluşan klasik tasarım yerine; her projeyi çözdüğü problem, teknik mimari ve detaylarıyla sunuyorum.
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'Tüm Projeler' },
            { id: 'web', label: 'Web Uygulamaları' },
            { id: 'mobile', label: 'Mobil Uygulamalar' },
            { id: 'automation', label: 'Otomasyon & Sistem' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-2xl transition-all ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              {/* Top Meta Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/30">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.date}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-teal-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Preview Block */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Teknik Vurgu</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                  {project.architectureHighlights[0]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group/btn"
                >
                  <span>Case Study'yi İncele</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-colors"
                    title="GitHub Deposu"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
