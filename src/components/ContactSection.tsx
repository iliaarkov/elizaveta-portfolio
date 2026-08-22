"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";

export const ContactSection = ({ lang }: { lang: Locale }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('idle');
    } catch (e) {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="text-left">
          <h2 className="text-6xl font-black uppercase mb-8 leading-[0.8]">
            Let's <span className="text-coral font-accent normal-case lowercase text-7xl">Dive</span> In!
          </h2>
          <p className="text-xl text-slate-500 mb-10 font-medium">Готовы создать контент, который взорвет охваты? Пишите прямо сейчас!</p>
          
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className="bg-[#E1306C] p-5 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="bg-[#0077B5] p-5 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Telegram */}
            <a href="#" className="bg-[#0088cc] p-5 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Ваше имя" className="w-full p-6 rounded-[2rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold placeholder:text-slate-400" />
          <input name="contact" required placeholder="@telegram или почта" className="w-full p-6 rounded-[2rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold placeholder:text-slate-400" />
          <textarea name="message" rows={4} placeholder="О чем проект?" className="w-full p-6 rounded-[3rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold placeholder:text-slate-400"></textarea>
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="w-full bg-papaya text-white p-6 rounded-full font-black text-xl uppercase bubble-shadow disabled:opacity-50 transition-all active:scale-95"
          >
            {status === 'loading' ? 'Отправка...' : status === 'success' ? 'Пузырь улетел! ✅' : 'Отправить пузырь'}
          </button>
        </form>
      </div>
    </section>
  );
};