"use client";
import { motion } from "framer-motion";

interface FlowerProps {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  centerColor?: string; // Цвет сердцевины
  size?: number;
  duration?: number;
}

export const BikiniFlower = ({ 
  className, 
  fillColor = "#CAA9F3", 
  strokeColor = "#7997E6", 
  centerColor = "#FFFFFF",
  size = 100,
  duration = 20 
}: FlowerProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="-10 -10 120 120" // Увеличили область, чтобы stroke не обрезался
    className={className}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    {/* Лепестки */}
    <path
      d="M50,20 C55,5 75,5 80,20 C95,25 95,45 80,50 C95,65 85,85 70,80 C65,95 45,95 40,80 C25,85 5,75 10,60 C-5,45 -5,25 15,20 C5,5 25,-5 40,10 Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Сердцевина */}
    <circle 
      cx="50" 
      cy="50" 
      r="8" 
      fill={centerColor} 
      stroke={strokeColor} 
      strokeWidth="3" 
    />
  </motion.svg>
);