"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="p-20 text-center font-black">Проект не найден :(</div>;

  return (
    <main className="min-h-screen bg-beige p-6 md:p-20">
      <button 
        onClick={() => router.back()}
        className="mb-10 flex items-center gap-2 font-black uppercase bg-white px-6 py-3 rounded-full shadow-lg hover:bg-maize transition-colors"
      >
        <ArrowLeft size={20} /> Назад
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-[4rem] overflow-hidden shadow-2xl">
        <div className="aspect-video bg-slate-200">
          <img src={project.thumbnail} alt={project.client} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-10 md:p-20">
          <span className="text-coral font-black uppercase tracking-widest text-sm">{project.category}</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 mb-8">
            {project.client}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {/* Здесь будет контент проекта */}
            {project.description.ru}
          </p>
          
          {project.metrics && (
            <div className="mt-12 bg-junebud/20 p-8 rounded-[3rem] border-4 border-junebud">
              <p className="text-junebud text-4xl font-black uppercase">{project.metrics}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}