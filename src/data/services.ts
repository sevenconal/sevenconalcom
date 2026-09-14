import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-development',
    title: 'Web Geliştirme',
    tagline: 'Kişisel Marka & Portfolyo Siteleri',
    description: 'Fikrinizi veya kişisel markanızı hızlı, mobil uyumlu ve temiz kod yapısıyla web ortamına taşıyorum.',
    iconName: 'Code',
    deliverables: [
      'Responsive (Mobil Uyumlu) Arayüz',
      'Hızlı Yüklenen Sayfa Mimarisi',
      'SEO Uyumlu Temel Altyapı',
      'Temiz ve Düzenli Kod Yapısı'
    ],
    suitableFor: 'Kişisel markalar, geliştiriciler ve portfolyo ihtiyacı olan bireyler.'
  },
  {
    id: 'business-qr-websites',
    title: 'İşletme & QR Menü Siteleri',
    tagline: 'Kafeler, Restoranlar ve Yerel İşletmeler',
    description: 'Kafeler, restoranlar ve yerel işletmeler için mobil uyumlu tanıtım sayfaları ve QR kodlu dijital menü sistemleri.',
    iconName: 'Store',
    deliverables: [
      'Hizmet, Ürün & Menü Tanıtım Sayfaları',
      'QR Kod Taramasıyla Hızlı Menü Erişimi',
      'İletişim, Konum & Harita Entegrasyonu',
      'Mobil Öncelikli Hızlı Arayüz'
    ],
    suitableFor: 'Restoranlar, kafeler, butik dükkanlar ve dijital menü isteyen işletmeler.'
  },
  {
    id: 'custom-applications',
    title: 'Özel Uygulama & Otomasyon',
    tagline: 'İhtiyaca Özel Küçük Otomasyonlar',
    description: 'Tekrarlayan işlerinizi kolaylaştıracak küçük web araçları ve Python script otomasyonları.',
    iconName: 'Cpu',
    deliverables: [
      'Veri İşleme ve Format Dönüştürme',
      'İhtiyaca Özel Küçük Web Araçları',
      'Python Tabanlı Script Çözümleri',
      'Kullanımı Kolay Arayüz / Komut Mantığı'
    ],
    suitableFor: 'Belirli veri veya otomasyon ihtiyacı olan girişimci ve geliştiriciler.'
  },
  {
    id: 'project-improvement',
    title: 'Mevcut Proje İnceleme',
    tagline: 'UX ve Teknik Yapı İyileştirme',
    description: 'Mevcut küçük projenizi inceleyip kullanıcı deneyimi ve teknik yapı konusunda pratik iyileştirme tavsiyeleri sunuyorum.',
    iconName: 'SearchCheck',
    deliverables: [
      'Kullanıcı Deneyimi (UX) İncelemesi',
      'Mobil Uyumluluk Kontrolü',
      'Kod Yapısı ve Performans Önerileri',
      'Geliştirme Yol Haritası'
    ],
    suitableFor: 'Mevcut web sitesini veya projesini yenilemek/geliştirmek isteyenler.'
  }
];
