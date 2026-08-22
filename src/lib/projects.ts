export interface Project {
  id: string;
  category: 'smm' | 'ugc' | 'production' | 'music';
  title: { ru: string; en: string };
  client: string;
  videoUrl: string;
  thumbnail: string;
  metrics?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'zeleny-dom',
    category: 'production',
    client: 'Зелёный ДОМ',
    title: { 
      ru: 'Ведение YouTube и Instagram для бренда растений', 
      en: 'YouTube & Instagram management for plant brand' 
    },
    videoUrl: '', // Сюда потом вставим ссылку
    thumbnail: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000',
    metrics: '1M+ views',
    tags: ['Strategy', 'Backstage', 'Editing']
  },
  {
    id: '12sirens',
    category: 'smm',
    client: '12SIRENS',
    title: { 
      ru: 'Визуальная айдентика и контент-стратегия', 
      en: 'Visual identity and content strategy' 
    },
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000',
    tags: ['Aesthetics', 'UGC', 'Social Media']
  },
  {
    id: 'penna-music',
    category: 'music',
    client: 'penna',
    title: { 
      ru: 'Продвижение музыкального проекта', 
      en: 'Music project promotion' 
    },
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1514525253361-bee87187046c?q=80&w=1000',
    metrics: '100K streams',
    tags: ['Viral', 'TikTok', 'Music Marketing']
  }
];