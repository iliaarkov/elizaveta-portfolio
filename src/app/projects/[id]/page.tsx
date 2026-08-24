"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { translations } from "@/lib/translations";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ExternalLink, Play } from "lucide-react"; // Используем иконки для UI

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // В Next.js 15 params нужно разворачивать через await или use()
  const { id } = use(params);
  
  // В реальном приложении язык можно брать из context, middleware или cookies
  // Для этого шаблона зафиксируем RU или добавим логику переключения
  const lang = "ru"; 
  const t = translations[lang];
  
  const projectData = projects.find((p) => p.id === id);
  const projectContent = t.projects[id as keyof typeof t.projects];

  if (!projectData || !projectContent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-phthalo text-periwinkle font-manrope pb-24">
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-atlantis/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-phlox/10 blur-[100px] rounded-full" />
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-10 p-6 md:p-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-phlox hover:text-coral transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">
            {lang === "ru" ? "Назад ко всем проектам" : "Back to projects"}
          </span>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 md:px-10 pt-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-coral font-bold tracking-[0.3em] uppercase mb-4 block">
                {projectData.year} — {projectData.tags.join(" · ")}
              </span>
            </Reveal>
            <Reveal>
              <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-phlox leading-none tracking-tighter">
                {projectContent.title}
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-4 pb-4">
            <Reveal>
              <p className="text-xl text-atlantis font-medium italic leading-relaxed">
                {projectContent.role}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISUAL / VIDEO PLAYER AREA */}
      <section className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <Reveal overflowVisible={true}>
          <div className="relative aspect-video w-full bg-atlantis/10 rounded-3xl border border-atlantis/20 overflow-hidden group">
            {/* Заглушка для видео/изображения */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-atlantis/20 to-phthalo">
               <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-phlox rounded-full flex items-center justify-center text-phthalo cursor-pointer"
               >
                 <Play fill="currentColor" size={32} />
               </motion.div>
               <span className="mt-4 text-xs uppercase tracking-widest opacity-50">Watch Showreel</span>
            </div>
            
            {/* Если есть videoUrl, здесь будет iframe или video tag */}
            {/* <iframe src={projectData.videoUrl} className="w-full h-full" /> */}
          </div>
        </Reveal>
      </section>

      {/* METRICS & CONTENT */}
      <section className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Metrics */}
          <div className="lg:col-span-4 space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {projectData.metrics.map((metric, idx) => (
                <Reveal key={idx}>
                  <div className="border-l-2 border-coral pl-6 py-2">
                    <div className="text-4xl font-black text-coral tracking-tighter">{metric.value}</div>
                    <div className="text-xs uppercase tracking-widest text-atlantis font-bold mt-1">
                      {metric.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal>
              <div className="p-6 rounded-2xl bg-atlantis/5 border border-atlantis/10">
                <h4 className="text-phlox font-bold uppercase text-xs tracking-widest mb-4">Focus Areas</h4>
                <p className="text-sm leading-relaxed opacity-80">{projectContent.focus}</p>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Description */}
          <div className="lg:col-span-8">
            <Reveal>
              <h3 className="font-playfair text-3xl md:text-4xl text-periwinkle mb-8 italic">
                About project
              </h3>
            </Reveal>
            <Reveal>
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-periwinkle/80">
                {/* Разделяем описание на параграфы, если это нужно */}
                <p>{projectContent.desc}</p>
              </div>
            </Reveal>

            {/* CTA / LINKS */}
            <Reveal>
              <div className="mt-12 flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-phlox text-phthalo font-bold rounded-full hover:bg-coral transition-all hover:scale-105"
                >
                  <ExternalLink size={18} />
                  View Live Link
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* NEXT PROJECT FOOTER */}
      <section className="relative z-10 mt-32 px-6 border-t border-atlantis/10 pt-24 pb-12 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] text-atlantis font-bold mb-4 block">Next Case</span>
        </Reveal>
        <Reveal>
          <Link 
            href={`/projects/${projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].id}`}
            className="font-playfair text-5xl md:text-7xl text-phlox hover:text-coral transition-colors"
          >
            {t.projects[projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].id as keyof typeof t.projects].title} →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}