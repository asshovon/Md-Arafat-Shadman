import { ResourceItem } from '../types';

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-py-roadmap',
    title: 'Python for CSE & AI: Complete Zero-to-Hero Cheat Sheet',
    category: 'Python',
    type: 'Cheatsheet',
    level: 'Beginner',
    summary: 'Essential syntax, memory reference models, list comprehensions, decorators, and NumPy/Pandas quick reference guide for students.',
    topics: ['Data Types & Mutability', 'Functions & Lambdas', 'Decorators & Closures', 'NumPy Vectorization', 'File & JSON I/O'],
    downloadable: true
  },
  {
    id: 'res-db-norm',
    title: 'Relational Database Normalization & SQL Mastery Guide',
    category: 'Database',
    type: 'Guide',
    level: 'Intermediate',
    summary: 'A visual walkthrough of functional dependencies, minimal covers, 1NF, 2NF, 3NF, BCNF, and common indexing pitfalls in PostgreSQL/MySQL.',
    topics: ['Candidate Keys', 'Functional Dependency Closures', 'Lossless Decompositions', 'SQL Window Functions', 'B-Tree Indexing'],
    downloadable: true
  },
  {
    id: 'res-cyber-def',
    title: 'Cybersecurity Fundamentals: Defensive Architecture & CTF Primer',
    category: 'Cybersecurity',
    type: 'Guide',
    level: 'Beginner',
    summary: 'Core networking protocols (TCP 3-way handshake), cryptographic algorithms (AES vs RSA), Wireshark packet analysis, and OWASP Top 10 mitigation.',
    topics: ['OSI Model in Security', 'Cryptographic Hashes & TLS', 'OWASP Top 10', 'Port Scanning Fundamentals', 'Defense in Depth'],
    downloadable: true
  },
  {
    id: 'res-ai-vision',
    title: 'Deep Learning in Medical Imaging: From CNNs to Grad-CAM',
    category: 'AI/ML',
    type: 'Roadmap',
    level: 'Advanced',
    summary: 'A practical roadmap for training vision models on radiograph datasets: preprocessing with CLAHE, PyTorch transfer learning, and gradient explainability.',
    topics: ['DICOM Processing', 'Data Augmentation Strategies', 'ResNet-50 Fine-Tuning', 'Grad-CAM Hooks in PyTorch', 'Evaluation Metrics (ROC/AUC)'],
    downloadable: true
  },
  {
    id: 'res-cse-career',
    title: 'CSE Undergraduate 4-Year Action Plan & Portfolio Blueprint',
    category: 'CSE',
    type: 'Roadmap',
    level: 'Beginner',
    summary: 'How to structure your 4 years in university: balancing CGPA, competitive programming, IEEE & club leadership, open source, and final-year thesis.',
    topics: ['Year 1: Algorithmic Thinking', 'Year 2: Data Structures & OOP', 'Year 3: Web/AI Projects & Extracurriculars', 'Year 4: Thesis & Job Hunt'],
    downloadable: true
  },
  {
    id: 'res-sql-scripts',
    title: 'Top 50 Most Frequently Asked SQL Query Patterns',
    category: 'Database',
    type: 'Code Samples',
    level: 'Intermediate',
    summary: 'Curated SQL queries for technical interviews covering self-joins, CTEs, running totals, lead/lag functions, and subquery optimizations.',
    topics: ['Common Table Expressions (CTEs)', 'DENSE_RANK() vs RANK()', 'Self Joins', 'Correlated Subqueries', 'Partition By Clustered Aggregates'],
    downloadable: true
  }
];
