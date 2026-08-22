"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";
import { Instagram, Linkedin, Send } from "lucide-react";

export const ContactSection = ({ lang }: { lang: Locale }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus('success');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl font-black uppercase mb-8 leading-[0.8]">
            Let's <span className="text-coral italic font-accent normal-case">Dive</span> In!
          </h2>
          <p className="text-xl text-slate-500 mb-10">Готовы создать контент, который взорвет охваты? Пишите прямо сейчас!</p>
          
          <div className="flex gap-4">
            {[
              { icon: <Instagram />, link: "#", color: "bg-[#E1306C]" },
              { icon: <Linkedin />, link: "#", color: "bg-[#0077B5]" },
              { icon: <Send />, link: "#", color: "bg-[#0088cc]" },
            ].map((social, i) => (
              <a key={i} href={social.link} className={`${social.color} p-5 rounded-full text-white hover:scale-110 transition-transform shadow-lg`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Ваше имя" className="w-full p-6 rounded-[2rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold" />
          <input name="contact" required placeholder="@telegram или почта" className="w-full p-6 rounded-[2rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold" />
          <textarea name="message" rows={4} placeholder="О чем проект?" className="w-full p-6 rounded-[3rem] bg-beige border-none focus:ring-4 focus:ring-maize outline-none font-bold"></textarea>
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="w-full bg-papaya text-white p-6 rounded-full font-black text-xl uppercase bubble-shadow disabled:opacity-50"
          >
            {status === 'loading' ? 'Отправка...' : status === 'success' ? 'Пузырь улетел! ✅' : 'Отправить пузырь'}
          </button>
        </form>
      </div>
    </section>
  );
};