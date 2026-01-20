
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-stone-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 blur-3xl rounded-full -mr-20 -mt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-700 text-xs font-bold tracking-[0.2em] uppercase">
              The Art of the Home
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tight">
              Crafted <br />
              <span className="gold-gradient-text">Greatness.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              A curated collection of the world's finest imports, where heritage craftsmanship meets contemporary elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="animate-shine bg-slate-950 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all luxury-shadow flex items-center justify-center group"
              >
                Explore Catalog
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white border-2 border-stone-200 text-slate-950 px-10 py-5 rounded-2xl text-lg font-bold hover:border-amber-400 transition-all">
                Our Story
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl"></div>
            <div className="relative z-10 p-4 bg-white rounded-[2.5rem] luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Interior" 
                className="rounded-[2rem] object-cover w-full aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
