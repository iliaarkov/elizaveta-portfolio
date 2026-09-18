export interface Project {
  id: string;
  year: string;
  imageUrl?: string; // <-- путь к картинке проекта (например, '/images/projects/ugc.jpg')
  videoUrl?: string;
}

export interface ProjectContent {
  title: string;
  tags: string[];
  desc: string;
  role: string;
  focus: string;
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  { 
    id: 'ugc-ecommerce', 
    year: '2023-2024', 
    imageUrl: '/images/projects/ugc.jpg',
    videoUrl: '/videos/ugc.mp4' 
  },
  { 
    id: 'green-home', 
    year: '2024', 
    imageUrl: '/images/projects/green.jpg',
    videoUrl: '/videos/green.mp4' 
  },
  { 
    id: '12sirens', 
    year: '2022', 
    imageUrl: '/images/projects/sirens.jpg',
    videoUrl: '/videos/sirens.mp4' 
  },
  { 
    id: 'penna', 
    year: '2021-2024', 
    imageUrl: '/images/projects/penna.jpg',
    videoUrl: '/videos/penna.mp4' 
  }
];