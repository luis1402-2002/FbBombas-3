import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Users, Award, Briefcase } from "lucide-react";

const WorkWithUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="trabalhe-conosco" className="work-with-us-section relative py-16 md:py-20 overflow-hidden">
      
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8">
        <SectionHeader />
        <BenefitsGrid />
        <CallToAction />
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
      className="text-center max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('careers.title', 'Trabalhe Conosco')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 leading-relaxed">
        {t('careers.subtitle', 'Faça parte de uma equipe que constrói o futuro da indústria brasileira há mais de 75 anos')}
      </p>
    </motion.div>
  );
};

const BenefitsGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-[#E30613]" />,
      title: t('careers.team.title', 'Equipe Especializada'),
      description: t('careers.team.desc', 'Trabalhe com profissionais altamente qualificados e apaixonados por tecnologia')
    },
    {
      icon: <Award className="h-8 w-8 text-[#E30613]" />,
      title: t('careers.growth.title', 'Crescimento Profissional'),
      description: t('careers.growth.desc', 'Oportunidades de desenvolvimento e capacitação contínua')
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-white dark:bg-slate-700 rounded-full shadow-sm">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-azul-profundo dark:text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-cinza-titanio dark:text-slate-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const CallToAction = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto shadow-sm">
        <h3 className="text-2xl font-bold text-azul-profundo dark:text-white mb-4">
          {t('careers.cta.title', 'Pronto para fazer a diferença?')}
        </h3>
        <p className="text-cinza-titanio dark:text-slate-300 mb-6 leading-relaxed">
          {t('careers.cta.description', 'Envie seu currículo e faça parte da nossa equipe de excelência')}
        </p>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== '/') {
              window.location.href = '/#contato';
            } else {
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center px-8 py-4 bg-[#E30613] hover:bg-[#c60411] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          {t('careers.cta.button', 'Entre em Contato')}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default WorkWithUsSection;