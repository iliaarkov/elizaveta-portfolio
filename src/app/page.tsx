"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { Marquee } from "@/components/Marquee";

export default function PortfolioPage() {
  // В реальном приложении это может приходить из Context или URL /ru или /en
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const t = translations[lang];

  return (
    <main className="relative min-h-screen bg-phthalo text-periwinkle font-manrope selection:bg-phlox selection:text-phthalo">
      
      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 backdrop-blur-sm">
        <div className="font-playfair text-xl font-black tracking-tighter text-phlox">
          ES.
        </div>
        <div className="flex items-center gap-8 bg-atlantis/10 px-4 py-2 rounded-full border border-atlantis/20">
          <button 
            onClick={() => setLang("en")} 
            className={`text-xs font-bold transition-colors ${lang === "en" ? "text-coral" : "text-periwinkle/50"}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang("ru")} 
            className={`text-xs font-bold transition-colors ${lang === "ru" ? "text-coral" : "text-periwinkle/50"}`}
          >
            RU
          </button>
        </div>
      </nav>

      {/* HERO SECTION WITH JELLYFISH BACKGROUND */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Анимированные медузы/облака на фоне */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[20%] left-[10%] w-64 h-64 bg-atlantis blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-phlox blur-[150px] rounded-full" 
          />
        </div>

        <div className="relative z-10 text-center">
          <Reveal>
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl mb-4 text-phlox tracking-tighter uppercase leading-none">
              Elizaveta <br /> Samokhovets
            </h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
              <p className="text-lg md:text-xl font-light tracking-widest uppercase">
                {t.hero.role}
              </p>
              <span className="hidden md:block text-coral">•</span>
              <p className="text-coral font-medium italic">
                {t.hero.status}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT / PROFILE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="font-playfair text-4xl md:text-5xl text-phlox sticky top-32">
                {t.about.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-periwinkle/90">
                {t.about.text}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NUMBERS & SKILLS */}
      <section className="py-24 bg-atlantis/5 border-y border-atlantis/10">
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "3+", lab: lang === 'ru' ? "года опыта" : "years" },
              { val: "1M+", lab: lang === 'ru' ? "просмотров/мес" : "monthly views" },
              { val: "1000+", lab: lang === 'ru' ? "рефералов" : "referral clicks" },
              { val: "60-80", lab: lang === 'ru' ? "видео/мес" : "videos / month" },
            ].map((stat, i) => (
              <Reveal key={i}>
                <div className="flex flex-col items-start">
                  <span className="text-5xl md:text-6xl font-black text-coral mb-2 tracking-tighter">
                    {stat.val}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-atlantis">
                    {stat.lab}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Бегущая строка навыков */}
        <div className="py-10 border-t border-atlantis/10 overflow-hidden">
          <Marquee speed={50}>
            <span className="mx-8 text-2xl font-playfair italic text-phlox">{t.skills.social}</span>
            <span className="mx-8 text-2xl font-playfair italic text-phlox">{t.skills.content}</span>
            <span className="mx-8 text-2xl font-playfair italic text-phlox">{t.skills.creative}</span>
            <span className="mx-8 text-2xl font-playfair italic text-phlox">{t.skills.audio}</span>
          </Marquee>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 border-b border-atlantis/20 pb-8">
            <h2 className="font-playfair text-5xl md:text-7xl text-phlox">Selected Projects</h2>
            <span className="font-manrope text-sm text-coral uppercase tracking-widest hidden md:block">
              {projects.length} Cases — 2021/2024
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.id} overflowVisible={true}>
              <ProjectCard 
                project={project} 
                content={t.projects[project.id as keyof typeof t.projects]} 
                index={index + 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto" id="contact">
        <Reveal>
          <ContactSection lang={lang} />
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-atlantis/10 text-center">
        <p className="text-xs uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Elizaveta Samokhovets. 
          Crafted with Next.js 15
        </p>
      </footer>
    </main>
  );
}