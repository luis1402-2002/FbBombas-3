import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { downloads, downloadCategories } from "../../data/downloadsData";
import { Download as DownloadType } from "../../types";
import {
  FileText,
  ChartBarIcon,
  Box,
  Download,
  Code,
} from "lucide-react";

const DownloadsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="downloads" className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <DownloadCards downloads={downloads} />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('downloads.manuals', 'Manuais Técnicos')}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        {t('downloads.manuals_desc', 'Manuais técnicos completos de nossas linhas de bombas')}
      </p>
    </motion.div>
  );
};

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (categoryId: string) => void;
}

const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {downloadCategories.map((category) => (
        <button
          key={category.id}
          className={`
            py-2.5 px-6 rounded-md shadow-sm transition font-medium
            ${
              activeFilter === category.id
                ? "bg-[#003087] text-white"
                : "bg-white dark:bg-slate-800 text-[#003087] dark:text-white hover:bg-[#003087] hover:text-white dark:hover:bg-[#003087]"
            }
          `}
          onClick={() => onFilterChange(category.id)}
        >
          {t(`downloads.${category.id}`, category.label)}
        </button>
      ))}
    </motion.div>
  );
};

interface DownloadCardsProps {
  downloads: DownloadType[];
}

const DownloadCards = ({ downloads }: DownloadCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {downloads.map((download, index) => (
        <DownloadCard key={download.id} download={download} index={index} />
      ))}
    </div>
  );
};

interface DownloadCardProps {
  download: DownloadType;
  index: number;
}

const DownloadCard = ({ download, index }: DownloadCardProps) => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "file-pdf":
        return <FileText className="h-6 w-6 text-[#E30613]" />;
      case "chart-line":
        return <ChartBarIcon className="h-6 w-6 text-[#E30613]" />;
      case "cube":
        return <Box className="h-6 w-6 text-[#E30613]" />;
      case "code":
        return <Code className="h-6 w-6 text-[#E30613]" />;
      default:
        return <FileText className="h-6 w-6 text-[#E30613]" />;
    }
  };

  const getDownloadText = (category: string) => {
    switch (category) {
      case "manuais":
        return t('downloads.download', 'Baixar') + " " + t('downloads.manual', 'o Manual');
      case "catalogos":
        return t('downloads.download', 'Baixar') + " " + t('downloads.catalog', 'o Catálogo');
      case "curvas":
        return t('downloads.download', 'Baixar') + " " + t('downloads.curve', 'as Curvas');
      case "softwares":
        return t('downloads.download', 'Baixar') + " " + t('downloads.software_file', 'o Software');
      default:
        return t('downloads.download', 'Baixar');
    }
  };

  // Use as chaves de tradução se disponíveis, ou fallback para os textos estáticos
  const title = download.titleKey ? t(download.titleKey, download.title) : download.title;
  const description = download.descriptionKey ? t(download.descriptionKey, download.description) : download.description;

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-[#E30613]/10 rounded-full flex items-center justify-center mr-4">
          {getIcon(download.icon)}
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#003087] dark:text-white">
            {title}
          </h3>
          <span className="text-slate-500 dark:text-slate-400 text-sm">
            {download.type} · {download.size}
          </span>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
        {description}
      </p>
      <a
        href={download.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#003087] dark:text-white hover:text-[#E30613] dark:hover:text-[#E30613] transition group"
      >
        <span className="p-2 bg-[#003087]/10 rounded-md mr-3 group-hover:bg-[#E30613]/10 transition-colors">
          <Download className="h-5 w-5" />
        </span>
        <span className="font-medium">{getDownloadText(download.category)}</span>
      </a>
    </motion.div>
  );
};

export default DownloadsSection;