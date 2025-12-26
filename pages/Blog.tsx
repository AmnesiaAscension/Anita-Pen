
import React, { useState } from 'react';
import { Hero, PostCard } from '../components.tsx';
import { POSTS } from '../data.ts';

const Blog: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredPosts = POSTS.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-16">
      <Hero title="Latest Notes" subtitle="Musings on writing, childhood magic, and everything in between." />

      <section className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-8 py-4 rounded-full border-2 border-gold/20 focus:border-gold focus:outline-none bg-white shadow-sm"
            />
            <svg className="w-6 h-6 absolute right-6 top-1/2 -translate-y-1/2 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid gap-10 max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => <PostCard key={post.slug} post={post} />)
          ) : (
            <div className="text-center py-20">
              <p className="text-fjord font-heading text-2xl">No stories found with that name.</p>
              <button onClick={() => setSearch('')} className="mt-4 text-cranberry underline">Clear search</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
