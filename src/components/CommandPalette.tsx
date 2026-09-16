import React, { useState, useEffect } from 'react';
import { Search, X, Code2, User, MessageSquare, Github, Linkedin, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import { PROFILE_DATA } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sections = [
    { title: t.nav.about, href: '#about', icon: User },
    { title: t.nav.skills, href: '#skills', icon: Code2 },
    { title: t.nav.services, href: '#services', icon: Code2 },
    { title: t.nav.contact, href: '#contact', icon: MessageSquare },
  ];

  const matchingSkills = SKILL_CATEGORIES.flatMap((c) => c.skills).filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Bar */}
        <div className="p-4 bg-slate-50 dark:bg-[#131b2e] border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.command.placeholder}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-6 text-xs font-mono">
          
          {/* Quick Nav Section */}
          <div className="space-y-2">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
              {t.command.sectionsTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <a
                    key={idx}
                    href={sec.href}
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2.5 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{sec.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Matching Skills */}
          {query.trim() && matchingSkills.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                {t.command.skillsTitle} ({matchingSkills.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {matchingSkills.map((skill, idx) => (
                  <a
                    key={idx}
                    href="#skills"
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-teal-500 dark:text-teal-400" />
                    <span>{skill.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* External Socials */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
              {lang === 'tr' ? 'Harici Bağlantılar' : 'External Links'}
            </span>
            <div className="flex gap-2">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-slate-50 dark:bg-[#111726] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>{lang === 'tr' ? 'Kapatmak için' : 'Press'} <kbd className="px-1 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300">ESC</kbd> {lang === 'tr' ? 'tuşuna basın' : 'to close'}</span>
          <span>Sevenç Önal</span>
        </div>

      </div>
    </div>
  );
};
