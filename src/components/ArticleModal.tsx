import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Copy, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  ArrowRight,
  ExternalLink,
  Tag
} from 'lucide-react';
import { BlogPost } from '../types';
import { profileData } from '../data/profileData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectRelated: (post: BlogPost) => void;
  allPosts: BlogPost[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onSelectRelated,
  allPosts
}) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!post) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Top Header Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Copy Article URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
          
          {/* Article Title & Metadata */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-snug">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-xs">
                  AS
                </div>
                <span className="text-slate-200 font-medium">{profileData.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishedDate}</span>
              </div>
              <span>•</span>
              <span>{profileData.title.split('|')[0]}</span>
            </div>
          </div>

          {/* Featured Schematic / Visual Banner Card */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 via-slate-800/40 to-slate-900 border border-slate-700/60 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-teal-400">
                  Featured Topic
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">{post.title}</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">{post.excerpt}</p>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
                  {post.tags.slice(0, 2).join(' • ')}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Introduction */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">01.</span> Introduction
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {post.introduction}
            </p>
          </div>

          {/* Section: What is [Topic]? */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">02.</span> What is {post.title.split(':')[0].replace(/What is |How I Built /i, '')}?
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {post.whatIs}
            </p>
          </div>

          {/* Section: Why is it important? */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">03.</span> Why is it Important?
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {post.whyImportant}
            </p>
          </div>

          {/* Section: How does it work? */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">04.</span> How Does It Work?
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {post.howItWorks}
            </p>

            {/* Code Snippet if present */}
            {post.codeSnippet && (
              <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <span>{post.codeSnippet.caption}</span>
                  <span className="uppercase text-teal-400 font-semibold">{post.codeSnippet.language}</span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{post.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Section: Advantages & Disadvantages */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">05.</span> Advantages & Limitations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Advantages
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {post.advantages.map((adv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <h4 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" /> Challenges & Limitations
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {post.disadvantages.map((dis, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Practical Real-World Applications */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
              <span className="text-slate-500 text-sm font-mono">06.</span> Practical Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {post.applications.map((app, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-sm text-slate-300 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Frequently Asked Questions (FAQ) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-teal-400 flex items-center gap-2">
                <span className="text-slate-500 text-sm font-mono">07.</span> Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {post.faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="rounded-xl border border-slate-800 bg-slate-800/40 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full px-4 py-3 text-left font-medium text-slate-200 hover:text-white flex items-center justify-between text-sm cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-teal-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3.5 text-sm text-slate-300 border-t border-slate-800/60 pt-2 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section: Conclusion */}
          <div className="space-y-3 p-5 rounded-xl bg-slate-800/30 border border-slate-700/40">
            <h2 className="text-lg font-bold text-white">Conclusion</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              {post.conclusion}
            </p>
          </div>

          {/* References */}
          {post.references && post.references.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
              <h3 className="font-semibold text-slate-300">Academic & Technical References:</h3>
              <ul className="list-disc list-inside space-y-1">
                {post.references.map((ref, idx) => (
                  <li key={idx} className="leading-normal">{ref}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Author Signature Box */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold text-xl shrink-0">
              AS
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-base font-bold text-white">{profileData.name}</h4>
              <p className="text-xs text-teal-400">{profileData.title}</p>
              <p className="text-xs text-slate-400">
                Department of Computer Science & Engineering, BUBT • Executive Member, IEEE Computer Society Bangladesh Chapter
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <button
                    key={related.id}
                    onClick={() => onSelectRelated(related)}
                    className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-left transition-all group cursor-pointer"
                  >
                    <span className="text-xs text-teal-400 font-medium">{related.category}</span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-teal-300 mt-1 line-clamp-2">
                      {related.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Close */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
