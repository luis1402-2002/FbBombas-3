import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  ArrowRight,
  MessageCircle,
  Download,
  ChevronLeft,
  Droplets,
  Gauge,
  Thermometer,
  AlertCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';
import { getWhatsAppUrl } from '../data/gearPumpsFullData';

// FBE Models Data Structure
const fbeModels = {
  small: [
    { id: '1/8"', flow: '5,15', rpm: '1750', pressure: '22', hasVariations: false },
    { id: '1/4"', flow: '8,90', rpm: '1750', pressure: '22', hasVariations: false },
    { id: '3/8"', flow: '14', rpm: '1750', pressure: '22', hasVariations: false },
    { id: '1/2"', flow: '17,70', rpm: '1750', pressure: '22', hasVariations: false },
    { id: '3/4"', flow: '44,40', rpm: '1750', pressure: '22', hasVariations: false }
  ],
  medium: [
    { 
      id: '1"', 
      flow: '112', 
      rpm: '1750', 
      pressure: '22', 
      hasVariations: true,
      variations: [
        { id: '1"', flow: '62' },
        { id: '1" A', flow: '74' },
        { id: '1" D', flow: '88,6' },
        { id: '1" DA', flow: '112' }
      ]
    },
    { 
      id: '1.1/2"', 
      flow: '200', 
      rpm: '1750', 
      pressure: '14', 
      hasVariations: true,
      variations: [
        { id: '1.1/2"', flow: '150' },
        { id: '1.1/2" A', flow: '200' }
      ]
    },
    { 
      id: '2"', 
      flow: '420', 
      rpm: '1750', 
      pressure: '14', 
      hasVariations: true,
      variations: [
        { id: '2"', flow: '300' },
        { id: '2" A', flow: '420' }
      ]
    }
  ],
  large: [
    { 
      id: '3"', 
      flow: '600', 
      rpm: '1150', 
      pressure: '12', 
      hasVariations: true,
      variations: [
        { id: '3"', flow: '500', pressure: '12' },
        { id: '3" M9', flow: '600', pressure: '8' }
      ]
    },
    { 
      id: '4"', 
      flow: '1.350', 
      rpm: '1150', 
      pressure: '8', 
      hasVariations: true,
      variations: [
        { id: '4" M6', flow: '650', pressure: '8' },
        { id: '4" M8', flow: '1.000', pressure: '8' },
        { id: '4" M12', flow: '1.350', pressure: '6' }
      ]
    }
  ]
};

const GearPumpsPageNew: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'small' | 'medium' | 'large'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultantClick = () => {
    const message = t('products.whatsapp.consultMessage');
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const handleModelClick = (model: any) => {
    if (model.hasVariations) {
      setLocation(`/produtos/bombas-engrenagem/${model.id.replace(/"/g, '')}`);
    } else {
      setLocation(`/produtos/fbe/${model.id.replace(/"/g, '')}`);
    }
  };

  const getVisibleModels = () => {
    if (selectedCategory === 'all') {
      return [...fbeModels.small, ...fbeModels.medium, ...fbeModels.large];
    }
    return fbeModels[selectedCategory];
  };

  const categoryButtons = [
    { id: 'all', label: { pt: 'Todos', en: 'All', es: 'Todos' } },
    { id: 'small', label: { pt: 'Pequenas', en: 'Small', es: 'Pequeñas' } },
    { id: 'medium', label: { pt: 'Médias', en: 'Medium', es: 'Medianas' } },
    { id: 'large', label: { pt: 'Grandes', en: 'Large', es: 'Grandes' } }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-dark-cinza">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-dark-cinza">
          <div className="container">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/produtos')}
              className="mb-8 -ml-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('common.back')}
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                <Cog className="w-3 h-3 mr-1" />
                FBE Series
              </Badge>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 dark:text-white">
                {language === 'pt' ? 'Bombas de Engrenagem Externa' : 
                 language === 'en' ? 'External Gear Pumps' : 
                 'Bombas de Engranajes Externos'}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {language === 'pt' ? 'Soluções de alta precisão para transferência de fluidos viscosos, com ampla faixa de vazão e pressão.' :
                 language === 'en' ? 'High precision solutions for viscous fluid transfer, with wide flow and pressure range.' :
                 'Soluciones de alta precisión para transferencia de fluidos viscosos, con amplio rango de caudal y presión.'}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Droplets, label: t('products.specs.maxFlow'), value: '1.350 L/min' },
                  { icon: Gauge, label: t('products.specs.maxPressure'), value: '22 bar' },
                  { icon: Thermometer, label: t('products.specs.maxTemp'), value: '250°C' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feature.label}</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-[72px] z-40 bg-white dark:bg-dark-cinza border-b py-4">
          <div className="container">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {categoryButtons.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className="whitespace-nowrap"
                >
                  {cat.label[language]}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Models Grid */}
        <section className="py-16">
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {getVisibleModels().map((model, index) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card 
                      className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => handleModelClick(model)}
                    >
                      {/* Model Image Placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Cog className="w-20 h-20 text-gray-300 dark:text-gray-600" />
                        </div>
                        {model.hasVariations && (
                          <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                            {model.variations?.length} {language === 'pt' ? 'modelos' : 'models'}
                          </Badge>
                        )}
                      </div>

                      {/* Model Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          FBE {model.id}
                        </h3>

                        <div className="space-y-2 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{t('products.specs.maxFlow')}:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{model.flow} L/min</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{t('products.specs.rotation')}:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{model.rpm} RPM</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{t('products.specs.maxPressure')}:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{model.pressure} bar</span>
                          </div>
                        </div>

                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        >
                          {model.hasVariations ? t('products.viewModels') : t('products.viewDetails')}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Technical Info Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-light mb-8 text-gray-900 dark:text-white text-center">
                  {language === 'pt' ? 'Características Técnicas' :
                   language === 'en' ? 'Technical Features' :
                   'Características Técnicas'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Standard Features */}
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {language === 'pt' ? 'Especificações Padrão' :
                       language === 'en' ? 'Standard Specifications' :
                       'Especificaciones Estándar'}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        language === 'pt' ? 'Engrenagens de dentes helicoidais' : 'Helical gear teeth',
                        language === 'pt' ? 'Vedação por gaxeta teflonada ou selo mecânico' : 'PTFE packing or mechanical seal',
                        language === 'pt' ? 'Mancais deslizantes em buchas de bronze TM23' : 'TM23 bronze bushing bearings',
                        language === 'pt' ? 'Construção em ferro fundido, aço inox ou aço carbono' : 'Cast iron, stainless steel or carbon steel construction'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Optional Features */}
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {language === 'pt' ? 'Opcionais' :
                       language === 'en' ? 'Optional Features' :
                       'Características Opcionales'}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        language === 'pt' ? 'Válvula de alívio incorporada (retorna até 30% do produto)' : 'Built-in relief valve (returns up to 30% of product)',
                        language === 'pt' ? 'Câmara de aquecimento' : 'Heating chamber',
                        language === 'pt' ? 'Conjunto moto-bomba completo' : 'Complete motor-pump assembly',
                        language === 'pt' ? 'Mancal externo' : 'External bearing'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Download Section */}
                <div className="mt-12 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {language === 'pt' ? 'Baixe o manual técnico completo da série FBE' :
                     language === 'en' ? 'Download the complete FBE series technical manual' :
                     'Descargue el manual técnico completo de la serie FBE'}
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank')}
                    className="gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {language === 'pt' ? 'Manual Técnico FBE' :
                     language === 'en' ? 'FBE Technical Manual' :
                     'Manual Técnico FBE'}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-azul-profundo">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                {language === 'pt' ? 'Precisa de ajuda para escolher?' :
                 language === 'en' ? 'Need help choosing?' :
                 '¿Necesita ayuda para elegir?'}
              </h2>
              
              <p className="text-xl text-blue-100 mb-8">
                {language === 'pt' ? 'Nossa equipe técnica está pronta para ajudar você a encontrar a bomba ideal para sua aplicação.' :
                 language === 'en' ? 'Our technical team is ready to help you find the ideal pump for your application.' :
                 'Nuestro equipo técnico está listo para ayudarlo a encontrar la bomba ideal para su aplicación.'}
              </p>

              <Button
                size="lg"
                className="bg-white text-azul-profundo hover:bg-gray-100"
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

export default GearPumpsPageNew;