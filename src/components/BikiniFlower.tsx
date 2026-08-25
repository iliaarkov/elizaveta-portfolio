"use client";
import { motion } from "framer-motion";

export const BikiniFlower = ({ className, color = "currentColor", size = 100 }: { className?: string, color?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <path
      fill={color}
      d="M50,15 C55,0 75,0 80,15 C95,20 95,40 80,45 C95,60 85,80 70,75 C65,95 45,95 40,80 C25,95 5,85 10,70 C-5,55 -5,35 15,30 C5,15 25,5 40,15 Z"
      opacity="0.6"
    />
  </motion.svg>
);