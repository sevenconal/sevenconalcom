import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { PROCESS_DATA } from '../data/process';
import { Code, Store, QrCode, Cpu, SearchCheck, MessageSquare, Compass, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceIconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-emerald-400" />,
    Store: <Store className="w-6 h-6 text-teal-400" />,
    QrCode: <QrCode className="w-6 h-6 text-cyan-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-300" />,
    SearchCheck: <SearchCheck className="w-6 h-6 text-teal-300" />,
  };

  const processIconMap: Record<string, React.ReactNode> = {
    MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-400" />,
    Compass: <Compass className="w-5 h-5 text-teal-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-400" />,
    Code: <Code className="w-5 h-5 text-emerald-300" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-300" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="services" className="py-24 relative bg-[#0b0f19] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SERVICES SECTION */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
              <span>Güvenilir & Odaklı Hizmetler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Neler Sunabilirim? <span className="text-teal-400">Çözüm Alanları</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
              Abartılı ajans vaatleri yerine; kişisel markalar, yerel işletmeler ve girişimler için gerçek ihtiyaca odaklanan pratik ve çalışan çözümler sunuyorum.
            </p>
          </div>

          {/* Services Grid (4 Cards Side-by-Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 w-fit">
                    {serviceIconMap[service.iconName]}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-400">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Teslim Edilecekler:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience Pill */}
                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-500 font-semibold">Uygunluk: </span>
                  <span>{service.suitableFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW PROCESS SECTION */}
        <div className="pt-12 border-t border-slate-800/60">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span>Şeffaf & Düzenli Süreç</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Benimle Çalışırsanız <span className="text-emerald-400">Süreç Nasıl İlerler?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
              İhtiyaç aşamasından teslimata kadar her adımı planlı, şeffaf ve soru işaretlerine yer bırakmayacak şekilde yürütüyorum.
            </p>
          </div>

          {/* 6-Step Visual Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {PROCESS_DATA.map((step) => (
              <div
                key={step.number}
                className="glass-card glass-card-hover p-6 rounded-3xl space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {processIconMap[step.iconName]}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-800/80 italic">
                  "{step.details}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
