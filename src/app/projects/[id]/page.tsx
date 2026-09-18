"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { projects, ProjectContent } from "@/lib/projects";
import { translations } from "@/lib/translations";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, Target, Zap, Play } from "lucide-react";
import { Bubble } from "@/components/Bubble";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  
  // Получаем язык из URL (?lang=en) или по умолчанию ru
  const lang = (searchParams.get("lang") as "ru" | "en") || "ru";
  const t = translations[lang];
  
  const projectData = projects.find((p) => p.id === id);
  // Безопасное получение контента проекта без 'any'
  const projectsDict = t.projects as Record<string, ProjectContent | undefined>;
  const projectContent = projectsDict[id];

  if (!projectData || !projectContent) notFound();

  const nextProjectIndex = (projects.findIndex(p => p.id === id) + 1) % projects.length;
  const nextProjectId = projects[nextProjectIndex].id;
  const nextProjectTitle = projectsDict[nextProjectId]?.title || "";

  return (
    <main className="min-h-screen bg-phthalo text-periwinkle font-manrope pb-24 overflow-hidden">
      {/* Декор: Плавающие пузыри на фоне */}
      <Bubble size={300} className="fixed -top-20 -right-20 opacity-20" />
      <Bubble size={150} className="fixed bottom-10 -left-10 opacity-10" />

      {/* NAVIGATION */}
      <nav className="relative z-50 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href={`/?lang=${lang}`} 
          className="flex items-center gap-2 text-phlox hover:text-coral transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">{t.projectLabels.back}</span>
        </Link>
        <div className="text-[10px] font-black px-3 py-1 border border-phlox/30 rounded-full text-phlox">
          CASE STUDY // {projectData.year}
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="relative z-10 px-6 pt-12 pb-20 max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-phlox mb-8 tracking-tighter">
            {projectContent.title}
          </h1>
        </Reveal>
        
        {/* METRICS BENTO GRID */}
        {projectContent.metrics && projectContent.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectContent.metrics.map((metric: { label: string; value: string }, i: number) => (
              <Reveal key={i}>
                <div className="bg-atlantis/10 border border-atlantis/20 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="text-coral text-3xl md:text-4xl font-black mb-1">{metric.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-periwinkle/50 font-bold">{metric.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT: THE SHOWCASE */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT: INFO */}
        <div className="lg:col-span-7 space-y-12">
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-phlox font-playfair text-3xl italic">The Story</h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-periwinkle/80">
                {projectContent.desc}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-coral uppercase text-xs font-black tracking-widest">
                  <Target size={16} /> {t.projectLabels.role}
                </div>
                <p className="text-sm text-periwinkle/60">{projectContent.role}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-phlox uppercase text-xs font-black tracking-widest">
                  <Zap size={16} /> {t.projectLabels.focus}
                </div>
                <p className="text-sm text-periwinkle/60">{projectContent.focus}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: MOBILE PREVIEW (VIDEO) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <Reveal overflowVisible={true}>
            <div className="relative w-70 h-145 md:w-80 md:h-162.5 bg-phthalo border-8 border-atlantis/30 rounded-[3rem] shadow-2xl overflow-hidden shadow-phlox/10 isolate">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-atlantis/30 rounded-b-2xl z-20" />
              
              {/* VIDEO PLAYER */}
              {projectData.videoUrl ? (
                <video 
                  src={projectData.videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-b from-atlantis/20 to-phthalo flex items-center justify-center">
                  <Play fill="currentColor" className="text-phlox" />
                </div>
              )}
              
              {/* Стеклянный блик поверх экрана телефона */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT PROJECT AREA */}
      <section className="relative z-10 mt-32 px-6 border-t border-atlantis/10 pt-20 text-center">
        <Reveal>
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-coral font-black">{t.projectLabels.next}</span>
          </div>
          <Link 
            href={`/projects/${nextProjectId}?lang=${lang}`}
            className="group inline-block"
          >
            <h2 className="font-playfair text-5xl md:text-8xl text-phlox group-hover:text-coral transition-all duration-500 group-hover:scale-105">
              {nextProjectTitle}
            </h2>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}