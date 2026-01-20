
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { Message } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to LuxeModern. I am your personal shopping consultant. How may I help you curate your exquisite space today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await getAssistantResponse(newHistory);
      setMessages([...newHistory, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages([...newHistory, { role: 'assistant', content: "Our systems are momentarily occupied. May I assist you with something else?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-slate-950 text-amber-400 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-105 transition-all group border border-amber-500/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-500"></span>
          </span>
        </button>
      ) : (
        <div className="w-80 md:w-[450px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-stone-200 animate-in slide-in-from-bottom-10 duration-500">
          <div className="p-7 bg-slate-950 text-white flex justify-between items-center border-b border-amber-500/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/30">
                <span className="text-amber-400 text-lg font-black tracking-tighter">LM</span>
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight">LuxeAssistant</h3>
                <p className="text-[10px] text-amber-500 font-black tracking-widest uppercase flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                  Personal Concierge
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-xl transition-colors text-stone-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-6 bg-stone-50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-slate-950 text-white rounded-tr-none shadow-xl border border-amber-500/20' 
                    : 'bg-white text-slate-800 shadow-lg border border-stone-200 rounded-tl-none font-medium'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-lg border border-stone-200">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-amber-200 rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2.5 h-2.5 bg-amber-600 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your vision..."
                className="w-full bg-stone-100 border-2 border-transparent rounded-2xl py-4 pl-6 pr-14 focus:border-amber-500/30 focus:bg-white text-sm outline-none transition-all font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 p-3 bg-slate-950 text-amber-400 rounded-xl hover:bg-slate-900 transition-all disabled:opacity-50 luxury-shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
