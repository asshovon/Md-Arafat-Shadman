import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'ieee-cs-bdc-web',
    title: 'IEEE CS BDC Official Website Development',
    category: 'Web Development',
    role: 'Front-End Engineer & Web/IT Executive',
    organization: 'IEEE Computer Society Bangladesh Chapter',
    period: '2023 - 2024',
    description: 'Collaborated with the front-end web engineering team to develop and maintain the modern, responsive official web platform for IEEE Computer Society Bangladesh Chapter using React.js. Handled interactive event registration portals, speaker showcases, and committee rosters.',
    highlights: [
      'Engineered interactive, responsive UI components using React and modern CSS.',
      'Streamlined digital event announcements, reducing participant registration inquiries by 40%.',
      'Implemented cross-browser compatible layouts optimized for mobile devices.',
      'Collaborated seamlessly with executive leadership and event communication teams.'
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'Git'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  },
  {
    id: 'ai-knee-xray-detection',
    title: 'AI Knee Bone Loss Detection & Grad-CAM Visualizer',
    category: 'AI/ML',
    role: 'Lead Researcher & Developer',
    organization: 'BUBT CSE Department',
    period: '2024 - 2025',
    description: 'Developed an end-to-end deep learning framework for classifying knee radiograph images into normal, osteopenia, and severe bone loss categories with 94.8% test accuracy, integrated with real-time Grad-CAM explainability heatmaps.',
    highlights: [
      'Fine-tuned ResNet-50 and DenseNet-121 architectures on 1,280 digitized knee X-ray scans.',
      'Enhanced subtle trabecular bone patterns using CLAHE preprocessing.',
      'Built a Grad-CAM interpretability module to visualize model attention on tibial-femoral joint margins.',
      'Generated comprehensive evaluation reports including confusion matrices, ROC curves, and F1 metrics.'
    ],
    techStack: ['Python', 'PyTorch', 'Torchvision', 'OpenCV', 'Grad-CAM', 'NumPy', 'Matplotlib'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  },
  {
    id: 'cyber-vulnerability-scanner',
    title: 'Python Automated Port & Vulnerability Scanner',
    category: 'Cybersecurity',
    role: 'Developer',
    period: '2024',
    description: 'A multi-threaded network security reconnaissance utility developed in Python to identify open TCP/UDP ports, extract banner metadata, flag insecure services, and export structured security audit reports.',
    highlights: [
      'Fast concurrent socket scanning with asynchronous thread pools.',
      'Automated service banner grabbing (FTP, SSH, HTTP, SMTP) to pinpoint outdated software versions.',
      'Exportable JSON and HTML audit reports for network administrators.',
      'Built-in rate limiter and timeout handles to prevent accidental network flooding.'
    ],
    techStack: ['Python', 'Socket API', 'Scapy', 'Threading', 'JSON', 'Linux Bash'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  },
  {
    id: 'dbms-schema-normalizer',
    title: 'Relational Database Schema Normalizer & SQL Generator',
    category: 'Software',
    role: 'Developer',
    period: '2023 - 2024',
    description: 'An educational computer science utility that ingests relational attributes and candidate functional dependencies, validates Boyce-Codd Normal Form (BCNF) and Third Normal Form (3NF), and outputs clean SQL DDL statements.',
    highlights: [
      'Computes attribute closures and determines all minimal candidate keys algorithmically.',
      'Detects partial and transitive dependencies automatically.',
      'Decomposes non-compliant tables into lossless-join, dependency-preserving schemas.',
      'Exports production-ready PostgreSQL and MySQL table definition scripts.'
    ],
    techStack: ['Python', 'SQL', 'Relational Algebra', 'Algorithms', 'Tkinter / Web UI'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  },
  {
    id: 'requin-brand-design',
    title: 'Creative Visual Branding & Publication Media Assets',
    category: 'Design',
    role: 'Graphic Design Intern',
    organization: 'Requin BD',
    period: 'January 2024 – May 2024',
    description: 'Conceptualized and designed professional publication assets, book covers, commercial advertising banners, and social media brand identity systems for corporate and institutional clients.',
    highlights: [
      'Designed 20+ commercial book covers and promotional layouts adhering to print production specs.',
      'Created standardized social media templates and vector assets using Adobe Illustrator.',
      'Applied typographic hierarchy and color theory for high-conversion marketing graphics.',
      'Received commendation for fast turnaround and collaborative client revisions.'
    ],
    techStack: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Visual Branding', 'Typography'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  },
  {
    id: 'aspnet-crud-system',
    title: '.NET Enterprise Web Application & Database Suite',
    category: 'Software',
    role: '.NET Development Intern (Remote)',
    organization: 'Itransition Company, United Kingdom',
    period: 'Apr 2026 – Jun 2026',
    description: 'Engineered robust web applications using ASP.NET and C#. Designed relational SQL Server schemas, implemented complete CRUD endpoints, and collaborated via Git in an agile engineering team.',
    highlights: [
      'Developed modular ASP.NET web services and business logic with C#.',
      'Designed normalized SQL Server database tables and stored procedures.',
      'Implemented secure CRUD operations and data validation layers.',
      'Tested, debugged, and version-controlled codebase using Git and GitHub.'
    ],
    techStack: ['C#', 'ASP.NET', 'SQL Server', 'CRUD', 'Git', 'Visual Studio'],
    demoUrl: 'https://github.com/asshovon',
    githubUrl: 'https://github.com/asshovon'
  }
];
