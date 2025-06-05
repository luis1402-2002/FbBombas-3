import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import { 
  Cog,
  Droplets,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Gauge,
  Settings,
  ChevronRight,
  Phone,
  Info,
  FileText,
  Download,
  Wrench,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

// Interface para os modelos de bombas
interface PumpModel {
  diameter: string;
  models: {
    id: string;
    name: string;
    specs?: {
      maxFlow: string;
      maxPressure: string;
      maxTemp: string;
      maxRPM?: string;
    };
    image?: string;
  }[];
}

// Dados das bombas de engrenagem FBE
const fbePumps: PumpModel[] = [
  {
    diameter: '1/8"',
    models: [{ 
      id: 'fbe-1-8', 
      name: '1/8"',
      specs: {
        maxFlow: '5,15 L/min',
        maxPressure: '22 bar',
        maxTemp: '350°C',
        maxRPM: '1750 RPM'
      }
    }]
  },
  {
    diameter: '1/4"',
    models: [{ 
      id: 'fbe-1-4', 
      name: '1/4"',
      specs: {
        maxFlow: '8,90 L/min',
        maxPressure: '22 bar',
        maxTemp: '350°C',
        maxRPM: '1750 RPM'
      }
    }]
  },
  {
    diameter: '3/8"',
    models: [{ 
      id: 'fbe-3-8', 
      name: '3/8"',
      specs: {
        maxFlow: '14,0 L/min',
        maxPressure: '22 bar',
        maxTemp: '350°C',
        maxRPM: '1750 RPM'
      }
    }]
  },
  {
    diameter: '1/2"',
    models: [{ 
      id: 'fbe-1-2', 
      name: '1/2"',
      specs: {
        maxFlow: '22,0 L/min',
        maxPressure: '22 bar',
        maxTemp: '350°C',
        maxRPM: '1750 RPM'
      }
    }]
  },
  {
    diameter: '3/4"',
    models: [{ 
      id: 'fbe-3-4', 
      name: '3/4"',
      specs: {
        maxFlow: '35,0 L/min',
        maxPressure: '22 bar',
        maxTemp: '350°C',
        maxRPM: '1750 RPM'
      }
    }]
  },
  {
    diameter: '1"',
    models: [
      { 
        id: 'fbe-1', 
        name: '1"',
        specs: {
          maxFlow: '57,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-1-a', 
        name: '1" A',
        specs: {
          maxFlow: '76,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-1-d', 
        name: '1" D',
        specs: {
          maxFlow: '95,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-1-da', 
        name: '1" DA',
        specs: {
          maxFlow: '114,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      }
    ]
  },
  {
    diameter: '2"',
    models: [
      { 
        id: 'fbe-2', 
        name: '2"',
        specs: {
          maxFlow: '227,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-2-a', 
        name: '2" A',
        specs: {
          maxFlow: '284,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      }
    ]
  },
  {
    diameter: '3"',
    models: [
      { 
        id: 'fbe-3', 
        name: '3"',
        specs: {
          maxFlow: '568,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-3-m9', 
        name: '3" M9',
        specs: {
          maxFlow: '681,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      }
    ]
  },
  {
    diameter: '4"',
    models: [
      { 
        id: 'fbe-4-m6', 
        name: '4" M6',
        specs: {
          maxFlow: '908,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-4-m8', 
        name: '4" M8',
        specs: {
          maxFlow: '1135,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      },
      { 
        id: 'fbe-4-m12', 
        name: '4" M12',
        specs: {
          maxFlow: '1703,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM'
        }
      }
    ]
  }
];

// Dados das bombas centrífugas
const centrifugalPumps = [
  {
    id: 'fbot',
    name: 'FBOT',
    series: 'Série FBOT',
    description: {
      pt: 'Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. Pode ser utilizada na indústria farmacêutica, química, alimentícia, têxtil, plástica, etc.',
      en: 'Developed for pumping organic thermal oils. Can be used in pharmaceutical, chemical, food, textile, plastic industries, etc.',
      es: 'Desarrollada para trabajar en el bombeo de aceites térmicos orgánicos. Puede utilizarse en la industria farmacéutica, química, alimentaria, textil, plástica, etc.'
    },
    specs: {
      maxFlow: 'até 2.200 m³/h',
      maxPressure: 'até 135 M',
      maxRPM: '3500 RPM',
      maxTemp: 'até 350°C',
      sizes: 'DN25 até 300 mm'
    },
    features: [
      'Bomba com corpo em voluta',
      'Instalação na horizontal',
      'Construção "back pull-out"',
      'Monoestágio'
    ]
  },
  {
    id: 'fbcn',
    name: 'FBCN',
    series: 'Série FBCN',
    description: {
      pt: 'Desenvolvida para trabalhar com líquidos limpos ou turvos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica, saneamento e combate à incêndio.',
      en: 'Developed to work with clean or turbid liquids in numerous applications such as chemical, petrochemical, paper, pulp, steel, mining, food, textile, pharmaceutical industries, sanitation and firefighting.',
      es: 'Desarrollada para trabajar con líquidos limpios o turbios, en numerosas aplicaciones como industrias químicas, petroquímicas, papel, pulpa, siderúrgica, minería, alimentaria, textil, farmacéutica, saneamiento y combate de incendios.'
    },
    specs: {
      maxFlow: 'até 2.200 m³/h',
      maxPressure: 'até 135 M',
      maxRPM: '3500 RPM',
      maxTemp: 'até 250°C',
      sizes: 'DN25 até 300 mm'
    },
    features: [
      'Bomba com corpo em voluta',
      'Instalação na horizontal',
      'Construção "back pull-out"',
      'Monoestágio'
    ]
  }
];

const ProductsPageComplete: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('gear');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? 'Olá! Gostaria de mais informações sobre os produtos FB Bombas.' :
      language === 'en' ? 'Hello! I would like more information about FB Bombas products.' :
      '¡Hola! Me gustaría más información sobre los productos FB Bombas.'
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  const handleDiameterClick = (diameter: string) => {
    const pump = fbePumps.find(p => p.diameter === diameter);
    if (pump && pump.models.length === 1) {
      // Se só tem um modelo, vai direto para especificações
      setLocation(`/produtos/bombas-engrenagem/${encodeURIComponent(diameter)}/especificacoes`);
    } else {
      // Se tem mais de um modelo, vai para página de variações
      setLocation(`/produtos/bombas-engrenagem/${encodeURIComponent(diameter)}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Produtos - FB Bombas | Bombas Industriais de Alta Qualidade</title>
        <meta name="description" content="Conheça nossa linha completa de bombas industriais: bombas de engrenagem FBE e bombas centrífugas FBCN e FBOT para diversas aplicações." />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section - Matching homepage style */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 dark:from-slate-950 via-slate-800 dark:via-slate-900 to-slate-700 dark:to-slate-800">
          <div className="absolute inset-0 z-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-red-950/15" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-laranja" />
                <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
                  {language === 'pt' ? 'PRODUTOS FB BOMBAS' :
                   language === 'en' ? 'FB BOMBAS PRODUCTS' :
                   'PRODUCTOS FB BOMBAS'}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-laranja" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-relaxed font-light">
                <span className="block">
                  {language === 'pt' ? 'Nossa Linha Completa' :
                   language === 'en' ? 'Our Complete Line' :
                   'Nuestra Línea Completa'}
                </span>
                <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
                  {language === 'pt' ? 'de Produtos' :
                   language === 'en' ? 'of Products' :
                   'de Productos'}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                {language === 'pt' ? 'Soluções especializadas em bombeamento industrial com tecnologia de ponta e qualidade garantida para os mais exigentes processos.' :
                 language === 'en' ? 'Specialized industrial pumping solutions with cutting-edge technology and guaranteed quality for the most demanding processes.' :
                 'Soluciones especializadas en bombeo industrial con tecnología de punta y calidad garantizada para los procesos más exigentes.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <TabsTrigger 
                  value="gear" 
                  className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Cog className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'pt' ? 'Bombas de Engrenagem' :
                     language === 'en' ? 'Gear Pumps' :
                     'Bombas de Engranaje'}
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="centrifugal" 
                  className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Droplets className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'pt' ? 'Bombas Centrífugas' :
                     language === 'en' ? 'Centrifugal Pumps' :
                     'Bombas Centrífugas'}
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Gear Pumps Tab */}
              <TabsContent value="gear" className="mt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="gear"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* FBE Series Header */}
                    <div className="text-center mb-12">
                      <Badge className="mb-4 bg-azul-profundo text-white">
                        {language === 'pt' ? 'SÉRIE FBE' :
                         language === 'en' ? 'FBE SERIES' :
                         'SERIE FBE'}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-azul-profundo dark:text-white mb-4">
                        {language === 'pt' ? 'Bombas de Engrenagem Externa' :
                         language === 'en' ? 'External Gear Pumps' :
                         'Bombas de Engranaje Externo'}
                      </h2>
                      <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto">
                        {language === 'pt' ? 'Soluções de alta precisão para transferência de fluidos viscosos, óleos e aplicações que exigem vazão constante.' :
                         language === 'en' ? 'High precision solutions for viscous fluid transfer, oils and applications requiring constant flow.' :
                         'Soluciones de alta precisión para transferencia de fluidos viscosos, aceites y aplicaciones que requieren flujo constante.'}
                      </p>
                    </div>

                    {/* Diameter Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                      {fbePumps.map((pump, index) => (
                        <motion.div
                          key={pump.diameter}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card 
                            className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-laranja dark:hover:border-laranja overflow-hidden"
                            onClick={() => handleDiameterClick(pump.diameter)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-laranja/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <CardContent className="relative p-6 md:p-8">
                              {/* Diameter Display */}
                              <div className="text-center mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo dark:text-white group-hover:text-laranja transition-colors duration-300">
                                  {pump.diameter}
                                </h3>
                              </div>

                              {/* Model Count Badge */}
                              <div className="text-center mb-4">
                                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700">
                                  {pump.models.length === 1 ? 
                                    (language === 'pt' ? '1 modelo' :
                                     language === 'en' ? '1 model' :
                                     '1 modelo') :
                                    (language === 'pt' ? `${pump.models.length} modelos` :
                                     language === 'en' ? `${pump.models.length} models` :
                                     `${pump.models.length} modelos`)
                                  }
                                </Badge>
                              </div>

                              {/* Quick Specs (for single models) */}
                              {pump.models.length === 1 && pump.models[0].specs && (
                                <div className="space-y-2 text-sm text-cinza-titanio dark:text-prata/80">
                                  <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                      <Droplets className="w-3 h-3" />
                                      {language === 'pt' ? 'Vazão' :
                                       language === 'en' ? 'Flow' :
                                       'Caudal'}
                                    </span>
                                    <span className="font-medium">{pump.models[0].specs.maxFlow}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                      <Gauge className="w-3 h-3" />
                                      {language === 'pt' ? 'Pressão' :
                                       language === 'en' ? 'Pressure' :
                                       'Presión'}
                                    </span>
                                    <span className="font-medium">{pump.models[0].specs.maxPressure}</span>
                                  </div>
                                </div>
                              )}

                              {/* Arrow Icon */}
                              <div className="mt-4 flex justify-center">
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-laranja group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mt-12 text-center"
                    >
                      <Card className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                        <CardContent className="p-8">
                          <Info className="w-8 h-8 text-laranja mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-azul-profundo dark:text-white mb-3">
                            {language === 'pt' ? 'Características da Série FBE' :
                             language === 'en' ? 'FBE Series Features' :
                             'Características de la Serie FBE'}
                          </h3>
                          <ul className="text-left max-w-2xl mx-auto space-y-2 text-cinza-titanio dark:text-prata/90">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                              <span>{language === 'pt' ? 'Engrenagens com dentes helicoidais para operação silenciosa' :
                                     language === 'en' ? 'Helical gear teeth for quiet operation' :
                                     'Engranajes con dientes helicoidales para operación silenciosa'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                              <span>{language === 'pt' ? 'Construção em ferro fundido, aço inox ou aço carbono' :
                                     language === 'en' ? 'Cast iron, stainless steel or carbon steel construction' :
                                     'Construcción en hierro fundido, acero inoxidable o acero al carbono'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                              <span>{language === 'pt' ? 'Vedação por gaxeta teflonada ou selo mecânico' :
                                     language === 'en' ? 'PTFE packing or mechanical seal' :
                                     'Sellado por empaquetadura de PTFE o sello mecánico'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                              <span>{language === 'pt' ? 'Temperatura de operação até 350°C' :
                                     language === 'en' ? 'Operating temperature up to 350°C' :
                                     'Temperatura de operación hasta 350°C'}</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>

              {/* Centrifugal Pumps Tab */}
              <TabsContent value="centrifugal" className="mt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="centrifugal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {centrifugalPumps.map((pump, index) => (
                        <motion.div
                          key={pump.id}
                          initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                          <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <CardContent className="relative p-8 h-full flex flex-col">
                              {/* Header */}
                              <div className="mb-6">
                                <Badge className="mb-3 bg-azul-profundo text-white">
                                  {pump.series}
                                </Badge>
                                <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo dark:text-white mb-4">
                                  {language === 'pt' ? `Bomba Centrífuga ${pump.name}` :
                                   language === 'en' ? `${pump.name} Centrifugal Pump` :
                                   `Bomba Centrífuga ${pump.name}`}
                                </h3>
                                <p className="text-cinza-titanio dark:text-prata/90 leading-relaxed">
                                  {pump.description[language]}
                                </p>
                              </div>

                              {/* Specifications */}
                              <div className="space-y-4 mb-6 flex-grow">
                                <h4 className="font-semibold text-azul-profundo dark:text-white flex items-center gap-2">
                                  <Settings className="w-5 h-5" />
                                  {language === 'pt' ? 'Especificações Principais' :
                                   language === 'en' ? 'Main Specifications' :
                                   'Especificaciones Principales'}
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                      <Droplets className="w-4 h-4" />
                                      {language === 'pt' ? 'Vazão máxima' :
                                       language === 'en' ? 'Max flow' :
                                       'Caudal máximo'}
                                    </div>
                                    <div className="font-semibold text-azul-profundo dark:text-white">
                                      {pump.specs.maxFlow}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                      <Gauge className="w-4 h-4" />
                                      {language === 'pt' ? 'Pressão máxima' :
                                       language === 'en' ? 'Max pressure' :
                                       'Presión máxima'}
                                    </div>
                                    <div className="font-semibold text-azul-profundo dark:text-white">
                                      {pump.specs.maxPressure}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                      <Thermometer className="w-4 h-4" />
                                      {language === 'pt' ? 'Temperatura' :
                                       language === 'en' ? 'Temperature' :
                                       'Temperatura'}
                                    </div>
                                    <div className="font-semibold text-azul-profundo dark:text-white">
                                      {pump.specs.maxTemp}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                      <Settings className="w-4 h-4" />
                                      {language === 'pt' ? 'Rotação máxima' :
                                       language === 'en' ? 'Max rotation' :
                                       'Rotación máxima'}
                                    </div>
                                    <div className="font-semibold text-azul-profundo dark:text-white">
                                      {pump.specs.maxRPM}
                                    </div>
                                  </div>
                                </div>

                                {/* Features List */}
                                <div className="mt-4">
                                  <h5 className="font-medium text-sm text-slate-600 dark:text-slate-400 mb-2">
                                    {language === 'pt' ? 'Características:' :
                                     language === 'en' ? 'Features:' :
                                     'Características:'}
                                  </h5>
                                  <ul className="space-y-1">
                                    {pump.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-cinza-titanio dark:text-prata/90">
                                        <ChevronRight className="w-4 h-4 text-azul-profundo dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <Button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                {language === 'pt' ? 'Contatar Consultor' :
                                 language === 'en' ? 'Contact Consultant' :
                                 'Contactar Consultor'}
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* Info Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mt-12"
                    >
                      <Card className="max-w-4xl mx-auto bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white border-0">
                        <CardContent className="p-8 text-center">
                          <Phone className="w-12 h-12 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-3">
                            {language === 'pt' ? 'Precisa de Mais Informações?' :
                             language === 'en' ? 'Need More Information?' :
                             '¿Necesita Más Información?'}
                          </h3>
                          <p className="mb-6 text-lg opacity-90">
                            {language === 'pt' ? 'Nossa equipe técnica está pronta para ajudá-lo a escolher a bomba ideal para sua aplicação.' :
                             language === 'en' ? 'Our technical team is ready to help you choose the ideal pump for your application.' :
                             'Nuestro equipo técnico está listo para ayudarlo a elegir la bomba ideal para su aplicación.'}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                              onClick={handleWhatsAppClick}
                              className="bg-white text-azul-profundo hover:bg-slate-100 font-semibold shadow-lg"
                            >
                              <MessageCircle className="mr-2 h-5 w-5" />
                              WhatsApp
                            </Button>
                            <Button
                              onClick={() => setLocation('/#contato')}
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-azul-profundo"
                            >
                              <Mail className="mr-2 h-5 w-5" />
                              {language === 'pt' ? 'Formulário de Contato' :
                               language === 'en' ? 'Contact Form' :
                               'Formulario de Contacto'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPageComplete;