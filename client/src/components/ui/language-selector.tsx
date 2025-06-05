import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

// Import flags as modules for better performance and bundling
import brazilFlag from "@/assets/flags/brazil.svg";
import usaFlag from "@/assets/flags/usa.svg";
import spainFlag from "@/assets/flags/spain.svg";

const languages = [
  { 
    code: 'pt' as Language, 
    name: 'Português', 
    flag: brazilFlag
  },
  { 
    code: 'en' as Language, 
    name: 'English', 
    flag: usaFlag
  },
  { 
    code: 'es' as Language, 
    name: 'Español', 
    flag: spainFlag
  }
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLanguage = languages.find(lang => lang.code === language);

  // No need to preload - images are bundled by Vite

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label="Selecionar idioma"
      >
        <img 
          src={currentLanguage?.flag} 
          alt={currentLanguage?.name}
          className="w-5 h-4 object-cover rounded-sm"
          width={20}
          height={16}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <ChevronDown className={cn("h-3 w-3 text-slate-500 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-[100] min-w-[140px]">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-3 first:rounded-t-lg last:rounded-b-lg",
                  language === lang.code ? "bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                )}
              >
                <img 
                  src={lang.flag} 
                  alt={lang.name}
                  className="w-4 h-3 object-cover rounded-sm"
                  width={16}
                  height={12}
                  loading="lazy"
                  decoding="async"
                />
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <span className="ml-auto text-blue-600 dark:text-blue-400 text-xs">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile version
export const MobileLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800">
      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Idioma / Language</div>
      <div className="flex justify-center gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 transform",
              language === lang.code 
                ? "bg-blue-50 dark:bg-blue-900/30 scale-110 shadow-lg border-2 border-blue-500" 
                : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 border-2 border-transparent"
            )}
          >
            <img 
              src={lang.flag} 
              alt={lang.name}
              className="w-8 h-6 object-cover rounded-md"
              width={32}
              height={24}
              loading="eager"
              decoding="async"
            />
            {language === lang.code && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};