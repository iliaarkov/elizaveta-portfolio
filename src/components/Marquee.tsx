"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

export const Marquee = ({ children, speed = 50 }: MarqueeProps) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex"
      >
        {/* Дублируем контент для бесшовности */}
        <div className="flex flex-nowrap">
          {children}
          {children}
        </div>
        <div className="flex flex-nowrap">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
};