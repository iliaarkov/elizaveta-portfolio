"use client";
import { motion } from "framer-motion";

interface BubbleProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const Bubble = ({ size = 100, className, duration = 8 }: BubbleProps) => (
  <motion.div
    style={{ width: size, height: size }}
    className={`relative rounded-full border border-white/30 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] animate-wobble ${className}`}
  >
    {/* Блик внутри пузыря */}
    <div className="absolute top-[20%] left-[20%] w-[15%] h-[15%] bg-white/40 rounded-full blur-[1px]" />
    
    {/* Дополнительное переливание (радужный эффект) */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-phlox/10 via-transparent to-coral/10 opacity-50" />
  </motion.div>
);