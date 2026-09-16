import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 500);
  };

  return (
    <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-slate-800 p-8 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
        
        <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto shadow-inner">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Get New Articles in Your Inbox
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">
          Join students, developers, and researchers receiving curated deep dives on Artificial Intelligence, Cybersecurity, Python, and medical vision research. No spam, unsubscribe anytime.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing! You’ll receive our next technical digest.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm whitespace-nowrap shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="text-[11px] text-slate-500 pt-1">
          Weekly updates • Zero spam • Direct technical insights from {profileData.name}
        </div>

      </div>
    </section>
  );
};
