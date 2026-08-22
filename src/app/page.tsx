"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<Locale>("ru");
  const t = translations[lang];

  return (
    <main className="relative min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Декоративные элементы (те самые Flower Clouds) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 -left-10 w-64 h-64 bg-softPurple/20 rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 -right-10 w-80 h-80 bg-junebud/20 rounded-full blur-3xl -z-10" 
        />

        <Reveal>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
            {t.hero.title} <br />
            <span className="text-coral italic">{t.hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-xl">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <a 
            href="#projects"
            className="bg-papaya text-white px-10 py-5 rounded-super-bubble text-xl font-bold bubble-shadow hover:bg-papaya/90"
          >
            {t.hero.cta}
          </a>
        </Reveal>

        {/* Плейсхолдер для твоего фото в органической форме */}
        <Reveal delay={0.8}>
          <div className="mt-16 w-64 h-64 md:w-80 md:h-80 bg-maize rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border-8 border-white shadow-2xl animate-float">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Elizaveta" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Сюда дальше добавим блок Projects и Contact */}
      <section id="projects" className="py-20 bg-white/30">
          <div className="container mx-auto px-6">
             <h2 className="text-4xl font-bold mb-12 uppercase text-center">{t.nav.projects}</h2>
             {/* Тут будет сетка Masonry, которую сделаем следующим шагом */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <p className="text-center col-span-full opacity-50 italic">Сетка проектов подгрузится в следующем шаге...</p>
             </div>
          </div>
      </section>
    </main>
  );
}