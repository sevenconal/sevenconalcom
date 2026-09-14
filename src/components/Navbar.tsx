import React, { useState, useEffect } from 'react';
import { Terminal, Search, Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Teknolojiler', href: '#skills' },
    { name: 'Hizmetler & Süreç', href: '#services' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:scale-105 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 tracking-tight text-lg group-hover:text-emerald-400 transition-colors">
                {PROFILE_DATA.name}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <span className="text-xs text-slate-400 font-mono block">
              CompEng Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Command Palette & Contact Button) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/50 rounded-lg transition-all"
            title="Arama ve Hızlı Komutlar (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span>Arama</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-300 border border-slate-700 rounded shadow-sm">
              Ctrl K
            </kbd>
          </button>

          {/* Social Shortcuts */}
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>İletişim</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-emerald-400 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 px-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow"
            >
              Benimle İletişime Geç
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
