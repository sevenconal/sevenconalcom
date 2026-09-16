import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { Code2, Globe, Smartphone, Database, Wrench, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { lang, t } = useLanguage();

  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    Globe: <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
    Smartphone: <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    Database: <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />,
    Wrench: <Wrench className="w-4 h-4 text-teal-600 dark:text-teal-300" />,
  };

  const categoryTitlesEn: Record<string, string> = {
    programming: 'Programming Languages',
    web: 'Web Technologies',
    mobile: 'Mobile Development',
    database: 'Database & Cloud',
    tools: 'Tools & DevOps',
  };

  return (
    <section id="skills" className="py-16 relative bg-slate-100/60 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {t.skills.title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {t.skills.subtitle}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{t.skills.badge}</span>
          </div>
        </div>

        {/* Minimalist 5-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="glass-card p-5 rounded-2xl space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Category Title */}
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800/60">
                  {categoryIcons[category.iconName]}
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {lang === 'en' && categoryTitlesEn[category.id]
                      ? categoryTitlesEn[category.id]
                      : category.title}
                  </h3>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 text-right">
                {category.skills.length} {lang === 'tr' ? 'yetkinlik' : 'skills'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
