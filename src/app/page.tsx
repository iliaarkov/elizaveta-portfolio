"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const [lang, setLang] = useState<Locale>("ru");
  const t = translations[lang];

  return (
    <main className="relative min-h-screen bg-beige font-sans">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section className="relative pt-52 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Декоративные элементы (Flower Clouds) в новой палитре Phlox/Periwinkle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 -left-10 w-64 h-64 bg-phlox/30 rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 -right-10 w-80 h-80 bg-periwinkle/30 rounded-full blur-3xl -z-10" 
        />

        <Reveal overflowVisible={true}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85] mb-8 uppercase text-phthalo">
            {t.hero.title} <br />
            <span className="text-coral font-accent normal-case lowercase text-7xl md:text-9xl tracking-normal">
              {t.hero.titleAccent}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-atlantis font-bold mb-12 max-w-xl uppercase tracking-wide">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <a 
            href="#projects"
            className="bg-atlantis text-white px-12 py-6 rounded-full text-xl font-black uppercase shadow-xl hover:bg-verbena transition-all hover:scale-105 active:scale-95"
          >
            {t.hero.cta}
          </a>
        </Reveal>

        {/* Фото Лизы в органической форме */}
        <Reveal delay={0.8} overflowVisible={true}>
          <div className="mt-20 w-64 h-64 md:w-80 md:h-80 bg-phlox rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-8 border-white shadow-2xl animate-float relative z-0">
            <img 
              src="/images/me.jpg" 
              alt="Elizaveta" 
              className="w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
            />
          </div>
        </Reveal>
      </section>

      {/* MARQUEE SKILLS (используем Atlantis для фона) */}
      <div className="my-16">
        <Marquee items={t.skills} />
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal overflowVisible={true}>
            <div className="text-left mb-20">
              <h2 className="text-6xl md:text-8xl font-black uppercase text-phthalo tracking-tighter">
                {t.projects.title} <span className="text-coral">★</span>
              </h2>
              <p className="text-atlantis font-black mt-4 uppercase tracking-[0.3em] text-sm md:text-base">
                {t.projects.subtitle} 2023—2025
              </p>
            </div>
          </Reveal>

          {/* GRID: Теперь без фильтров, 4 проекта в сетке */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.15} width="100%" overflowVisible={true}>
                {/* Оборачиваем карточку в Link для перехода на страницу кейса */}
                <Link href={`/projects/${project.id}`} className="block">
                  <ProjectCard project={project} lang={lang} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection lang={lang} />

      {/* FOOTER */}
      <footer className="py-16 bg-phthalo text-center border-t border-atlantis/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-periwinkle font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
            © {new Date().getFullYear()} ELIZAVETA SAMOKHOVETS — STAY BUBBLY
          </p>
        </div>
      </footer>
    </main>
  );
}