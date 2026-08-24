export interface Project {
  id: string;
  year: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ugc-ecommerce',
    year: '2023-2024',
    tags: ['UGC', 'Short-form', 'E-commerce'],
    metrics: [
      { label: 'Views', value: '1M+' },
      { label: 'Followers', value: '1,600+' },
      { label: 'Clicks', value: '1,000+' }
    ],
  },
  {
    id: 'green-home',
    year: '2024',
    tags: ['Personal Brand', 'Strategy', 'Production'],
    metrics: [
      { label: 'Views', value: '150K+' },
      { label: 'Subscribers', value: '470+' }
    ],
  },
  {
    id: 'penna',
    year: '2021-2024',
    tags: ['Music', 'Creative Direction', 'PR'],
    metrics: [
      { label: 'Streams', value: '100K+' },
      { label: 'Monthly Listeners', value: 'Peak' }
    ],
  },
  {
    id: '12sirens',
    year: '2022',
    tags: ['Visual Identity', 'Storytelling', 'Sales'],
    metrics: [
      { label: 'Sales', value: '20+' },
      { label: 'Platform', value: 'Telegram' }
    ],
  }
];