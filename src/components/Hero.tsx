import React from 'react';
import { MessageSquare, Github, Linkedin, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { InteractiveTerminal } from './InteractiveTerminal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-tech-grid bg-radial-gradient overflow-hidden">
      {/* Background Decorative Tech Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici</span>
            </div>

            {/* Main Name & Hero Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 glow-text">{PROFILE_DATA.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                "{PROFILE_DATA.heroSubtitle}"
              </p>
            </div>

            {/* Short Authentic Tagline */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Web ve mobil uygulamalar geliştiriyor; kullanıcı ihtiyacından veri mimarisine kadar bir problemi baştan sona anlayan çalışan dijital ürünler tasarlıyorum.
            </p>

            {/* Developer Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block">Web & Mobil Geliştirme</span>
                  <span className="text-slate-500 font-mono">Flutter, Laravel, React</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block">Problem & Ürün Odaklı</span>
                  <span className="text-slate-500 font-mono">Uçtan Uca Mimari</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hizmetler & Süreç</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl transition-all"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Benimle İletişime Geç</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 hover:text-emerald-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  title="GitHub Profilim"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 hover:text-emerald-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  title="LinkedIn Profilim"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Terminal & Workspace Showcase */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Developer Workspace Header */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  Geliştirici Çalışma Alanı
                </span>
                <span className="text-emerald-400 font-semibold text-[11px]">CompEng Dev</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sadece kod değil; kullanıcı deneyimi, veri yapısı ve temiz mimariyi birlikte düşünerek çalışan ürünler geliştiriyorum.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Öğrenmeye Açık</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Gerçek Üretim</span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Component */}
            <InteractiveTerminal />

          </div>

        </div>
      </div>
    </section>
  );
};
