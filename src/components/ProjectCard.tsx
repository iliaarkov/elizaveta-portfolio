"use client";

import { Project } from "@/lib/projects";
import { Locale, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  lang: Locale;
}

export const ProjectCard = ({ project, lang }: Props) => {
  const t = translations[lang].projects;

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-phthalo/40 backdrop-blur-md rounded-[2rem] p-3 border border-atlantis/30 hover:border-phlox transition-all cursor-pointer overflow-hidden"
    >
      {/* Контейнер 16:9 */}
      <div className="relative w-full aspect-video overflow-hidden rounded-[1.5rem] bg-atlantis/20">
        <img 
          src={project.thumbnail} 
          alt={project.client} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Оверлей при наведении */}
        <div className="absolute inset-0 bg-gradient-to-t from-phthalo via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
           <h3 className="text-white text-xl font-black uppercase leading-tight">
             {project.title[lang]}
           </h3>
        </div>

        {/* Метрика */}
        {project.metrics && (
           <div className="absolute top-4 right-4 bg-coral text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl">
             {project.metrics}
           </div>
        )}
      </div>

      {/* Информация под картинкой */}
      <div className="mt-4 px-3 py-2 flex justify-between items-center">
        <div className="text-left">
          <p className="text-[10px] font-black text-periwinkle uppercase tracking-widest mb-1">{t.client}</p>
          <h4 className="text-lg font-black text-white uppercase truncate max-w-[200px]">{project.client}</h4>
        </div>
        <div className="bg-atlantis p-3 rounded-full group-hover:bg-phlox transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};