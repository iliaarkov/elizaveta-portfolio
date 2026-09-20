"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "@/lib/translations";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface ContactSectionProps {
  lang: "ru" | "en";
}

type FormStatus = "idle" | "sending" | "success" | "error";

export const ContactSection = ({ lang }: ContactSectionProps) => {
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        
        // Логика: через 4 секунды стираем только сообщение
        setTimeout(() => {
          setFormData((prev) => ({ ...prev, message: "" }));
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-atlantis/20 bg-atlantis/5 backdrop-blur-sm p-8 md:p-12">
      {/* Декоративный элемент на фоне (Jellyfish style) */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-phlox/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Левая часть: Заголовок */}
        <div>
          <h2 className="font-playfair text-5xl md:text-6xl text-phlox mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="font-manrope text-periwinkle/60 text-lg leading-relaxed">
            {lang === "ru" 
              ? "Есть идея для проекта или предложения о сотрудничестве? Напиши мне, и я отвечу в ближайшее время."
              : "Have a project idea or a collaboration proposal? Drop me a message, and I'll get back to you soon."}
          </p>
          
          <div className="mt-12 space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-atlantis font-bold mb-1">Email</span>
              <span className="text-phlox font-medium">samohovetsliza@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-atlantis font-bold mb-1">Socials</span>
              <span className="text-phlox font-medium"><a href="#">Telegram</a> · <a href="https://www.instagram.com/lizapenna_">Instagram</a> · <a href="https://www.linkedin.com/in/elizaveta-samokhovets-611942421">LinkedIn</a></span>
            </div>
          </div>
        </div>

        {/* Правая часть: Форма */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-atlantis font-black ml-1">{t.name}</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-phthalo/50 border border-atlantis/30 rounded-xl px-4 py-3 text-periwinkle focus:border-phlox focus:outline-none transition-colors placeholder:opacity-20"
              placeholder="Elizaveta"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-atlantis font-black ml-1">{t.info}</label>
            <input
              required
              type="text"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full bg-phthalo/50 border border-atlantis/30 rounded-xl px-4 py-3 text-periwinkle focus:border-phlox focus:outline-none transition-colors placeholder:opacity-20"
              placeholder="@username / email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-atlantis font-black ml-1">{t.message}</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-phthalo/50 border border-atlantis/30 rounded-xl px-4 py-3 text-periwinkle focus:border-phlox focus:outline-none transition-colors resize-none placeholder:opacity-20"
              placeholder="..."
            />
          </div>

          <button
            disabled={status === "sending" || status === "success"}
            className={`mt-4 relative overflow-hidden group py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-500 ${
              status === "success" 
                ? "bg-coral text-phthalo" 
                : "bg-phlox text-phthalo hover:shadow-[0_0_20px_rgba(202,169,243,0.3)] hover:scale-[1.02]"
            }`}
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2"
                >
                  {t.send} <Send size={16} />
                </motion.div>
              )}

              {status === "sending" && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Loader2 size={16} className="animate-spin" />
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  {t.success} <CheckCircle2 size={16} />
                </motion.div>
              )}

              {status === "error" && (
                <motion.div key="error" className="text-xs">
                  Error. Try again.
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </div>
  );
};