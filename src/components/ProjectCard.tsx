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
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative bg-white rounded-[2.5rem] p-4 shadow-xl border-2 border-transparent hover:border-coral transition-all cursor-pointer hover:z-20"
    >
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[2rem] bg-slate-200">
        <img 
          src={project.thumbnail} 
          alt={project.client} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
           {/* Перевод категории */}
           <span className="bg-maize text-[10px] font-black px-3 py-1 rounded-full w-fit mb-2 uppercase text-slate-900">
             {t[project.category as keyof typeof t] || project.category}
           </span>
           <h3 className="text-white text-xl font-bold leading-tight">
             {project.title[lang]}
           </h3>
        </div>
        {project.metrics && (
           <div className="absolute top-4 right-4 bg-coral text-white text-[10px] font-black px-3 py-2 rounded-full rotate-12 shadow-lg z-10">
             {project.metrics}
           </div>
        )}
      </div>

      <div className="mt-5 px-2 flex justify-between items-center">
        <div className="flex flex-col text-left">
          {/* Перевод слова Client */}
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{t.client}</p>
          <h4 className="text-sm font-bold text-slate-700 uppercase">{project.client}</h4>
        </div>
        <div className="bg-beige p-3 rounded-full group-hover:bg-maize transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-papaya group-hover:text-white transition-colors">
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};