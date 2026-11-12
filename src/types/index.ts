export type SectionId = 
  | 'beranda'
  | 'tentang'
  | 'informasi'
  | 'tips'
  | 'lokasi'
  | 'kontak';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface InfoTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
}

export interface TipArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  snippet: string;
  content: string;
  keyPoints: string[];
}
