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
      <div className="bg-white/70 backdrop-blur-md border-2 border-white rounded-full px-6 py-3 flex items-center justify-between shadow-xl">
        <Link href="/" className="text-xl font-bold text-papaya tracking-tighter">
          ELIZAVETA.S
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <a href="#projects" className="hover:text-coral transition-colors">{t.projects}</a>
            <a href="#about" className="hover:text-coral transition-colors">{t.about}</a>
            <a href="#contact" className="hover:text-coral transition-colors">{t.contact}</a>
          </div>

          <div className="flex bg-beige rounded-full p-1 border border-slate-200">
            {(['ru', 'en'] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold uppercase transition-all",
                  lang === l ? "bg-maize text-white shadow-sm" : "text-slate-400"
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