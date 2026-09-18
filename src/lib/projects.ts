export interface Project {
  id: string;
  year: string;
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
  { id: 'ugc-ecommerce', year: '2023-2024', videoUrl: '/videos/ugc.mp4' },
  { id: 'green-home', year: '2024', videoUrl: '/videos/green.mp4' },
  { id: 'penna', year: '2021-2024', videoUrl: '/videos/penna.mp4' },
  { id: '12sirens', year: '2022', videoUrl: '/videos/sirens.mp4' }
];