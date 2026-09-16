import React from 'react';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Heart, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLaunchPlan: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLaunchPlan }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Profile & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md">
                AS
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{profileData.name}</h3>
                <p className="text-xs text-teal-400 font-medium">Personal Digital Hub</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Sharing knowledge about Technology, AI, Cybersecurity, Education and Research. Empowering students, researchers, and developers.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-slate-700 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-slate-700 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Content Pillars & Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Content Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Artificial Intelligence & ML
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Cybersecurity & Defense
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  CSE / Programming & Python
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Database & SQL Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left text-teal-300 font-medium"
                >
                  Knee X-ray AI Research →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Planning */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('ats')} className="hover:text-teal-400 text-teal-300 font-medium transition-colors cursor-pointer text-left">
                  ATS Resume Generator & Optimizer →
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Featured Projects & IEEE Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Tutorials & Study Notes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  About Me & Qualifications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={onOpenLaunchPlan} className="text-teal-400 hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1">
                  <span>30-Day Launch Blueprint</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Details */}
          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h4>
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{profileData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`mailto:${profileData.contact.email}`} className="hover:text-teal-400 transition-colors">
                {profileData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`tel:${profileData.contact.phone}`} className="hover:text-teal-400 transition-colors">
                {profileData.contact.phone}
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" /> Available for Collaborations & Research
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{profileData.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('home')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
