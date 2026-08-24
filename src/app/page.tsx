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
    <main className="relative min-h-screen bg-phthalo overflow-hidden font-sans text-white">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION — Глубокие цвета Phlox и Atlantis */}
      <section className="relative pt-64 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-atlantis/20 to-transparent -z-10" 
        />

        <Reveal overflowVisible={true}>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic">
            {t.hero.title} <br />
            <span className="text-phlox font-accent normal-case lowercase text-7xl md:text-[10rem] tracking-normal not-italic">
              {t.hero.titleAccent}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-periwinkle font-black mb-12 max-w-2xl uppercase tracking-[0.4em] text-xs md:text-sm">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <a 
            href="#projects"
            className="bg-phlox text-phthalo px-14 py-6 rounded-full text-xl font-black uppercase shadow-[0_0_50px_rgba(202,169,243,0.3)] hover:bg-white transition-all hover:scale-105 active:scale-95"
          >
            {t.hero.cta}
          </a>
        </Reveal>

        <Reveal delay={0.8} overflowVisible={true}>
          <div className="mt-24 w-64 h-64 md:w-96 md:h-96 bg-atlantis/30 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-4 border-phlox/50 shadow-[0_0_80px_rgba(32,106,188,0.4)] animate-float overflow-hidden">
            <img src="/images/me.jpg" alt="Elizaveta" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
          </div>
        </Reveal>
      </section>

      <Marquee items={t.skills} />

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal overflowVisible={true}>
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter italic">
                {t.projects.title} <span className="text-coral">★</span>
              </h2>
							<p className="text-atlantis font-black mt-4 uppercase tracking-[0.3em] text-sm md:text-base">
                {t.projects.subtitle} 2022—2026
              </p>
              <div className="h-1 w-24 bg-phlox mx-auto mt-6 rounded-full" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.15} width="100%" overflowVisible={true}>
                <Link href={`/projects/${project.id}`} className="block">
                  <ProjectCard project={project} lang={lang} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection lang={lang} />

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