import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'stack' | 'cli'>('bio');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'systeminfo --user "Sevenç Önal"',
      output: (
        <div className="space-y-1 text-slate-300 text-xs">
          <p className="text-emerald-400 font-semibold">✓ Developer Profile Loaded Successfully</p>
          <p>• <span className="text-slate-400">Role:</span> Bilgisayar Mühendisliği Öğrencisi & Developer</p>
          <p>• <span className="text-slate-400">Focus:</span> Web & Mobil Uygulamalar, Yazılım Mimarisi</p>
          <p>• <span className="text-slate-400">Mindset:</span> Problem Odaklı • Uçtan Uca Tasarım & Kodlama</p>
          <p className="text-slate-500 pt-1">İpucu: Komut satırına <span className="text-emerald-400">help</span> yazabilir veya aşağıdaki hızlı butonlara tıklayabilirsiniz.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

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
            <p className="text-teal-400 font-semibold">Kullanılabilir Komutlar:</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">bio</span> — Hakkımda & Mühendislik Vizyonu</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">stack</span> — Kullandığım Diller & Teknolojiler</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">projects</span> — Öne Çıkan Gerçek Projeler</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">contact</span> — İletişim & Sosyal Medya Bağlantıları</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">clear</span> — Ekranı Temizler</p>
          </div>
        );
        break;
      case 'bio':
      case 'about':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Sevenç Önal — Geliştirici Profili</p>
            <p>{PROFILE_DATA.shortBio}</p>
          </div>
        );
        break;
      case 'stack':
      case 'skills':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Öne Çıkan Yetkinlikler:</p>
            <p>• Programming: Python, C, C++, Dart</p>
            <p>• Web: HTML5, CSS3, JavaScript, PHP, Laravel</p>
            <p>• Mobile: Flutter, Dart</p>
            <p>• Database: SQLite, SQL, SQLAlchemy</p>
            <p>• Tools: Git, GitHub, VS Code, AI-assisted tools</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Gerçek Projelerim:</p>
            <p>1. <span className="text-slate-100">QR Menü & İşletme Kataloğu</span> (Laravel, JS, SQLite)</p>
            <p>2. <span className="text-slate-100">Kişisel Marka Web Platformu</span> (React, TypeScript, Tailwind)</p>
            <p>3. <span className="text-slate-100">Flutter Odak & Task Mobil Uygulaması</span> (Flutter, SQLite)</p>
            <p>4. <span className="text-slate-100">Python Otomasyon & Veri Scripti</span> (Python, SQLAlchemy)</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">İletişim Kanalları:</p>
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
            Komut bulunamadı: '{cmd}'. Kullanılabilir komutları görmek için <span className="text-emerald-400">help</span> yazın.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d1322] border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
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
              <span>Geliştirici Felsefesi & Yaklaşımı</span>
            </div>
            <p className="leading-relaxed text-slate-300 border-l-2 border-emerald-500/40 pl-3">
              "{PROFILE_DATA.philosophy}"
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="text-emerald-400 font-bold block mb-0.5">Mühendislik Temeli</span>
                <span className="text-slate-400">Algoritmalar, Veri Yapıları, İşletim Sistemleri, Veritabanları</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="text-teal-400 font-bold block mb-0.5">Pratik Uygulama</span>
                <span className="text-slate-400">Web & Mobil Projeler, Veritabanı Mimarisi, Temiz Kod</span>
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
              <p><span className="text-teal-400">"languages"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C"</span>, <span className="text-emerald-300">"C++"</span>, <span className="text-emerald-300">"Dart"</span>],</p>
              <p><span className="text-teal-400">"web"</span>: [<span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"CSS3"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"PHP"</span>, <span className="text-emerald-300">"Laravel"</span>],</p>
              <p><span className="text-teal-400">"mobile"</span>: [<span className="text-emerald-300">"Flutter"</span>, <span className="text-emerald-300">"Dart SDK"</span>],</p>
              <p><span className="text-teal-400">"database"</span>: [<span className="text-emerald-300">"SQLite"</span>, <span className="text-emerald-300">"SQL"</span>, <span className="text-emerald-300">"SQLAlchemy"</span>],</p>
              <p><span className="text-teal-400">"tools"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"GitHub"</span>, <span className="text-emerald-300">"VS Code"</span>, <span className="text-emerald-300">"AI Tools"</span>]</p>
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
              <button
                onClick={() => handleCommand('help')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
              >
                help
              </button>
              <button
                onClick={() => handleCommand('bio')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
              >
                bio
              </button>
              <button
                onClick={() => handleCommand('stack')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
              >
                stack
              </button>
              <button
                onClick={() => handleCommand('projects')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
              >
                projects
              </button>
              <button
                onClick={() => handleCommand('contact')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
              >
                contact
              </button>
              <button
                onClick={() => handleCommand('clear')}
                className="px-2 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-rose-400/80 rounded border border-slate-800 transition-colors"
              >
                clear
              </button>
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
                placeholder="Komut girin..."
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
