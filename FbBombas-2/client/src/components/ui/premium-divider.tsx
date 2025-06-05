import React from 'react';
import { cn } from '@/lib/utils';

interface PremiumDividerProps {
  className?: string;
}

const PremiumDivider: React.FC<PremiumDividerProps> = ({ className = '' }) => {
  return (
    <div className={cn("relative w-full", className)}>
      {/* SVG Wave Pattern - Smooth and elegant */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="relative w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient definition */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="text-slate-700 dark:text-slate-800" stopColor="currentColor" />
              <stop offset="50%" className="text-slate-400 dark:text-slate-700" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="100%" className="text-white dark:text-slate-900" stopColor="currentColor" />
            </linearGradient>
            
            {/* Subtle pattern for texture */}
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" className="text-slate-300 dark:text-slate-700" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          
          {/* Main wave shape - more subtle and elegant */}
          <path
            d="M0,0 L0,60 Q360,100 720,60 T1440,60 L1440,0 Z"
            fill="url(#waveGradient)"
          />
          
          {/* Subtle texture overlay */}
          <path
            d="M0,0 L0,60 Q360,100 720,60 T1440,60 L1440,0 Z"
            fill="url(#dots)"
            opacity="0.5"
          />
          
          {/* Accent line */}
          <path
            d="M0,60 Q360,100 720,60 T1440,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-200 dark:text-slate-700"
            opacity="0.5"
          />
        </svg>
      </div>
      
      {/* Height spacer */}
      <div className="h-[120px]" />
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent opacity-50" />
        <div className="h-8 bg-gradient-to-b from-slate-50 dark:from-slate-850 to-transparent opacity-30" />
      </div>
      
      {/* Central accent element */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#E30613]/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E30613]/20" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#E30613]/20" />
        </div>
      </div>
    </div>
  );
};

export default PremiumDivider;