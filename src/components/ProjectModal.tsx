"use client";

import { Project } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-coral transition-colors text-white"
          >
            <X size={24} />
          </button>

          <div className="w-full md:w-2/3 bg-black aspect-[9/16] md:aspect-auto flex items-center justify-center">
            {/* Здесь будет видео */}
            <video 
              src={project.videoUrl} 
              controls 
              autoPlay 
              className="h-full w-full object-contain"
              poster={project.thumbnail}
            />
          </div>

          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-beige">
            <span className="text-papaya font-black text-xs uppercase tracking-widest mb-2">{project.category}</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight">{project.client}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-slate-200">#{tag}</span>
              ))}
            </div>
            {project.metrics && (
              <div className="bg-coral/10 p-4 rounded-2xl border-2 border-coral/20">
                <p className="text-coral font-black text-xl">{project.metrics}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};