import React, { useState } from 'react';
import { 
  Terminal, 
  BookOpen, 
  FlaskConical, 
  FolderGit2, 
  Library, 
  User, 
  Mail, 
  Rocket, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook,
  FileCheck 
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLaunchPlan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenLaunchPlan
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'ats', label: 'ATS Generator', icon: FileCheck },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'research', label: 'Research', icon: FlaskConical },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'resources', label: 'Tutorials & Resources', icon: Library },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Personal Branding */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
              AS
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-white group-hover:text-teal-400 transition-colors">
                {profileData.name}
              </div>
              <div className="text-xs text-slate-400 hidden sm:block font-medium">
                {profileData.tagline}
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-400 border border-teal-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Area: 30-Day Launch Blueprint & Social Links */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="launch-plan-modal-btn"
              onClick={onOpenLaunchPlan}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 text-xs font-semibold border border-teal-500/30 transition-colors cursor-pointer"
              title="View the 30-Day WordPress Launch Blueprint"
            >
              <Rocket className="w-3.5 h-3.5 text-teal-400" />
              <span>Launch Plan</span>
            </button>

            <div className="h-4 w-px bg-slate-800 mx-1" />

            <div className="flex items-center gap-1 text-slate-400">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                title="GitHub @asshovon"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-red-400 hover:bg-slate-800 transition-colors"
                title="YouTube @arafatsh8830"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-blue-400 hover:bg-slate-800 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-launch-btn"
              onClick={onOpenLaunchPlan}
              className="px-2.5 py-1 text-xs bg-teal-500/10 text-teal-400 rounded-md border border-teal-500/30"
            >
              Launch Plan
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 py-1 text-xs text-slate-400 font-medium border-b border-slate-800/80 mb-2">
            {profileData.tagline}
          </div>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  isActive
                    ? 'bg-teal-500/15 text-teal-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-slate-400">
            <a href={profileData.social.github} target="_blank" rel="noreferrer" className="p-2 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={profileData.social.youtube} target="_blank" rel="noreferrer" className="p-2 hover:text-red-400">
              <Youtube className="w-5 h-5" />
            </a>
            <a href={profileData.social.facebook} target="_blank" rel="noreferrer" className="p-2 hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="p-2 hover:text-teal-400">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
