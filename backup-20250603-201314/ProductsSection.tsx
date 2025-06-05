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
      description: t('products.centrifugal.desc', 'Bombas centrífugas para aplicações industriais gerais e óleo térmico, com alta eficiência e confiabilidade operacional.'),
      image: 'https://www.dropbox.com/scl/fi/t6moru7jiedkzru75ojcn/Design-sem-nome-71.png?rlkey=37vga7o60i112szivf7qm8v7n&st=eslq5fxc&raw=1',
      features: [
        t('products.centrifugal.feature1', 'Vazão até 4.500 m³/h'),
        t('products.centrifugal.feature2', 'Temperatura até 350°C'),
        t('products.centrifugal.feature3', 'Construção back-pull-out')
      ],
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
      description: t('products.fbe.desc', 'Bombas de deslocamento positivo ideais para fluidos viscosos e aplicações especiais.'),
      image: 'https://www.dropbox.com/scl/fi/sg6d1wpp1tq8l3xh849kl/Design-sem-nome-73.png?rlkey=ocyzqcox27bsyg5ajlfdnv71i&st=2nnd19h1&raw=1',
      features: [
        t('products.fbe.feature1', 'Vazão até 390 m³/h'),
        t('products.fbe.feature2', 'Altura até 220 m'),
        t('products.fbe.feature3', 'Fluidos viscosos')
      ],
      specs: {
        flow: 'até 390 m³/h',
        head: 'até 220 m',
        temp: 'até 350°C'
      },
      link: '/produtos#bombas-de-engrenagem'
    }
  ];

  return (
    <section id="produtos" className="py-8 md:py-12 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {productLines.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-sm text-blue-100 font-medium">
                      {product.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#E30613] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                    <Droplets className="h-4 w-4 text-[#E30613] mx-auto mb-1.5" />
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Vazão Máx.</span>
                    <span className="text-xs font-medium text-azul-profundo dark:text-white">
                      {product.specs.flow}
                    </span>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                    <ArrowUp className="h-4 w-4 text-[#E30613] mx-auto mb-1.5" />
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Altura Máx.</span>
                    <span className="text-xs font-medium text-azul-profundo dark:text-white">
                      {product.specs.head}
                    </span>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                    <Thermometer className="h-4 w-4 text-[#E30613] mx-auto mb-1.5" />
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Temp. Máx.</span>
                    <span className="text-xs font-medium text-azul-profundo dark:text-white">
                      {product.specs.temp}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={product.link}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = product.link;
                  }}
                  className="inline-flex items-center justify-center w-full bg-[#E30613] hover:bg-[#c60411] text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm"
                >
                  {t('products.view_details', 'Ver Detalhes')}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;