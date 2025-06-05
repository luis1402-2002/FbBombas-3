import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Droplets,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Settings,
  Shield,
  Wrench,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { centrifugalPumps } from '../data/productsStructured';

const CentrifugalPumpsPageNew: React.FC = () => {
  const { language } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? 'Olá! Gostaria de mais informações sobre as Bombas Centrífugas FBCN e FBOT.' :
      language === 'en' ? 'Hello! I would like more information about FBCN and FBOT Centrifugal Pumps.' :
      '¡Hola! Me gustaría más información sobre las Bombas Centrífugas FBCN y FBOT.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 via-transparent to-vermelho/5 dark:from-azul-profundo/10 dark:to-vermelho/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Droplets className="w-8 h-8 text-azul-profundo dark:text-blue-400" />
                <span className="text-lg font-semibold text-azul-profundo dark:text-blue-400 tracking-wider">
                  FBCN / FBOT
                </span>
              </div>
              
              <div className="w-20 h-1 bg-vermelho mx-auto mb-8"></div>
              
              <h1 className="font-garamond text-5xl md:text-6xl lg:text-7xl text-azul-profundo dark:text-white mb-6 leading-tight">
                {language === 'pt' ? 'Bombas Centrífugas' :
                 language === 'en' ? 'Centrifugal Pumps' :
                 'Bombas Centrífugas'}
              </h1>
              
              <p className="text-xl md:text-2xl text-cinza-titanio dark:text-prata/90 max-w-4xl mx-auto leading-relaxed mb-8">
                {language === 'pt' ? 'Tecnologia avançada para aplicações industriais de alta demanda com máxima eficiência e confiabilidade' :
                 language === 'en' ? 'Advanced technology for high-demand industrial applications with maximum efficiency and reliability' :
                 'Tecnología avanzada para aplicaciones industriales de alta demanda con máxima eficiencia y confiabilidad'}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Droplets className="w-6 h-6 text-vermelho mx-auto mb-2" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {language === 'pt' ? 'Vazão Máxima' : language === 'en' ? 'Maximum Flow' : 'Caudal Máximo'}
                  </div>
                  <div className="text-lg font-bold text-azul-profundo dark:text-white">2.200 m³/h</div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Settings className="w-6 h-6 text-vermelho mx-auto mb-2" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {language === 'pt' ? 'Altura Máxima' : language === 'en' ? 'Maximum Head' : 'Altura Máxima'}
                  </div>
                  <div className="text-lg font-bold text-azul-profundo dark:text-white">135 m</div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Thermometer className="w-6 h-6 text-vermelho mx-auto mb-2" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {language === 'pt' ? 'Temperatura Máxima' : language === 'en' ? 'Maximum Temperature' : 'Temperatura Máxima'}
                  </div>
                  <div className="text-lg font-bold text-azul-profundo dark:text-white">350°C</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Series Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-garamond text-azul-profundo dark:text-white mb-4">
                {language === 'pt' ? 'Séries Disponíveis' :
                 language === 'en' ? 'Available Series' :
                 'Series Disponibles'}
              </h2>
              <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-2xl mx-auto">
                {language === 'pt' ? 'Conheça nossas linhas de bombas centrífugas desenvolvidas para diferentes aplicações industriais' :
                 language === 'en' ? 'Discover our centrifugal pump lines developed for different industrial applications' :
                 'Conozca nuestras líneas de bombas centrífugas desarrolladas para diferentes aplicaciones industriales'}
              </p>
            </motion.div>

            {/* Series Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {centrifugalPumps.map((pump, index) => (
                <motion.div
                  key={pump.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="group h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-vermelho/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="relative z-10 p-8 lg:p-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center shadow-lg">
                          <Droplets className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className="border-cyan-600/20 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20">
                          {pump.series}
                        </Badge>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl lg:text-3xl font-garamond text-azul-profundo dark:text-white mb-3 group-hover:text-vermelho transition-colors duration-300">
                        {pump.name[language]}
                      </h3>
                      
                      <p className="text-cinza-titanio dark:text-prata/90 mb-6 leading-relaxed">
                        {pump.description[language]}
                      </p>

                      {/* Specifications */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                          <Droplets className="h-4 w-4 text-vermelho mx-auto mb-1.5" />
                          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                            {language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}
                          </span>
                          <span className="text-xs font-medium text-azul-profundo dark:text-white">
                            {pump.maxFlow}
                          </span>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                          <Settings className="h-4 w-4 text-vermelho mx-auto mb-1.5" />
                          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                            {language === 'pt' ? 'Altura Máx.' : language === 'en' ? 'Max Head' : 'Altura Máx.'}
                          </span>
                          <span className="text-xs font-medium text-azul-profundo dark:text-white">
                            {pump.maxHead}
                          </span>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                          <Thermometer className="h-4 w-4 text-vermelho mx-auto mb-1.5" />
                          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                            {language === 'pt' ? 'Temp. Máx.' : language === 'en' ? 'Max Temp' : 'Temp. Máx.'}
                          </span>
                          <span className="text-xs font-medium text-azul-profundo dark:text-white">
                            {pump.maxTemp}
                          </span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-azul-profundo dark:text-white mb-3">
                          {language === 'pt' ? 'Características Principais:' : 
                           language === 'en' ? 'Key Features:' :
                           'Características Principales:'}
                        </h4>
                        <div className="space-y-2">
                          {pump.features[language].slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                              <CheckCircle className="w-4 h-4 text-vermelho mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-azul-profundo dark:text-white mb-3">
                          {language === 'pt' ? 'Aplicações Principais:' : 
                           language === 'en' ? 'Main Applications:' :
                           'Aplicaciones Principales:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pump.applications[language].slice(0, 4).map((app, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-azul-profundo/10 dark:bg-blue-500/20 text-azul-profundo dark:text-blue-400 rounded text-xs"
                            >
                              {app}
                            </span>
                          ))}
                          {pump.applications[language].length > 4 && (
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                              +{pump.applications[language].length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          onClick={handleWhatsAppClick}
                          className="flex-1 bg-vermelho hover:bg-vermelho/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm group/btn"
                        >
                          {language === 'pt' ? 'Solicitar Cotação' :
                           language === 'en' ? 'Request Quote' :
                           'Solicitar Cotización'}
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
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-garamond text-azul-profundo dark:text-white mb-4">
                {language === 'pt' ? 'Tecnologia e Qualidade' :
                 language === 'en' ? 'Technology and Quality' :
                 'Tecnología y Calidad'}
              </h2>
              <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-2xl mx-auto">
                {language === 'pt' ? 'Nossas bombas centrífugas seguem rigorosos padrões internacionais' :
                 language === 'en' ? 'Our centrifugal pumps follow rigorous international standards' :
                 'Nuestras bombas centrífugas siguen rigurosos estándares internacionales'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md text-center"
              >
                <Shield className="w-10 h-10 text-vermelho mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-azul-profundo dark:text-white mb-3">
                  ISO 2858
                </h3>
                <p className="text-sm text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Dimensões conforme padrão internacional' :
                   language === 'en' ? 'Dimensions according to international standard' :
                   'Dimensiones según estándar internacional'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md text-center"
              >
                <Wrench className="w-10 h-10 text-vermelho mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-azul-profundo dark:text-white mb-3">
                  ASME B73.1
                </h3>
                <p className="text-sm text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Projeto mecânico conforme norma americana' :
                   language === 'en' ? 'Mechanical design according to American standard' :
                   'Diseño mecánico según norma americana'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md text-center"
              >
                <Settings className="w-10 h-10 text-vermelho mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-azul-profundo dark:text-white mb-3">
                  {language === 'pt' ? 'Back-Pull-Out' :
                   language === 'en' ? 'Back-Pull-Out' :
                   'Back-Pull-Out'}
                </h3>
                <p className="text-sm text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Facilita manutenção sem desconectar tubulação' :
                   language === 'en' ? 'Facilitates maintenance without disconnecting piping' :
                   'Facilita mantenimiento sin desconectar tubería'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md text-center"
              >
                <Thermometer className="w-10 h-10 text-vermelho mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-azul-profundo dark:text-white mb-3">
                  {language === 'pt' ? 'Alta Temperatura' :
                   language === 'en' ? 'High Temperature' :
                   'Alta Temperatura'}
                </h3>
                <p className="text-sm text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Operação segura até 350°C com FBOT' :
                   language === 'en' ? 'Safe operation up to 350°C with FBOT' :
                   'Operación segura hasta 350°C con FBOT'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-3xl md:text-4xl font-garamond text-azul-profundo dark:text-white mb-6">
                {language === 'pt' ? 'Projeto Personalizado?' :
                 language === 'en' ? 'Custom Design?' :
                 '¿Diseño Personalizado?'}
              </h3>
              
              <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                {language === 'pt' ? 'Nossos engenheiros podem desenvolver soluções específicas para atender suas necessidades particulares de bombeamento.' :
                 language === 'en' ? 'Our engineers can develop specific solutions to meet your particular pumping needs.' :
                 'Nuestros ingenieros pueden desarrollar soluciones específicas para satisfacer sus necesidades particulares de bombeo.'}
              </p>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-azul-profundo hover:bg-azul-profundo/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Consultar Engenheiros' :
                 language === 'en' ? 'Consult Engineers' :
                 'Consultar Ingenieros'}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CentrifugalPumpsPageNew;