import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Tag, 
  BookOpen, 
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { BlogPost, ContentCategory } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  featuredOnly?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, featuredOnly = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ContentCategory[] = [
    'All',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Programming',
    'Database',
    'Education & Career',
    'Research'
  ];

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      if (featuredOnly && !post.featured) return false;
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, featuredOnly]);

  const featuredThree = blogPosts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Section Header */}
      {!featuredOnly && (
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-400 border border-teal-500/20">
            <BookOpen className="w-3.5 h-3.5" /> Technical Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Articles & Engineering Tutorials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            In-depth breakdowns spanning Artificial Intelligence, Cybersecurity defense, Python programming, relational database engineering, and academic career roadmaps.
          </p>
        </div>
      )}

      {/* Featured 3 Articles Highlight (Prompt Section 11) */}
      {!featuredOnly && selectedCategory === 'All' && searchQuery === '' && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Featured Articles (Prompt Spotlight)
            </h3>
            <span className="text-xs text-slate-500">Curated Read List</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredThree.map((post, idx) => (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group p-6 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900 border border-slate-700/80 hover:border-teal-500/50 transition-all duration-200 shadow-lg hover:shadow-teal-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.publishedDate}</span>
                  <span className="text-teal-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Controls Bar */}
      {!featuredOnly && (
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 30 topics (e.g., Grad-CAM, SQL, Phishing, Python)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs text-slate-400">
              Showing <strong className="text-white">{filteredPosts.length}</strong> of {blogPosts.length} articles
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            id={`post-card-${post.id}`}
            onClick={() => onSelectPost(post)}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-teal-500/5 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md font-semibold bg-slate-800 text-teal-400 border border-slate-700/60">
                  {post.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>{post.publishedDate}</span>
              <span className="text-teal-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <h4 className="text-base font-bold text-white">No articles matched your filter</h4>
          <p className="text-xs text-slate-400">Try searching for a different keyword or select "All" categories.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-semibold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
