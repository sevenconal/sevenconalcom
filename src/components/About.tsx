import React from 'react';
import { Cpu, Database, Layers, Layout, BookOpen, CheckCircle2, User } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const About: React.FC = () => {
  const corePillars = [
    {
      title: 'Kullanıcı İhtiyacı',
      desc: 'Uygulamanın ne yapacağını önce kullanıcının gözünden anlama.',
      icon: Layout,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400'
    },
    {
      title: 'Veri & Veritabanı',
      desc: 'Bilginin nasıl tutulacağını ve modelleneciğini ilişkisel olarak tasarlama.',
      icon: Database,
      color: 'from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-400'
    },
    {
      title: 'Yazılım Mimarisi',
      desc: 'Uygulama bileşenlerinin ve backend mantığının akıcı çalışması.',
      icon: Layers,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400'
    },
    {
      title: 'Çalışan Ürün',
      desc: 'Tüm parçaları bir araya getirerek sorunsuz dijital ürün teslim etmek.',
      icon: Cpu,
      color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-300'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Mühendislik Vizyonu & Yaklaşım</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Bir Projeye <span className="text-emerald-400">Yalnızca Kod</span> Tarafından Bakmıyorum
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Bilgisayar Mühendisliği eğitimim ile edindiğim teorik temeli, sürekli pratik projeler geliştirerek çalışan dijital ürünlere dönüştürüyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Philosophy Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                <BookOpen className="w-4 h-4" />
                <span>Eğitim & Sürekli Gelişim</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                Teoriden Pratiğe: Dürüst ve İlerleme Odaklı Yolculuk
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Bilgisayar Mühendisliği lisans eğitimim; algoritmalar, veri yapıları, işletim sistemleri, veritabanı sistemleri ve yazılım mimarisi gibi alanlarda bana güçlü bir mühendislik temeli oluşturuyor.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Bu bilgileri yalnızca sınav kağıdında bırakmak yerine; web uygulamaları, mobil çözümler ve otomasyon araçları geliştirerek pratiğe döküyorum. Henüz yolun başındayım; ancak her geçen gün teknik altyapımı genişletmeye ve daha temiz kod yazmaya odaklanıyorum.
              </p>
            </div>

            {/* Quote Container */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <p className="text-sm italic text-slate-200 leading-relaxed">
                "{PROFILE_DATA.philosophy}"
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="font-semibold text-emerald-400">— Sevenç Önal</span>
                <span className="font-mono">Geliştirici Felsefesi</span>
              </div>
            </div>
          </div>

          {/* Core Product Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${pillar.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                      <span>{pillar.title}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education & Focus Areas Bar */}
        <div className="mt-12 glass-card p-6 rounded-3xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Lisans Eğitimi</span>
              <span className="text-base font-bold text-slate-200 mt-1 block">Bilgisayar Mühendisliği</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Ana Odak</span>
              <span className="text-base font-bold text-emerald-400 mt-1 block">Web & Mobil Uygulamalar</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Veri & Mimari</span>
              <span className="text-base font-bold text-teal-400 mt-1 block">İlişkisel Veritabanları</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Çalışma Disiplini</span>
              <span className="text-base font-bold text-cyan-400 mt-1 block">Sürekli Öğrenme & Üretim</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
