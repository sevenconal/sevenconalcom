import React from 'react';
import { Cpu, Database, Layers, Layout, BookOpen, CheckCircle2, User } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  const icons = [Layout, Database, Layers, Cpu];
  const colors = [
    'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    'from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400',
    'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300',
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50 dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.about.titleMain} <span className="text-emerald-600 dark:text-emerald-400">{t.about.titleHighlight}</span> {t.about.titleEnd}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Philosophy Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-4 h-4" />
                <span>{t.about.educationBadge}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {lang === 'tr'
                  ? 'Teoriden Pratiğe: Dürüst ve İlerleme Odaklı Yolculuk'
                  : 'Theory to Execution: An Honest & Forward-Looking Journey'}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {lang === 'tr'
                  ? 'Bilgisayar Mühendisliği lisans eğitimim; algoritmalar, veri yapıları, işletim sistemleri, veritabanı sistemleri ve yazılım mimarisi gibi alanlarda bana güçlü bir mühendislik temeli oluşturuyor.'
                  : 'My Computer Engineering curriculum establishes a solid engineering foundation covering algorithms, data structures, OS internals, databases, and software design principles.'}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {lang === 'tr'
                  ? 'Bu bilgileri yalnızca sınav kağıdında bırakmak yerine; web uygulamaları, mobil çözümler ve otomasyon araçları geliştirerek pratiğe döküyorum. Her geçen gün teknik altyapımı genişletmeye ve daha temiz kod yazmaya odaklanıyorum.'
                  : 'Rather than keeping this knowledge purely academic, I translate it directly into production-grade web platforms, Flutter mobile apps, and automated systems with clean maintainable code.'}
              </p>
            </div>

            {/* Quote Container */}
            <div className="p-5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                "{lang === 'tr'
                  ? PROFILE_DATA.philosophy
                  : 'I do not look at projects solely from the code editor. I simultaneously analyze what the user needs, how the data will persist, how the software will scale, and how the end product will deliver value.'}"
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">— Sevenç Önal</span>
                <span className="font-mono">{lang === 'tr' ? 'Geliştirici Felsefesi' : 'Developer Philosophy'}</span>
              </div>
            </div>
          </div>

          {/* Core Product Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {t.about.pillars.map((pillar, idx) => {
              const Icon = icons[idx % icons.length];
              const color = colors[idx % colors.length];
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span>{pillar.title}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education & Focus Areas Bar */}
        <div className="mt-12 glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                {lang === 'tr' ? 'Lisans Eğitimi' : 'Education'}
              </span>
              <span className="text-base font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                {lang === 'tr' ? 'Bilgisayar Mühendisliği' : 'B.Sc. Computer Engineering'}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                {lang === 'tr' ? 'Ana Odak' : 'Core Focus'}
              </span>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                {lang === 'tr' ? 'Web & Mobil Uygulamalar' : 'Web & Mobile Applications'}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                {lang === 'tr' ? 'Veri & Mimari' : 'Data & Architecture'}
              </span>
              <span className="text-base font-bold text-teal-600 dark:text-teal-400 mt-1 block">
                {lang === 'tr' ? 'İlişkisel Veritabanları' : 'Relational & Vector DBs'}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                {lang === 'tr' ? 'Çalışma Disiplini' : 'Work Ethic'}
              </span>
              <span className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-1 block">
                {lang === 'tr' ? 'Sürekli Öğrenme & Üretim' : 'Continuous Learning & Delivery'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
