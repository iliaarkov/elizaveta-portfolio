export interface Project {
  id: string;
  category: 'smm' | 'ugc' | 'production' | 'music';
  title: { ru: string; en: string };
  client: string;
  thumbnail: string;
  metrics?: string;
  description: { ru: string; en: string };
}

export const projects: Project[] = [
  {
    id: 'ugc-blog',
    category: 'ugc',
    client: 'UGC Blog',
    title: { ru: 'Личный UGC блог: стратегия', en: 'Personal UGC Blog: Strategy' },
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
    metrics: '1M+ views/mo',
    description: { ru: 'Полное описание кейса UGC...', en: 'Full UGC case description...' }
  },
  {
    id: 'zeleny-dom',
    category: 'production',
    client: 'Зелёный ДОМ',
    title: { ru: 'Контент-продакшн для растений', en: 'Content production for plants' },
    thumbnail: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000',
    description: { ru: 'Как мы создавали уютный контент...', en: 'Creating cozy content...' }
  },
  {
    id: '12sirens',
    category: 'smm',
    client: '12SIRENS',
    title: { ru: 'Визуальная айдентика и SMM', en: 'Visual identity and SMM' },
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000',
    description: { ru: 'Эстетика и стратегия бренда...', en: 'Brand aesthetics and strategy...' }
  },
  {
    id: 'penna',
    category: 'music',
    client: 'penna',
    title: { ru: 'Продвижение муз. проекта', en: 'Music project promotion' },
    thumbnail: 'https://images.unsplash.com/photo-1514525253361-bee87187046c?q=80&w=1000',
    metrics: '100K streams',
    description: { ru: 'Виральный маркетинг в TikTok...', en: 'Viral TikTok marketing...' }
  }
];