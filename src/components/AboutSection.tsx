import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  HeartHandshake, 
  FileDown, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Users, 
  Download,
  Check,
  Printer,
  Sparkles,
  Github,
  Linkedin,
  X,
  Eye,
  ExternalLink,
  ShieldAlert,
  Compass,
  FileCheck
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface AboutSectionProps {
  onNavigate?: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);

  const handlePrintCV = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Header Profile Hero Card */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Avatar Monogram Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-3xl sm:text-4xl shadow-2xl shadow-teal-500/20 shrink-0">
            AS
          </div>

          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {profileData.name}
                </h1>
                <p className="text-teal-400 text-sm font-semibold mt-0.5">
                  {profileData.title}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('ats')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 font-semibold text-xs border border-teal-500/40 transition-all cursor-pointer shadow-sm"
                  >
                    <FileCheck className="w-4 h-4 text-teal-400" />
                    <span>ATS Resume Generator</span>
                  </button>
                )}
                <button
                  onClick={() => setShowCvModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-teal-400" />
                  <span>Preview Official CV</span>
                </button>
                <button
                  onClick={handlePrintCV}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  {downloadSuccess ? <Check className="w-4 h-4" /> : <Printer className="w-4 h-4" />}
                  <span>{downloadSuccess ? 'Preparing Print...' : 'Print / Download CV'}</span>
                </button>
              </div>
            </div>

            {/* Address & Quick Contacts */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {profileData.contact.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href={`mailto:${profileData.contact.email}`} className="hover:text-teal-300">
                  {profileData.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${profileData.contact.phone}`} className="hover:text-teal-300">
                  {profileData.contact.phone}
                </a>
              </span>
            </div>

            {/* Summary */}
            <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {profileData.bio}
            </p>

            {/* Core Skills from Page 1 */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold text-slate-400">Core Strengths:</span>
              {profileData.skills.core.map((core) => (
                <span
                  key={core}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20"
                >
                  {core}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Main Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Experience, Voluntary, and Education (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-400" /> Professional Experience
            </h2>
            <div className="space-y-4">
              {profileData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs text-teal-400 font-mono font-medium px-2 py-0.5 rounded bg-slate-950">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-semibold">
                    {exp.organization} • <span className="text-slate-500 font-normal">{exp.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Voluntary Experiences (Page 2 & 3 of new CV) */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" /> Voluntary Leadership & Community
            </h2>
            <div className="space-y-4">
              {profileData.voluntaryExperiences.map((vol, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{vol.role}</h3>
                    <span className="text-xs text-cyan-400 font-mono font-medium px-2 py-0.5 rounded bg-slate-950">
                      {vol.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-semibold">
                    {vol.organization} • <span className="text-slate-500 font-normal">{vol.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {vol.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {vol.skills.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-400" /> Academic Qualifications
            </h2>
            <div className="space-y-3">
              {profileData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono font-bold text-teal-400 px-2 py-0.5 rounded bg-slate-950">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Skills, Certifications, References (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Technical Skills Categorization */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-teal-400" /> Technical Competencies
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-teal-400 block mb-1">Programming Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.programming.map((p) => (
                    <span key={p} className="px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-800 font-mono font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-semibold text-teal-400 block mb-1">Web Development:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.web.map((w) => (
                    <span key={w} className="px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-800 font-mono font-medium">
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-semibold text-teal-400 block mb-1">Design & Multimedia Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.design.map((d) => (
                    <span key={d} className="px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-800 font-mono font-medium">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-semibold text-teal-400 block mb-1">Productivity Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-800 font-mono font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-semibold text-teal-400 block mb-1">Core Professional Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.core.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded bg-teal-950/30 text-teal-300 border border-teal-500/20 font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" /> Certifications & Training
            </h2>
            {profileData.certifications.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <div className="font-bold text-white text-sm">{cert.title}</div>
                <div className="text-teal-400 font-medium">{cert.institution} {cert.location ? `• ${cert.location}` : ''}</div>
                <div className="text-slate-400">{cert.date}</div>
                <div className="text-slate-400 pt-1">{cert.skills.join(', ')}</div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" /> Languages
            </h2>
            <div className="space-y-2 text-xs">
              {profileData.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white">{lang.name}</span>
                  <span className="text-slate-400">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Professional References (from New CV) */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-teal-400" /> Academic References
            </h2>
            <div className="space-y-3">
              {profileData.references.map((ref, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <h4 className="font-bold text-white text-sm">{ref.name}</h4>
                  <p className="text-teal-400 font-medium">{ref.title}</p>
                  {ref.department && <p className="text-slate-400">{ref.department}</p>}
                  <p className="text-slate-400">{ref.institution}</p>
                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-teal-400" /> {ref.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-teal-400" /> {ref.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Official CV Modal (Complete 3-Page Replica) */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 max-h-[94vh] flex flex-col">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900 sticky top-0 z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Official Curriculum Vitae • {profileData.name}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Current Version • Updated September 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintCV}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Document Paper Simulation */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-200 font-sans">
              
              {/* PAGE 1 CONTENT */}
              <div className="p-8 sm:p-12 rounded-xl bg-white text-slate-900 shadow-2xl space-y-6 max-w-3xl mx-auto text-xs sm:text-sm border border-slate-200">
                
                {/* CV Header */}
                <div className="border-b-2 border-slate-800 pb-4 space-y-1">
                  <h1 className="text-2xl font-black text-slate-950 tracking-tight">
                    MD.ARAFAT SHADMAN
                  </h1>
                  <p className="text-xs text-slate-700 font-medium">
                    Flat- F3, Navana Celestial<br />
                    23 Larmini Street, Wari, Dhaka-1203, Bangladesh<br />
                    Cell No: +8801756593301<br />
                    Email: <a href="mailto:asshovon15@gmail.com" className="text-blue-600 underline">asshovon15@gmail.com</a><br />
                    Github: <a href="https://github.com/asshovon" target="_blank" rel="noreferrer" className="text-blue-600 underline">asshovon</a><br />
                    LinkedIn: <a href="https://www.linkedin.com/in/md-arafat-shadman-4a39981b6/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Md.Arafat Shadman | LinkedIn</a>
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="space-y-1.5">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Professional Summary
                  </h2>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    {profileData.bio}
                  </p>
                </div>

                {/* Core Skills */}
                <div className="space-y-1.5">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Core Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-800 pl-2">
                    <div>• Adaptability</div>
                    <div>• Communication</div>
                    <div>• Management</div>
                    <div>• Creative & Critical Thinking</div>
                    <div>• Teamwork</div>
                  </div>
                </div>

                {/* Professional Experiences */}
                <div className="space-y-3">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Professional Experiences
                  </h2>

                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-slate-950">Internship-Graphic Design</div>
                    <div className="text-slate-700 font-semibold">Requin BD</div>
                    <div className="text-slate-600 italic">Dhaka, Bangladesh | January 1, 2024 – May 15, 2024</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Designed book covers, banners, and social media graphics.</li>
                      <li>Created marketing materials using Photoshop and Illustrator.</li>
                      <li>Worked with clients to deliver creative design solutions.</li>
                    </ul>
                  </div>

                  <div className="space-y-1 text-xs pt-1">
                    <div className="font-bold text-slate-950">Executive Member-Web and IT Committee</div>
                    <div className="text-slate-700 font-semibold">IEEE Computer Society Bangladesh Chapter</div>
                    <div className="text-slate-600 italic">Dhaka Bangladesh | 2023</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Learning about REACT Language</li>
                      <li>Work with the Front-end Team to develop a website</li>
                      <li>Work in the communication team for organizing event.</li>
                    </ul>
                  </div>

                  <div className="space-y-1 text-xs pt-1">
                    <div className="font-bold text-slate-950">.NET Development Intern (Remote)</div>
                    <div className="text-slate-700 font-semibold">Itransition Company, United Kingdom</div>
                    <div className="text-slate-600 italic">Apr 06, 2026 – Jun 09, 2026</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Developed ASP.NET applications using C#.</li>
                      <li>Designed SQL Server databases.</li>
                      <li>Implemented CRUD operations.</li>
                      <li>Collaborated using Git.</li>
                      <li>Tested and debugged web applications.</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Education
                  </h2>

                  <div className="space-y-1.5 text-xs text-slate-800">
                    <div>
                      <span className="font-bold text-slate-950 block">Bachelor of Science in Computer Science and Engineering</span>
                      <span>Bangladesh University of Business & Technology, Dhaka, Bangladesh</span><br />
                      <span>Status: Graduation</span><br />
                      <span className="font-bold text-slate-900">CGPA: 3.33 out of 4.00</span>
                    </div>

                    <div className="pt-1">
                      <span className="font-bold text-slate-950 block">Diploma in Engineering</span>
                      <span>City polytechnic & Textile institute, Rajshahi, Bangladesh</span><br />
                      <span>Passing Year: 2020</span><br />
                      <span className="font-bold text-slate-900">CGPA: 3.72/4.00</span>
                    </div>

                    <div className="pt-1">
                      <span className="font-bold text-slate-950 block">Higher Secondary Certificate (H.S.C.)</span>
                      <span>Godagari Govt. High School and College, Rajshahi, Bangladesh</span><br />
                      <span>Passing Year: 2016</span><br />
                      <span className="font-bold text-slate-900">GPA: 3.42 out of 5.00</span>
                    </div>

                    <div className="pt-1">
                      <span className="font-bold text-slate-950 block">Secondary School Certificate (S.S.C.)</span>
                      <span>Avaya High School, Rajshahi, Bangladesh</span><br />
                      <span>Passing Year: 2014</span><br />
                      <span className="font-bold text-slate-900">GPA: 4.63 out of 5.00</span>
                    </div>
                  </div>
                </div>

                {/* Certifications & Training */}
                <div className="space-y-2 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Certifications & Training
                  </h2>
                  <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
                    <li>
                      <strong>Fronted Development with React</strong>, Creative IT Institute, November 27-29, 2024
                    </li>
                    <li>
                      <strong>Python developer</strong>, Bubt Tafe, Rupnagar, Mirpur-2, Dhaka
                    </li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="space-y-1.5 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Technical Skills
                  </h2>
                  <div className="space-y-1 text-xs text-slate-800">
                    <div>• <strong>Programming Language:</strong> C, C++, C#, Python, Java, REACT</div>
                    <div>• <strong>Web Development:</strong> Html, CSS, Wordpress, odoo</div>
                    <div>• <strong>Design and Multimedia Tools:</strong> Adobe Photoshop, Adobe Illustrator, Canva, VSDC</div>
                    <div>• <strong>Productivity Tools:</strong> Microsoft Word, Excel, PowerPoint</div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-1.5 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Projects
                  </h2>
                  <div className="text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-slate-950">IEEE CS BDC Website Development</div>
                    <div className="text-slate-700">Executive Member- Web and IT Committee</div>
                    <div className="text-slate-600">IEEE Computer Society Bangladesh Chapter, Dhaka, Bangladesh | June 2024</div>
                    <ul className="list-disc list-inside text-slate-700 pl-1">
                      <li>Collaborated with the IT team to develop the website using REACT.</li>
                      <li>Collaborated with Front-end web development team</li>
                    </ul>
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-1 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Languages
                  </h2>
                  <div className="text-xs text-slate-800 space-y-0.5">
                    <div>• <strong>Bangla:</strong> Native Language</div>
                    <div>• <strong>English:</strong> Intermediate Proficiency</div>
                  </div>
                </div>

                {/* Voluntary Experiences */}
                <div className="space-y-2 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    Voluntary Experiences
                  </h2>

                  <div className="text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-slate-950">General Member</div>
                    <div className="text-slate-700">Bangladesh Wheelchair Sports Foundation</div>
                    <div className="text-slate-600 italic">Dhaka, Bangladesh | January 01 2021 – Present</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Assisted in organizing and executing events, including logistical coordination, participant registration, and onsite support.</li>
                      <li>Providing support during sporting events by managing crowd control, assisting spectators, and ensuring a safe and enjoyable experience for all attendees.</li>
                    </ul>
                  </div>

                  <div className="text-xs text-slate-800 space-y-1 pt-1">
                    <div className="font-bold text-slate-950">Media & Public Relations Executive</div>
                    <div className="text-slate-700">BUBT Social Welfare Club</div>
                    <div className="text-slate-600 italic">Dhaka, Bangladesh | April 01, 2024 – April 01,2025</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Maintaining and monitoring Social Media pages of the club</li>
                      <li>Supporting to the executive to achieve the goals of the club</li>
                    </ul>
                  </div>

                  <div className="text-xs text-slate-800 space-y-1 pt-1">
                    <div className="font-bold text-slate-950">Executive Member</div>
                    <div className="text-slate-700">BUBT Rover Scout Group</div>
                    <div className="text-slate-600 italic">Dhaka, Bangladesh | Jan 17, 2026 – Jun 30, 2026</div>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                      <li>Organized scouting events and community service activities.</li>
                      <li>Coordinated with team members to support group operations.</li>
                      <li>Demonstrated leadership, teamwork, and communication skills.</li>
                    </ul>
                  </div>
                </div>

                {/* References */}
                <div className="space-y-2 pt-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-1 border-l-4 border-slate-800 text-slate-950">
                    References
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-800 pt-1">
                    <div className="p-3 rounded bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950">Md. Saifur Rahman</div>
                      <div className="text-slate-700">Assistant Professor</div>
                      <div className="text-slate-600">Dept. of Computer Science and Engineering</div>
                      <div className="text-slate-600">Bangladesh University of Business & Technology, Dhaka, Bangladesh</div>
                      <div className="pt-1 font-semibold text-slate-800">Cell No: +880 1714 019509</div>
                      <div>Email: <a href="mailto:saifurs@gmail.com" className="text-blue-600 underline">saifurs@gmail.com</a></div>
                    </div>

                    <div className="p-3 rounded bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950">T.M. Amir-ul-Haque Bhuiyan</div>
                      <div className="text-slate-700">Assistant Professor</div>
                      <div className="text-slate-600">Dept. of Computer Science and Engineering</div>
                      <div className="text-slate-600">Bangladesh University of Business & Technology, Dhaka, Bangladesh</div>
                      <div className="pt-1 font-semibold text-slate-800">Cell No: 01732802625</div>
                      <div>Email: <a href="mailto:amir@bubt.edu.bd" className="text-blue-600 underline">amir@bubt.edu.bd</a></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Bottom Controls */}
            <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 text-xs text-slate-400">
              <span>Official 3-Page CV Verified • Md. Arafat Shadman</span>
              <button
                onClick={() => setShowCvModal(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
