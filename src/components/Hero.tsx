import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  FlaskConical, 
  FolderGit2, 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Sparkles, 
  Award,
  CheckCircle2,
  Mail,
  FileCode2,
  FileCheck
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onOpenLaunchPlan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenLaunchPlan }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden">
      
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-500/10 via-cyan-500/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="font-semibold text-teal-400">B.Sc. in CSE @ BUBT</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">IEEE CS BDC Web & IT</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-teal-300/90">
                {profileData.title}
              </p>
            </div>

            {/* Core Value Pitch from Prompt Section 10 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sharing knowledge about <strong>Technology</strong>, <strong>Artificial Intelligence</strong>,{' '}
              <strong>Cybersecurity</strong>, <strong>Education</strong>, and <strong>Research</strong>. Building accessible educational guides and deep learning diagnostics.
            </p>

            {/* Primary Action Buttons from Prompt Section 10 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-read-blog-btn"
                onClick={() => onNavigate('blog')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read My Blog</span>
              </button>

              <button
                id="hero-view-projects-btn"
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </button>

              <button
                id="hero-explore-research-btn"
                onClick={() => onNavigate('research')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-950/40 hover:bg-teal-950/70 text-teal-300 font-semibold text-sm border border-teal-500/30 transition-all cursor-pointer"
              >
                <FlaskConical className="w-4 h-4" />
                <span>Research Paper</span>
              </button>

              <button
                id="hero-ats-generator-btn"
                onClick={() => onNavigate('ats')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 font-semibold text-sm border border-teal-500/40 transition-all cursor-pointer shadow-sm"
              >
                <FileCheck className="w-4 h-4 text-teal-400" />
                <span>ATS Resume Generator</span>
              </button>
            </div>

            {/* Social Connection Channels with Direct Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>YouTube</span>
              </a>
              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column: 5 Cols Profile Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-teal-500/20 shrink-0">
                  AS
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{profileData.name}</h2>
                  <p className="text-xs text-teal-400 font-medium">B.Sc. in CSE • Researcher • Creator</p>
                  <p className="text-xs text-slate-400 mt-0.5">{profileData.contact.city}</p>
                </div>
              </div>

              {/* Quick Profile Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-teal-400 font-bold font-mono text-base">94.8%</div>
                  <div className="text-slate-300 font-medium">X-Ray AI Accuracy</div>
                  <div className="text-[10px] text-slate-400">Knee Bone Loss Model</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-cyan-400 font-bold font-mono text-base">IEEE CS</div>
                  <div className="text-slate-300 font-medium">Executive Web & IT</div>
                  <div className="text-[10px] text-slate-400">Bangladesh Chapter</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-emerald-400 font-bold font-mono text-base">3.33 / 4.0</div>
                  <div className="text-slate-300 font-medium">Undergrad CGPA</div>
                  <div className="text-[10px] text-slate-400">BUBT Dhaka</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-amber-400 font-bold font-mono text-base">30 Topics</div>
                  <div className="text-slate-300 font-medium">Curated Articles</div>
                  <div className="text-[10px] text-slate-400">AI • Cyber • Python</div>
                </div>
              </div>

              {/* Personal Digital Hub Blueprint Card */}
              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Personal Brand Ecosystem
                  </span>
                  <button
                    onClick={onOpenLaunchPlan}
                    className="text-[11px] text-teal-400 hover:text-teal-300 underline font-semibold cursor-pointer"
                  >
                    View Plan
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integrating <strong>Blog + Portfolio + Research + Tutorials</strong> into a centralized technical authority platform.
                </p>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Get in Touch / Discuss Collaboration</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
