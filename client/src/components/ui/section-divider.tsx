import React from 'react';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  className?: string;
  variant?: 'gradient' | 'fade' | 'line';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '',
  variant = 'gradient'
}) => {
  if (variant === 'line') {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'fade') {
    return (
      <div className={cn("relative w-full h-32", className)}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 dark:from-slate-800 via-slate-200 dark:via-slate-850 to-white dark:to-slate-900" />
      </div>
    );
  }

  // Default gradient variant - ultra minimal and sophisticated
  return (
    <div className={cn("relative w-full", className)}>
      {/* Seamless gradient transition */}
      <div className="h-20 relative overflow-hidden">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 dark:from-slate-800 to-white dark:to-slate-900" />
        
        {/* Subtle center accent */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-px h-12 bg-gradient-to-t from-[#E30613]/10 to-transparent" />
        </div>
        
        {/* Soft overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-black/5" />
      </div>
      
      {/* Clean separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/50 dark:via-slate-700/50 to-transparent" />
    </div>
  );
};

export default SectionDivider;