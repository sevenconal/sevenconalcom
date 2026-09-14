import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programlama Dilleri',
    iconName: 'Code2',
    skills: [
      {
        name: 'Python',
        level: 'İyi',
        description: 'Veri işleme, otomasyon scriptleri, backend mantığı ve algoritma geliştirme.',
        tag: 'Gelişmiş Mantık'
      },
      {
        name: 'C',
        level: 'Orta',
        description: 'Bellek yönetimi, işaretçiler (pointers) ve bilgisayar bilimleri temel prensipleri.',
        tag: 'Temel Altyapı'
      },
      {
        name: 'C++',
        level: 'Orta',
        description: 'Nesne yönelimli programlama (OOP), veri yapıları ve performans odaklı mantık.',
        tag: 'OOP & Veri Yapıları'
      },
      {
        name: 'Dart',
        level: 'İyi',
        description: 'Flutter ekosistemi için asenkron programlama, nesne odaklı mimari.',
        tag: 'Mobil Mimari'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Teknolojileri',
    iconName: 'Globe',
    skills: [
      {
        name: 'HTML5 & CSS3',
        level: 'İyi',
        description: 'Semantik HTML, modern CSS düzenleri (Flexbox, Grid), responsive tasarım.',
        tag: 'Arayüz Standartları'
      },
      {
        name: 'JavaScript',
        level: 'İyi',
        description: 'DOM manipülasyonu, ES6+ standartları, asenkron işlemler (Promises/Fetch).',
        tag: 'Dinamik Mantık'
      },
      {
        name: 'PHP',
        level: 'Orta',
        description: 'Sunucu taraflı kodlama, form işleme ve dinamik sayfa oluşturma.',
        tag: 'Backend Mantığı'
      },
      {
        name: 'Laravel',
        level: 'Orta',
        description: 'MVC mimarisi, Eloquent ORM, RESTful API uç noktaları ve routing yapısı.',
        tag: 'Web Framework'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobil Geliştirme',
    iconName: 'Smartphone',
    skills: [
      {
        name: 'Flutter',
        level: 'İyi',
        description: 'Çapraz platform (iOS/Android) kullanıcı arayüzleri, durum yönetimi (State Management).',
        tag: 'Cross-Platform UI'
      },
      {
        name: 'Dart SDK',
        level: 'İyi',
        description: 'Mobil uygulama iş mantığı, reaktif programlama yapıları.',
        tag: 'Mobil Core'
      }
    ]
  },
  {
    id: 'database',
    title: 'Veritabanı & ORM',
    iconName: 'Database',
    skills: [
      {
        name: 'SQLite',
        level: 'İyi',
        description: 'Yerel cihaz veritabanı depolama, mobil & masaüstü gömülü veritabanı işlemleri.',
        tag: 'Gömülü Depolama'
      },
      {
        name: 'SQL (Relational DB)',
        level: 'Orta',
        description: 'İlişkisel veritabanı tasarımı, sorgu oluşturma, tablolama ve normalizasyon.',
        tag: 'İlişkisel Mimari'
      },
      {
        name: 'SQLAlchemy',
        level: 'Orta',
        description: 'Python uygulamalarında nesne-ilişkisel eşleme (ORM) ve veritabanı yönetimi.',
        tag: 'Python ORM'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Araçlar & Metodoloji',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'İyi',
        description: 'Sürüm kontrolü, dal yönetimi (branching) ve düzenli projelendirme.',
        tag: 'Versiyon Kontrol'
      },
      {
        name: 'VS Code',
        level: 'İyi',
        description: 'Özelleştirilmiş geliştirme ortamı, debugging ve hızlı proje navigasyonu.',
        tag: 'IDE Environment'
      },
      {
        name: 'AI-Assisted Tools',
        level: 'Pratik Uygulamalı',
        description: 'Geliştirme hızını artıran yapay zeka araçları, kod optimizasyonu ve refactoring desteği.',
        tag: 'Modern Verimlilik'
      }
    ]
  }
];
