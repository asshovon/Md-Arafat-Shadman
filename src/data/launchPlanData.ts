import { LaunchDayPlan } from '../types';

export const thirtyDayLaunchPlan: LaunchDayPlan[] = [
  { day: 1, task: 'Domain নির্বাচন', category: 'Infrastructure', details: 'Check personal brand domain availability (e.g., arafatshadman.com, mdarafatshadman.com) and confirm trademark clearance.' },
  { day: 2, task: 'Hosting নির্ধারণ', category: 'Infrastructure', details: 'Select high-speed NVMe hosting with PHP 8.x, MySQL/MariaDB, free SSL, weekly automated backups, and CDN integration.' },
  { day: 3, task: 'WordPress Install', category: 'Setup', details: 'cPanel WordPress Manager installation. Set custom admin username (e.g., arafat_manager) and strict password.' },
  { day: 4, task: 'Theme নির্বাচন', category: 'Design', details: 'Install lightweight, mobile-responsive, SEO-optimized block theme with clean modern typography.' },
  { day: 5, task: 'Logo/Branding কনফিগারেশন', category: 'Branding', details: 'Upload high-resolution logo, set site title ("Md. Arafat Shadman") and tagline ("Technology • AI • Cybersecurity • Education • Research").' },
  { day: 6, task: 'Homepage ডিজাইন', category: 'Design', details: 'Build Hero section, bio introduction, featured articles grid, research highlight, and newsletter opt-in.' },
  { day: 7, task: 'About Me পৃষ্ঠা রচনা', category: 'Content', details: 'Include bio, BUBT CSE education, IEEE CS BDC leadership, skills breakdown, and downloadable CV.' },
  { day: 8, task: 'Blog আর্কিটেকচার সেটআপ', category: 'Setup', details: 'Configure categories: Technology, AI, Cybersecurity, Programming, Database, Education & Career, Research.' },
  { day: 9, task: 'Research সেকশন তৈরি', category: 'Content', details: 'Showcase "Automated Detection of Knee Bone Loss in X-ray Images Using Deep Learning" with methodology, Grad-CAM, and metrics.' },
  { day: 10, task: 'Projects পোর্টফোলিও যোগ', category: 'Content', details: 'Add IEEE CS BDC Website, AI Medical Vision tool, Python Vulnerability Scanner, and Requin BD graphic design assets.' },
  { day: 11, task: 'Contact পেজ ও ফর্ম তৈরি', category: 'Engagement', details: 'Integrate contact form, working email address, phone, and direct links to YouTube, Facebook, LinkedIn, and GitHub.' },
  { day: 12, task: 'Privacy Policy & Terms', category: 'Legal', details: 'Publish standard compliant Privacy Policy and Terms & Conditions pages to ensure trust and AdSense readiness.' },
  { day: 13, task: 'SEO Plugin & Metadata কনফিগ', category: 'SEO', details: 'Set up Rank Math / Yoast SEO, configure schema markup, meta titles, descriptions, and OpenGraph social preview cards.' },
  { day: 14, task: 'Security হার্ডেনিং', category: 'Security', details: 'Install Wordfence or Solid Security, disable XML-RPC, enforce 2FA, and configure brute-force login rate limits.' },
  { day: 15, task: 'Automated Backup কনফিগ', category: 'Maintenance', details: 'Configure UpdraftPlus for automated weekly cloud backups to Google Drive or AWS S3.' },
  { day: 16, task: 'Google Analytics 4 ইন্টিগ্রেশন', category: 'Analytics', details: 'Embed GA4 tracking measurement ID to analyze visitor acquisition channels, bounce rates, and engagement duration.' },
  { day: 17, task: 'Google Search Console সাবমিশন', category: 'SEO', details: 'Verify domain ownership in GSC, submit sitemap.xml, and test URL inspection indexing.' },
  { day: 18, task: 'প্রথম Article প্রকাশ', category: 'Content', details: 'Publish Article 1: "What is Artificial Intelligence? The Complete Beginner’s Guide" with custom 1080x608 banner.' },
  { day: 19, task: 'দ্বিতীয় Article প্রকাশ', category: 'Content', details: 'Publish Article 2: "Beginner’s Guide to Cybersecurity: Defense in the Modern Era".' },
  { day: 20, task: 'তৃতীয় Article প্রকাশ', category: 'Content', details: 'Publish Article 3: "How I Built an AI-Based Knee Bone Loss Detection System in X-ray Images".' },
  { day: 21, task: 'AI & ML Article প্রকাশ', category: 'Content', details: 'Publish foundational deep dive: "AI vs Machine Learning: Clarifying the Definitions".' },
  { day: 22, task: 'Cybersecurity Article প্রকাশ', category: 'Content', details: 'Publish defensive security guide: "What is Phishing? Analyzing Psychological Attack Vectors".' },
  { day: 23, task: 'Programming Article প্রকাশ', category: 'Content', details: 'Publish practical tutorial: "Python for Beginners: The Language That Powers Modern AI".' },
  { day: 24, task: 'Research Article প্রকাশ', category: 'Content', details: 'Publish technical methodology: "What is Grad-CAM? Peeking Inside the Deep Learning Black Box".' },
  { day: 25, task: 'Career Article প্রকাশ', category: 'Content', details: 'Publish student roadmap: "How to Build a GitHub Portfolio That Stands Out to Recruiters".' },
  { day: 26, task: 'Social Media চ্যানেল কানেক্ট ও শেয়ার', category: 'Marketing', details: 'Cross-post articles across YouTube community tab, LinkedIn network, Facebook, and tech communities.' },
  { day: 27, task: 'Speed & Caching Optimization', category: 'Performance', details: 'Configure LiteSpeed Cache or WP Rocket, WebP image conversion, CSS/JS minification, and browser caching.' },
  { day: 28, task: 'Mobile & Cross-Browser Testing', category: 'QA', details: 'Validate responsive viewport on iOS Safari, Android Chrome, tablet, and desktop resolutions.' },
  { day: 29, task: 'Full SEO & Broken Link Audit', category: 'QA', details: 'Run Lighthouse audit, verify all social links, validate contact form deliverability, and check schema validity.' },
  { day: 30, task: '🚀 Official Public Launch', category: 'Launch', details: 'Official launch announcement on LinkedIn, YouTube, and IEEE student networks; invite subscribers to the newsletter.' }
];

export const wordPressPluginsBlueprint = [
  { name: 'Rank Math / Yoast SEO', category: 'SEO', purpose: 'Handles focus keyword optimization, sitemaps, OpenGraph cards, and schema metadata.' },
  { name: 'Wordfence / Solid Security', category: 'Security', purpose: 'Firewall, malware scanner, brute force protection, 2FA, and login rate limiting.' },
  { name: 'LiteSpeed Cache / WP Rocket', category: 'Performance', purpose: 'Server-level caching, CSS/JS deferral, lazy loading, and sub-second load times.' },
  { name: 'UpdraftPlus', category: 'Backup', purpose: 'Scheduled automated backups directly pushed to Google Drive or AWS S3.' },
  { name: 'Fluent Forms / WPForms', category: 'Engagement', purpose: 'Clean, lightweight contact and inquiry forms with anti-spam honeypot.' },
  { name: 'WebP Converter for Media', category: 'Optimization', purpose: 'Automatically converts JPEG/PNG uploads to modern WebP format for fast bandwidth.' },
  { name: 'Site Kit by Google', category: 'Analytics', purpose: 'Native integration of Google Analytics 4, Search Console, PageSpeed, and AdSense.' }
];
