import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  Droplets,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Gauge,
  Settings
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { cn } from '../lib/utils';
import { productCategories, centrifugalPumps, gearPumpsByDiameter } from '../data/productsStructured';

const ProductsPageNew: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? 'Olá! Gostaria de mais informações sobre os produtos FB Bombas.' :
      language === 'en' ? 'Hello! I would like more information about FB Bombas products.' :
      '¡Hola! Me gustaría más información sobre los productos FB Bombas.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        
        {/* Hero Section - Matching homepage style */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 via-transparent to-vermelho/5 dark:from-azul-profundo/10 dark:to-vermelho/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="w-20 h-1 bg-vermelho mx-auto mb-8"></div>
              <h1 className="font-garamond text-5xl md:text-6xl lg:text-7xl text-azul-profundo dark:text-white mb-6 leading-tight">
                {language === 'pt' ? 'Nossa Linha de Produtos' :
                 language === 'en' ? 'Our Product Line' :
                 'Nuestra Línea de Productos'}
              </h1>
              <p className="text-xl md:text-2xl text-cinza-titanio dark:text-prata/90 max-w-4xl mx-auto leading-relaxed">
                {language === 'pt' ? 'Soluções completas em bombeamento para todas as necessidades industriais' :
                 language === 'en' ? 'Complete pumping solutions for all industrial needs' :
                 'Soluciones completas de bombeo para todas las necesidades industriales'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Gear Pumps Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="group relative h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-vermelho/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative z-10 p-10 lg:p-12">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-azul-profundo to-azul-profundo/80 flex items-center justify-center shadow-lg">
                        <Cog className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold tracking-wider text-azul-profundo dark:text-blue-400">
                        FBE
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-3xl lg:text-4xl font-garamond text-azul-profundo dark:text-white mb-4 group-hover:text-vermelho dark:group-hover:text-blue-400 transition-colors duration-300">
                      {productCategories[0].name[language]}
                    </h2>
                    
                    <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                      {productCategories[0].description[language]}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Droplets className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[0].specs.maxFlow}
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Gauge className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Pressão Máx.' : language === 'en' ? 'Max Pressure' : 'Presión Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[0].specs.maxPressure}
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Thermometer className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Temp. Máx.' : language === 'en' ? 'Max Temp' : 'Temp. Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[0].specs.maxTemp}
                        </span>
                      </div>
                    </div>

                    {/* Diameter Options Preview */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-azul-profundo dark:text-white mb-3">
                        {language === 'pt' ? 'Diâmetros Disponíveis:' : 
                         language === 'en' ? 'Available Diameters:' :
                         'Diámetros Disponibles:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {gearPumpsByDiameter.slice(0, 6).map((pump) => (
                          <span 
                            key={pump.diameter}
                            className="px-3 py-1 bg-azul-profundo/10 dark:bg-blue-500/20 text-azul-profundo dark:text-blue-400 rounded-full text-xs font-medium"
                          >
                            {pump.diameter}
                          </span>
                        ))}
                        {gearPumpsByDiameter.length > 6 && (
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium">
                            +{gearPumpsByDiameter.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => setLocation('/produtos/bombas-engrenagem')}
                      className="w-full bg-vermelho hover:bg-vermelho/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm group/btn"
                    >
                      {language === 'pt' ? 'Explorar Bombas de Engrenagem' :
                       language === 'en' ? 'Explore Gear Pumps' :
                       'Explorar Bombas de Engranajes'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Centrifugal Pumps Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="group relative h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-vermelho/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative z-10 p-10 lg:p-12">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center shadow-lg">
                        <Droplets className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold tracking-wider text-cyan-600 dark:text-cyan-400">
                        FBCN / FBOT
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-3xl lg:text-4xl font-garamond text-azul-profundo dark:text-white mb-4 group-hover:text-vermelho dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {productCategories[1].name[language]}
                    </h2>
                    
                    <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                      {productCategories[1].description[language]}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Droplets className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[1].specs.maxFlow}
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Settings className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Altura Máx.' : language === 'en' ? 'Max Head' : 'Altura Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[1].specs.maxPressure}
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg text-center">
                        <Thermometer className="h-5 w-5 text-vermelho mx-auto mb-2" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                          {language === 'pt' ? 'Temp. Máx.' : language === 'en' ? 'Max Temp' : 'Temp. Máx.'}
                        </span>
                        <span className="text-sm font-medium text-azul-profundo dark:text-white">
                          {productCategories[1].specs.maxTemp}
                        </span>
                      </div>
                    </div>

                    {/* Series Preview */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-azul-profundo dark:text-white mb-3">
                        {language === 'pt' ? 'Séries Disponíveis:' : 
                         language === 'en' ? 'Available Series:' :
                         'Series Disponibles:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {centrifugalPumps.map((pump) => (
                          <span 
                            key={pump.id}
                            className="px-3 py-1 bg-cyan-600/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium"
                          >
                            {pump.series} - {pump.name[language]}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setLocation('/produtos/bombas-centrifugas')}
                        className="flex-1 bg-vermelho hover:bg-vermelho/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm group/btn"
                      >
                        {language === 'pt' ? 'Ver Detalhes' :
                         language === 'en' ? 'View Details' :
                         'Ver Detalles'}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-vermelho text-vermelho hover:bg-vermelho hover:text-white transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-3xl md:text-4xl font-garamond text-azul-profundo dark:text-white mb-6">
                {language === 'pt' ? 'Precisa de Ajuda na Escolha?' :
                 language === 'en' ? 'Need Help Choosing?' :
                 '¿Necesita Ayuda para Elegir?'}
              </h3>
              
              <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                {language === 'pt' ? 'Nossa equipe técnica especializada está pronta para ajudar você a encontrar a solução ideal para sua aplicação.' :
                 language === 'en' ? 'Our specialized technical team is ready to help you find the ideal solution for your application.' :
                 'Nuestro equipo técnico especializado está listo para ayudarte a encontrar la solución ideal para tu aplicación.'}
              </p>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-azul-profundo hover:bg-azul-profundo/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Falar com Consultor' :
                 language === 'en' ? 'Talk to Consultant' :
                 'Hablar con Consultor'}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPageNew;