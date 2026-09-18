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
  // Форматируем индекс (1 -> 01)
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <Link href={`/projects/${project.id}?lang=${lang}`} className="group block">
      <div className="relative flex flex-col gap-6">
        
        {/* IMAGE / VISUAL CONTAINER (16:9) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-atlantis/20 bg-atlantis/5">
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 z-10 bg-phthalo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Placeholder or Image Animation */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-atlantis/20 via-transparent to-phlox/10"
          >
            <span className="font-playfair text-9xl font-black text-atlantis/10 pointer-events-none">
              {formattedIndex}
            </span>
          </motion.div>

          {/* Floating Tag (Year) */}
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-phthalo/80 backdrop-blur-md text-coral text-[10px] font-bold px-3 py-1 rounded-full border border-coral/30 tracking-widest">
              {project.year}
            </span>
          </div>

          {/* Icon Link effect */}
          <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-phlox p-3 rounded-full text-phthalo shadow-xl">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>

        {/* INFO CONTAINER */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <span className="text-coral font-bold text-sm tracking-tighter">
              {formattedIndex}
            </span>
            <div className="h-px w-8 bg-atlantis/30" />
            <div className="flex gap-2">
              {/* Теги берутся из content.tags */}
              {content.tags?.slice(0, 2).map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-atlantis font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-playfair text-3xl md:text-4xl text-phlox group-hover:text-periwinkle transition-colors duration-300">
            {content.title}
          </h3>

          <p className="text-periwinkle/70 line-clamp-2 text-sm leading-relaxed max-w-md">
            {content.desc}
          </p>

          <div className="mt-2 flex items-center gap-2 text-atlantis text-xs font-bold uppercase tracking-widest group-hover:text-coral transition-colors">
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