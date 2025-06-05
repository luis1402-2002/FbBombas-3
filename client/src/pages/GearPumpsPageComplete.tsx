import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Gauge,
  Droplets,
  Settings2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { gearPumpsByDiameter } from '../data/productsStructured';

const GearPumpsPageComplete: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? 'Olá! Gostaria de mais informações sobre as Bombas de Engrenagem FBE.' :
      language === 'en' ? 'Hello! I would like more information about FBE Gear Pumps.' :
      '¡Hola! Me gustaría más información sobre las Bombas de Engranajes FBE.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleDiameterClick = (diameter: any) => {
    if (diameter.hasVariations) {
      // Navigate to models page for this diameter
      setLocation(`/produtos/bombas-engrenagem/${diameter.diameter.replace(/["/]/g, '')}`);
    } else {
      // Navigate directly to specifications page
      setLocation(`/produtos/bombas-engrenagem/${diameter.diameter.replace(/["/]/g, '')}/especificacoes`);
    }
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
                <Cog className="w-8 h-8 text-azul-profundo dark:text-blue-400" />
                <span className="text-lg font-semibold text-azul-profundo dark:text-blue-400 tracking-wider">
                  SÉRIE FBE
                </span>
              </div>
              
              <div className="w-20 h-1 bg-vermelho mx-auto mb-8"></div>
              
              <h1 className="font-garamond text-5xl md:text-6xl lg:text-7xl text-azul-profundo dark:text-white mb-6 leading-tight">
                {language === 'pt' ? 'Bombas de Engrenagem Externa' :
                 language === 'en' ? 'External Gear Pumps' :
                 'Bombas de Engranajes Externos'}
              </h1>
              
              <p className="text-xl md:text-2xl text-cinza-titanio dark:text-prata/90 max-w-4xl mx-auto leading-relaxed mb-8">
                {language === 'pt' ? 'Soluções de alta precisão para transferência de fluidos viscosos em diversas aplicações industriais' :
                 language === 'en' ? 'High precision solutions for viscous fluid transfer in various industrial applications' :
                 'Soluciones de alta precisión para transferencia de fluidos viscosos en diversas aplicaciones industriales'}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Droplets className="w-6 h-6 text-vermelho mx-auto mb-2" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {language === 'pt' ? 'Vazão Máxima' : language === 'en' ? 'Maximum Flow' : 'Caudal Máximo'}
                  </div>
                  <div className="text-lg font-bold text-azul-profundo dark:text-white">1.350 L/min</div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Gauge className="w-6 h-6 text-vermelho mx-auto mb-2" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {language === 'pt' ? 'Pressão Máxima' : language === 'en' ? 'Maximum Pressure' : 'Presión Máxima'}
                  </div>
                  <div className="text-lg font-bold text-azul-profundo dark:text-white">22 bar</div>
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

        {/* Diameter Selection Grid */}
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
                {language === 'pt' ? 'Selecione o Diâmetro' :
                 language === 'en' ? 'Select Diameter' :
                 'Seleccionar Diámetro'}
              </h2>
              <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-2xl mx-auto">
                {language === 'pt' ? 'Escolha o diâmetro desejado para ver os modelos e especificações disponíveis' :
                 language === 'en' ? 'Choose the desired diameter to see available models and specifications' :
                 'Elija el diámetro deseado para ver los modelos y especificaciones disponibles'}
              </p>
            </motion.div>

            {/* Diameter Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gearPumpsByDiameter.map((diameter, index) => (
                <motion.div
                  key={diameter.diameter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className="group cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                    onClick={() => handleDiameterClick(diameter)}
                  >
                    <CardContent className="p-6">
                      {/* Diameter Header */}
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-azul-profundo to-azul-profundo/80 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl font-bold text-white">{diameter.diameter}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-azul-profundo dark:text-white mb-2">
                          {language === 'pt' ? 'Diâmetro' : language === 'en' ? 'Diameter' : 'Diámetro'} {diameter.diameter}
                        </h3>
                        
                        {diameter.hasVariations ? (
                          <Badge variant="secondary" className="bg-vermelho/10 text-vermelho border-vermelho/20">
                            {diameter.models.length} {language === 'pt' ? 'modelos' : language === 'en' ? 'models' : 'modelos'}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-azul-profundo/20 text-azul-profundo dark:text-blue-400">
                            {language === 'pt' ? '1 modelo' : language === 'en' ? '1 model' : '1 modelo'}
                          </Badge>
                        )}
                      </div>

                      {/* Primary Model Specs */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}
                          </span>
                          <span className="text-sm font-medium text-azul-profundo dark:text-white">
                            {diameter.models[0].maxFlow}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {language === 'pt' ? 'Pressão Máx.' : language === 'en' ? 'Max Pressure' : 'Presión Máx.'}
                          </span>
                          <span className="text-sm font-medium text-azul-profundo dark:text-white">
                            {diameter.models[0].maxPressure}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600 dark:text-slate-400">RPM</span>
                          <span className="text-sm font-medium text-azul-profundo dark:text-white">
                            {diameter.models[0].maxRPM}
                          </span>
                        </div>
                      </div>

                      {/* Model Variations Preview */}
                      {diameter.hasVariations && (
                        <div className="mb-4">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                            {language === 'pt' ? 'Variações:' : language === 'en' ? 'Variations:' : 'Variaciones:'}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {diameter.models.map((model, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-400 rounded"
                              >
                                {model.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <Button
                        className="w-full bg-azul-profundo hover:bg-azul-profundo/90 text-white group-hover:bg-vermelho group-hover:text-white transition-colors duration-300"
                        size="sm"
                      >
                        {diameter.hasVariations ? (
                          <>
                            {language === 'pt' ? 'Ver Modelos' : language === 'en' ? 'View Models' : 'Ver Modelos'}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        ) : (
                          <>
                            {language === 'pt' ? 'Ver Especificações' : language === 'en' ? 'View Specifications' : 'Ver Especificaciones'}
                            <Settings2 className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
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
                {language === 'pt' ? 'Características Técnicas' :
                 language === 'en' ? 'Technical Features' :
                 'Características Técnicas'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md"
              >
                <Cog className="w-10 h-10 text-vermelho mb-4" />
                <h3 className="text-xl font-semibold text-azul-profundo dark:text-white mb-3">
                  {language === 'pt' ? 'Engrenagens Helicoidais' :
                   language === 'en' ? 'Helical Gears' :
                   'Engranajes Helicoidales'}
                </h3>
                <p className="text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Engrenagens com dentes helicoidais para operação suave e silenciosa' :
                   language === 'en' ? 'Helical gear teeth for smooth and quiet operation' :
                   'Engranajes con dientes helicoidales para operación suave y silenciosa'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md"
              >
                <Settings2 className="w-10 h-10 text-vermelho mb-4" />
                <h3 className="text-xl font-semibold text-azul-profundo dark:text-white mb-3">
                  {language === 'pt' ? 'Vedação Configurável' :
                   language === 'en' ? 'Configurable Sealing' :
                   'Sellado Configurable'}
                </h3>
                <p className="text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Vedação por gaxeta teflonada ou selo mecânico conforme aplicação' :
                   language === 'en' ? 'PTFE packing or mechanical seal according to application' :
                   'Empaquetadura de PTFE o sello mecánico según aplicación'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md"
              >
                <Gauge className="w-10 h-10 text-vermelho mb-4" />
                <h3 className="text-xl font-semibold text-azul-profundo dark:text-white mb-3">
                  {language === 'pt' ? 'Alta Viscosidade' :
                   language === 'en' ? 'High Viscosity' :
                   'Alta Viscosidad'}
                </h3>
                <p className="text-cinza-titanio dark:text-prata/90">
                  {language === 'pt' ? 'Ideal para fluidos viscosos até 100.000 SSU' :
                   language === 'en' ? 'Ideal for viscous fluids up to 100,000 SSU' :
                   'Ideal para fluidos viscosos hasta 100.000 SSU'}
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
                {language === 'pt' ? 'Precisa de Consultoria Técnica?' :
                 language === 'en' ? 'Need Technical Consulting?' :
                 '¿Necesita Consultoría Técnica?'}
              </h3>
              
              <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                {language === 'pt' ? 'Nossa equipe especializada pode ajudar você a selecionar a bomba de engrenagem ideal para sua aplicação específica.' :
                 language === 'en' ? 'Our specialized team can help you select the ideal gear pump for your specific application.' :
                 'Nuestro equipo especializado puede ayudarte a seleccionar la bomba de engranajes ideal para tu aplicación específica.'}
              </p>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-azul-profundo hover:bg-azul-profundo/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Falar com Especialista' :
                 language === 'en' ? 'Talk to Specialist' :
                 'Hablar con Especialista'}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GearPumpsPageComplete;