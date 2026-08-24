export interface Project {
  id: string;
  category: 'smm' | 'ugc' | 'production' | 'music';
  title: { ru: string; en: string };
  client: string;
  thumbnail: string;
  metrics?: string;
  description: { ru: string; en: string };
  videoUrl?: string; 
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'ugc-blog',
    category: 'ugc',
    client: 'UGC Blog',
    title: { ru: 'Личный UGC блог: стратегия и контент', en: 'Personal UGC Blog: Strategy & Content' },
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
    metrics: '1M+ views/mo',
    description: { 
      ru: 'Разработка стратегии продвижения бренда через UGC-контент. Анализ трендов и создание виральных роликов.', 
      en: 'Development of a brand promotion strategy through UGC content. Trend analysis and creation of viral videos.' 
    },
    tags: ['Strategy', 'Viral', 'Editing']
  },
  {
    id: 'zeleny-dom',
    category: 'production',
    client: 'Зелёный ДОМ',
    title: { ru: 'Контент-продакшн для бренда растений', en: 'Content production for plant brand' },
    thumbnail: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000',
    description: { 
      ru: 'Создание эстетичного видео-контента для YouTube и Instagram. Съемка в оранжерее и монтаж обучающих роликов.', 
      en: 'Creating aesthetic video content for YouTube and Instagram. Shooting in a greenhouse and editing educational videos.' 
    },
    tags: ['YouTube', 'Reels']
  },
  {
    id: '12sirens',
    category: 'smm',
    client: '12SIRENS',
    title: { ru: 'Визуальная айдентика и SMM', en: 'Visual identity and SMM' },
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000',
    description: { 
      ru: 'Комплексное ведение социальных сетей, создание уникального визуального стиля и работа с инфлюенсерами.', 
      en: 'Comprehensive social media management, creation of a unique visual style and work with influencers.' 
    },
    tags: ['Aesthetics', 'UGC', 'Style']
  },
  {
    id: 'penna',
    category: 'music',
    client: 'penna',
    title: { ru: 'Продвижение музыкального проекта', en: 'Music project promotion' },
    thumbnail: 'https://images.unsplash.com/photo-1514525253361-bee87187046c?q=80&w=1000',
    metrics: '100K streams',
    description: { 
      ru: 'Маркетинговая стратегия для запуска музыкального релиза. Продвижение звука в TikTok и работа с пабликами.', 
      en: 'Marketing strategy for launching a music release. Promoting sound on TikTok and working with music communities.' 
    },
    tags: ['Viral', 'TikTok', 'Music Marketing']
  }
];