import React from 'react';

interface WaveDividerProps {
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`} style={{ height: '80px', marginTop: '-1px' }}>
      <svg
        className="relative block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-slate-700 dark:text-slate-800" />
            <stop offset="100%" stopColor="currentColor" className="text-white dark:text-slate-900" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L0,40 Q300,80 600,40 T1200,40 L1200,0 Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;