"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "@/lib/translations";
import Link from "next/link";

interface NavbarProps {
  lang: "ru" | "en";
  setLang: (lang: "ru" | "en") => void;
}

export const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  // Отслеживаем скролл для изменения фона шапки
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-phthalo/70 backdrop-blur-md border-b border-atlantis/20" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
					<div className="w-10 h-10 bg-phlox rounded-full flex items-center justify-center text-phthalo font-black text-xl font-playfair group-hover:bg-coral transition-colors duration-300">
						E
					</div>
					<span className="font-playfair text-xl font-bold tracking-tighter text-phlox group-hover:text-periwinkle transition-colors hidden sm:block">
						Samokhovets.
					</span>
				</Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="relative px-6 py-2 text-xs uppercase tracking-widest font-bold text-periwinkle group"
							>
								<span className="relative z-10 group-hover:text-phthalo transition-colors">{link.name}</span>
								{/* Пузырек при наведении */}
								<motion.div 
									className="absolute inset-0 bg-phlox rounded-full opacity-0 group-hover:opacity-100 -z-0 scale-75 group-hover:scale-100 transition-all duration-300" 
									style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
								/>
							</Link>
						))}
					</div>

          {/* LANGUAGE SWITCHER */}
          <div className="relative flex items-center bg-atlantis/10 border border-atlantis/20 p-1 rounded-full">
            {/* Анимированная подложка выбора */}
            <motion.div
              layoutId="langBg"
              className="absolute bg-phlox rounded-full h-[calc(100%-8px)]"
              initial={false}
              animate={{
                width: "38px",
                x: lang === "en" ? 4 : 46,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setLang("en")}
              className={`relative z-10 w-10 h-8 text-[10px] font-black transition-colors duration-300 ${
                lang === "en" ? "text-phthalo" : "text-periwinkle/40 hover:text-periwinkle"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ru")}
              className={`relative z-10 w-10 h-8 text-[10px] font-black transition-colors duration-300 ${
                lang === "ru" ? "text-phthalo" : "text-periwinkle/40 hover:text-periwinkle"
              }`}
            >
              RU
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};