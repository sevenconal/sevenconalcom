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
        name: 'JavaScript & TS',
        level: 'İyi',
        description: 'DOM manipülasyonu, ES6+ standartları, tip güvenli TypeScript mimarisi.',
        tag: 'Dinamik Mantık'
      },
      {
        name: 'PHP & Laravel',
        level: 'Orta',
        description: 'MVC mimarisi, Eloquent ORM, RESTful API uç noktaları ve sunucu mantığı.',
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
    title: 'Veritabanı & Bulut',
    iconName: 'Database',
    skills: [
      {
        name: 'Supabase',
        level: 'İyi',
        description: 'PostgreSQL tabanlı gerçek zamanlı veritabanı, Row Level Security ve BaaS mimarisi.',
        tag: 'Modern Backend'
      },
      {
        name: 'Pinecone',
        level: 'Pratik Uygulamalı',
        description: 'Yapay zeka ve LLM uygulamaları için vektör veritabanı (Vector DB) indeksleme.',
        tag: 'Vector DB & AI'
      },
      {
        name: 'SQLite & SQL',
        level: 'İyi',
        description: 'İlişkisel veritabanı tasarımı, gömülü depolama ve SQLAlchemy ORM.',
        tag: 'İlişkisel Depolama'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Altyapı, Auth & Araçlar',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Clerk Auth',
        level: 'İyi',
        description: 'Modern kullanıcı kimlik doğrulama, oturum yönetimi ve OAuth entegrasyonu.',
        tag: 'Authentication'
      },
      {
        name: 'Sentry',
        level: 'Orta',
        description: 'Gerçek zamanlı performans izleme, hata takibi (error tracking) ve log analizi.',
        tag: 'Monitoring'
      },
      {
        name: 'Git & AI Tools',
        level: 'İyi',
        description: 'GitHub versiyon kontrolü, VS Code ve verimlilik artıran yapay zeka araçları.',
        tag: 'Developer Flow'
      }
    ]
  }
];
