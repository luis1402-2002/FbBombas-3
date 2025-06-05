import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, Droplets, ArrowUp, Thermometer } from "lucide-react";

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const productLines = [
    {
      id: 'centrifugas',
      title: t('products.centrifugal', 'Bombas Centrífugas'),
      subtitle: t('products.centrifugal.subtitle', 'Séries FBCN e FBOT'),
      description: t('products.centrifugal.desc', 'Bombas centrífugas normalizadas FBCN para aplicações industriais gerais com alta eficiência e confiabilidade. As bombas FBOT são especializadas para sistemas de óleo térmico, suportando altas temperaturas até 350°C com vedações especiais e materiais resistentes.'),
      image: 'https://www.dropbox.com/scl/fi/l83hvvfk3kd34flvm1kj4/fbotimage.png?rlkey=9cvbkff24qgit6trr515176in&st=u7qsh13g&raw=1',
      specs: {
        flow: 'até 4.500 m³/h',
        head: 'até 155 m',
        temp: 'até 350°C'
      },
      link: '/produtos#bombas-centrifugas'
    },
    {
      id: 'fbe',
      title: t('products.fbe', 'Bombas de Engrenagem Externa FBE'),
      subtitle: t('products.fbe.subtitle', 'Série FBE'),
      description: t('products.fbe.desc', 'Bombas de engrenagens externas com deslocamento positivo, ideais para transferência precisa de fluidos viscosos, óleos lubrificantes e aplicações que exigem vazão constante independente da pressão.'),
      image: 'https://www.dropbox.com/scl/fi/6hfqa4pa9i17xvj5em7iz/fbebomba.png?rlkey=a08rw80ed1em2m34rx2eiava2&st=7cxib7er&raw=1',
      specs: {
        flow: 'até 390 m³/h',
        head: 'até 220 m',
        temp: 'até 350°C'
      },
      link: '/produtos#bombas-de-engrenagem'
    }
  ];

  return (
    <section id="produtos" className="relative pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(227,6,19,0.05) 50px, rgba(227,6,19,0.05) 52px)`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {productLines.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={() => {
        window.location.href = product.link;
      }}
      className="group bg-white dark:bg-slate-800/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700/50 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      
      {/* Image Section - optimized for 1x1 images with white background */}
      <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden bg-white dark:bg-white">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
            {product.title}
          </h3>
          {product.subtitle && (
            <p className="text-sm sm:text-base text-blue-100 font-semibold drop-shadow-md">
              {product.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base flex-grow">
          {product.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-7">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_flow', 'Vazão Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.flow}
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_height', 'Altura Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.head}
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <Thermometer className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_temp', 'Temp. Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.temp}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = product.link;
          }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
        >
          {product.id === 'centrifugas' 
            ? t('products.explore_centrifugal', 'Explorar Bombas Centrífugas')
            : t('products.explore_gear', 'Explorar Bombas de Engrenagem')}
          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </motion.div>
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
        {t('products.title', 'Nossa Linha de Produtos')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
        {t('products.subtitle', 'Soluções completas em bombeamento para todas as necessidades industriais')}
      </p>
    </motion.div>
  );
};

export default ProductsSection;