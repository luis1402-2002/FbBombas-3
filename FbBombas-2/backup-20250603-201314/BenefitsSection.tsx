import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { benefits } from "../../data/benefitsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Settings2, Stars, Zap, HeadsetIcon } from "lucide-react";
import { Benefit } from "@/types";

const BenefitsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="diferenciais" className="relative py-16 md:py-20 bg-white dark:bg-slate-900">
      {/* Red highlight line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#E30613]"></div>
      
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8">
        <SectionHeader />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://wa.me/5511972874837?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20bombas." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#E30613] text-white hover:bg-[#c00] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="text-base font-semibold tracking-wide">
              Solicitar Orçamento
            </span>
          </a>
        </motion.div>
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
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('benefits.title', 'Por que escolher a FB Bombas?')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 mx-auto leading-relaxed">
        {t('benefits.subtitle', 'Mais de 80 anos de tradição e excelência em bombeamento industrial')}
      </p>
      
      <div className="mt-8 w-20 h-1 bg-[#E30613] mx-auto"></div>
    </motion.div>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  // Novos ícones com design moderno
  let icon;
  switch (benefit.icon) {
    case "precision":
      icon = <Settings2 className="h-7 w-7 stroke-[1.5]" />;
      break;
    case "durability":
      icon = <Stars className="h-7 w-7 stroke-[1.5]" />;
      break;
    case "tech":
      icon = <Zap className="h-7 w-7 stroke-[1.5]" />;
      break;
    case "award":
      icon = <Stars className="h-7 w-7 stroke-[1.5]" />;
      break;
    case "support":
      icon = <HeadsetIcon className="h-7 w-7 stroke-[1.5]" />;
      break;
    default:
      icon = <Settings2 className="h-7 w-7 stroke-[1.5]" />;
  }

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E30613] to-[#ff6b6b] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <div className="flex-grow">
          <h3 className="font-garamond text-2xl text-azul-profundo dark:text-white mb-4">
            {benefit.icon === 'precision' && t('company.precision_title', 'Engenharia de Precisão')}
            {benefit.icon === 'durability' && t('company.durability_title', 'Durabilidade Superior')}
            {benefit.icon === 'award' && t('company.tradition_title', 'Tradição e Excelência')}
            {benefit.icon === 'tech' && t('company.materials_title', 'Materiais Especializados')}
            {benefit.icon === 'support' && t('company.support_title', 'Suporte Especializado')}
          </h3>
          <p className="text-cinza-titanio dark:text-prata/80 leading-relaxed">
            {benefit.icon === 'precision' && t('company.precision_desc', 'Equipamentos de alta performance projetados para aplicações exigentes e específicas com qualidade e tradição.')}
            {benefit.icon === 'durability' && t('company.durability_desc', 'Materiais especificados de acordo com a demanda da aplicação e processos produtivos otimizados.')}
            {benefit.icon === 'award' && t('company.tradition_desc', 'Mais de 80 anos de experiência no mercado brasileiro, consolidando nossa posição como referência em bombeamento industrial.')}
            {benefit.icon === 'tech' && t('company.materials_desc', 'Materiais especificados de acordo com a demanda da aplicação e processos produtivos otimizados para máxima eficiência.')}
            {benefit.icon === 'support' && t('company.support_desc', 'Equipe técnica altamente qualificada oferece suporte completo durante todo o atendimento e ciclo de vida do produto.')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
