
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BOOKS } from '../data.ts';

const BookDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = BOOKS.find(b => b.id === id);

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-heading text-cranberry mb-4">Oops! Book Not Found</h2>
        <p className="text-dark/60 mb-8">It seems this story is still being written or the link is broken.</p>
        <Link to="/books" className="text-fjord font-bold underline">Back to the Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/books" className="inline-flex items-center text-fjord font-bold mb-12 hover:text-cranberry transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Library
      </Link>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-gold/10 transform -rotate-2">
          <img src={book.coverImage} alt={book.title} className="w-full h-auto rounded-2xl shadow-inner" />
        </div>
        
        <div>
          <span className="inline-block bg-moss/10 text-moss px-4 py-1 rounded-full text-sm font-bold mb-4">
            {book.series} Series
          </span>
          <h1 className="text-5xl font-heading text-cranberry mb-6 leading-tight">{book.title}</h1>
          
          <div className="space-y-6 mb-10">
            <p className="text-xl font-body text-dark/80 leading-relaxed italic">
              "{book.blurb}"
            </p>
            <p className="text-lg font-body text-dark/70 leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12 py-8 border-y border-gold/20">
            <div>
              <h4 className="text-sm font-bold text-dark uppercase tracking-widest mb-2">Age Range</h4>
              <p className="text-fjord font-body text-lg">{book.ageRange}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark uppercase tracking-widest mb-2">Themes</h4>
              <div className="flex flex-wrap gap-2">
                {book.themes.map(theme => (
                  <span key={theme} className="text-dark/60 bg-gold/10 px-3 py-1 rounded-lg text-sm">{theme}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {book.buyLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                className={`text-center px-10 py-4 rounded-full font-heading text-lg transition-all shadow-md active:scale-95 ${
                  link.label.includes('Signed') ? 'bg-gold text-white hover:bg-gold/90' : 'bg-cranberry text-white hover:bg-cranberry/90'
                }`}
              >
                Buy on {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 p-12 bg-cream rounded-[3rem] text-center border-4 border-white shadow-lg">
        <h2 className="text-3xl font-heading text-dark mb-4">What readers are saying</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-body text-fjord italic mb-4">
            "A modern classic. My children ask for this story every single night without fail!"
          </p>
          <span className="font-bold text-moss">- Sarah J., Librarian & Mom</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
