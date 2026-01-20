
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer">
            <div className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-12">
              <span className="text-amber-400 font-bold text-sm">LM</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">LUXEMODERN</span>
          </div>
          <div className="hidden md:flex space-x-10">
            {['Collection', 'Showroom', 'Designers', 'About'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-slate-500 hover:text-amber-600 font-semibold text-sm tracking-wide uppercase transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <button className="bg-slate-950 text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition-all luxury-shadow border border-amber-500/20">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
