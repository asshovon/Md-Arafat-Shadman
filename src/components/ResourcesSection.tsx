import React, { useState } from 'react';
import { 
  Library, 
  Download, 
  Check, 
  ExternalLink, 
  BookOpen, 
  Code, 
  FileText, 
  Compass, 
  Sparkles,
  Search
} from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import { ResourceItem } from '../types';

export const ResourcesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const categories = ['All', 'Python', 'CSE', 'Database', 'Cybersecurity', 'AI/ML'];

  const filtered = selectedCategory === 'All'
    ? resourcesData
    : resourcesData.filter(r => r.category === selectedCategory);

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-400 border border-teal-500/20">
          <Library className="w-3.5 h-3.5" /> Curated Learning Vault
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tutorials, Study Roadmaps & Cheat Sheets
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Structured academic notes, SQL query patterns, Python cheat sheets, and medical deep learning guides curated by Md. Arafat Shadman for CSE students and developers.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/10'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const isDownloaded = downloadedId === item.id;
          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-md font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Topics Covered */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Syllabus / Modules:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.topics.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono font-medium">
                  {item.type}
                </span>
                <button
                  onClick={() => handleDownload(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isDownloaded
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-200 border border-slate-700'
                  }`}
                >
                  {isDownloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{isDownloaded ? 'Downloaded!' : 'Access Guide'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
