import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Send, Github, Linkedin, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Sitesi / Mobil Uygulama Projesi',
    message: '',
    honeypot: '' // Spam prevention bot trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Bot detected

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Geçerli bir e-posta adresi giriniz.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Simulate clean form handling
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>İletişim & İş Birliği</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Bir Proje Hakkında <span className="text-emerald-400">Konuşalım</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Bir web sitesi, mobil uygulama veya dijital ürün fikriniz varsa detayları konuşabiliriz. Sorularınız ve iş birliği teklifleri için mesaj gönderebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Shortcuts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-7 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">Doğrudan İletişim</span>
                <h3 className="text-xl font-bold text-slate-100">Sevenç Önal İle Bağlantı Kurun</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proje fikirleri, teknik danışmanlık veya tanışmak için aşağıdaki kanalları kullanabilirsiniz.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-500 block">E-Posta Adresi</span>
                    <span className="text-xs font-bold text-slate-200 truncate block">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-emerald-400 bg-slate-800 hover:bg-slate-700/80 rounded-xl border border-slate-700/80 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                  Profesyonel Bağlantılar
                </span>

                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="text-xs font-bold text-slate-200 block">GitHub Profilim</span>
                      <span className="text-[11px] text-slate-500 font-mono">github.com/sevenconal</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-400 font-mono">↗</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="text-xs font-bold text-slate-200 block">LinkedIn Profilim</span>
                      <span className="text-[11px] text-slate-500 font-mono">linkedin.com/in/sevenc-onal</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-400 font-mono">↗</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Mesajınız Alındı!</h3>
                  <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                    İletişime geçtiğiniz için teşekkür ederim. Gönderdiğiniz detayları inceleyip en kısa sürede dönüş yapacağım.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Web Sitesi / Mobil Uygulama Projesi', message: '', honeypot: '' });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors mt-4"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden from humans) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Adınız Soyadınız <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ozan Onal"
                        className="w-full bg-slate-950 text-xs text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        E-Posta Adresiniz <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Örn: ozan@example.com"
                        className="w-full bg-slate-950 text-xs text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Konu / Proje Tipi
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-slate-100 px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Web Sitesi / Mobil Uygulama Projesi">Web Sitesi / Mobil Uygulama Projesi</option>
                      <option value="QR Menü Sistemi">Restoran / Kafe QR Menü Sistemi</option>
                      <option value="Özel Otomasyon / Python Script">Özel Otomasyon / Python Script</option>
                      <option value="Mevcut Proje İnceleme (UX/Teknik)">Mevcut Proje İnceleme (UX/Teknik)</option>
                      <option value="Genel Tanışma & Soru">Genel Tanışma & Soru</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Mesajınız <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Projeniz veya fikriniz hakkında kısaca bilgi verin..."
                      className="w-full bg-slate-950 text-xs text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    Spam koruması aktif. Bilgileriniz gizli tutulacaktır.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
