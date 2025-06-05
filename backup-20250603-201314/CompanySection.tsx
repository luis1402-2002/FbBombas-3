import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, Award, Shield, GanttChart, Cog, Factory, Beaker, MoveUpRight, History } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const CompanySection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section id="empresa" className="relative py-16 md:py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8">
        <SectionHeader />
        <div className="mt-16 md:mt-24">
          <HistorySection />
          <CertificationsSection />
          <FactorySection />
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
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="inline-flex items-center justify-center">
        <div className="w-20 h-1 bg-[#E30613] mb-8"></div>
      </div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('company.title', 'Nossa História')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 leading-relaxed">
        {t('company.subtitle', 'Há mais de 80 anos bombeando soluções')}
      </p>
    </motion.div>
  );
};

const HistorySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="lg:col-span-6 order-2 lg:order-1">
        <div className="inline-flex items-center bg-[#E30613]/10 dark:bg-[#E30613]/20 px-4 py-2 rounded-full mb-5">
          <History className="h-5 w-5 text-[#E30613] mr-2" />
          <span className="text-sm font-medium text-azul-profundo dark:text-white">
            {t('company.history_title', 'História e Tradição')}
          </span>
        </div>
        
        <div className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.history_p1', 'Fundada em 1944, a FB Bombas nasceu da visão pioneira de fornecer soluções de bombeamento de alta qualidade para a indústria brasileira em plena expansão. Ao longo de mais de 80 anos, crescemos constantemente, mantendo nosso compromisso com a excelência e inovação.')}
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.history_p2', 'Nossa trajetória é marcada por importantes conquistas tecnológicas e pelo desenvolvimento de produtos cada vez mais eficientes e duráveis, consolidando nossa posição como referência no setor.')}
          </p>
          
          <div className="pt-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#E30613] text-white py-2 px-5 rounded-md text-lg font-medium">1944</div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#E30613] to-transparent"></div>
              <div className="bg-azul-profundo text-white py-2 px-5 rounded-md text-lg font-medium">{t('company.history.today', 'Hoje')}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-6 order-1 lg:order-2">
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-slate-800">
            <img 
              src="https://www.dropbox.com/scl/fi/hb2m9rl73sd6k6se8o0oi/IMG_9437-2.JPG?rlkey=swmg4z5hnb34cq6crl2hpsjtc&st=rqyc6gbq&raw=1" 
              alt="História da FB Bombas" 
              className="w-full h-auto shadow-lg transition-transform duration-700 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-white font-garamond text-2xl mb-2 drop-shadow-md">
                {t('company.history.caption', 'Nossa História')}
              </h3>
              <div className="h-1 w-16 bg-[#E30613]"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();
  
  // Removendo ISO 9001 conforme solicitado
  const certifications = [
    { 
      icon: <Shield className="h-8 w-8 stroke-[1.5]" />,
      title: "CRCC", 
      description: t('company.certifications.crcc.desc', 'Cadastro de Fornecedores para projetos de grande escala e aplicações críticas no Brasil.')
    },
    { 
      icon: <Award className="h-8 w-8 stroke-[1.5]" />,
      title: "API 610", 
      description: t('company.certifications.api.desc', 'Conformidade com os rigorosos padrões internacionais para bombas centrífugas em aplicações petroquímicas.')
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="mb-24 md:mb-32"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-[#E30613]/10 dark:bg-[#E30613]/20 px-4 py-2 rounded-full mb-5">
          <Award className="h-5 w-5 text-[#E30613] mr-2" />
          <span className="text-sm font-medium text-azul-profundo dark:text-white">
            {t('company.certifications.title', 'Certificações e Normas')}
          </span>
        </div>
        
        <h3 className="font-garamond text-3xl text-azul-profundo dark:text-white mb-4">
          {t('company.certifications.subtitle', 'Qualidade Certificada')}
        </h3>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
          {t('company.certifications.description', 'Nossos produtos e processos são certificados pelos mais rigorosos padrões internacionais, garantindo a excelência em todos os nossos produtos.')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-[#E30613] to-[#ff6b6b] p-4 rounded-xl text-white shadow-md mr-6">
                {cert.icon}
              </div>
              
              <div>
                <h4 className="font-garamond text-2xl text-azul-profundo dark:text-white mb-3">
                  {cert.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const FactorySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const factoryFeatures = [
    {
      icon: <GanttChart className="h-5 w-5" />,
      text: t('company.factory.f1', '10.900 m² de área total')
    },
    {
      icon: <Factory className="h-5 w-5" />,
      text: t('company.factory.f2', '5.545 m² de área construída')
    },
    {
      icon: <Cog className="h-5 w-5" />,
      text: t('company.factory.f3', 'Maquinário de precisão CNC')
    },
    {
      icon: <Beaker className="h-5 w-5" />,
      text: t('company.factory.f4', 'Laboratórios de teste e controle de qualidade')
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="lg:col-span-5 relative">
        <div className="relative z-10 group">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://www.dropbox.com/scl/fi/7znzl3jj6xpw3punhxeh0/DSC05486-2-1-1.JPG?rlkey=0oce1tv73y02gmakavzw7sodg&st=hy0940l8&raw=1"
              alt="Parque Fabril FB Bombas" 
              className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105" 
              loading="lazy"
            />
          </div>
          
          <div className="absolute -bottom-6 right-6 bg-azul-profundo text-white font-medium py-3 px-6 rounded-xl shadow-lg">
            {t('company.factory.caption', 'Parque Fabril')}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 lg:pl-8">
        <div className="inline-flex items-center bg-[#E30613]/10 dark:bg-[#E30613]/20 px-4 py-2 rounded-full mb-5">
          <Factory className="h-5 w-5 text-[#E30613] mr-2" />
          <span className="text-sm font-medium text-azul-profundo dark:text-white">
            {t('company.factory.title', 'Infraestrutura')}
          </span>
        </div>
        
        <h3 className="font-garamond text-3xl text-azul-profundo dark:text-white mb-5">
          {t('company.factory.subtitle', 'Parque Fabril de Alta Tecnologia')}
        </h3>
        
        <div className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.factory.p1', 'Nossa unidade fabril possui 10.900 m² de área total, sendo 5.545 m² de área construída, equipada com tecnologia de ponta para garantir a fabricação de produtos de alta qualidade.')}
          </p>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.factory.p2', 'Contamos com equipamentos CNC de última geração, células de usinagem especializadas e laboratórios de teste que permitem o controle preciso de todos os processos produtivos.')}
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {factoryFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center bg-white dark:bg-slate-800/40 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              <div className="flex-shrink-0 mr-4 w-10 h-10 bg-[#E30613]/10 dark:bg-[#E30613]/20 rounded-full flex items-center justify-center text-[#E30613]">
                {feature.icon}
              </div>
              <span className="text-slate-700 dark:text-slate-200 font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



export default CompanySection;
