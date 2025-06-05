import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, Award, Shield, GanttChart, Cog, Factory, Beaker, History, Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="empresa" className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background Images - Light Theme */}
      <div className="absolute inset-0 dark:hidden">
        <img 
          src="https://www.dropbox.com/scl/fi/7kjbz77hhv2eom3aupicg/Design-sem-nome-80.svg?rlkey=2ku8yejzrvkum000kmjhftxfl&st=quvqpa8a&raw=1"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80 pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
      </div>
      {/* Background Images - Dark Theme */}
      <div className="absolute inset-0 hidden dark:block">
        <img 
          src="https://www.dropbox.com/scl/fi/7zlvbzp44b9v8ms0yhxzu/Design-sem-nome-78.svg?rlkey=3g2mlss6c2xin2pry853ypcrw&st=hv77q8q3&raw=1"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80 pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        <div className="mt-16 md:mt-20 space-y-20 md:space-y-24 lg:space-y-28">
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
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('company.title', 'Nossa História')}
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-stretch"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Content Side */}
      <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 flex flex-col justify-center h-full">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-[#E30613]/10 to-[#E30613]/5 dark:from-[#E30613]/20 dark:to-[#E30613]/10 px-4 py-2.5 rounded-full border border-[#E30613]/20 dark:border-[#E30613]/30 self-start">
          <History className="h-5 w-5 text-[#E30613] mr-3" />
          <span className="text-sm font-semibold text-azul-profundo dark:text-white tracking-wide">
            {t('company.history_title', 'História e Tradição')}
          </span>
        </div>
        
        {/* Main Title */}
        <h3 className="font-garamond text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-azul-profundo dark:text-white leading-tight">
          {t('company.history.main_title', 'Tradição e Excelência')}
        </h3>
        
        {/* Description */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.history_p1', 'Fundada em 1944, a FB Bombas nasceu da visão pioneira de fornecer soluções de bombeamento de alta qualidade para a indústria brasileira em plena expansão. Ao longo de mais de 80 anos, crescemos constantemente, mantendo nosso compromisso com a excelência e inovação.')}
          </p>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('company.history_p2', 'Nossa trajetória é marcada por importantes conquistas tecnológicas e pelo desenvolvimento de produtos cada vez mais eficientes e duráveis, consolidando nossa posição como referência no setor.')}
          </p>
        </div>
        
        {/* Timeline - Clean Design */}
        <div className="pt-4">
          <div className="flex items-center space-x-4">
            <div className="bg-[#E30613] text-white py-2 px-5 rounded-md text-lg font-medium">1944</div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-[#E30613] to-transparent"></div>
            <div className="bg-azul-profundo text-white py-2 px-5 rounded-md text-lg font-medium">{t('company.history.today', 'Hoje')}</div>
          </div>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="order-1 lg:order-2">
        <div className="relative group h-full min-h-[400px] lg:min-h-full">
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-slate-800 h-full">
            <img 
              src="https://www.dropbox.com/scl/fi/hb2m9rl73sd6k6se8o0oi/IMG_9437-2.JPG?rlkey=swmg4z5hnb34cq6crl2hpsjtc&st=rqyc6gbq&raw=1" 
              alt="História da FB Bombas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
              loading="lazy"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Image Tag */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-white font-garamond text-2xl mb-2 drop-shadow-md">
                {t('company.history.caption', 'Pioneirismo Industrial')}
              </h3>
              <div className="h-1 w-16 bg-[#E30613]"></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#E30613]/30 to-azul-profundo/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-azul-profundo/30 to-[#E30613]/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const certifications = [
    { 
      icon: <Shield className="h-8 w-8" />,
      title: "CRCC", 
      description: t('company.certifications.crcc.desc', 'Cadastro de Fornecedores para projetos de grande escala e aplicações críticas no Brasil.'),
      badge: t('company.certifications.crcc.badge', 'Registro Oficial')
    },
    { 
      icon: <Award className="h-8 w-8" />,
      title: "API 610", 
      description: t('company.certifications.api.desc', 'Conformidade com os rigorosos padrões internacionais para bombas centrífugas em aplicações petroquímicas.'),
      badge: t('company.certifications.api.badge', 'Padrão Internacional')
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-gradient-to-r from-[#E30613]/10 to-[#E30613]/5 dark:from-[#E30613]/20 dark:to-[#E30613]/10 px-4 py-2.5 rounded-full border border-[#E30613]/20 dark:border-[#E30613]/30 mb-6">
          <Award className="h-5 w-5 text-[#E30613] mr-3" />
          <span className="text-sm font-semibold text-azul-profundo dark:text-white tracking-wide">
            {t('company.certifications.title', 'Certificações e Normas')}
          </span>
        </div>
        
        <h3 className="font-garamond text-3xl sm:text-4xl text-azul-profundo dark:text-white mb-4 leading-tight">
          {t('company.certifications.subtitle', 'Qualidade Certificada')}
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t('company.certifications.description', 'Nossos produtos e processos são certificados pelos mais rigorosos padrões internacionais, garantindo a excelência em todos os nossos produtos.')}
        </p>
      </div>
      
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-600/30 hover:border-[#E30613]/30 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E30613] to-[#c60411] rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-3">
                  <h4 className="font-garamond text-2xl text-azul-profundo dark:text-white font-bold">
                    {cert.title}
                  </h4>
                  <span className="bg-[#E30613]/10 dark:bg-[#E30613]/20 text-[#E30613] text-xs font-medium px-2.5 py-1 rounded-full">
                    {cert.badge}
                  </span>
                </div>
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image Side */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full min-h-[400px]">
          <img 
            src="https://www.dropbox.com/scl/fi/7znzl3jj6xpw3punhxeh0/DSC05486-2-1-1.JPG?rlkey=0oce1tv73y02gmakavzw7sodg&st=hy0940l8&raw=1"
            alt="Parque Fabril FB Bombas" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-white font-garamond text-2xl mb-2 drop-shadow-md">
              {t('company.factory.caption', 'Estrutura Fabril')}
            </h3>
            <div className="h-1 w-16 bg-[#E30613]"></div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-azul-profundo to-[#E30613] rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#E30613] to-azul-profundo rounded-full opacity-15 blur-xl"></div>
      </div>
      
      {/* Content Side */}
      <div className="space-y-8 flex flex-col justify-center h-full">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-[#E30613]/10 to-[#E30613]/5 dark:from-[#E30613]/20 dark:to-[#E30613]/10 px-4 py-2.5 rounded-full border border-[#E30613]/20 dark:border-[#E30613]/30 self-start">
          <Factory className="h-5 w-5 text-[#E30613] mr-3" />
          <span className="text-sm font-semibold text-azul-profundo dark:text-white tracking-wide">
            {t('company.factory.title', 'Infraestrutura')}
          </span>
        </div>
        
        {/* Main Content */}
        <div className="space-y-6">
          <h3 className="font-garamond text-3xl sm:text-4xl text-azul-profundo dark:text-white leading-tight">
            {t('company.factory.subtitle', 'Parque Fabril de Alta Tecnologia')}
          </h3>
          
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p className="text-lg leading-relaxed">
              {t('company.factory.p1', 'Nossa unidade fabril possui 10.900 m² de área total, sendo 5.545 m² de área construída, equipada com tecnologia de ponta para garantir a fabricação de produtos de alta qualidade.')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('company.factory.p2', 'Contamos com equipamentos CNC de última geração, células de usinagem especializadas e laboratórios de teste que permitem o controle preciso de todos os processos produtivos.')}
            </p>
          </div>
        </div>
        
        {/* Features Grid - Clean Design */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {factoryFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center bg-white dark:bg-slate-800/60 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              <div className="flex-shrink-0 mr-4 w-12 h-12 bg-gradient-to-br from-[#E30613] to-[#c60411] rounded-xl flex items-center justify-center text-white shadow-md">
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