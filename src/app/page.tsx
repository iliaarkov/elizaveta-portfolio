"use client";

import { useState } from "react";
import { Locale, translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/lib/projects";
import { Project } from "@/lib/projects";

export default function Home() {
  const [lang, setLang] = useState<Locale>("ru");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = translations[lang];

  return (
    <main className="relative min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section className="relative pt-52 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
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
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6 uppercase">
            {t.hero.title} <br />
            <span className="text-coral font-accent normal-case lowercase text-7xl md:text-9xl tracking-normal">{t.hero.titleAccent}</span>
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

        {/* Плейсхолдер для фото в органической форме */}
        <Reveal delay={0.8} overflowVisible={true}>
          <div className="mt-16 w-64 h-64 md:w-80 md:h-80 bg-maize rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-8 border-white shadow-2xl animate-float relative z-0">
            <img 
              src="/images/me.jpg" 
              alt="Elizaveta" 
              className="w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
            />
          </div>
        </Reveal>
      </section>

			{/* MARQUEE SKILLS */}
      <div className="my-10">
        <Marquee items={t.skills} />
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal overflowVisible={true}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div className="text-left">
                <h2 className="text-5xl md:text-7xl font-black uppercase text-slate-900 tracking-tighter">
                  {t.projects.title} <span className="text-coral">★</span>
                </h2>
                <p className="text-slate-500 font-medium mt-2">{t.projects.subtitle} 2023-2025</p>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {['all', 'smm', 'ugc', 'production'].map((cat) => (
                  <button 
                    key={cat}
                    className="px-6 py-2 rounded-full border-2 border-slate-200 font-bold hover:bg-white transition-all whitespace-nowrap uppercase text-xs"
                  >
                    {t.projects[cat as keyof typeof t.projects] || cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* GRID с фиксом обрезки при наведении */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1} width="100%" overflowVisible={true}>
                <ProjectCard project={project} lang={lang} />
              </Reveal>
            ))}
          </div> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
						{projects.map((project, index) => (
							<div key={project.id} onClick={() => setSelectedProject(project)}>
								<ProjectCard project={project} lang={lang} />
							</div>
						))}
					</div>
        </div>
      </section>

			<ContactSection lang={lang} />


			<footer className="py-12 bg-phthalo text-center border-t border-atlantis">
        <p className="text-periwinkle font-bold uppercase tracking-widest text-xs">
          © {new Date().getFullYear()} Elizaveta Samokhovets — {t.footer}
        </p>
      </footer>

			<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>

  );
}