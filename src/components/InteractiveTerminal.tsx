import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const InteractiveTerminal: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'bio' | 'stack' | 'cli'>('bio');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset initial history based on active language
    setHistory([
      {
        command: 'systeminfo --user "Sevenç Önal"',
        output: (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-emerald-400 font-semibold">✓ {t.hero.terminalLoaded}</p>
            <p>• <span className="text-slate-400">{t.hero.terminalRole}:</span> {t.hero.terminalRoleVal}</p>
            <p>• <span className="text-slate-400">{t.hero.terminalFocus}:</span> {t.hero.terminalFocusVal}</p>
            <p>• <span className="text-slate-400">{t.hero.terminalMindset}:</span> {t.hero.terminalMindsetVal}</p>
            <p className="text-slate-500 pt-1">{t.hero.terminalRunHelp}</p>
          </div>
        ),
      },
    ]);
  }, [lang]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, activeTab]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-teal-400 font-semibold">{lang === 'tr' ? 'Kullanılabilir Komutlar:' : 'Available Commands:'}</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">bio</span> — {lang === 'tr' ? 'Hakkımda & Mühendislik Vizyonu' : 'About & Engineering Vision'}</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">stack</span> — {lang === 'tr' ? 'Kullandığım Diller & Teknolojiler' : 'Programming Languages & Tech Stack'}</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">projects</span> — {lang === 'tr' ? 'Öne Çıkan Gerçek Projeler' : 'Featured Real Projects'}</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">contact</span> — {lang === 'tr' ? 'İletişim & Sosyal Medya Bağlantıları' : 'Contact & Social Profiles'}</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">clear</span> — {lang === 'tr' ? 'Ekranı Temizler' : 'Clears the console screen'}</p>
          </div>
        );
        break;
      case 'bio':
      case 'about':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">{PROFILE_DATA.name} — {lang === 'tr' ? 'Geliştirici Profili' : 'Developer Profile'}</p>
            <p>{lang === 'tr' ? PROFILE_DATA.shortBio : 'Computer engineering student focusing on software architecture, clean code, responsive user experiences, and pragmatic digital solutions for real-world problems.'}</p>
          </div>
        );
        break;
      case 'stack':
      case 'skills':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">{lang === 'tr' ? 'Öne Çıkan Yetkinlikler:' : 'Core Competencies:'}</p>
            <p>• Languages: Python, Dart, TypeScript, C/C++</p>
            <p>• Web & Mobile: React, Flutter, Laravel, Tailwind CSS</p>
            <p>• Cloud & DB: Supabase, SQLite, SQL, Pinecone</p>
            <p>• Tooling: Git, GitHub, VS Code, Linux</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">{lang === 'tr' ? 'Öne Çıkan Projeler:' : 'Featured Projects:'}</p>
            <p>1. <span className="text-slate-100">QR Menu & Business Platform</span> (Laravel, JS, SQLite)</p>
            <p>2. <span className="text-slate-100">Personal Brand Web Portfolio</span> (React, TypeScript, Tailwind)</p>
            <p>3. <span className="text-slate-100">Flutter Focus & Task Mobile App</span> (Flutter, SQLite)</p>
            <p>4. <span className="text-slate-100">Python Automation & Data Processing</span> (Python, SQLAlchemy)</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">{lang === 'tr' ? 'İletişim Kanalları:' : 'Contact Channels:'}</p>
            <p>• GitHub: <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">github.com/sevenconal</a></p>
            <p>• LinkedIn: <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">sevenc-onal</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = (
          <p className="text-xs text-rose-400">
            {lang === 'tr'
              ? `Komut bulunamadı: '${cmd}'. Kullanılabilir komutları görmek için help yazın.`
              : `Command not found: '${cmd}'. Type 'help' to see available commands.`}
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d1322] border border-slate-700/80 dark:border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
      {/* Terminal Header Bar */}
      <div className="bg-[#131b2e] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <TerminalIcon className="w-4 h-4 text-emerald-400 ml-1" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide">
            sevenc-workspace ~ zsh
          </span>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('bio')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTab === 'bio' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            bio.sh
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTab === 'stack' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            stack.json
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTab === 'cli' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            interactive.cli
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#0b0f1a]">
        {activeTab === 'bio' && (
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'tr' ? 'Teknik Mimari & Bulut Altyapısı' : 'Technical Architecture & Cloud Stack'}</span>
            </div>
            <p className="leading-relaxed text-slate-300 border-l-2 border-emerald-500/40 pl-3 font-mono text-[11.5px]">
              {lang === 'tr'
                ? '"Supabase ile PostgreSQL RLS güvenliği, Clerk ile sorunsuz kimlik doğrulama, Pinecone ile vektör arama ve Sentry ile hata takibi kurarak uçtan uca modern web/mobil altyapıları inşa ediyorum."'
                : '"Architecting resilient web/mobile backends with Supabase Postgres RLS, frictionless Clerk auth, Pinecone vector search, and Sentry proactive telemetry."'}
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="text-emerald-400 font-bold block mb-0.5">{lang === 'tr' ? 'Bulut & DB' : 'Cloud & Database'}</span>
                <span className="text-slate-400">Supabase, Pinecone Vector DB, SQLite</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="text-teal-400 font-bold block mb-0.5">{lang === 'tr' ? 'Güvenlik & İzleme' : 'Security & Monitoring'}</span>
                <span className="text-slate-400">Clerk Auth, Sentry Error Tracking</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-2 text-xs">
            <div className="text-slate-400 font-mono text-[11px]">
              <span className="text-purple-400">const</span> developerStack = {'{'}
            </div>
            <div className="pl-4 space-y-1 text-slate-300 text-[12px]">
              <p><span className="text-teal-400">"languages"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Dart"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"C/C++"</span>],</p>
              <p><span className="text-teal-400">"web_mobile"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Flutter"</span>, <span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"Tailwind"</span>],</p>
              <p><span className="text-teal-400">"cloud_db"</span>: [<span className="text-emerald-300">"Supabase"</span>, <span className="text-emerald-300">"Pinecone Vector DB"</span>, <span className="text-emerald-300">"SQLite"</span>],</p>
              <p><span className="text-teal-400">"auth_infra"</span>: [<span className="text-emerald-300">"Clerk"</span>, <span className="text-emerald-300">"Sentry"</span>, <span className="text-emerald-300">"AI Tools"</span>]</p>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">{'};'}</div>
          </div>
        )}

        {activeTab === 'cli' && (
          <div className="space-y-3">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400">sevenc@terminal:~$</span>
                  <span className="text-slate-100">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Quick Action Pills */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {['help', 'bio', 'stack', 'projects', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className={`px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors ${
                    cmd === 'clear' ? 'text-rose-400 hover:text-rose-300' : ''
                  }`}
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* CLI Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="flex items-center gap-2 pt-1"
            >
              <span className="text-emerald-400 font-bold text-xs">sevenc@terminal:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={lang === 'tr' ? 'Komut girin...' : 'Type a command...'}
                className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-600 focus:outline-none font-mono"
              />
              <button type="submit" className="text-emerald-400 hover:text-emerald-300">
                <Play className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="bg-[#111726] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Status: Ready & Responsive</span>
        </div>
        <span className="font-mono text-slate-500">UTF-8 | LF</span>
      </div>
    </div>
  );
};
