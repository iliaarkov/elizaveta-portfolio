// "use client";
// import { motion } from "framer-motion";

// export const BikiniFlower = ({ className, color = "currentColor", size = 100 }: { className?: string, color?: string, size?: number }) => (
//   <motion.svg
//     width={size}
//     height={size}
//     viewBox="0 0 100 100"
//     className={className}
//     animate={{ rotate: 360 }}
//     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//   >
//     <path
//       fill={color}
//       d="M50,15 C55,0 75,0 80,15 C95,20 95,40 80,45 C95,60 85,80 70,75 C65,95 45,95 40,80 C25,95 5,85 10,70 C-5,55 -5,35 15,30 C5,15 25,5 40,15 Z"
//       opacity="0.6"
//     />
//   </motion.svg>
// );


"use client";
import { motion } from "framer-motion";

interface FlowerProps {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  duration?: number;
}

export const BikiniFlower = ({ 
  className, 
  fillColor = "#CAA9F3", 
  strokeColor = "#7997E6", 
  size = 100,
  duration = 20 
}: FlowerProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
    style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" }}
  >
    <path
      d="M50,20 C55,5 75,5 80,20 C95,25 95,45 80,50 C95,65 85,85 70,80 C65,95 45,95 40,80 C25,85 5,75 10,60 C-5,45 -5,25 15,20 C5,5 25,-5 40,10 Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />
  </motion.svg>
);