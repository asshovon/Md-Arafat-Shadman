export type ContentCategory =
  | 'All'
  | 'Technology'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'Cybersecurity'
  | 'Programming'
  | 'Database'
  | 'Education & Career'
  | 'Research'
  | 'Personal';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  category: ContentCategory;
  tags: string[];
  excerpt: string;
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  featuredImage?: string;
  // Full article structured data (matching Section 14 standard)
  introduction: string;
  whatIs: string;
  whyImportant: string;
  howItWorks: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption: string;
  };
  advantages: string[];
  disadvantages: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  conclusion: string;
  references: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  institution: string;
  status: 'In Review' | 'Published' | 'Conference Accepted' | 'Preprint';
  date: string;
  problem: string;
  researchGap: string;
  methodology: {
    datasetInfo: string;
    preprocessing: string;
    architecture: string;
    training: string;
    interpretability: string;
  };
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    totalImages: number;
  };
  confusionMatrix: {
    tp: number;
    fp: number;
    fn: number;
    tn: number;
  };
  githubUrl: string;
  doi?: string;
  abstract: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI/ML' | 'Web Development' | 'Cybersecurity' | 'Design' | 'Software';
  role: string;
  organization?: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Python' | 'CSE' | 'Database' | 'Cybersecurity' | 'AI/ML';
  type: 'Guide' | 'Cheatsheet' | 'Roadmap' | 'Code Samples';
  summary: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  downloadable?: boolean;
}

export interface LaunchDayPlan {
  day: number;
  task: string;
  category: string;
  details: string;
  completed?: boolean;
}
