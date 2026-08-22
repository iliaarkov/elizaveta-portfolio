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
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2.5rem] p-4 shadow-xl border-2 border-transparent hover:border-coral transition-all cursor-pointer"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-slate-100">
        <img 
          src={project.thumbnail} 
          alt={project.client} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
           <span className="bg-maize text-xs font-bold px-3 py-1 rounded-full w-fit mb-2 uppercase">
             {project.category}
           </span>
           <h3 className="text-white text-xl font-bold leading-tight">
             {project.title[lang]}
           </h3>
        </div>
        {project.metrics && (
           <div className="absolute top-4 right-4 bg-coral text-white text-xs font-black px-3 py-2 rounded-full rotate-12 shadow-lg">
             {project.metrics}
           </div>
        )}
      </div>
      <div className="mt-4 px-2 flex justify-between items-center">
        <div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{project.client}</p>
        </div>
        <button className="bg-beige p-3 rounded-full hover:bg-maize transition-colors group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-papaya group-hover:text-white"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </button>
      </div>
    </motion.div>
  );
};