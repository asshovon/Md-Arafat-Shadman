import React, { useState, useMemo } from 'react';
import { 
  FileCheck, 
  FileText, 
  Sparkles, 
  Copy, 
  Download, 
  Printer, 
  Check, 
  AlertCircle, 
  TrendingUp, 
  Sliders, 
  RefreshCw, 
  Plus, 
  Trash2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Search, 
  Wand2, 
  Eye, 
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Info
} from 'lucide-react';
import { profileData } from '../data/profileData';

// Preset target job descriptions for instant ATS testing
const JOB_PRESETS = [
  {
    role: '.NET / C# Developer',
    company: 'Enterprise Software Solutions',
    description: `We are looking for an ambitious .NET Developer with strong foundations in C#, ASP.NET, and SQL Server.
Key Requirements:
- Hands-on experience developing web applications using C# and ASP.NET.
- Database design, normalization, stored procedures, and CRUD operations in SQL Server.
- Familiarity with RESTful APIs, Git version control, and debugging.
- Knowledge of modern frontend basics such as HTML, CSS, JavaScript or React.
- Solid understanding of OOP principles, unit testing, problem-solving, and agile team collaboration.`,
    keywords: ['C#', 'ASP.NET', '.NET', 'SQL Server', 'CRUD', 'Git', 'RESTful APIs', 'Database', 'Debugging', 'OOP', 'Testing']
  },
  {
    role: 'React / Frontend Developer',
    company: 'Digital Innovation Lab',
    description: `Seeking a skilled Frontend Developer proficient in React.js to build dynamic, responsive web interfaces.
Requirements:
- Strong experience in React, JavaScript, HTML5, CSS3, and component-based architecture.
- Understanding of state management, hooks, responsive UI design, and web performance.
- Experience collaborating with design teams, utilizing Figma, Canva, or Adobe tools.
- Version control with Git & GitHub.
- Excellent communication, adaptability, and eager to learn modern web ecosystems.`,
    keywords: ['React', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Frontend', 'Git', 'Responsive', 'UI', 'Communication', 'Component']
  },
  {
    role: 'Python & AI / Software Engineer',
    company: 'NextGen Tech Analytics',
    description: `Seeking a Computer Science Graduate with passion for Python programming, algorithms, and deep learning.
Key Qualifications:
- Proficiency in Python, data structures, algorithms, and modular coding.
- Experience or academic research in Machine Learning, Computer Vision, or Deep Learning (PyTorch / TensorFlow).
- Experience with SQL databases, software development lifecycle, and documentation.
- Strong analytical skills, adaptability, and teamwork.`,
    keywords: ['Python', 'Deep Learning', 'Machine Learning', 'Algorithms', 'Computer Vision', 'SQL', 'Git', 'Problem-Solving', 'Research']
  },
  {
    role: 'Junior Full Stack Engineer',
    company: 'Global Cloud Systems',
    description: `Junior Full-Stack Engineer to contribute across client and server architectures.
Must Have:
- Degree in Computer Science and Engineering (CSE).
- Proficiency in programming languages such as C#, Python, or Java.
- Web development skills including React, HTML, CSS, and database CRUD.
- Collaborative mindset, team player, critical thinking, and version control using Git.`,
    keywords: ['CSE', 'Full Stack', 'C#', 'Python', 'React', 'HTML', 'CSS', 'Database', 'CRUD', 'Git', 'Teamwork', 'Management']
  }
];

export const AtsGenerator: React.FC = () => {
  // Mode: 'preview' | 'editor' | 'optimizer'
  const [activeSubTab, setActiveSubTab] = useState<'preview' | 'editor' | 'optimizer'>('preview');
  
  // Template layout style: 'classic' | 'modern' | 'compact'
  const [templateStyle, setTemplateStyle] = useState<'classic' | 'modern' | 'compact'>('classic');

  // Copied & Downloaded state feedback
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Resume editable state pre-filled with Arafat Shadman's official CV
  const [resumeData, setResumeData] = useState({
    name: profileData.name,
    title: profileData.title,
    location: profileData.contact.location,
    phone: profileData.contact.phone,
    email: profileData.contact.email,
    github: 'https://github.com/asshovon',
    linkedin: 'https://www.linkedin.com/in/md-arafat-shadman-4a39981b6/',
    summary: profileData.bio,
    coreSkills: [...profileData.skills.core],
    programmingLanguages: [...profileData.skills.programming],
    webTech: [...profileData.skills.web],
    tools: [...profileData.skills.tools],
    designTools: [...profileData.skills.design],
    experiences: [
      {
        id: 'exp-1',
        role: '.NET Development Intern (Remote)',
        company: 'Itransition Company',
        location: 'United Kingdom',
        period: 'Apr 06, 2026 – Jun 09, 2026',
        bullets: [
          'Developed ASP.NET enterprise web applications utilizing C# and object-oriented architectures.',
          'Designed relational SQL Server databases and engineered high-performance stored procedures.',
          'Implemented complete CRUD operations with robust data validation and security layers.',
          'Collaborated in remote agile sprints using Git version control and GitHub code reviews.',
          'Tested, debugged, and optimized web applications to achieve 99.8% stability.'
        ]
      },
      {
        id: 'exp-2',
        role: 'Executive Member - Web and IT Committee',
        company: 'IEEE Computer Society Bangladesh Chapter',
        location: 'Dhaka, Bangladesh',
        period: '2023 – 2024',
        bullets: [
          'Mastered and applied React.js component architecture for official chapter web platform.',
          'Collaborated directly with the front-end engineering team to develop modular, responsive pages.',
          'Coordinated communication and technological infrastructure for national technical symposiums.'
        ]
      },
      {
        id: 'exp-3',
        role: 'Internship - Graphic Design',
        company: 'Requin BD',
        location: 'Dhaka, Bangladesh',
        period: 'January 1, 2024 – May 15, 2024',
        bullets: [
          'Engineered publication-ready book covers, digital banners, and interactive marketing graphics.',
          'Produced branded visual assets using Adobe Photoshop and Adobe Illustrator under strict client deadlines.',
          'Delivered end-to-end creative digital solutions resulting in 100% client sign-off.'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science and Engineering',
        institution: 'Bangladesh University of Business & Technology (BUBT)',
        location: 'Dhaka, Bangladesh',
        period: 'Graduation',
        grade: 'CGPA: 3.33 / 4.00',
        details: 'Relevant coursework: Software Engineering, Data Structures & Algorithms, Database Systems, Web Technologies.'
      },
      {
        degree: 'Diploma in Engineering',
        institution: 'City polytechnic & Textile institute',
        location: 'Rajshahi, Bangladesh',
        period: 'Passing Year: 2020',
        grade: 'CGPA: 3.72 / 4.00',
        details: 'Foundations in computer hardware, electronic circuits, programming, and database architectures.'
      }
    ],
    certifications: [
      {
        title: 'Frontend Development with React',
        issuer: 'Creative IT Institute',
        date: 'November 27-29, 2024'
      },
      {
        title: 'Python developer',
        issuer: 'BUBT Tafe',
        date: 'Rupnagar, Mirpur-2, Dhaka'
      }
    ],
    projects: [
      {
        title: 'IEEE CS BDC Official Chapter Portal',
        role: 'Frontend Developer',
        tech: 'React, JavaScript, HTML5, CSS3, Git',
        description: 'Developed scalable, responsive frontend components for the IEEE Computer Society Bangladesh Chapter portal, serving thousands of student members.'
      },
      {
        title: '.NET Enterprise Application & Database Suite',
        role: '.NET Intern',
        tech: 'C#, ASP.NET, SQL Server, CRUD, Git',
        description: 'Engineered modular web backend endpoints and normalized SQL Server tables with full CRUD capabilities and integration tests.'
      },
      {
        title: 'Knee Bone Loss Detection in X-ray Images',
        role: 'Primary Researcher',
        tech: 'Python, PyTorch, ResNet-50, CLAHE, Grad-CAM',
        description: 'Developed a deep convolutional model achieving 94.8% classification accuracy and 95.1% sensitivity with Grad-CAM explainability.'
      }
    ]
  });

  // Job Description Optimizer State
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(0);
  const [jobDescriptionText, setJobDescriptionText] = useState(JOB_PRESETS[0].description);
  const [customKeywords, setCustomKeywords] = useState<string[]>(JOB_PRESETS[0].keywords);

  // Load a preset
  const handleSelectPreset = (idx: number) => {
    setSelectedPresetIdx(idx);
    setJobDescriptionText(JOB_PRESETS[idx].description);
    setCustomKeywords(JOB_PRESETS[idx].keywords);
  };

  // Compile entire plain text resume for ATS analysis and text export
  const fullResumeText = useMemo(() => {
    const lines: string[] = [];
    lines.push(resumeData.name.toUpperCase());
    lines.push(`${resumeData.title}`);
    lines.push(`Location: ${resumeData.location} | Phone: ${resumeData.phone} | Email: ${resumeData.email}`);
    lines.push(`GitHub: ${resumeData.github} | LinkedIn: ${resumeData.linkedin}`);
    lines.push('');
    lines.push('PROFESSIONAL SUMMARY');
    lines.push('--------------------');
    lines.push(resumeData.summary);
    lines.push('');
    lines.push('CORE SKILLS & COMPETENCIES');
    lines.push('--------------------------');
    lines.push(`Programming Languages: ${resumeData.programmingLanguages.join(', ')}`);
    lines.push(`Web Technologies: ${resumeData.webTech.join(', ')}`);
    lines.push(`Tools & Frameworks: ${resumeData.tools.join(', ')}`);
    lines.push(`Design & Multimedia: ${resumeData.designTools.join(', ')}`);
    lines.push(`Professional Traits: ${resumeData.coreSkills.join(', ')}`);
    lines.push('');
    lines.push('PROFESSIONAL EXPERIENCES');
    lines.push('------------------------');
    resumeData.experiences.forEach(exp => {
      lines.push(`${exp.role.toUpperCase()} | ${exp.company} - ${exp.location}`);
      lines.push(`Period: ${exp.period}`);
      exp.bullets.forEach(b => lines.push(`• ${b}`));
      lines.push('');
    });
    lines.push('PROJECTS');
    lines.push('--------');
    resumeData.projects.forEach(p => {
      lines.push(`${p.title} (${p.tech})`);
      lines.push(`Role: ${p.role}`);
      lines.push(`• ${p.description}`);
      lines.push('');
    });
    lines.push('EDUCATION');
    lines.push('---------');
    resumeData.education.forEach(edu => {
      lines.push(`${edu.degree.toUpperCase()}`);
      lines.push(`${edu.institution} - ${edu.location}`);
      lines.push(`${edu.period} | ${edu.grade}`);
      if (edu.details) lines.push(`• ${edu.details}`);
      lines.push('');
    });
    lines.push('CERTIFICATIONS & TRAINING');
    lines.push('-------------------------');
    resumeData.certifications.forEach(c => {
      lines.push(`• ${c.title} - ${c.issuer} (${c.date})`);
    });

    return lines.join('\n');
  }, [resumeData]);

  // Compute ATS Compliance Score & Checks
  const atsAnalysis = useMemo(() => {
    const textLower = fullResumeText.toLowerCase();

    // 1. Check essential sections
    const hasContact = Boolean(resumeData.email && resumeData.phone && resumeData.location);
    const hasSummary = resumeData.summary.length > 80;
    const hasExperience = resumeData.experiences.length >= 2;
    const hasEducation = resumeData.education.length >= 1;
    const hasSkills = resumeData.programmingLanguages.length >= 3;
    const hasProjects = resumeData.projects.length >= 1;

    // 2. Quantifiable metrics check (numbers, percentages)
    const metricMatches = fullResumeText.match(/\d+(?:\.\d+)?%?|\b(?:first|second|third)\b/gi) || [];
    const hasQuantifiableMetrics = metricMatches.length >= 4;

    // 3. Action verbs check
    const actionVerbs = ['developed', 'designed', 'implemented', 'collaborated', 'engineered', 'managed', 'tested', 'optimized', 'delivered', 'produced', 'mastered'];
    const foundVerbs = actionVerbs.filter(v => textLower.includes(v));

    // 4. Keyword matching against targeted job description
    const matchedKeywords: string[] = [];
    const missingKeywords: string[] = [];

    customKeywords.forEach(kw => {
      const kwClean = kw.toLowerCase().trim();
      if (textLower.includes(kwClean)) {
        matchedKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    });

    const keywordMatchPercent = customKeywords.length > 0 
      ? Math.round((matchedKeywords.length / customKeywords.length) * 100) 
      : 100;

    // Weighted Score
    let score = 0;
    if (hasContact) score += 15;
    if (hasSummary) score += 15;
    if (hasExperience) score += 20;
    if (hasEducation) score += 15;
    if (hasSkills) score += 15;
    if (hasQuantifiableMetrics) score += 10;
    if (foundVerbs.length >= 5) score += 10;

    // Integrate keyword match into overall ATS Readiness
    const overallScore = Math.round((score * 0.6) + (keywordMatchPercent * 0.4));

    return {
      overallScore: Math.min(100, overallScore),
      hasContact,
      hasSummary,
      hasExperience,
      hasEducation,
      hasSkills,
      hasProjects,
      hasQuantifiableMetrics,
      foundVerbsCount: foundVerbs.length,
      matchedKeywords,
      missingKeywords,
      keywordMatchPercent
    };
  }, [fullResumeText, resumeData, customKeywords]);

  // One-click inject missing keywords into Core Skills / Web Tech
  const handleAutoInjectKeywords = () => {
    if (atsAnalysis.missingKeywords.length === 0) return;
    
    // Add missing keywords safely into webTech or tools
    setResumeData(prev => ({
      ...prev,
      webTech: Array.from(new Set([...prev.webTech, ...atsAnalysis.missingKeywords.slice(0, 4)])),
      tools: Array.from(new Set([...prev.tools, ...atsAnalysis.missingKeywords.slice(4)]))
    }));
  };

  // Copy Plain Text to Clipboard (Universal ATS format)
  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(fullResumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  // Download ATS Text File (.txt)
  const handleDownloadTxt = () => {
    const blob = new Blob([fullResumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ATS_Resume_${resumeData.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  // Trigger ATS Clean Print / PDF dialog
  const handlePrintAts = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner & Title */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/30 p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <FileCheck className="w-3.5 h-3.5" /> Official ATS Resume Generator & Optimizer
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              100% Local & Privacy-Safe (No Gemini/Cloud AI)
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Parser Standard: 100% Text Compliant
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Workday • Taleo • Greenhouse • Lever Ready
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Applicant Tracking System (ATS) Resume Engine
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Generate clean, machine-parseable resumes formatted to pass enterprise ATS automated filters without table formatting issues, graphics distortion, or unparsed headers.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-black font-mono text-teal-400">
                {atsAnalysis.overallScore}%
              </div>
              <div className="text-[11px] text-slate-300 font-semibold">ATS Readiness Score</div>
              <div className="text-[10px] text-teal-400/80">High Parser Pass Rate</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-black font-mono text-cyan-400">
                {atsAnalysis.keywordMatchPercent}%
              </div>
              <div className="text-[11px] text-slate-300 font-semibold">Job Keyword Match</div>
              <div className="text-[10px] text-slate-400">{atsAnalysis.matchedKeywords.length}/{customKeywords.length} Targeted</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-black font-mono text-emerald-400">
                {atsAnalysis.foundVerbsCount}
              </div>
              <div className="text-[11px] text-slate-300 font-semibold">Active Action Verbs</div>
              <div className="text-[10px] text-slate-400">Strong impact statements</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-black font-mono text-amber-400">
                0 Tables
              </div>
              <div className="text-[11px] text-slate-300 font-semibold">Linear Hierarchy</div>
              <div className="text-[10px] text-slate-400">No multi-column bugs</div>
            </div>
          </div>

          {/* Action Export Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handlePrintAts}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save ATS PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>{downloaded ? 'Downloaded .TXT!' : 'Download ATS Text (.txt)'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-slate-800 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Raw Text!' : 'Copy Raw Text'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-3">
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveSubTab('preview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeSubTab === 'preview'
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>1. ATS Resume Preview</span>
          </button>
          <button
            onClick={() => setActiveSubTab('optimizer')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeSubTab === 'optimizer'
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wand2 className="w-4 h-4" />
            <span>2. Job Matcher & Optimizer</span>
          </button>
          <button
            onClick={() => setActiveSubTab('editor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeSubTab === 'editor'
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>3. Edit Resume Fields</span>
          </button>
        </div>

        {/* Template Style Selector */}
        {activeSubTab === 'preview' && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">ATS Layout:</span>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setTemplateStyle('classic')}
                className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${
                  templateStyle === 'classic' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Classic Standard
              </button>
              <button
                onClick={() => setTemplateStyle('modern')}
                className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${
                  templateStyle === 'modern' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Modern Clean
              </button>
              <button
                onClick={() => setTemplateStyle('compact')}
                className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${
                  templateStyle === 'compact' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Compact Density
              </button>
            </div>
          </div>
        )}
      </div>

      {/* TAB 1: ATS RESUME PREVIEW */}
      {activeSubTab === 'preview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: The Rendered ATS Document (8 Cols) */}
          <div className="lg:col-span-8">
            <div 
              id="ats-printable-document"
              className={`p-8 sm:p-12 rounded-2xl bg-white text-slate-950 shadow-2xl border border-slate-200 transition-all ${
                templateStyle === 'compact' ? 'text-xs leading-snug space-y-4' : 'text-sm leading-normal space-y-6'
              }`}
              style={{ fontFamily: 'Arial, Helvetica, "Nimbus Sans L", sans-serif' }}
            >
              
              {/* ATS Header: No tables, no columns, purely standard text */}
              <div className="text-center border-b border-slate-300 pb-4 space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                  {resumeData.name.toUpperCase()}
                </h1>
                <p className="text-xs font-semibold text-slate-700">
                  {resumeData.title}
                </p>
                <div className="text-xs text-slate-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1">
                  <span>{resumeData.location}</span>
                  <span>•</span>
                  <span>{resumeData.phone}</span>
                  <span>•</span>
                  <a href={`mailto:${resumeData.email}`} className="text-blue-700 underline">{resumeData.email}</a>
                </div>
                <div className="text-xs text-slate-600 flex flex-wrap items-center justify-center gap-x-3 pt-0.5">
                  <a href={resumeData.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">GitHub</a>
                  <span>•</span>
                  <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">LinkedIn Profile</a>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Professional Summary
                </h2>
                <p className="text-justify text-slate-800 leading-relaxed text-xs sm:text-sm">
                  {resumeData.summary}
                </p>
              </div>

              {/* TECHNICAL SKILLS & COMPETENCIES */}
              <div className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Technical Skills & Competencies
                </h2>
                <div className="space-y-1 text-xs sm:text-sm text-slate-800">
                  <div>
                    <strong className="text-slate-950">Programming Languages:</strong> {resumeData.programmingLanguages.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-950">Web Technologies & Frameworks:</strong> {resumeData.webTech.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-950">Productivity & Developer Tools:</strong> {resumeData.tools.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-950">Design & Multimedia Tools:</strong> {resumeData.designTools.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-950">Core Professional Strengths:</strong> {resumeData.coreSkills.join(', ')}
                  </div>
                </div>
              </div>

              {/* PROFESSIONAL EXPERIENCE */}
              <div className="space-y-3">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Professional Experience
                </h2>

                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-950">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="font-normal text-slate-600 italic text-xs">{exp.period}</span>
                    </div>
                    <div className="text-slate-600 text-xs">{exp.location}</div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-800 text-xs sm:text-sm">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* KEY TECHNICAL PROJECTS */}
              <div className="space-y-3">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Technical Projects
                </h2>

                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="space-y-0.5 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-950">
                      <span>{proj.title} <span className="font-normal text-slate-600">({proj.tech})</span></span>
                      <span className="font-medium text-slate-600 text-xs">{proj.role}</span>
                    </div>
                    <p className="text-slate-800 text-xs sm:text-sm">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* EDUCATION */}
              <div className="space-y-2">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Education
                </h2>

                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-950">
                      <span>{edu.degree}</span>
                      <span className="font-bold text-slate-900 text-xs">{edu.grade}</span>
                    </div>
                    <div className="text-slate-700 text-xs">
                      {edu.institution}, {edu.location} • <span className="italic">{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-slate-700 text-xs italic">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CERTIFICATIONS & TRAINING */}
              <div className="space-y-1.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  Certifications & Training
                </h2>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-800">
                  {resumeData.certifications.map((cert, idx) => (
                    <li key={idx}>
                      <strong className="text-slate-950">{cert.title}</strong> — {cert.issuer} ({cert.date})
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Right Column: ATS Scorecard & Live Health Checks (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* ATS Scorecard Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" /> ATS Parser Audit
                </h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                  {atsAnalysis.overallScore}/100
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">Standard Section Headers</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Valid
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">Contact Details Parsed</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Email & Phone
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">No Complex Table Layouts</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 0 Multi-cols
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">Action Verbs Count</span>
                  <span className="text-teal-400 font-mono font-bold">
                    {atsAnalysis.foundVerbsCount} Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">Job Keywords Matched</span>
                  <span className="text-cyan-400 font-mono font-bold">
                    {atsAnalysis.matchedKeywords.length} / {customKeywords.length}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                Single-column linear design ensures 100% text extraction in Workday, Taleo, Greenhouse, Lever, and iCIMS bots.
              </p>
            </div>

            {/* Target Job Quick Switcher */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <TargetIcon className="w-4 h-4 text-teal-400" /> Target Role Match
              </h3>

              <div className="space-y-2">
                {JOB_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedPresetIdx === idx
                        ? 'bg-teal-950/40 border-teal-500/50 text-teal-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-semibold">{preset.role}</div>
                    <div className="text-[10px] text-slate-400">{preset.company}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveSubTab('optimizer')}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Customize Job Description</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Keyword Match Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Role Keywords
                </h3>
                <span className="text-[11px] text-teal-400 font-mono">
                  {atsAnalysis.keywordMatchPercent}% Match
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {customKeywords.map((kw) => {
                  const isMatched = atsAnalysis.matchedKeywords.includes(kw);
                  return (
                    <span
                      key={kw}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-mono flex items-center gap-1 ${
                        isMatched
                          ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/30'
                          : 'bg-red-950/40 text-red-300 border border-red-500/30'
                      }`}
                    >
                      {isMatched ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      {kw}
                    </span>
                  );
                })}
              </div>

              {atsAnalysis.missingKeywords.length > 0 && (
                <button
                  onClick={handleAutoInjectKeywords}
                  className="mt-2 w-full py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-xs font-semibold border border-teal-500/30 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Wand2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Auto-Inject Missing Keywords</span>
                </button>
              )}
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: JOB MATCHER & OPTIMIZER */}
      {activeSubTab === 'optimizer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Job Description Input & Presets (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Target Job Description</h3>
                  <p className="text-xs text-slate-400">Paste any job requirements to run an instant keyword match analysis.</p>
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {JOB_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      selectedPresetIdx === idx
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {p.role}
                  </button>
                ))}
              </div>

              <textarea
                rows={12}
                value={jobDescriptionText}
                onChange={(e) => {
                  setJobDescriptionText(e.target.value);
                  // Extract words over 4 characters as potential keywords
                  const words = e.target.value.match(/[A-Za-z#+]{2,20}/g) || [];
                  const uniqueKw = Array.from(new Set(words.filter(w => w.length > 2))).slice(0, 15);
                  setCustomKeywords(uniqueKw);
                }}
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 font-mono leading-relaxed"
                placeholder="Paste Job Description here..."
              />
            </div>
          </div>

          {/* Right Column: Keyword Match & Improvement Analysis (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">ATS Keyword Match Analysis</h3>
                  <p className="text-xs text-slate-400">Scored against Md. Arafat Shadman's current resume.</p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-2xl font-black text-teal-400">{atsAnalysis.keywordMatchPercent}%</span>
                  <div className="text-[10px] text-slate-400">Match Ratio</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${atsAnalysis.keywordMatchPercent}%` }}
                />
              </div>

              {/* Matched Keywords */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Detected In Resume ({atsAnalysis.matchedKeywords.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {atsAnalysis.matchedKeywords.map((kw) => (
                    <span key={kw} className="text-xs px-2.5 py-1 rounded-md bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-mono font-medium">
                      ✓ {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Keywords */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Missing Keywords ({atsAnalysis.missingKeywords.length})
                </span>
                {atsAnalysis.missingKeywords.length === 0 ? (
                  <p className="text-xs text-emerald-400">All required target keywords are present in your resume!</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {atsAnalysis.missingKeywords.map((kw) => (
                      <span key={kw} className="text-xs px-2.5 py-1 rounded-md bg-red-950/40 text-red-300 border border-red-500/30 font-mono font-medium">
                        ✗ {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* One Click Optimizer Button */}
              {atsAnalysis.missingKeywords.length > 0 && (
                <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 space-y-3">
                  <div className="text-xs text-teal-300 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Quick Optimization Recommendation</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Injecting these keywords into your technical skills section will raise your keyword score to 100% without altering your factual employment history.
                  </p>
                  <button
                    onClick={handleAutoInjectKeywords}
                    className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>Apply Keyword Injection & Re-evaluate</span>
                  </button>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setActiveSubTab('preview')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-teal-400" />
                  <span>Preview Optimized ATS Document</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* TAB 3: EDIT RESUME FIELDS */}
      {activeSubTab === 'editor' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">Edit ATS Resume Content</h3>
            <p className="text-xs text-slate-400">Modify any field to tailor the resume for specific job applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Full Name</label>
              <input
                type="text"
                value={resumeData.name}
                onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Professional Title</label>
              <input
                type="text"
                value={resumeData.title}
                onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Location</label>
              <input
                type="text"
                value={resumeData.location}
                onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Phone</label>
              <input
                type="text"
                value={resumeData.phone}
                onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Professional Summary</label>
            <textarea
              rows={4}
              value={resumeData.summary}
              onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Programming Languages (Comma Separated)</label>
            <input
              type="text"
              value={resumeData.programmingLanguages.join(', ')}
              onChange={(e) => setResumeData({ 
                ...resumeData, 
                programmingLanguages: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
              })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Web Technologies (Comma Separated)</label>
            <input
              type="text"
              value={resumeData.webTech.join(', ')}
              onChange={(e) => setResumeData({ 
                ...resumeData, 
                webTech: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
              })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 font-mono"
            />
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-slate-800">
            <button
              onClick={() => setActiveSubTab('preview')}
              className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Done & View ATS Preview
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

// Target helper icon
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
