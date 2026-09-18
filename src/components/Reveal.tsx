"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  overflowVisible?: boolean; 
  className?: string; // <-- Добавлен проп className
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  overflowVisible = false,
  className = ""
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        position: "relative", 
        width, 
        overflow: overflowVisible ? "visible" : "hidden" 
      }}
    >
      <motion.div
        className={className.includes("h-full") ? "h-full flex flex-col" : undefined}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};