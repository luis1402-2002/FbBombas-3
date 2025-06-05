import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
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
  Settings2,
  ArrowLeft,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { gearPumpsByDiameter } from '../data/productsStructured';

const GearPumpModelsPageNew: React.FC = () => {
  const { language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const [selectedDiameter, setSelectedDiameter] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the diameter data based on URL parameter
    const diameterParam = params.diameter;
    if (diameterParam) {
      const diameter = gearPumpsByDiameter.find(d => 
        d.diameter.replace(/["/]/g, '') === diameterParam
      );
      setSelectedDiameter(diameter);
    }
  }, [params.diameter]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre as Bombas de Engrenagem FBE ${selectedDiameter?.diameter}.` :
      language === 'en' ? `Hello! I would like more information about FBE Gear Pumps ${selectedDiameter?.diameter}.` :
      `¡Hola! Me gustaría más información sobre las Bombas de Engranajes FBE ${selectedDiameter?.diameter}.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleModelClick = (model: any) => {
    // Navigate to specifications page for this specific model
    const diameterParam = selectedDiameter?.diameter.replace(/["/]/g, '');
    setLocation(`/produtos/bombas-engrenagem/${diameterParam}/${model.id}/especificacoes`);
  };

  if (!selectedDiameter) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-azul-profundo dark:text-white mb-4">
              {language === 'pt' ? 'Diâmetro não encontrado' :
               language === 'en' ? 'Diameter not found' :
               'Diámetro no encontrado'}
            </h2>
            <Button onClick={() => setLocation('/produtos/bombas-engrenagem')}>
              {language === 'pt' ? 'Voltar às Bombas de Engrenagem' :
               language === 'en' ? 'Back to Gear Pumps' :
               'Volver a Bombas de Engranajes'}
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 via-transparent to-vermelho/5 dark:from-azul-profundo/10 dark:to-vermelho/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Button
                variant="ghost"
                onClick={() => setLocation('/produtos/bombas-engrenagem')}
                className="text-azul-profundo dark:text-blue-400 hover:text-vermelho transition-colors p-0 h-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'pt' ? 'Voltar às Bombas de Engrenagem' :
                 language === 'en' ? 'Back to Gear Pumps' :
                 'Volver a Bombas de Engranajes'}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Cog className="w-8 h-8 text-azul-profundo dark:text-blue-400" />
                <span className="text-lg font-semibold text-azul-profundo dark:text-blue-400 tracking-wider">
                  FBE {selectedDiameter.diameter}
                </span>
              </div>
              
              <div className="w-20 h-1 bg-vermelho mx-auto mb-8"></div>
              
              <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6 leading-tight">
                {language === 'pt' ? `Modelos Diâmetro ${selectedDiameter.diameter}` :
                 language === 'en' ? `${selectedDiameter.diameter} Diameter Models` :
                 `Modelos Diámetro ${selectedDiameter.diameter}`}
              </h1>
              
              <p className="text-xl text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
                {language === 'pt' ? `Escolha o modelo específico da bomba de engrenagem ${selectedDiameter.diameter} mais adequado para sua aplicação` :
                 language === 'en' ? `Choose the specific ${selectedDiameter.diameter} gear pump model best suited for your application` :
                 `Elija el modelo específico de bomba de engranajes ${selectedDiameter.diameter} más adecuado para su aplicación`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Models Grid */}
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
                {selectedDiameter.models.length} {language === 'pt' ? 'Modelos Disponíveis' :
                 language === 'en' ? 'Available Models' :
                 'Modelos Disponibles'}
              </h2>
              <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-2xl mx-auto">
                {language === 'pt' ? 'Cada modelo oferece diferentes capacidades de vazão e especificações técnicas' :
                 language === 'en' ? 'Each model offers different flow capacities and technical specifications' :
                 'Cada modelo ofrece diferentes capacidades de caudal y especificaciones técnicas'}
              </p>
            </motion.div>

            {/* Models Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedDiameter.models.map((model: any, index: number) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className="group cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                    onClick={() => handleModelClick(model)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-vermelho/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="relative z-10 p-8">
                      {/* Model Header */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-azul-profundo to-azul-profundo/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-white">{model.name}</span>
                        </div>
                        
                        <h3 className="text-2xl font-garamond text-azul-profundo dark:text-white mb-2 group-hover:text-vermelho transition-colors duration-300">
                          FBE {model.name}
                        </h3>
                        
                        <Badge variant="outline" className="border-azul-profundo/20 text-azul-profundo dark:text-blue-400">
                          {language === 'pt' ? 'Série FBE' : language === 'en' ? 'FBE Series' : 'Serie FBE'}
                        </Badge>
                      </div>

                      {/* Key Specifications */}
                      <div className="space-y-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <Droplets className="w-4 h-4 text-vermelho mr-2" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {language === 'pt' ? 'Vazão Máxima' : language === 'en' ? 'Max Flow' : 'Caudal Máximo'}
                              </span>
                            </div>
                            <span className="text-lg font-bold text-azul-profundo dark:text-white">
                              {model.maxFlow}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                            <Gauge className="w-4 h-4 text-vermelho mx-auto mb-1" />
                            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                              {language === 'pt' ? 'Pressão' : language === 'en' ? 'Pressure' : 'Presión'}
                            </span>
                            <span className="text-sm font-medium text-azul-profundo dark:text-white">
                              {model.maxPressure}
                            </span>
                          </div>
                          
                          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
                            <Settings2 className="w-4 h-4 text-vermelho mx-auto mb-1" />
                            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">RPM</span>
                            <span className="text-sm font-medium text-azul-profundo dark:text-white">
                              {model.maxRPM}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-azul-profundo hover:bg-azul-profundo/90 text-white group-hover:bg-vermelho group-hover:text-white transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleModelClick(model);
                          }}
                        >
                          {language === 'pt' ? 'Ver Especificações Completas' :
                           language === 'en' ? 'View Complete Specifications' :
                           'Ver Especificaciones Completas'}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <Button
                          variant="outline"
                          className="w-full border-vermelho text-vermelho hover:bg-vermelho hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppClick();
                          }}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {language === 'pt' ? 'Consultar' : language === 'en' ? 'Consult' : 'Consultar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
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
                {language === 'pt' ? 'Comparação Rápida' :
                 language === 'en' ? 'Quick Comparison' :
                 'Comparación Rápida'}
              </h2>
              <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-2xl mx-auto">
                {language === 'pt' ? 'Compare as especificações dos diferentes modelos para escolher o ideal' :
                 language === 'en' ? 'Compare specifications of different models to choose the ideal one' :
                 'Compare las especificaciones de los diferentes modelos para elegir el ideal'}
              </p>
            </motion.div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-azul-profundo text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium">
                        {language === 'pt' ? 'Modelo' : language === 'en' ? 'Model' : 'Modelo'}
                      </th>
                      <th className="px-6 py-4 text-center font-medium">
                        {language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}
                      </th>
                      <th className="px-6 py-4 text-center font-medium">
                        {language === 'pt' ? 'Pressão Máx.' : language === 'en' ? 'Max Pressure' : 'Presión Máx.'}
                      </th>
                      <th className="px-6 py-4 text-center font-medium">RPM</th>
                      <th className="px-6 py-4 text-center font-medium">
                        {language === 'pt' ? 'Ação' : language === 'en' ? 'Action' : 'Acción'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {selectedDiameter.models.map((model: any, index: number) => (
                      <motion.tr
                        key={model.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-azul-profundo rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">{model.name}</span>
                            </div>
                            <div>
                              <div className="font-medium text-azul-profundo dark:text-white">FBE {model.name}</div>
                              <div className="text-sm text-slate-500">
                                {language === 'pt' ? 'Série FBE' : language === 'en' ? 'FBE Series' : 'Serie FBE'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-azul-profundo dark:text-white">
                          {model.maxFlow}
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-azul-profundo dark:text-white">
                          {model.maxPressure}
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-azul-profundo dark:text-white">
                          {model.maxRPM}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Button
                            size="sm"
                            onClick={() => handleModelClick(model)}
                            className="bg-vermelho hover:bg-vermelho/90 text-white"
                          >
                            {language === 'pt' ? 'Ver Detalhes' : language === 'en' ? 'View Details' : 'Ver Detalles'}
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                {language === 'pt' ? 'Dúvidas na Escolha do Modelo?' :
                 language === 'en' ? 'Questions About Model Selection?' :
                 '¿Dudas en la Elección del Modelo?'}
              </h3>
              
              <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                {language === 'pt' ? 'Nossa equipe técnica pode ajudar você a selecionar o modelo ideal com base nos parâmetros da sua aplicação.' :
                 language === 'en' ? 'Our technical team can help you select the ideal model based on your application parameters.' :
                 'Nuestro equipo técnico puede ayudarte a seleccionar el modelo ideal basado en los parámetros de tu aplicación.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-vermelho text-vermelho hover:bg-vermelho hover:text-white transition-colors"
                  onClick={() => window.open('/catalogo-fbe.pdf', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'pt' ? 'Download Catálogo' :
                   language === 'en' ? 'Download Catalog' :
                   'Descargar Catálogo'}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GearPumpModelsPageNew;