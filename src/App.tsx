import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BlogSection } from './components/BlogSection';
import { ResearchViewer } from './components/ResearchViewer';
import { ProjectsSection } from './components/ProjectsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AtsGenerator } from './components/AtsGenerator';
import { NewsletterSection } from './components/NewsletterSection';
import { ArticleModal } from './components/ArticleModal';
import { WordPressBlueprintModal } from './components/WordPressBlueprintModal';
import { blogPosts } from './data/blogData';
import { BlogPost } from './types';
import { profileData } from './data/profileData';
import { 
  ArrowRight, 
  FlaskConical, 
  BookOpen, 
  Sparkles, 
  User, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  GraduationCap 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLaunchPlanOpen, setIsLaunchPlanOpen] = useState<boolean>(false);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenLaunchPlan={() => setIsLaunchPlanOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-16 sm:space-y-24">
            
            {/* Hero Section */}
            <Hero
              onNavigate={handleNavigate}
              onOpenLaunchPlan={() => setIsLaunchPlanOpen(true)}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
              
              {/* 5 Content Pillars Grid (Prompt Section 1) */}
              <section className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    Content Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Five Core Content Pillars
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Structured learning and research domains guiding all articles, tutorials, and development projects:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div 
                    onClick={() => handleNavigate('blog')}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1 transition-all cursor-pointer space-y-2 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-300">1. Technology & AI</h3>
                    <p className="text-[11px] text-slate-400">Deep learning, computer vision, transformers & neural systems.</p>
                  </div>

                  <div 
                    onClick={() => handleNavigate('blog')}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1 transition-all cursor-pointer space-y-2 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300">2. CSE & Programming</h3>
                    <p className="text-[11px] text-slate-400">Python, C/C++, React, algorithms, and OOP paradigms.</p>
                  </div>

                  <div 
                    onClick={() => handleNavigate('blog')}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1 transition-all cursor-pointer space-y-2 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300">3. Cybersecurity</h3>
                    <p className="text-[11px] text-slate-400">Defensive protocols, cryptography, scanning & malware mitigation.</p>
                  </div>

                  <div 
                    onClick={() => handleNavigate('blog')}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1 transition-all cursor-pointer space-y-2 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300">4. Education & Career</h3>
                    <p className="text-[11px] text-slate-400">University roadmaps, CV preparation, and tech interview guides.</p>
                  </div>

                  <div 
                    onClick={() => handleNavigate('research')}
                    className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/30 hover:border-teal-500 hover:-translate-y-1 transition-all cursor-pointer space-y-2 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-300">5. Research & Projects</h3>
                    <p className="text-[11px] text-teal-200/80">Knee X-ray bone loss detection, Grad-CAM & IEEE systems.</p>
                  </div>
                </div>
              </section>

              {/* Research Spotlight Section */}
              <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/50 to-slate-900 border border-teal-500/30 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                      <FlaskConical className="w-4 h-4" /> Academic Research Spotlight
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Automated Detection of Knee Bone Loss in X-ray Images
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Deep convolutional ResNet-50 pipeline achieving <strong>94.8% test accuracy</strong> with Grad-CAM explainability, isolating trabecular bone loss directly from standard knee radiographs.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate('research')}
                    className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shrink-0 flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-teal-500/20"
                  >
                    <span>Inspect Full Methodology & Heatmaps</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold font-mono text-teal-400">94.8%</div>
                    <div className="text-[11px] text-slate-400">Classification Accuracy</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold font-mono text-cyan-400">95.1%</div>
                    <div className="text-[11px] text-slate-400">Diagnostic Sensitivity</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold font-mono text-emerald-400">1,280</div>
                    <div className="text-[11px] text-slate-400">Digitized Radiographs</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold font-mono text-amber-400">Grad-CAM</div>
                    <div className="text-[11px] text-slate-400">Transparent Heatmaps</div>
                  </div>
                </div>
              </section>

              {/* Featured Blog Posts Feed (Section 11) */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Featured Articles & Deep Dives
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Top recommended reading from the 30 curated topics
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate('blog')}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all 30 topics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <BlogSection onSelectPost={setSelectedPost} featuredOnly={false} />
              </section>

              {/* About Section Snippet (Prompt Section 12) */}
              <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                      About the Author
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {profileData.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {profileData.aboutDetailed}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate('about')}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0 flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <span>Read More → About Me</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </section>

              {/* Newsletter Opt-in Section (Prompt Section 21) */}
              <NewsletterSection />

            </div>

          </div>
        )}

        {/* Tab 2: Blog */}
        {activeTab === 'blog' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <BlogSection onSelectPost={setSelectedPost} />
          </div>
        )}

        {/* Tab 3: Research */}
        {activeTab === 'research' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <ResearchViewer />
          </div>
        )}

        {/* Tab 4: Projects */}
        {activeTab === 'projects' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <ProjectsSection />
          </div>
        )}

        {/* Tab 5: Tutorials & Resources */}
        {activeTab === 'resources' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <ResourcesSection />
          </div>
        )}

        {/* Tab: ATS Generator & Optimizer */}
        {activeTab === 'ats' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <AtsGenerator />
          </div>
        )}

        {/* Tab 6: About Me */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* Tab 7: Contact */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLaunchPlan={() => setIsLaunchPlanOpen(true)}
      />

      {/* Full Article Reader Modal */}
      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onSelectRelated={(post) => setSelectedPost(post)}
        allPosts={blogPosts}
      />

      {/* WordPress 30-Day Launch Blueprint & Architecture Modal */}
      <WordPressBlueprintModal
        isOpen={isLaunchPlanOpen}
        onClose={() => setIsLaunchPlanOpen(false)}
      />

    </div>
  );
}
