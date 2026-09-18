"use client";

import React, { useState } from "react";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { Marquee } from "@/components/Marquee";
import { Bubble } from "@/components/Bubble";

export default function PortfolioPage() {
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const t = translations[lang];

  return (
    <main className="relative min-h-screen bg-phthalo text-periwinkle font-manrope selection:bg-phlox selection:text-phthalo">
      
      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 backdrop-blur-sm">
        <div className="font-playfair text-xl font-black tracking-tighter text-phlox">
          Elizaveta S.
        </div>
        <div className="flex items-center gap-8 bg-atlantis/10 px-4 py-2 rounded-full border border-atlantis/20">
          <button 
            onClick={() => setLang("en")} 
            className={`text-xs font-bold transition-colors ${lang === "en" ? "text-verbena" : "text-periwinkle/50"}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang("ru")} 
            className={`text-xs font-bold transition-colors ${lang === "ru" ? "text-verbena" : "text-periwinkle/50"}`}
          >
            RU
          </button>
        </div>
      </nav>

      {/* HERO SECTION WITH JELLYFISH BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Пузырь 1: Сверху слева */}
        <div className="absolute top-[15%] left-[8%] z-0 animate-bubble-float">
          <Bubble size={120} className="opacity-60" />
        </div>

        {/* Пузырь 2: Снизу справа */}
        <div className="absolute bottom-[12%] right-[10%] z-0 animate-bubble-float" style={{ animationDelay: '2s' }}>
          <Bubble size={240} className="opacity-40" />
        </div>

        {/* Пузырь 3: Мелкий для акцента */}
        <div className="absolute top-[20%] right-[20%] z-0 animate-bubble-float" style={{ animationDelay: '4s' }}>
          <Bubble size={60} className="opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ */}
          <div className="relative z-10 order-2 lg:order-1 text-left">
            <Reveal>
              <h1 className="font-playfair text-6xl md:text-8xl text-phlox leading-[0.9] mb-6">
                {t.hero.name} <br /> {t.hero.surname}
              </h1>
            </Reveal>
            <Reveal>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-periwinkle/80">
                  {t.hero.role}
                </p>
                <br />
                <p className="text-verbena font-playfair italic text-2xl">
                  {t.hero.status}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ФОТО В ЦВЕТКЕ */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal>
              <div className="relative w-72 h-72 md:w-112.5 md:h-112.5">
                <div 
                  className="absolute inset-0 animate-wobble overflow-hidden border-[6px] border-phlox/40 shadow-2xl shadow-phthalo/50"
                  style={{ isolation: 'isolate' }}
                >
                  <div 
                    className="w-full h-full scale-110"
                    style={{ 
                      backgroundImage: 'url(/images/me.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-phthalo/40 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
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
                  <span className="text-5xl md:text-6xl font-black text-verbena mb-2 tracking-tighter">
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
            <h2 className="font-playfair text-5xl md:text-7xl text-phlox">{t.projTitle}</h2>
            <br />
            <br />
            <div className="font-manrope text-sm text-verbena uppercase tracking-widest hidden md:block">
              {projects.length} {t.projCases}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => {
            // Получаем контент конкретного проекта по его id:
            const projectContent = t.projects[project.id as keyof typeof t.projects];

            return (
              <Reveal key={project.id} overflowVisible={true}>
                <ProjectCard 
                  project={project} 
                  content={projectContent} 
                  index={index + 1}
                  lang={lang}
                  viewLabel={t.projectLabels.view} 
                />
              </Reveal>
            );
          })}
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