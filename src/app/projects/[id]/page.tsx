"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, useSearchParams, useRouter } from "next/navigation";
import { projects, ProjectContent } from "@/lib/projects";
import { translations } from "@/lib/translations";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight, Target, Zap, Layers, Sparkles } from "lucide-react";
import { Bubble } from "@/components/Bubble";
import { ReelsPlayer } from "@/components/ReelsPlayer";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Получаем язык из URL (?lang=en) или по умолчанию ru
  const lang = (searchParams.get("lang") as "ru" | "en") || "ru";
  const t = translations[lang];
  
  const projectData = projects.find((p) => p.id === id);
  const projectsDict = t.projects as Record<string, ProjectContent | undefined>;
  const projectContent = projectsDict[id];

  if (!projectData || !projectContent) notFound();

  // Логика перехода на предыдущий / следующий проект
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  
  const prevContent = projectsDict[prevProject.id];
  const nextContent = projectsDict[nextProject.id];

  const handleLanguageChange = (newLang: "ru" | "en") => {
    router.replace(`/projects/${id}?lang=${newLang}`);
  };

  return (
    <main className="min-h-screen bg-phthalo text-periwinkle font-manrope pb-20 selection:bg-phlox selection:text-phthalo relative">
      {/* Декоративные плавающие пузыри с низким z-index */}
      <Bubble size={240} className="fixed -top-16 -right-16 opacity-15 pointer-events-none" />
      <Bubble size={160} className="fixed bottom-20 -left-12 opacity-10 pointer-events-none" />

      {/* КОМПАКТНАЯ ВЕРХНЯЯ НАВИГАЦИЯ */}
      <nav className="relative z-50 px-6 py-6 border-b border-atlantis/10 bg-phthalo/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href={`/?lang=${lang}`} 
            className="flex items-center gap-2 text-phlox hover:text-coral transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">{t.projectLabels.back}</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[11px] font-black px-3 py-1 border border-phlox/30 rounded-full text-phlox tracking-wider">
              {t.projectLabels.caseStudy} {projectData.year}
            </span>

            {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА */}
            <div className="flex items-center gap-4 bg-atlantis/10 px-3 py-1.5 rounded-full border border-atlantis/20">
              <button 
                type="button"
                onClick={() => handleLanguageChange("en")} 
                className={`text-xs font-bold transition-colors ${lang === "en" ? "text-verbena" : "text-periwinkle/50"}`}
              >
                EN
              </button>
              <button 
                type="button"
                onClick={() => handleLanguageChange("ru")} 
                className={`text-xs font-bold transition-colors ${lang === "ru" ? "text-verbena" : "text-periwinkle/50"}`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ШАПКА КЕЙСА (БЕЗ ЛИШНЕЙ ПУСТОТЫ) */}
      <header className="px-6 pt-10 pb-12 max-w-7xl mx-auto">
        <Reveal width="100%">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {projectContent.platforms?.map((plat) => (
              <span key={plat} className="text-[11px] uppercase tracking-widest text-atlantis font-bold px-3 py-1 rounded-full bg-atlantis/10 border border-atlantis/20">
                {plat}
              </span>
            ))}
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl text-phlox mb-4 tracking-tight leading-[0.95]">
            {projectContent.title}
          </h1>

          {projectContent.tagline && (
            <p className="text-lg md:text-xl font-light text-verbena font-playfair italic mb-8">
              {projectContent.tagline}
            </p>
          )}
        </Reveal>
        
        {/* МЕТРИКИ (BENTO GRID) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {projectContent.metrics.map((metric, i) => (
            <Reveal key={i} width="100%">
              <div className="bg-atlantis/10 border border-atlantis/20 p-5 rounded-2xl backdrop-blur-sm h-full flex flex-col justify-center">
                <div className="text-coral text-2xl sm:text-3xl md:text-4xl font-black mb-1 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-periwinkle/60 font-semibold">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </header>

      {/* ОПИСАНИЕ, РОЛЬ И ФОКУС */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Текст кейса */}
          <div className="lg:col-span-8">
            <Reveal width="100%">
              <div className="space-y-4">
                <h2 className="text-phlox font-playfair text-2xl md:text-3xl italic flex items-center gap-2">
                  <Sparkles size={20} className="text-coral" /> The Story & Execution
                </h2>
                <div className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-periwinkle/85 whitespace-pre-line">
                  {projectContent.story}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Плашка Роли и Фокуса */}
          <div className="lg:col-span-4 bg-atlantis/5 border border-atlantis/20 rounded-3xl p-6 space-y-6 backdrop-blur-sm">
            <Reveal width="100%">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-coral uppercase text-xs font-black tracking-widest">
                  <Target size={16} /> {t.projectLabels.role}
                </div>
                <p className="text-sm leading-relaxed text-periwinkle/90 font-medium">
                  {projectContent.role}
                </p>
              </div>
            </Reveal>

            <div className="h-px bg-atlantis/20" />

            <Reveal width="100%">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-phlox uppercase text-xs font-black tracking-widest">
                  <Zap size={16} /> {t.projectLabels.focus}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-periwinkle/75">
                  {projectContent.focus}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ФОТО-ГАЛЕРЕЯ (для 12SIRENS и GREEN HOME расположена НАД видео) */}
      {projectData.photos && projectData.photos.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <Reveal width="100%">
            <h3 className="font-playfair text-3xl md:text-4xl text-phlox mb-8 flex items-center gap-3">
              <Layers size={24} className="text-atlantis" />
              {projectContent.galleryTitle || t.projectLabels.brandingPhotos}
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.photos.map((photo, i) => (
              <Reveal key={i} width="100%">
                <div className="group flex flex-col gap-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-atlantis/20 bg-atlantis/5 relative shadow-lg">
                    <img 
                      src={photo.url} 
                      alt={photo.caption?.[lang] || `Photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {photo.caption && (
                    <p className="text-xs md:text-sm text-periwinkle/70 font-medium">
                      {photo.caption[lang]}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ОБЛОЖКИ РЕЛИЗОВ (ДЛЯ PENNA) */}
      {projectData.covers && projectData.covers.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <Reveal width="100%">
            <h3 className="font-playfair text-3xl md:text-4xl text-phlox mb-8 flex items-center gap-3">
              <Layers size={24} className="text-verbena" />
              {projectContent.galleryTitle || t.projectLabels.coversTitle}
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.covers.map((cover, i) => (
              <Reveal key={i} width="100%">
                <div className="group flex flex-col gap-3">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-atlantis/20 bg-atlantis/5 relative shadow-lg">
                    <img 
                      src={cover.url} 
                      alt={cover.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-phlox font-playfair italic">
                    «{cover.title}»
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* СЕКЦИЯ 3 ВЕРТИКАЛЬНЫХ ВИДЕО */}
      {projectData.videos && projectData.videos.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <Reveal width="100%">
            <div className="border-t border-atlantis/15 pt-12 mb-8">
              <h3 className="font-playfair text-3xl md:text-4xl text-phlox mb-2">
                {projectContent.videoSectionTitle || t.projectLabels.videoReels}
              </h3>
              <p className="text-xs uppercase tracking-widest text-atlantis">
                Tap to pause/play · Use volume icon for audio
              </p>
            </div>
          </Reveal>

          {/* 3 ВИДЕО В РЯД НА ДЕСКТОПЕ, ДРУГ ПОД ДРУГОМ НА ТЕЛЕФОНЕ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectData.videos.map((vid, idx) => (
              <Reveal key={idx} width="100%">
                <ReelsPlayer 
                  src={vid.url} 
                  title={vid.title?.[lang]} 
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* НИЖНЯЯ НАВИГАЦИЯ МЕЖДУ КЕЙСАМИ (ПРЕДЫДУЩИЙ / СЛЕДУЮЩИЙ) */}
      <section className="px-6 max-w-7xl mx-auto border-t border-atlantis/20 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Предыдущий кейс */}
          <Link
            href={`/projects/${prevProject.id}?lang=${lang}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-atlantis/15 bg-atlantis/5 hover:border-coral/40 transition-all"
          >
            <div className="p-3 rounded-full bg-phthalo border border-coral/30 text-coral group-hover:-translate-x-1 transition-transform">
              <ArrowLeft size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-coral font-bold block mb-1">
                {t.projectLabels.prev}
              </span>
              <h4 className="font-playfair text-xl sm:text-2xl text-phlox group-hover:text-periwinkle transition-colors">
                {prevContent?.title}
              </h4>
            </div>
          </Link>

          {/* Следующий кейс */}
          <Link
            href={`/projects/${nextProject.id}?lang=${lang}`}
            className="group flex items-center justify-between p-5 rounded-2xl border border-atlantis/15 bg-atlantis/5 hover:border-phlox/40 transition-all text-right"
          >
            <div className="text-left sm:text-right w-full">
              <span className="text-[10px] uppercase tracking-[0.2em] text-verbena font-bold block mb-1">
                {t.projectLabels.next}
              </span>
              <h4 className="font-playfair text-xl sm:text-2xl text-phlox group-hover:text-coral transition-colors">
                {nextContent?.title}
              </h4>
            </div>
            <div className="p-3 rounded-full bg-phthalo border border-phlox/30 text-phlox group-hover:translate-x-1 transition-transform ml-4">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}