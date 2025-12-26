
import React, { useState } from 'react';
import { Hero } from '../components.tsx';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16">
      <Hero title="Say Hello" subtitle="Whether you're a reader, a teacher, or a fellow dreamer—I'd love to hear from you." />

      <section className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm">
            <h3 className="text-xl font-heading text-cranberry mb-4">Direct Contact</h3>
            <div className="space-y-4 font-body">
              <p className="flex items-center">
                <span className="mr-3">📧</span>
                <a href="mailto:hello@anitapen.com" className="text-fjord hover:underline">hello@anitapen.com</a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Oakville, Storyland</span>
              </p>
            </div>
          </div>

          <div className="bg-moss/5 p-8 rounded-3xl border border-moss/10 shadow-sm">
            <h3 className="text-xl font-heading text-moss mb-4">Permissions & Media</h3>
            <p className="font-body text-sm text-dark/70 mb-4">
              For subsidiary rights, media inquiries, or permissions, please contact Anita’s agent:
            </p>
            <p className="font-bold text-dark font-body">Literary Agency Name</p>
            <p className="text-fjord text-sm">agent@agency.com</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-moss/10 p-12 rounded-[3rem] text-center border-4 border-white shadow-lg animate-in fade-in zoom-in duration-500">
              <div className="text-6xl mb-6">📬</div>
              <h3 className="text-3xl font-heading text-moss mb-4">Message Sent!</h3>
              <p className="text-dark/70 font-body mb-8">
                Thank you for reaching out. Anita reads every message personally and will get back to you soon.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-cranberry font-bold underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-xl border border-gold/10">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-bold text-dark uppercase tracking-widest mb-2" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gold/10 focus:border-gold focus:outline-none bg-cream/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gold/10 focus:border-gold focus:outline-none bg-cream/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-dark uppercase tracking-widest mb-2" htmlFor="reason">Reason for reaching out</label>
                <select
                  id="reason"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gold/10 focus:border-gold focus:outline-none bg-cream/30 appearance-none"
                >
                  <option>General Hello</option>
                  <option>School Visit Inquiry</option>
                  <option>Book Signing / Event</option>
                  <option>Media/Press Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-dark uppercase tracking-widest mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gold/10 focus:border-gold focus:outline-none bg-cream/30 resize-none"
                  placeholder="Tell me your story..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-cranberry text-white font-heading text-xl py-5 rounded-full shadow-lg hover:shadow-2xl transition-all active:scale-95">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
