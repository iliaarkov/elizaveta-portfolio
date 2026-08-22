export interface Project {
  id: string;
  category: 'smm' | 'ugc' | 'production' | 'music';
  title: { ru: string; en: string };
  client: string;
  videoUrl: string; // Сюда вставляй ссылку на видео (mp4 или YouTube/Vimeo)
  thumbnail: string;
  metrics?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'ugc-blog',
    category: 'ugc',
    client: 'UGC Blog',
    title: { ru: 'Личный UGC блог: стратегия и контент', en: 'Personal UGC Blog: Strategy & Content' },
    videoUrl: '/videos/ugc.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
    metrics: '1M+ views/mo',
    tags: ['Strategy', 'Viral', 'Editing']
  },
  {
    id: 'zeleny-dom',
    category: 'production',
    client: 'Зелёный ДОМ',
    title: { ru: 'Контент-продакшн для бренда растений', en: 'Content production for plant brand' },
    videoUrl: '/videos/project1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000',
    tags: ['YouTube', 'Reels']
  },
  {
    id: '12sirens',
    category: 'smm',
    client: '12SIRENS',
    title: { ru: 'Визуальная айдентика и SMM', en: 'Visual identity and SMM' },
    videoUrl: '/videos/project2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000',
    tags: ['Aesthetics', 'Style']
  }
];