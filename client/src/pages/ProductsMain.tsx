import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  Droplets,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { cn } from '../lib/utils';
import { getWhatsAppUrl } from '../data/gearPumpsFullData';

const ProductsMain: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultantClick = () => {
    const message = t('products.whatsapp.consultMessage');
    window.open(getWhatsAppUrl(message), '_blank');
  };

  // Product categories with updated styling
  const productCategories = [
    {
      id: 'gear-pumps',
      icon: Cog,
      title: {
        pt: 'Bombas de Engrenagem',
        en: 'Gear Pumps',
        es: 'Bombas de Engranajes'
      },
      series: 'FBE',
      description: {
        pt: 'Soluções de alta precisão para transferência de fluidos viscosos',
        en: 'High precision solutions for viscous fluid transfer',
        es: 'Soluciones de alta precisión para transferencia de fluidos viscosos'
      },
      specs: {
        pt: ['Vazão até 1.350 L/min', 'Pressão até 22 bar', 'Temperatura até 250°C'],
        en: ['Flow up to 1,350 L/min', 'Pressure up to 22 bar', 'Temperature up to 250°C'],
        es: ['Caudal hasta 1.350 L/min', 'Presión hasta 22 bar', 'Temperatura hasta 250°C']
      },
      image: '/assets/fbe-main.jpg',
      link: '/produtos/bombas-engrenagem',
      gradient: 'from-blue-600 to-blue-800',
      accentColor: 'text-blue-600'
    },
    {
      id: 'centrifugal-pumps',
      icon: Droplets,
      title: {
        pt: 'Bombas Centrífugas',
        en: 'Centrifugal Pumps',
        es: 'Bombas Centrífugas'
      },
      series: 'FBCN / FBOT',
      description: {
        pt: 'Tecnologia avançada para aplicações industriais de alta demanda',
        en: 'Advanced technology for high-demand industrial applications',
        es: 'Tecnología avanzada para aplicaciones industriales de alta demanda'
      },
      specs: {
        pt: ['Vazão até 2.200 m³/h', 'Altura até 135m', 'Temperatura até 350°C'],
        en: ['Flow up to 2,200 m³/h', 'Head up to 135m', 'Temperature up to 350°C'],
        es: ['Caudal hasta 2.200 m³/h', 'Altura hasta 135m', 'Temperatura hasta 350°C']
      },
      image: '/assets/fbcn-main.jpg',
      link: '/bombas-centrifugas',
      gradient: 'from-cyan-600 to-cyan-800',
      accentColor: 'text-cyan-600'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-dark-cinza">
        {/* Hero Section - Clean and Minimal */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-gray-900 dark:text-white">
                {t('products.mainTitle')}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {t('products.mainSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid - Ultra Clean Design */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                >
                  <Card 
                    className="group relative h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                    onClick={() => setLocation(category.link)}
                  >
                    {/* Content Container */}
                    <div className="relative z-10 p-10 lg:p-12">
                      {/* Icon and Series */}
                      <div className="flex items-start justify-between mb-8">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center",
                          "bg-gradient-to-br",
                          category.gradient,
                          "shadow-lg"
                        )}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className={cn(
                          "text-sm font-semibold tracking-wider",
                          category.accentColor
                        )}>
                          {category.series}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl lg:text-4xl font-light mb-4 text-gray-900 dark:text-white group-hover:text-azul-profundo dark:group-hover:text-blue-400 transition-colors duration-300">
                        {category.title[language]}
                      </h2>

                      {/* Description */}
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {category.description[language]}
                      </p>

                      {/* Specs */}
                      <div className="space-y-3 mb-10">
                        {category.specs[language].map((spec, idx) => (
                          <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                            <span className="text-sm">{spec}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <Button
                          variant="link"
                          className="p-0 h-auto text-base font-medium group-hover:text-azul-profundo dark:group-hover:text-blue-400"
                        >
                          {t('products.explore')}
                          <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>

                        {category.id === 'centrifugal-pumps' && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleConsultantClick();
                            }}
                            className="gap-2 text-gray-600 hover:text-azul-profundo dark:text-gray-400 dark:hover:text-blue-400"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {t('products.consultant')}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Subtle Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA - Minimalist */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 dark:text-white">
                {t('products.needHelp')}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {t('products.ctaDescription')}
              </p>

              <Button
                size="lg"
                className="bg-azul-profundo hover:bg-dark-azul text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleConsultantClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('products.talkToConsultant')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductsMain;