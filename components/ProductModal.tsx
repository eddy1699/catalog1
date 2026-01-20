
import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 border border-stone-200">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-amber-400 transition-all shadow-xl border border-stone-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 bg-stone-50">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover aspect-video lg:aspect-square"
            />
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-16 space-y-8 max-h-[90vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-px bg-amber-500"></span>
                <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px]">{product.category}</span>
              </div>
              <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-none">{product.name}</h2>
              <div className="flex items-baseline space-x-2">
                 <span className="text-4xl font-light text-slate-950 tracking-tighter">
                   ${product.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                 </span>
                 <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">USD</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              {product.description}
            </p>

            <div className="space-y-6 pt-6 border-t border-stone-100">
              <h4 className="font-black text-slate-950 text-sm uppercase tracking-widest">The Experience</h4>
              <ul className="grid grid-cols-1 gap-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-slate-600 group">
                    <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <svg className="h-3 w-3 text-amber-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-stone-100">
               {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-stone-400 font-black uppercase tracking-[0.2em] text-[10px] mb-1">{key}</dt>
                    <dd className="text-slate-950 font-bold text-base">{value}</dd>
                  </div>
                ))}
            </div>

            <div className="pt-10">
              <button className="animate-shine w-full bg-slate-950 text-amber-400 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all luxury-shadow border border-amber-500/20">
                Inquire for Private Purchase
              </button>
              <p className="text-center text-[10px] text-stone-400 mt-4 font-bold tracking-widest uppercase">
                Complimentary white-glove shipping included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
