import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Circle, 
  Rocket, 
  Server, 
  ShieldCheck, 
  Search, 
  Layers, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Globe
} from 'lucide-react';
import { thirtyDayLaunchPlan, wordPressPluginsBlueprint } from '../data/launchPlanData';
import { profileData } from '../data/profileData';

interface WordPressBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressBlueprintModal: React.FC<WordPressBlueprintModalProps> = ({ isOpen, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true
  });

  if (!isOpen) return null;

  const toggleDay = (day: number) => {
    setCompletedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const categories = ['All', 'Infrastructure', 'Setup', 'Design', 'Content', 'SEO', 'Security', 'QA', 'Launch'];

  const filteredDays = selectedFilter === 'All'
    ? thirtyDayLaunchPlan
    : thirtyDayLaunchPlan.filter(d => d.category.toLowerCase() === selectedFilter.toLowerCase());

  const progressPercent = Math.round((Object.values(completedDays).filter(Boolean).length / thirtyDayLaunchPlan.length) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">
                WordPress Launch Blueprint & 30-Day Roadmap
              </h2>
              <p className="text-xs text-slate-400">
                Personal Digital Hub strategy for {profileData.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
          
          {/* Section 23 Blueprint: Personal Brand Ecosystem Visual */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Personal Brand Ecosystem (Personal Digital Hub)
              </h3>
              <span className="text-xs text-slate-400 font-mono">Workflow Blueprint</span>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-center font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto">
              <div className="inline-block min-w-[550px]">
                <div className="p-2.5 rounded-lg bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30 max-w-xs mx-auto mb-3">
                  Md. Arafat Shadman (Personal Brand Hub)
                </div>
                <div className="text-teal-400 text-xs">│</div>
                <div className="text-slate-500 text-xs">┌────────────────┼────────────────┐</div>
                <div className="grid grid-cols-3 gap-3 my-2 text-xs">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <strong className="text-white block">1. Tech Blog</strong>
                    <span className="text-slate-400 text-[11px]">AI • Cyber • Python • DB</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <strong className="text-white block">2. Research Hub</strong>
                    <span className="text-slate-400 text-[11px]">Knee X-ray AI • Grad-CAM</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <strong className="text-white block">3. Portfolio</strong>
                    <span className="text-slate-400 text-[11px]">IEEE CS BDC • Projects</span>
                  </div>
                </div>
                <div className="text-slate-500 text-xs">└────────────────┼────────────────┘</div>
                <div className="text-teal-400 text-xs">│</div>
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 max-w-sm mx-auto mt-2 text-xs text-slate-300">
                  <strong className="text-white">Social Amplification Channels</strong>
                  <div className="text-teal-300 font-medium mt-0.5">
                    YouTube (@arafatsh8830) • Facebook • LinkedIn • GitHub (@asshovon)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Progress Meter */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-white">30-Day Launch Roadmap Progress</span>
              <span className="font-bold text-teal-400 font-mono">{progressPercent}% Completed</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-400">
              Interactive checklist: click any day below to mark tasks as completed.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-teal-500 text-slate-950'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 30-Day Calendar Checklist */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Daily Action Items (30-Day Plan)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredDays.map((item) => {
                const isDone = !!completedDays[item.day];
                return (
                  <div
                    key={item.day}
                    onClick={() => toggleDay(item.day)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isDone
                        ? 'bg-teal-950/20 border-teal-500/30 text-slate-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <button className="mt-0.5 shrink-0 text-teal-400">
                      {isDone ? <CheckCircle2 className="w-5 h-5 text-teal-400" /> : <Circle className="w-5 h-5 text-slate-600" />}
                    </button>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-teal-400">Day {item.day}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <h4 className={`text-sm font-bold ${isDone ? 'text-white' : 'text-slate-300'}`}>
                        {item.task}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommended Essential WordPress Plugins (Prompt Section 16) */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Essential WordPress Plugin Stack
            </h3>
            <p className="text-xs text-slate-400">
              Lightweight, security-conscious plugin stack recommended to avoid site bloat and maximize Google PageSpeed scores:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {wordPressPluginsBlueprint.map((plug, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{plug.name}</span>
                    <span className="text-[10px] font-semibold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                      {plug.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {plug.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 text-xs text-slate-400">
          <span>Official Launch Roadmap • Md. Arafat Shadman</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-colors"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
