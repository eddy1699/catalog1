
import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { AiAssistant } from './components/AiAssistant';
import { PRODUCTS } from './constants';
import { Category, Product } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Catalog Section */}
        <section id="catalog" className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
              <div className="space-y-5">
                <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
                <h2 className="text-5xl font-black text-slate-950 tracking-tighter italic">The Curated Gallery</h2>
                <p className="text-slate-500 max-w-xl text-lg font-medium">
                  Refined selections from the design capitals of the world. Hand-picked for the modern connoisseur.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {['All', ...Object.values(Category)].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                        ? 'bg-slate-950 text-amber-400 shadow-xl border border-amber-500/20' 
                        : 'bg-stone-100 text-slate-500 hover:bg-stone-200 border border-transparent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={(p) => setSelectedProduct(p)} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-slate-300 text-2xl font-light italic">Currently searching for masterpieces in this category...</p>
              </div>
            )}
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                  Crafting the future <br /><span className="text-amber-500">of legacy.</span>
                </h2>
                <p className="text-slate-400 text-xl leading-relaxed font-light">
                  LuxeModern is more than a showroom—it is an archive of human excellence. We bridge the gap between ancient technique and tomorrow's lifestyle.
                </p>
                <div className="grid grid-cols-2 gap-12 border-l border-amber-500/30 pl-8">
                  <div>
                    <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">150+</h4>
                    <p className="text-amber-600 text-xs font-black uppercase tracking-[0.2em]">Global Artisans</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">24/7</h4>
                    <p className="text-amber-600 text-xs font-black uppercase tracking-[0.2em]">Concierge Support</p>
                  </div>
                </div>
                <button className="bg-amber-500 text-slate-950 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-400 transition-all luxury-shadow">
                  Join the Inner Circle
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full animate-pulse"></div>
                <div className="grid grid-cols-2 gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" 
                    alt="Architecture" 
                    className="rounded-3xl h-96 w-full object-cover mt-16 luxury-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400" 
                    alt="Interior Detail" 
                    className="rounded-3xl h-96 w-full object-cover border border-amber-500/20 luxury-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-32 bg-stone-50 relative">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">The Ledger of Excellence.</h2>
            <p className="text-slate-500 text-xl font-medium">Join our global roster of collectors for private viewings and first-right access.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto p-2 bg-white rounded-3xl luxury-shadow border border-stone-100">
              <input 
                type="email" 
                placeholder="Excellence@LuxeModern.com" 
                className="flex-grow bg-transparent px-6 py-4 rounded-2xl focus:outline-none font-medium"
              />
              <button className="bg-slate-950 text-amber-400 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
                Access
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-16 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-amber-500 transition-all">
                <span className="text-white font-black text-xs tracking-tighter">LM</span>
              </div>
              <span className="font-black text-white tracking-tighter text-xl">LUXEMODERN</span>
            </div>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">&copy; 2024 LuxeModern Interiors. Curating Immortality.</p>
            <div className="flex space-x-10">
              {['Instagram', 'Artsy', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="text-stone-500 hover:text-amber-500 font-bold text-xs uppercase tracking-widest transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating UI */}
      <AiAssistant />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default App;
