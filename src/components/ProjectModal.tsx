import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, Lightbulb, Code, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#131b2e] border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Mini Case Study
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">{project.title}</h3>
            <p className="text-sm font-medium text-emerald-400">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 text-slate-300">
          
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm leading-relaxed text-slate-200">
            {project.summary}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problem Card */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Çözülen Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Lightbulb className="w-5 h-5 shrink-0" />
                <span>Geliştirilen Çözüm</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4 text-teal-400" />
              <span>Teknoloji Yığını</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-slate-900 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Öne Çıkan Özellikler</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Teknik Mimari & Kod Yaklaşımı</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-slate-300">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#131b2e] border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Deposu</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Canlı Önizleme</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
