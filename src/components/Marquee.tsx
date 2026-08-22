"use client";

import { motion } from "framer-motion";

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-maize py-4 border-y-4 border-white rotate-[-1deg] z-10 shadow-lg">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-2xl md:text-4xl font-black uppercase text-white mx-8 flex items-center">
            {item} <span className="ml-8 text-papaya">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};