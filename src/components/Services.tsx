import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { PROCESS_DATA } from '../data/process';
import { Code, Store, Cpu, SearchCheck, MessageSquare, Compass, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Service, ProcessStep } from '../types';

export const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  const serviceIconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    Store: <Store className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />,
    SearchCheck: <SearchCheck className="w-6 h-6 text-teal-600 dark:text-teal-300" />,
  };

  const processIconMap: Record<string, React.ReactNode> = {
    MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    Compass: <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    Code: <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-300" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  };

  const servicesEn: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      tagline: 'Personal Brands & Portfolios',
      description: 'Bringing your ideas or brand into the digital sphere with ultra-fast, mobile-friendly, and clean-architected websites.',
      iconName: 'Code',
      deliverables: [
        'Responsive Mobile-First UI',
        'High Performance & Speedy Architecture',
        'SEO-Optimized Semantic Baseline',
        'Clean & Maintainable Code'
      ],
      suitableFor: 'Personal brands, developers, creators, and professionals needing an impactful portfolio.'
    },
    {
      id: 'business-qr-websites',
      title: 'Business & QR Menus',
      tagline: 'Cafes, Restaurants & Local Businesses',
      description: 'Mobile-first showcase websites and digital QR menu systems designed to deliver smooth in-person customer experiences.',
      iconName: 'Store',
      deliverables: [
        'Services, Products & Menu Showcase',
        'Fast QR Code Scan & Access',
        'Location, Contact & Maps Integration',
        'Snappy Mobile-Optimized Interface'
      ],
      suitableFor: 'Restaurants, cafes, boutique shops, and local business owners looking for digital presence.'
    },
    {
      id: 'custom-applications',
      title: 'Custom Apps & Automations',
      tagline: 'Tailored Tools & Python Scripts',
      description: 'Purpose-built web mini-tools and automated Python scripts to eliminate repetitive tasks and streamline workflows.',
      iconName: 'Cpu',
      deliverables: [
        'Data Parsing & Format Transformations',
        'Custom Lightweight Web Tools',
        'Python Scripting & Task Automation',
        'Intuitive Minimalist Interfaces'
      ],
      suitableFor: 'Founders, teams, and individuals with specific data processing or automated workflow needs.'
    },
    {
      id: 'project-improvement',
      title: 'Code & UX Audits',
      tagline: 'Refinement & Architecture Advice',
      description: 'In-depth review of existing projects to provide actionable UX enhancements, performance boosts, and code quality advice.',
      iconName: 'SearchCheck',
      deliverables: [
        'User Experience (UX) Review',
        'Mobile Responsiveness Audit',
        'Code Quality & Speed Recommendations',
        'Future Development Roadmap'
      ],
      suitableFor: 'Anyone with an existing website or prototype looking to modernize and upgrade.'
    }
  ];

  const processEn: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Needs',
      description: 'Clarifying problem statements, target audiences, and technical requirements in detail.',
      details: 'Defining what needs to be solved prevents building the wrong product.',
      iconName: 'MessageSquare'
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'Structuring schemas, technology choices, and project milestones into a clear timeline.',
      details: 'Database models, view hierarchies, and delivery schedules are agreed upon.',
      iconName: 'Compass'
    },
    {
      number: '03',
      title: 'Interface Design',
      description: 'Designing a clean, technical, high-legibility interface with modern aesthetics.',
      details: 'Mobile responsiveness and ergonomics are prioritized throughout.',
      iconName: 'Layout'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Writing maintainable, modular, and performant code following industry best practices.',
      details: 'Step-by-step modular programming with continuous linting and testing.',
      iconName: 'Code'
    },
    {
      number: '05',
      title: 'Testing & QA',
      description: 'Verifying seamless performance across multiple devices, viewports, and edge cases.',
      details: 'Mobile responsiveness, links, forms, and buttons are tested rigorously.',
      iconName: 'ShieldCheck'
    },
    {
      number: '06',
      title: 'Deployment & Delivery',
      description: 'Launching the production-ready product or delivering complete documented source code.',
      details: 'Delivered with comprehensive documentation and clear handover guides.',
      iconName: 'CheckCircle2'
    }
  ];

  const activeServices = lang === 'en' ? servicesEn : SERVICES_DATA;
  const activeProcess = lang === 'en' ? processEn : PROCESS_DATA;

  return (
    <section id="services" className="py-24 relative bg-slate-100/50 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SERVICES SECTION */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-mono">
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {t.services.titleMain} <span className="text-teal-600 dark:text-teal-400">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid (4 Cards Side-by-Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeServices.map((service) => (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit shadow-xs">
                    {serviceIconMap[service.iconName]}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      {lang === 'tr' ? 'Teslim Edilecekler:' : 'Deliverables:'}
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience Pill */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="text-slate-500 font-semibold">{lang === 'tr' ? 'Uygunluk: ' : 'Best for: '}</span>
                  <span>{service.suitableFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW PROCESS SECTION */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800/60">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span>{t.services.processBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {t.services.processTitleMain} <span className="text-emerald-600 dark:text-emerald-400">{t.services.processTitleHighlight}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
              {t.services.processSubtitle}
            </p>
          </div>

          {/* 6-Step Visual Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {activeProcess.map((step) => (
              <div
                key={step.number}
                className="glass-card glass-card-hover p-6 rounded-3xl space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    {processIconMap[step.iconName]}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800/80 italic">
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
