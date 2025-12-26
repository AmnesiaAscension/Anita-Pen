
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Post, Product } from './types.ts';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'The Author', href: '/author' },
    { label: 'Books', href: '/books' },
    { label: 'Shop', href: '/shop' },
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-heading text-cranberry tracking-tight">Anita Pen</span>
            <span className="hidden sm:block text-xs font-body text-fjord italic font-medium">Stories with mischief.</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors hover:text-cranberry ${
                  location.pathname === item.href ? 'text-cranberry border-b-2 border-cranberry' : 'text-fjord'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-fjord hover:text-cranberry focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream border-b border-gold/20 px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.href ? 'bg-gold/10 text-cranberry' : 'text-fjord hover:bg-gold/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fjord text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div id="subscribe" className="bg-cream rounded-3xl p-8 mb-16 shadow-lg text-dark max-w-4xl mx-auto text-center border-4 border-gold/20">
          <h2 className="text-3xl font-heading text-cranberry mb-4">Get storytime updates</h2>
          <p className="font-body text-dark/70 mb-8">Occasional news, new releases, and event announcements. No spam—promise.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="px-6 py-3 rounded-full border-2 border-gold/30 focus:border-gold focus:outline-none bg-white text-dark flex-grow"
              required
            />
            <button type="submit" className="bg-cranberry hover:bg-cranberry/90 text-white px-8 py-3 rounded-full font-heading transition-all shadow-md active:scale-95">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <span className="text-2xl font-heading text-gold">Anita Pen</span>
            <p className="font-body text-cream/80 mt-2">© Anita Pen • Stories for curious hearts.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-gold transition-colors">Twitter</a>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-cream/60">Designed for readers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gold/10 group">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/book/${book.id}`} className="bg-white text-cranberry font-heading px-6 py-2 rounded-full shadow-lg">
            View Details
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading text-dark mb-2">{book.title}</h3>
        <p className="text-dark/60 text-sm font-body line-clamp-2 mb-4">{book.blurb}</p>
        <Link to={`/book/${book.id}`} className="text-fjord font-bold text-sm flex items-center group-hover:text-cranberry">
          Learn More 
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link to={`/post/${post.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold/10 group flex flex-col sm:flex-row h-full transition-all hover:bg-gold/5">
      <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
        <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-6 sm:w-2/3 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-moss uppercase tracking-wider">{post.date}</span>
          <h3 className="text-xl font-heading text-dark mt-1 mb-2 group-hover:text-cranberry">{post.title}</h3>
          <p className="text-dark/60 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
        </div>
        <div className="flex items-center text-xs font-bold text-fjord">
          <span>Read Post</span>
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export const Hero: React.FC<{ title: string; subtitle?: string; bgImage?: string; children?: React.ReactNode }> = ({ title, subtitle, bgImage, children }) => {
  return (
    <div className="relative overflow-hidden bg-cream py-16 sm:py-24 border-b border-gold/10 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl sm:text-7xl font-heading text-cranberry mb-4 drop-shadow-sm">{title}</h1>
        {subtitle && <p className="text-xl sm:text-2xl font-body text-fjord max-w-2xl mx-auto">{subtitle}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-fjord/10 rounded-full blur-3xl"></div>
    </div>
  );
};
