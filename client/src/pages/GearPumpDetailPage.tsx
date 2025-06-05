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
  Thermometer,
  Download,
  MessageCircle,
  CheckCircle,
  Info
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { getAllGearPumpModels } from '../data/productsDataStructured';
import { getWhatsAppUrl } from '../data/gearPumpsFullData';

const GearPumpDetailPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const modelId = params.modelId;
  const model = getAllGearPumpModels().find(m => m.id === modelId);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!model) {
    setLocation('/produtos');
    return null;
  }

  const handleConsultantClick = () => {
    const message = t('products.whatsapp.specificModel', `Olá, gostaria de informações sobre o modelo ${model.name}`);
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12 shadow-xl">
                  <img 
                    src="https://www.dropbox.com/scl/fi/6hfqa4pa9i17xvj5em7iz/fbebomba.png?rlkey=a08rw80ed1em2m34rx2eiava2&st=7cxib7er&raw=1"
                    alt={model.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <Badge className="mb-4 bg-[#E30613] text-white">
                  {t('products.series', 'Série')} FBE
                </Badge>
                
                <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6 leading-tight">
                  {model.name}
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('products.gear_pump_description', 'Bomba de engrenagem externa de deslocamento positivo, ideal para transferência precisa de fluidos viscosos com vazão constante.')}
                </p>

                {/* Main Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="p-4">
                    <div className="flex items-center mb-2">
                      <Activity className="w-5 h-5 text-[#E30613] mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t('products.max_flow', 'Vazão Máxima')}</span>
                    </div>
                    <p className="text-xl font-bold text-azul-profundo dark:text-white">{model.maxFlow}</p>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center mb-2">
                      <Gauge className="w-5 h-5 text-[#E30613] mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t('products.max_pressure', 'Pressão Máxima')}</span>
                    </div>
                    <p className="text-xl font-bold text-azul-profundo dark:text-white">{model.maxPressure}</p>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center mb-2">
                      <RotateCw className="w-5 h-5 text-[#E30613] mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t('products.rotation', 'Rotação')}</span>
                    </div>
                    <p className="text-xl font-bold text-azul-profundo dark:text-white">{model.maxRotation}</p>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center mb-2">
                      <Thermometer className="w-5 h-5 text-[#E30613] mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t('products.max_temp', 'Temperatura Máx.')}</span>
                    </div>
                    <p className="text-xl font-bold text-azul-profundo dark:text-white">250°C</p>
                  </Card>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={handleConsultantClick}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('products.request_quote', 'Solicitar Orçamento')}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t('products.download_manual', 'Manual Técnico')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Technical Details Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="specs">{t('products.specifications', 'Especificações')}</TabsTrigger>
                <TabsTrigger value="construction">{t('products.construction', 'Construção')}</TabsTrigger>
                <TabsTrigger value="optionals">{t('products.optionals', 'Opcionais')}</TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-azul-profundo dark:text-white">
                    {t('products.technical_specifications', 'Especificações Técnicas')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-gray-400">{t('products.suction_discharge', 'Bocais de Sucção/Recalque')}</span>
                      <span className="font-medium text-azul-profundo dark:text-white">Ø {model.name.split(' ')[1]} BSP</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-gray-400">{t('products.max_viscosity', 'Viscosidade Máxima')}</span>
                      <span className="font-medium text-azul-profundo dark:text-white">100.000 SSU</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-gray-400">{t('products.flow_range', 'Faixa de Vazão')}</span>
                      <span className="font-medium text-azul-profundo dark:text-white">3,5 - {model.maxFlow}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600 dark:text-gray-400">{t('products.pressure_range', 'Faixa de Pressão')}</span>
                      <span className="font-medium text-azul-profundo dark:text-white">0 - {model.maxPressure}</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="construction" className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-azul-profundo dark:text-white">
                    {t('products.construction_details', 'Detalhes Construtivos')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#E30613] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{t('products.gears', 'Engrenagens')}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Engrenagens de dentes helicoidais de alta precisão</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#E30613] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{t('products.sealing', 'Vedação')}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Vedação por gaxeta teflonada ou selo mecânico</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#E30613] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{t('products.bearings', 'Mancais')}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Mancais deslizantes em buchas de bronze TM23</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#E30613] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{t('products.materials', 'Materiais')}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Ferro fundido, aço inox ou aço carbono</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="optionals" className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-azul-profundo dark:text-white">
                    {t('products.optional_features', 'Recursos Opcionais')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: t('products.relief_valve', 'Válvula de Alívio'),
                        description: t('products.relief_valve_desc', 'Válvula incorporada que retorna até 30% do produto')
                      },
                      {
                        title: t('products.heating_chamber', 'Câmara de Aquecimento'),
                        description: t('products.heating_chamber_desc', 'Para aplicações com fluidos que necessitam aquecimento')
                      },
                      {
                        title: t('products.motor_pump_set', 'Conjunto Moto-Bomba'),
                        description: t('products.motor_pump_set_desc', 'Conjunto completo com motor acoplado')
                      },
                      {
                        title: t('products.external_bearing', 'Mancal Externo'),
                        description: t('products.external_bearing_desc', 'Para aplicações de alta carga ou temperatura')
                      }
                    ].map((optional, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                        <div className="flex items-start">
                          <Info className="w-5 h-5 text-[#E30613] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-1">{optional.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{optional.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GearPumpDetailPage;