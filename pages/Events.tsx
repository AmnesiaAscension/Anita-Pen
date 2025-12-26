
import React from 'react';
import { Hero } from '../components.tsx';
import { EVENTS } from '../data.ts';

const Events: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero title="Let’s Meet!" subtitle="Storytimes, school visits, and bookish celebrations." />

      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xl font-body text-fjord mb-6">Interested in booking Anita for your event?</p>
          <a href="mailto:hello@anitapen.com" className="inline-block bg-cranberry text-white px-10 py-4 rounded-full font-heading text-xl shadow-lg hover:bg-cranberry/90 transition-all">
            Inquire About Booking
          </a>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-heading text-dark mb-8">Upcoming Events</h2>
          {EVENTS.map(event => (
            <div key={event.id} className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-md transition-shadow">
              <div className="text-center md:text-left">
                <span className="text-moss font-bold text-sm uppercase tracking-widest">{event.dateDisplay}</span>
                <h3 className="text-2xl font-heading text-dark mt-1">{event.name}</h3>
                <p className="text-dark/60 font-body">{event.location} • {event.city}</p>
              </div>
              <a href={event.detailsUrl} className="bg-gold/10 text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-heading transition-all whitespace-nowrap">
                Event Details
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-fjord py-24 text-cream">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading mb-6">School Visits & Workshops</h2>
            <p className="text-lg font-body mb-6 leading-relaxed text-cream/80">
              Anita loves visiting schools (virtually and in-person!) to discuss the magic of storytelling, 
              character design, and overcoming creative blocks.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="bg-gold/20 text-gold p-1 rounded-full mr-3 mt-1">✓</span>
                <span>Interactive readings of the Troll series (Pre-K to 2nd)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gold/20 text-gold p-1 rounded-full mr-3 mt-1">✓</span>
                <span>Character creation workshops (3rd to 5th)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gold/20 text-gold p-1 rounded-full mr-3 mt-1">✓</span>
                <span>The journey of a book: from draft to shelf (All ages)</span>
              </li>
            </ul>
            <p className="text-sm font-body text-gold/80 italic">Rates vary based on location and session count. Title I schools may qualify for discounted rates.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/school1/300/400" className="rounded-2xl rotate-2" alt="Workshop scene" />
            <img src="https://picsum.photos/seed/school2/300/400" className="rounded-2xl -rotate-2 mt-8" alt="Happy kids" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
