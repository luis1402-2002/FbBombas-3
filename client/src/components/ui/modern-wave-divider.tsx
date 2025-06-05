import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ModernWaveDividerProps {
  className?: string;
}

const ModernWaveDivider: React.FC<ModernWaveDividerProps> = ({ className = '' }) => {
  return (
    <div className={cn("relative w-full -mt-1 -mb-px", className)}>
      {/* Main container with proper height */}
      <div className="relative h-16 sm:h-20 md:h-24 overflow-hidden bg-slate-700 dark:bg-slate-800">
        
        {/* SVG Wave Shape */}
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Multi-stop gradient for smooth transition */}
            <linearGradient id="waveGradientSmooth" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" stopOpacity="0" className="dark:stop-color-slate-800" />
              <stop offset="30%" stopColor="#475569" stopOpacity="0.3" className="dark:stop-color-slate-700" />
              <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.8" className="dark:stop-color-slate-800" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" className="dark:stop-color-slate-900" />
            </linearGradient>
            
            {/* Mask for smooth edges */}
            <mask id="waveMask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
            </mask>
          </defs>
          
          {/* Background wave layer */}
          <path
            d="M0,20 C480,100 960,100 1440,20 L1440,120 L0,120 Z"
            fill="white"
            className="dark:fill-slate-900"
            opacity="0.4"
          />
          
          {/* Middle wave layer */}
          <path
            d="M0,40 C360,90 720,90 1080,40 S1440,0 1440,0 L1440,120 L0,120 Z"
            fill="white"
            className="dark:fill-slate-900"
            opacity="0.7"
          />
          
          {/* Front wave layer */}
          <path
            d="M0,60 C240,95 480,95 720,60 C960,25 1200,25 1440,60 L1440,120 L0,120 Z"
            fill="white"
            className="dark:fill-slate-900"
          />
          
          {/* Subtle accent line */}
          <path
            d="M0,60 C240,95 480,95 720,60 C960,25 1200,25 1440,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-slate-300 dark:text-slate-700"
            opacity="0.5"
          />
        </svg>
        
        {/* Overlay gradient for extra smoothness */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-slate-900/10 pointer-events-none" />
      </div>
    </div>
  );
};

export default ModernWaveDivider;