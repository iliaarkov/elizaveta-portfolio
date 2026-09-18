"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project, ProjectContent } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  content: ProjectContent;
  index: number;
  lang: "ru" | "en";
  viewLabel?: string;
}

export const ProjectCard = ({ 
  project, 
  content, 
  index, 
  lang,
  viewLabel = "View project"
}: ProjectCardProps) => {
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <Link href={`/projects/${project.id}?lang=${lang}`} className="group flex flex-col h-full">
      <div className="relative flex flex-col flex-1 gap-6">
        
        {/* IMAGE / VISUAL CONTAINER (16:9) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-atlantis/20 bg-atlantis/5 isolate">
          {/* Фото проекта (если задано) или цифра-заглушка */}
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={content.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-atlantis/20 via-transparent to-phlox/10"
            >
              <span className="font-playfair text-9xl font-black text-atlantis/10 pointer-events-none select-none">
                {formattedIndex}
              </span>
            </motion.div>
          )}

          {/* Легкое затемнение при наведении */}
          <div className="absolute inset-0 z-10 bg-phthalo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Бейдж с годом поверх фото */}
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-phthalo/85 backdrop-blur-md text-coral text-[10px] font-bold px-3 py-1 rounded-full border border-coral/30 tracking-widest shadow-lg">
              {project.year}
            </span>
          </div>

          {/* Иконка перехода в правом нижнем углу фото при наведении */}
          <div className="absolute bottom-4 right-4 z-20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-phlox p-3 rounded-full text-phthalo shadow-xl">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* INFO CONTAINER — тянется на всю оставшуюся высоту */}
        <div className="flex flex-col flex-1 justify-between gap-4">
          <div className="space-y-3">
            {/* Номер и теги */}
            <div className="flex items-center gap-4">
              <span className="text-coral font-bold text-sm tracking-tighter">
                {formattedIndex}
              </span>
              <div className="h-px w-8 bg-atlantis/30" />
              <div className="flex flex-wrap gap-2">
                {content.tags?.slice(0, 2).map((tag: string) => (
                  <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-atlantis font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Название */}
            <h3 className="font-playfair text-3xl md:text-4xl text-phlox group-hover:text-periwinkle transition-colors duration-300 leading-tight">
              {content.title}
            </h3>

            {/* Описание */}
            <p className="text-periwinkle/70 line-clamp-3 text-sm leading-relaxed">
              {content.desc}
            </p>
          </div>

          {/* Ссылка "Смотреть проект" — прижата к самому низу карточки */}
          <div className="pt-2 flex items-center gap-2 text-atlantis text-xs font-bold uppercase tracking-widest group-hover:text-coral transition-colors mt-auto">
            <span>{viewLabel}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </Link>
  );
};