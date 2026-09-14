import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'qr-menu-system',
    title: 'Mobil QR Menü & İşletme Kataloğu',
    subtitle: 'Restoran ve Kafeler İçin Modern Dijital Menü Çözümü',
    category: 'web',
    summary: 'Müşterilerin masalarındaki QR kodu taratarak kafe veya restoran ürünlerini anında mobil uyumlu ve estetik bir arayüzde incelemesini sağlayan dinamik menü sistemi.',
    problem: 'Fiziksel menülerin sık sık yıpranması, ürün fiyat güncellemelerinin yüksek baskı maliyeti yaratması ve müşterilerin içerik/alerjen detaylarına kolay erişememesi.',
    solution: 'Mobil cihaz öncelikli (mobile-first) olarak tasarlanan, kategorilendirilmiş hızlı arama ve görsel ürün detayları sunan hafif ve güvenilir bir web çözümü geliştirildi.',
    techStack: ['Laravel', 'PHP', 'JavaScript', 'HTML5/CSS3', 'SQLite'],
    features: [
      'Anlık ürün arama ve kategori bazlı dinamik filtreleme',
      'Alerjen ve detaylı içerik bilgilendirme pencereleri',
      'Mobil ekran genişliklerine tam uyumlu responsive tasarım',
      'Hızlı yüklenen ürün görselleri ve optimize verilere erişim'
    ],
    architectureHighlights: [
      'SQLite veritabanı ile düşük kaynak kullanımı ve yüksek yanıt hızı',
      'Laravel Eloquent ORM kullanarak temiz ilişkisel veri yönetimi',
      'JavaScript Fetch API ile sayfayı yenilemeden dinamik içerik yükleme'
    ],
    githubUrl: 'https://github.com/sevenconal',
    featured: true,
    date: '2024'
  },
  {
    id: 'personal-brand-platform',
    title: 'Kişisel Marka & Mühendislik Portfolyosu',
    subtitle: 'Teknik Altyapı Odaklı İnteraktif Web Platformu',
    category: 'web',
    summary: 'Bilgisayar mühendisliği öğrencilik sürecimi, gerçek projelerimi ve problem çözme yaklaşımımı dürüstçe sunan modern web sitesi.',
    problem: 'Pulsuz hazır şablonların jenerik ve sahte deneyimlerle dolu görünmesi; geliştiricinin mühendislik disiplinini doğru yansıtamaması.',
    solution: 'React ve TypeScript mimarisi üzerinde, interaktif terminal, komut paleti ve veri odaklı case study sistemine sahip özel bir kişisel marka platformu inşa edildi.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    features: [
      'İnteraktif geliştirici terminali ve klavye kısayolu (Ctrl+K)',
      'Detaylı proje inceleme (Case Study) modalları',
      'Performans odaklı karanlık tema estetiği ve glassmorphism detaylar',
      'Tam SEO uyumluluğu (Open Graph, JSON-LD Schema.org)'
    ],
    architectureHighlights: [
      'Bileşen tabanlı (Component-driven) modüler frontend mimarisi',
      'Tip güvenliği sağlayan TypeScript arayüz tanımları',
      'Tekrarlanabilir ve sürdürülebilir data-driven proje veri yapısı'
    ],
    githubUrl: 'https://github.com/sevenconal',
    featured: true,
    date: '2024'
  },
  {
    id: 'flutter-task-focus-app',
    title: 'Kişisel Odak & Görev Takip Uygulaması',
    subtitle: 'Flutter İle Çapraz Platform Mobil Çalışma Asistanı',
    category: 'mobile',
    summary: 'Geliştiricilerin ve öğrencilerin günlük ders, proje ve kodlama sürelerini takip edebileceği, Pomodoro odaklı mobil uygulama.',
    problem: 'Karmaşık proje yönetim uygulamalarının sadece kişisel çalışma takibi yapmak isteyen geliştiriciler için kafa karıştırıcı olması.',
    solution: 'Sade kullanıcı arayüzüne sahip, yerel SQLite veritabanı sayesinde tamamen internet bağımsız çalışan minimalist bir Flutter mobil uygulaması tasarlandı.',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    features: [
      'Pomodoro çalışma zamanlayıcısı ve mola uyarıları',
      'Kategori ve projeye göre zaman analizi grafikleri',
      'Çevrimdışı (Offline-first) çalışma garantisi',
      'Mobil cihazlarda akıcı 60 FPS performans'
    ],
    architectureHighlights: [
      'Provider entegrasyonu ile reaktif durum yönetimi (State Management)',
      'SQLite yerel veritabanı tabloları ile güvenli veri saklama',
      'Temiz mimari katmanlaşması (UI -> Controller -> Repository)'
    ],
    githubUrl: 'https://github.com/sevenconal',
    featured: true,
    date: '2024'
  },
  {
    id: 'python-data-automation',
    title: 'Veri Dönüştürme & Otomasyon Aracı',
    subtitle: 'Python & SQLAlchemy Tabanlı Veri İşleme Scripti',
    category: 'automation',
    summary: 'Farklı kaynaklardan gelen veri kümelerini temizleyen, doğrulayan ve ilişkisel veritabanına aktaran Python otomasyon yazılımı.',
    problem: 'Elle veri aktarımının ve format uyuşmazlıklarının zaman kaybına ve hatalı kayıtların oluşmasına yol açması.',
    solution: 'Gelen JSON/CSV dosyalarını otomatik ayrıştıran, veritabanı kurallarına göre süzüp doğrulayan ve raporlayan bir Python scripti oluşturuldu.',
    techStack: ['Python', 'SQLAlchemy', 'SQL', 'SQLite'],
    features: [
      'Otomatik dosya izleme ve format dönüştürme',
      'Hatalı satırları tespit eden ve loglayan doğrulama mekanizması',
      'Konsol üzerinden anlık ilerleme durumu göstergesi',
      'İlişkisel veritabanına toplu (bulk) veri ekleme'
    ],
    architectureHighlights: [
      'SQLAlchemy ORM ile veritabanı soyutlama ve SQL sorgu güvenliği',
      'Modüler Python fonksiyon yapısı ve hata yakalama (try/except)',
      'Algoritma karmaşıklığı gözetilerek optimize edilmiş döngüler'
    ],
    githubUrl: 'https://github.com/sevenconal',
    featured: false,
    date: '2023'
  }
];
