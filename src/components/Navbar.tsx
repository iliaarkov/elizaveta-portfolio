"use client";

import { Locale, translations } from "../lib/translations";
import { cn } from "../lib/utils";
import Link from "next/link";

interface NavbarProps {
  lang: Locale;
  setLang: (lang: Locale) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-phthalo/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <Link href="/" className="text-xl font-black text-white tracking-tighter hover:text-phlox transition-colors">
          ELIZAVETA.S
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-black text-[10px] uppercase tracking-widest text-periwinkle">
            <a href="#projects" className="hover:text-white transition-colors">{t.projects}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
          </div>

          <div className="flex bg-atlantis/30 rounded-full p-1 border border-white/5">
            {(['ru', 'en'] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all",
                  lang === l ? "bg-phlox text-phthalo shadow-lg" : "text-periwinkle hover:text-white"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}