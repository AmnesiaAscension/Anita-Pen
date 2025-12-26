
import React from 'react';
import { Link } from 'react-router-dom';
import { Hero, BookCard, PostCard } from '../components';
import { BOOKS, POSTS } from '../data';

const Home: React.FC = () => {
  const featuredBooks = BOOKS.filter(b => b.series === 'Troll').slice(0, 3);
  const latestPosts = POSTS.slice(0, 3);

  return (
    <div className="space-y-24">
      <Hero 
        title="Stories That Spark Imagination"
        subtitle="Meet Anita Pen, author of the beloved Troll series—stories filled with heart, humor, and just the right amount of mischief."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/books" className="bg-cranberry text-white px-8 py-4 rounded-full font-heading text-lg shadow-md hover:shadow-xl transition-all active:scale-95">
            Explore the Books
          </Link>
          <Link to="/events" className="bg-fjord text-white px-8 py-4 rounded-full font-heading text-lg shadow-md hover:shadow-xl transition-all active:scale-95">
            Invite Anita
          </Link>
        </div>
      </Hero>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading text-dark mb-2">The Troll Series</h2>
            <p className="text-fjord font-body text-lg">Adventure awaits in the Whispering Woods!</p>
          </div>
          <Link to="/books" className="hidden sm:block text-moss font-bold hover:underline">View all books &rarr;</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-moss/5 py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 border-8 border-white">
              <img src="https://picsum.photos/seed/anita/600/600" alt="Anita Pen at her writing desk" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-2xl shadow-lg -rotate-3 hidden lg:block">
              <p className="text-white font-heading text-xl">"Every child is a story waiting to unfold."</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-heading text-dark mb-6">A Letter from Anita</h2>
            <p className="text-dark/80 font-body text-lg mb-6 leading-relaxed">
              Hello there! I'm Anita. I spent my childhood exploring the damp mossy corners of my backyard, convinced that trolls were watching from under the ferns. 
            </p>
            <p className="text-dark/80 font-body text-lg mb-8 leading-relaxed">
              Today, I write those trolls into existence. My mission is simple: to create worlds where children feel seen, brave, and just a little bit mischievous.
            </p>
            <div className="flex gap-4">
              <Link to="/author" className="text-cranberry font-bold border-b-2 border-cranberry pb-1 hover:text-cranberry/80">Read the Full Bio</Link>
              <div className="flex gap-2">
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold">Dog Lover</span>
                <span className="bg-moss/10 text-moss px-3 py-1 rounded-full text-xs font-bold">Tea Drinker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading text-dark mb-2">Latest Notes</h2>
            <p className="text-fjord font-body text-lg">Behind the scenes and bookish fun.</p>
          </div>
          <Link to="/blog" className="text-moss font-bold hover:underline">Visit the Blog &rarr;</Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {latestPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
