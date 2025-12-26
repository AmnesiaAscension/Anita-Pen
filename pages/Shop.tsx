
import React from 'react';
import { Hero } from '../components.tsx';
import { PRODUCTS } from '../data.ts';

const Shop: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero title="The Curiosity Shop" subtitle="Whimsical goods, signed treasures, and magic for your bookshelf." />
      
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['All Items', 'Books', 'Merch', 'Art', 'Apparel'].map(cat => (
            <button key={cat} className={`px-6 py-2 rounded-full border-2 transition-all font-heading ${
              cat === 'All Items' ? 'bg-cranberry border-cranberry text-white' : 'border-gold/20 text-fjord hover:border-gold hover:bg-gold/5'
            }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gold/10 hover:shadow-xl transition-all">
              <div className="aspect-square relative overflow-hidden bg-cream">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-cranberry font-bold shadow-sm">
                  {product.price}
                </div>
              </div>
              <div className="p-8 text-center">
                <span className="text-xs font-bold text-moss uppercase tracking-widest block mb-2">{product.category}</span>
                <h3 className="text-2xl font-heading text-dark mb-6">{product.name}</h3>
                <a href={product.buyUrl} className="w-full inline-block bg-fjord hover:bg-fjord/90 text-white font-heading py-4 rounded-full transition-colors shadow-sm">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-cream rounded-3xl p-10 border-4 border-white shadow-lg">
          <h3 className="text-2xl font-heading text-dark mb-4">A Note on Signed Copies</h3>
          <p className="font-body text-dark/70">
            All signed copies are fulfilled through our local partner bookstore. 
            Please allow an additional 5-7 business days for Anita to stop by and sign your treasure! 
            Looking for a specific personalization? Leave a note at checkout.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shop;
