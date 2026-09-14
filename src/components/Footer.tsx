import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-100 text-lg tracking-tight">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici. Fikirleri kullanıcıların gerçekten kullanabileceği kaliteli dijital ürünlere dönüştürüyorum.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-200 uppercase tracking-wider block">Navigasyon</span>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#about" className="hover:text-emerald-400 transition-colors">Hakkımda & Vizyon</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Teknolojiler</a>
              <a href="#services" className="hover:text-emerald-400 transition-colors">Hizmetler & Süreç</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">İletişim</a>
            </div>
          </div>

          {/* Social & Top Button */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-slate-200 uppercase tracking-wider block">Bağlantılar</span>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-emerald-400 rounded-xl transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-emerald-400 rounded-xl transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 rounded-xl transition-all ml-auto"
                title="Yukarı Çık"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <p>© {new Date().getFullYear()} Sevenç Önal. Tüm hakları saklıdır.</p>
          <p className="text-[11px]">Tasarım & Geliştirme: <span className="text-slate-400">Sevenç Önal</span></p>
        </div>

      </div>
    </footer>
  );
};
