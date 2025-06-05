import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  ChevronLeft,
  Activity,
  Gauge,
  RotateCw,
  ArrowRight,
  Download,
  MessageCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { getGearPumpByDiameter } from '../data/productsDataStructured';
import { getWhatsAppUrl } from '../data/gearPumpsFullData';

const GearPumpModelsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const diameter = params.diameter ? `${params.diameter}"` : '';
  const pumpData = getGearPumpByDiameter(diameter);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pumpData || !pumpData.hasVariations) {
    setLocation('/produtos');
    return null;
  }

  const handleConsultantClick = () => {
    const message = t('products.whatsapp.consultMessage');
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.025]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(227,6,19,0.05) 50px, rgba(227,6,19,0.05) 52px)`,
            }}></div>
          </div>

          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/produtos')}
              className="mb-8 -ml-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('common.back_to_catalog', 'Voltar ao Catálogo')}
            </Button>

            <div className="max-w-4xl">
              <Badge className="mb-4 bg-[#E30613] text-white">
                FBE {diameter}
              </Badge>
              
              <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6 leading-tight">
                {t('products.models_for_diameter', 'Modelos disponíveis para')} {diameter}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('products.select_model_description', 'Selecione o modelo ideal para sua aplicação')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Models Grid Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pumpData.models.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 overflow-hidden">
                    {/* Model Image */}
                    <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8">
                      <img 
                        src="https://www.dropbox.com/scl/fi/6hfqa4pa9i17xvj5em7iz/fbebomba.png?rlkey=a08rw80ed1em2m34rx2eiava2&st=7cxib7er&raw=1"
                        alt={model.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Model Info */}
                    <div className="p-6">
                      <h3 className="font-garamond text-2xl font-bold mb-4 text-azul-profundo dark:text-white group-hover:text-[#E30613] transition-colors">
                        {model.name}
                      </h3>

                      {/* Specifications */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Activity className="w-4 h-4 mr-2 text-[#E30613]" />
                            <span className="text-sm">{t('products.max_flow', 'Vazão Máxima')}</span>
                          </div>
                          <span className="text-sm font-semibold text-azul-profundo dark:text-white">{model.maxFlow}</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Gauge className="w-4 h-4 mr-2 text-[#E30613]" />
                            <span className="text-sm">{t('products.max_pressure', 'Pressão Máxima')}</span>
                          </div>
                          <span className="text-sm font-semibold text-azul-profundo dark:text-white">{model.maxPressure}</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <RotateCw className="w-4 h-4 mr-2 text-[#E30613]" />
                            <span className="text-sm">{t('products.rotation', 'Rotação')}</span>
                          </div>
                          <span className="text-sm font-semibold text-azul-profundo dark:text-white">{model.maxRotation}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setLocation(`/produtos/fbe/${model.id}`)}
                      >
                        {t('products.view_details', 'Ver Detalhes Completos')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-garamond text-3xl md:text-4xl text-azul-profundo dark:text-white mb-6">
                  {t('products.need_help_choosing', 'Precisa de ajuda para escolher?')}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {t('products.technical_team_help', 'Nossa equipe técnica está pronta para ajudar você a selecionar o modelo ideal para sua aplicação específica.')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank')}
                    className="gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {t('products.download_manual', 'Baixar Manual Técnico')}
                  </Button>
                  
                  <Button
                    size="lg"
                    className="bg-azul-profundo hover:bg-dark-azul text-white gap-2"
                    onClick={handleConsultantClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('products.talk_to_consultant', 'Falar com Consultor')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GearPumpModelsPage;