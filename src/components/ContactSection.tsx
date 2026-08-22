"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";

export const ContactSection = ({ lang }: { lang: Locale }) => {
  const t = translations[lang].contact;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  // Состояния для полей, которые нужно сохранить
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage(""); // Очищаем только сообщение
        setTimeout(() => setStatus('idle'), 3000); // Возвращаем кнопку через 3 сек
      } else {
        setStatus('idle');
      }
    } catch (e) {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-phthalo text-white rounded-t-[5rem] shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="text-left">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.8]">
            {t.title} <span className="text-phlox font-accent normal-case lowercase block md:inline text-7xl md:text-9xl">{t.titleAccent}</span> In!
          </h2>
          <p className="text-xl text-periwinkle mb-10 font-medium">{t.subtitle}</p>
          
          <div className="flex gap-4">
            <a href="#" className="bg-atlantis p-5 rounded-full hover:bg-periwinkle transition-all shadow-lg hover:-translate-y-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="bg-atlantis p-5 rounded-full hover:bg-periwinkle transition-all shadow-lg hover:-translate-y-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
            placeholder={t.namePlaceholder} 
            className="w-full p-6 rounded-[2rem] bg-atlantis/30 border-2 border-atlantis focus:border-phlox outline-none font-bold placeholder:text-periwinkle/50 text-white" 
          />
          <input 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required 
            placeholder={t.contactPlaceholder} 
            className="w-full p-6 rounded-[2rem] bg-atlantis/30 border-2 border-atlantis focus:border-phlox outline-none font-bold placeholder:text-periwinkle/50 text-white" 
          />
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4} 
            placeholder={t.messagePlaceholder} 
            className="w-full p-6 rounded-[3rem] bg-atlantis/30 border-2 border-atlantis focus:border-phlox outline-none font-bold placeholder:text-periwinkle/50 text-white"
          ></textarea>
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="w-full bg-phlox text-phthalo p-6 rounded-full font-black text-xl uppercase shadow-[0_10px_0_0_#B37AD4] active:translate-y-[5px] active:shadow-[0_5px_0_0_#B37AD4] transition-all disabled:opacity-50"
          >
            {status === 'loading' ? t.loading : status === 'success' ? t.success : t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};