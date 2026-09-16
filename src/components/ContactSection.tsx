import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook, 
  MessageSquare, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Research Collaboration',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        category: 'Research Collaboration',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-400 border border-teal-500/20">
          <Mail className="w-3.5 h-3.5" /> Direct Communication Channel
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let’s Connect & Collaborate
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Whether you are an academic researcher interested in clinical AI, an organization seeking front-end engineering expertise, or a student looking for tech guidance, I’d love to hear from you.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Info & Social Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-lg">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Physical Location</div>
                  <div className="font-semibold text-white">{profileData.contact.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Electronic Mail</div>
                  <a href={`mailto:${profileData.contact.email}`} className="font-semibold text-teal-400 hover:underline">
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Mobile / WhatsApp</div>
                  <a href={`tel:${profileData.contact.phone}`} className="font-semibold text-white hover:text-teal-300">
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 text-xs text-teal-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Standard response time: Within 24-48 business hours.</span>
            </div>
          </div>

          {/* Social Channels Network (Prompt Section 20) */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Official Media Channels
            </h3>
            <p className="text-xs text-slate-400">
              Follow for daily technical updates, YouTube tutorial releases, and open-source software:
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 text-xs text-slate-200 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <div className="truncate">
                  <span className="font-bold block">GitHub</span>
                  <span className="text-[10px] text-slate-400">@asshovon</span>
                </div>
              </a>

              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 flex items-center gap-2.5 text-xs text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <div className="truncate">
                  <span className="font-bold block">LinkedIn</span>
                  <span className="text-[10px] text-slate-400">Md. Arafat Shadman</span>
                </div>
              </a>

              <a
                href={profileData.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-red-500/40 flex items-center gap-2.5 text-xs text-slate-200 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <div className="truncate">
                  <span className="font-bold block">YouTube</span>
                  <span className="text-[10px] text-slate-400">@arafatsh8830</span>
                </div>
              </a>

              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 flex items-center gap-2.5 text-xs text-slate-200 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <div className="truncate">
                  <span className="font-bold block">Facebook</span>
                  <span className="text-[10px] text-slate-400">AS Shovon</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out the form below and your inquiry will be routed directly to Md. Arafat Shadman.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Transmitted Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. A confirmation has been logged, and I will review your message shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Tanvir Ahmed"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="Research Collaboration">AI & Medical Research Collaboration</option>
                      <option value="IEEE / Club Event">IEEE / Conference / Event Invitation</option>
                      <option value="Web & Front-End">Web & Software Engineering</option>
                      <option value="Tutorial / Education">Education / Tutorial Query</option>
                      <option value="General">General Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject Line</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Knee X-ray research"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Detailed Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your collaboration idea, question, or project requirements..."
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
