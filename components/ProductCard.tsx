
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-200 transition-all luxury-shadow hover:-translate-y-2"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-[1/1.1] overflow-hidden bg-stone-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-5 left-5">
           <span className="bg-white/90 backdrop-blur-md border border-amber-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-700">
             Imported from {product.specs.Origin || 'Global'}
           </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">{product.name}</h3>
        </div>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-stone-100">
          <span className="text-2xl font-black text-slate-950 tracking-tighter">
            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
          </span>
          <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center transition-all group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
