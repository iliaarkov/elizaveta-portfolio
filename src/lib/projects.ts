export interface ProjectMediaItem {
  url: string | { ru: string; en: string };
  title?: { ru: string; en: string };
  poster?: string;
}

export interface Project {
  id: string;
  year: string;
  imageUrl?: string;
  videos?: ProjectMediaItem[];
  photos?: { url: string; caption?: { ru: string; en: string } }[];
  covers?: { url: string; title: string }[];
}

export interface ProjectContent {
  title: string;
  tags?: string[];
  desc?: string;
  tagline?: string;
  platforms?: string[];
  story?: string;
  role: string;
  focus: string;
  metrics: { label: string; value: string }[];
  galleryTitle?: string;
  videoSectionTitle?: string;
}


export const projects: Project[] = [
  { 
    id: 'ugc-ecommerce', 
    year: '2023-2024', 
    imageUrl: '/images/projects/ugc.jpg',
    videos: [
      { 
        url: { 
          ru: '/videos/ugc-1-ru.mov', 
          en: '/videos/ugc-1-en.mov' 
        }, 
        title: { ru: 'Используем солнце как декор', en: 'Sunlight as Home Decor' } 
      },
      { 
        url: { 
          ru: '/videos/ugc-2-ru.mov', 
          en: '/videos/ugc-2-en.mov' 
        }, 
        title: { ru: 'Интерьер в стиле флоры', en: 'Flora Style Interior' } 
      },
      { 
        url: { 
          ru: '/videos/ugc-3-ru.mov', 
          en: '/videos/ugc-3-en.mov' 
        }, 
        title: { ru: 'Необычный декор', en: 'Unusual Accent Decor' } 
      }
    ]
  },
  { 
    id: 'green-home', 
    year: '2024', 
    imageUrl: '/images/projects/green.jpg',
    photos: [
      { url: '/images/green-home/stats.jpg', caption: { ru: 'Аналитика и рост просмотров', en: 'Channel Analytics & Growth' } },
      { url: '/images/green-home/before-after.jpg', caption: { ru: 'Профиль: До / После', en: 'Profile: Before vs After' } }
    ],
    videos: [
      { 
        url: { 
          ru: '/videos/green-1.mp4', 
          en: '/videos/green-1.mp4' 
        }, 
        title: { ru: 'Экспертный совет: пересадка', en: 'Expert Tip: Repotting' } 
      },
      { 
        url: { 
          ru: '/videos/green-2.mp4', 
          en: '/videos/green-2.mp4' 
        }, 
        title: { ru: 'Полив и освещение', en: 'Watering & Lighting Routine' } 
      },
      { 
        url: { 
          ru: '/videos/green-3.mp4', 
          en: '/videos/green-3.mp4' 
        }, 
        title: { ru: 'Выбираем растения для дома', en: 'Best Plants for Apartments' } 
      }
    ]
  },
  { 
    id: 'penna', 
    year: '2021-2024', 
    imageUrl: '/images/projects/penna.jpg',
    covers: [
      { url: '/images/penna/sea.jpg', title: 'море обнимает меня' },
      { url: '/images/penna/until_morning.jpg', title: 'до утра' },
      { url: '/images/penna/party.JPEG', title: 'вечеринка на своей стороне' }
    ],
    videos: [
      { 
        url: {
          ru: '/videos/penna-1.mov',
          en: '/videos/penna-1.mov'
        }, 
        title: { ru: 'Сниппет на «пустоту»', en: 'Snippet: “Pustota”' }
      },
      {
        url: {
          ru: '/videos/penna-2.mp4',
          en: '/videos/penna-2.mp4'
        }, 
        title: { ru: 'Сниппет «бежать или жить»', en: 'Snippet: “Run or Live”' }
      },
      {
        url: {
          ru: '/videos/penna-3.mp4',
          en: '/videos/penna-3.mp4'
        },
        title: { ru: 'Сниппет «теням не выжить без света»', en: 'Snippet: “Shadows Need Light”' }
      }
    ]
  },
  { 
    id: '12sirens', 
    year: '2022', 
    imageUrl: '/images/projects/sirens.jpg',
    photos: [
      { url: '/images/12sirens/photo-1.HEIC', caption: { ru: 'Айдентика бренда', en: 'Brand Visual Identity' } },
      { url: '/images/12sirens/photo-2.HEIC', caption: { ru: 'Эксклюзивные украшения', en: 'Exclusive Jewelry Pieces' } },
      { url: '/images/12sirens/photo-3.HEIC', caption: { ru: 'Упаковка и эстетика', en: 'Packaging & Details' } }
    ],
    videos: [
      { 
        url: { 
          ru: '/videos/sirens-1.mp4', 
          en: '/videos/sirens-1.mp4' 
        }, 
        title: { ru: 'Продающее видео 01', en: 'Story Video: Collection Drop' } 
      },
      { 
        url: { 
          ru: '/videos/sirens-2.mp4', 
          en: '/videos/sirens-2.mp4' 
        }, 
        title: { ru: 'Продающее видео 02', en: 'Story Video: Craft & Texture' } 
      },
      { 
        url: { 
          ru: '/videos/sirens-3.mov', 
          en: '/videos/sirens-3.mov' 
        }, 
        title: { ru: 'Продающее видео 03', en: 'Story Video: Jewelry in Motion' } 
      }
    ]
  }
];