import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Send, Github, Linkedin, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web / Mobile App Project',
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
      setErrorMsg(t.contact.errorRequired);
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg(t.contact.errorEmail);
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.contact.titleMain} <span className="text-emerald-600 dark:text-emerald-400">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Shortcuts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-7 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  {t.contact.directTitle}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {lang === 'tr' ? 'Sevenç Önal İle Bağlantı Kurun' : 'Connect with Sevenç Önal'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {lang === 'tr'
                    ? 'Proje fikirleri, teknik danışmanlık veya tanışmak için aşağıdaki kanalları kullanabilirsiniz.'
                    : 'Feel free to reach out directly for project collaborations, technical inquiries, or general networking.'}
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-500 block">
                      {lang === 'tr' ? 'E-Posta Adresi' : 'Email Address'}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200 dark:border-slate-700/80 transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span>{t.contact.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                  {lang === 'tr' ? 'Profesyonel Bağlantılar' : 'Professional Links'}
                </span>

                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">GitHub</span>
                      <span className="text-[11px] text-slate-500 font-mono">github.com/sevenconal</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-mono">↗</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">LinkedIn</span>
                      <span className="text-[11px] text-slate-500 font-mono">linkedin.com/in/sevenc-onal</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-mono">↗</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-500">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t.contact.successTitle}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Web / Mobile App Project', message: '', honeypot: '' });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors mt-4 shadow-sm"
                  >
                    {t.contact.sendAnother}
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
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                        {t.contact.nameLabel} <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                        {t.contact.emailLabel} <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                      {t.contact.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-slate-100 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                    >
                      {t.contact.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                      {t.contact.messageLabel} <span className="text-emerald-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors resize-none shadow-xs"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendButton}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    {lang === 'tr'
                      ? 'Spam koruması aktif. Bilgileriniz gizli tutulacaktır.'
                      : 'Protected against spam. Your inquiry is kept strictly confidential.'}
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
