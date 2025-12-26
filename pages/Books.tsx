
import React from 'react';
import { Hero, BookCard } from '../components.tsx';
import { BOOKS } from '../data.ts';

const Books: React.FC = () => {
  const trollBooks = BOOKS.filter(b => b.series === 'Troll');
  const otherWorks = BOOKS.filter(b => b.isOtherWork);

  return (
    <div className="space-y-20">
      <Hero 
        title="The Library" 
        subtitle="Step into worlds of magic, mystery, and cozy adventures. Whether it's for storytime or late-night thrills, there's a book here for you."
      />

      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-heading text-cranberry inline-block relative">
            The Troll Series
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full"></div>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trollBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 bg-gold/5 rounded-[3rem]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-heading text-fjord inline-block relative">
            Other Works
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-fjord/20 rounded-full"></div>
          </h2>
          <p className="text-dark/60 font-body mt-4">Exploring new genres and older age ranges.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-none">
          {otherWorks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 text-center py-10">
        <div className="bg-moss/10 p-12 rounded-3xl border-2 border-dashed border-moss/30">
          <h3 className="text-2xl font-heading text-moss mb-4">Are you a Teacher or Librarian?</h3>
          <p className="text-dark/70 font-body mb-8">
            Anita offers guided readings and curriculum-based workshops for all her titles. 
            Downloadable coloring sheets and teacher guides are coming soon!
          </p>
          <a href="#/contact" className="bg-moss text-white px-8 py-3 rounded-full font-heading inline-block shadow-md">
            Request Materials
          </a>
        </div>
      </section>
    </div>
  );
};

export default Books;
