
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data.ts';

const PostDetail: React.FC = () => {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-heading text-cranberry mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-fjord font-bold underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/blog" className="inline-flex items-center text-fjord font-bold mb-12 hover:text-cranberry transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>

      <article>
        <div className="mb-10 text-center">
          <span className="text-moss font-bold text-sm uppercase tracking-widest block mb-4">{post.date} • {post.readTime}</span>
          <h1 className="text-4xl sm:text-6xl font-heading text-dark mb-8 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center space-x-3">
            <img src="https://picsum.photos/seed/anita/100/100" className="w-10 h-10 rounded-full border-2 border-gold/20" alt="Anita" />
            <span className="text-fjord font-bold">By {post.author}</span>
          </div>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl mb-12">
          <img src={post.heroImage} className="w-full h-full object-cover" alt={post.title} />
        </div>

        <div 
          className="prose prose-lg prose-fjord mx-auto font-body text-dark/80 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-20 pt-10 border-t border-gold/20">
          <h3 className="text-2xl font-heading text-dark mb-8">Share this story</h3>
          <div className="flex space-x-4">
            {['Twitter', 'Facebook', 'Pinterest', 'Email'].map(social => (
              <button key={social} className="bg-cream hover:bg-gold/10 px-6 py-2 rounded-full text-fjord font-bold transition-all text-sm">
                {social}
              </button>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
