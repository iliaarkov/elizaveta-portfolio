"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen bg-phthalo flex items-center justify-center text-white font-black uppercase tracking-widest">
      Проект не найден :(
    </div>
  );

  return (
    <main className="min-h-screen bg-phthalo text-white font-sans selection:bg-phlox selection:text-phthalo">
      {/* Декоративные "медузы" на фоне */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-atlantis/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-phlox/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Кнопка назад */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="group mb-12 flex items-center gap-3 font-black uppercase text-[10px] tracking-[0.3em] bg-atlantis/30 border border-white/10 px-8 py-4 rounded-full hover:bg-phlox hover:text-phthalo transition-all shadow-xl"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Назад
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Левая колонка: Контент */}
          <div className="lg:col-span-7">
            <Reveal overflowVisible={true}>
              <div className="mb-8">
                <span className="text-phlox font-black uppercase tracking-[0.4em] text-xs">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mt-4 leading-[0.85] italic">
                  {project.client}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-periwinkle font-medium leading-relaxed mb-10">
                  {project.description.ru}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6} overflowVisible={true}>
              <div className="flex flex-wrap gap-4 mb-12">
                {project.tags?.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-phlox"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Правая колонка: Визуал и Метрики */}
          <div className="lg:col-span-5 space-y-8">
            {/* Карточка с метрикой */}
            {project.metrics && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-coral/20 to-coral/5 border-2 border-coral/30 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(242,137,131,0.1)] relative overflow-hidden group"
              >
                <Sparkles className="absolute top-6 right-6 text-coral opacity-50 group-hover:rotate-12 transition-transform" />
                <p className="text-periwinkle font-black uppercase text-[10px] tracking-[0.3em] mb-4">Результат</p>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                  {project.metrics}
                </h3>
              </motion.div>
            )}

            {/* Основное изображение кейса */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden border-4 border-atlantis/30 shadow-2xl shadow-atlantis/20"
            >
              <img 
                src={project.thumbnail} 
                alt={project.client} 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-phthalo/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Блок для видео (если есть ссылка) */}
        {project.videoUrl && (
          <Reveal delay={1} width="100%" overflowVisible={true}>
            <div className="mt-20">
               <h3 className="text-2xl font-black uppercase mb-10 text-center tracking-[0.5em] text-phlox">Backstage / Process</h3>
               <div className="aspect-video rounded-[4rem] bg-atlantis/20 border-2 border-white/5 overflow-hidden shadow-3xl">
                  <video 
                    src={project.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    poster={project.thumbnail}
                  />
               </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Простой футер страницы */}
      <footer className="py-20 text-center opacity-30 text-[10px] font-black uppercase tracking-[1em]">
        Stay Bubbly — Elizaveta S.
      </footer>
    </main>
  );
}