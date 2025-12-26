
import React from 'react';
import { Hero } from '../components.tsx';

const Author: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero title="Meet Anita Pen" subtitle="The dreamer behind the trolls." />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img src="https://picsum.photos/seed/anita2/600/800" className="w-full h-auto rounded-3xl shadow-lg" alt="Anita Pen" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading text-dark mb-6">A Lifetime of Mischief</h2>
            <div className="space-y-6 text-lg font-body text-dark/80 leading-relaxed">
              <p>
                Anita Pen was born in a small town where the forests were thick and the secrets were many. 
                As a child, she spent more time talking to squirrels and building "fairy houses" in the roots of old trees than she did playing with toys.
              </p>
              <p>
                She believes that children are the bravest people on the planet because they face something new every single day. 
                Her books are written to honor that bravery, providing comfort, laughs, and a safe place for imagination to run wild.
              </p>
              <p>
                When she isn't at her typewriter (yes, she still uses one for first drafts!), you can find her hiking with her grumpy terrier, 
                Gus, or searching for the perfect cinnamon roll in local bakeries.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-moss/10 rounded-3xl p-12 text-center border-2 border-white mb-20">
          <h3 className="text-2xl font-heading text-moss mb-6">Anita's Storytelling Mission</h3>
          <p className="text-xl font-body text-dark/70 italic max-w-2xl mx-auto leading-relaxed">
            "To write stories that act as both a mirror and a window: a mirror for children to see themselves reflected in all their curiosity, 
            and a window into a world where anything—even a friendly troll—is possible."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="font-heading text-dark mb-2">10+ Titles</h4>
            <p className="text-sm font-body text-dark/60">Published across three different series and standalones.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 text-center">
            <div className="text-4xl mb-4">🏫</div>
            <h4 className="font-heading text-dark mb-2">500 Schools</h4>
            <p className="text-sm font-body text-dark/60">Visited both in-person and virtually to spark young minds.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="font-heading text-dark mb-2">Award Winning</h4>
            <p className="text-sm font-body text-dark/60">Recipient of the 'Golden Leaf' for Children's Literature.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
