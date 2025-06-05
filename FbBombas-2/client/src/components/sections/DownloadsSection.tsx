import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Download } from "lucide-react";

interface TechnicalManual {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  size: string;
  fileName: string;
  downloadUrl: string;
}

const DownloadsSection = () => {
  const { t } = useLanguage();

  const technicalManuals: TechnicalManual[] = [
    {
      id: "fbcn",
      title: t('downloads.fbcn_manual.title', 'Manual Técnico FBCN'),
      subtitle: t('downloads.fbcn_manual.subtitle', 'Bombas Centrífugas Normalizadas'),
      description: t('downloads.fbcn_manual.description', 'Manual técnico completo da linha FBCN com especificações, instalação, operação e manutenção detalhadas.'),
      size: "2.8 MB",
      fileName: "FB Manual Técnico - FBCN.pdf",
      downloadUrl: "/assets/manuals/FB_Manual_Tecnico_FBCN.pdf"
    },
    {
      id: "fbot",
      title: t('downloads.fbot_manual.title', 'Manual Técnico FBOT'),
      subtitle: t('downloads.fbot_manual.subtitle', 'Bombas de Óleo Térmico'),
      description: t('downloads.fbot_manual.description', 'Manual técnico completo da linha FBOT para aplicações de óleo térmico com especificações de alta temperatura.'),
      size: "3.1 MB",
      fileName: "FB Manual Técnico - FBOT.pdf",
      downloadUrl: "/assets/manuals/FB_Manual_Tecnico_FBOT.pdf"
    },
    {
      id: "fbe",
      title: t('downloads.fbe_manual.title', 'Manual Técnico FBE'),
      subtitle: t('downloads.fbe_manual.subtitle', 'Bombas de Engrenagem Externa'),
      description: t('downloads.fbe_manual.description', 'Manual técnico completo da linha FBE para fluidos viscosos com especificações de deslocamento positivo.'),
      size: "2.5 MB",
      fileName: "FB Manual Técnico - FBE.pdf",
      downloadUrl: "/assets/manuals/FB_Manual_Tecnico_FBE.pdf"
    }
  ];

  return (
    <section id="downloads" className="relative py-16 md:py-20 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(227,6,19,0.05) 50px, rgba(227,6,19,0.05) 52px)`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        {/* Manuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technicalManuals.map((manual, index) => (
            <ManualCard key={manual.id} manual={manual} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

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
        {t('downloads.title', 'Manuais Técnicos')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
        {t('downloads.subtitle', 'Documentação técnica completa para instalação, operação e manutenção')}
      </p>
    </motion.div>
  );
};

interface ManualCardProps {
  manual: TechnicalManual;
  index: number;
}

const ManualCard = ({ manual, index }: ManualCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = manual.downloadUrl;
    link.download = manual.fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group bg-white dark:bg-slate-800/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700/50 overflow-hidden flex flex-col h-full"
    >
      {/* Header with Icon */}
      <div className="relative p-6 sm:p-7 pb-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E30613] to-[#c60411] rounded-xl flex items-center justify-center shadow-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-xl font-bold text-azul-profundo dark:text-white mb-1 leading-tight">
              {manual.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
              {manual.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
          {manual.description}
        </p>

        {/* File Info */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-4 rounded-xl mb-6 border border-slate-200/50 dark:border-slate-600/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400 font-medium">{t('downloads.file_size', 'Tamanho do arquivo')}</span>
            <span className="text-azul-profundo dark:text-white font-bold">{manual.size}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-slate-600 dark:text-slate-400 font-medium">{t('downloads.format', 'Formato')}</span>
            <span className="text-azul-profundo dark:text-white font-bold">PDF</span>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
        >
          <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          {t('downloads.download_manual', 'Baixar Manual')}
        </button>
      </div>
    </motion.div>
  );
};

export default DownloadsSection;