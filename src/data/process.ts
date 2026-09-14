import { ProcessStep } from '../types';

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'İhtiyacı Anlama',
    description: 'Projenin veya problemin hedeflerini, kullanılacak ortamı ve hedef kitleyi detaylıca netleştiriyoruz.',
    details: 'Sorunun ne olduğunu doğru tanımlamak, yanlış şeyler inşa etmeyi önler.',
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Planlama',
    description: 'Teknik mimariyi, kullanılacak teknolojileri ve proje aşamalarını net bir çerçeveye oturtuyoruz.',
    details: 'Veritabanı yapısı, ekran akışları ve teslimat takvimi belirlenir.',
    iconName: 'Compass'
  },
  {
    number: '03',
    title: 'Tasarım',
    description: 'Sade, teknik, kullanımı kolay ve modern bir arayüz düzeni tasarlıyoruz.',
    details: 'Mobil uyumluluk ve kullanıcı odaklı tipografi ön planda tutulur.',
    iconName: 'Layout'
  },
  {
    number: '04',
    title: 'Geliştirme',
    description: 'Belirlenen standartlarda temiz, anlaşılır ve bakımı kolay kodlama sürecini yürütüyorum.',
    details: 'Modüler yapı ve performans ilkeleriyle adım adım kodlama yapılır.',
    iconName: 'Code'
  },
  {
    number: '05',
    title: 'Test',
    description: 'Farklı cihazlarda, ekran boyutlarında ve senaryolarda uygulamanın sorunsuz çalıştığını doğruluyoruz.',
    details: 'Mobil görünüm, butonlar, formlar ve linkler hassasiyetle test edilir.',
    iconName: 'ShieldCheck'
  },
  {
    number: '06',
    title: 'Teslim',
    description: 'Çalışan dijital ürünü yayına alıyor veya kaynak kodlarıyla birlikte eksiksiz teslim ediyorum.',
    details: 'Gerekli yönlendirmeler ve temel dokümantasyon ile süreç tamamlanır.',
    iconName: 'CheckCircle2'
  }
];
