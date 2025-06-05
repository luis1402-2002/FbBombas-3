import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  ArrowRight,
  Droplets,
  Gauge,
  Thermometer,
  Settings,
  ChevronRight,
  Info
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

// Dados das bombas FBE com variações
const fbeVariations: Record<string, any> = {
  '1"': {
    models: [
      {
        id: 'fbe-1',
        name: '1"',
        specs: {
          maxFlow: '57,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-1-a',
        name: '1" A',
        specs: {
          maxFlow: '76,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-1-d',
        name: '1" D',
        specs: {
          maxFlow: '95,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-1-da',
        name: '1" DA',
        specs: {
          maxFlow: '114,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      }
    ]
  },
  '2"': {
    models: [
      {
        id: 'fbe-2',
        name: '2"',
        specs: {
          maxFlow: '227,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-2-a',
        name: '2" A',
        specs: {
          maxFlow: '284,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      }
    ]
  },
  '3"': {
    models: [
      {
        id: 'fbe-3',
        name: '3"',
        specs: {
          maxFlow: '568,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-3-m9',
        name: '3" M9',
        specs: {
          maxFlow: '681,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      }
    ]
  },
  '4"': {
    models: [
      {
        id: 'fbe-4-m6',
        name: '4" M6',
        specs: {
          maxFlow: '908,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-4-m8',
        name: '4" M8',
        specs: {
          maxFlow: '1135,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      },
      {
        id: 'fbe-4-m12',
        name: '4" M12',
        specs: {
          maxFlow: '1703,0 L/min',
          maxPressure: '22 bar',
          maxTemp: '350°C',
          maxRPM: '1750 RPM',
          viscosity: '100.000 SSU'
        }
      }
    ]
  }
};

const GearPumpVariationsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const diameter = params.diameter ? decodeURIComponent(params.diameter as string) : '';
  const variations = fbeVariations[diameter];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!variations) {
    setLocation('/produtos');
    return null;
  }

  const handleModelClick = (modelId: string) => {
    setLocation(`/produtos/bombas-engrenagem/${encodeURIComponent(diameter)}/${modelId}/especificacoes`);
  };

  return (
    <>
      <Helmet>
        <title>{`Bombas FBE ${diameter} - Modelos Disponíveis | FB Bombas`}</title>
        <meta name="description" content={`Conheça os modelos de bombas de engrenagem FBE ${diameter} disponíveis. Soluções especializadas para diferentes vazões e aplicações industriais.`} />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-slate-900 dark:from-slate-950 via-slate-800 dark:via-slate-900 to-slate-700 dark:to-slate-800">
          <div className="absolute inset-0 z-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-red-950/15" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <Button
              onClick={() => setLocation('/produtos')}
              variant="ghost"
              className="mb-8 text-white hover:text-laranja hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'pt' ? 'Voltar aos Produtos' :
               language === 'en' ? 'Back to Products' :
               'Volver a Productos'}
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <Badge className="mb-4 bg-laranja text-white text-sm px-4 py-1">
                {language === 'pt' ? 'SÉRIE FBE' :
                 language === 'en' ? 'FBE SERIES' :
                 'SERIE FBE'}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-light">
                <span className="block">
                  {language === 'pt' ? 'Bombas de Engrenagem' :
                   language === 'en' ? 'Gear Pumps' :
                   'Bombas de Engranaje'}
                </span>
                <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
                  {diameter}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                {language === 'pt' ? `Escolha o modelo ideal para sua aplicação entre as ${variations.models.length} variações disponíveis` :
                 language === 'en' ? `Choose the ideal model for your application from ${variations.models.length} available variations` :
                 `Elija el modelo ideal para su aplicación entre las ${variations.models.length} variaciones disponibles`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Models Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {variations.models.map((model: any, index: number) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-laranja dark:hover:border-laranja overflow-hidden h-full"
                    onClick={() => handleModelClick(model.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-laranja/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardContent className="relative p-6 md:p-8 h-full flex flex-col">
                      {/* Model Name */}
                      <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-azul-profundo dark:text-white group-hover:text-laranja transition-colors duration-300 mb-2">
                          FBE {model.name}
                        </h3>
                        <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700">
                          {language === 'pt' ? 'Engrenagem Externa' :
                           language === 'en' ? 'External Gear' :
                           'Engranaje Externo'}
                        </Badge>
                      </div>

                      {/* Specifications Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-1">
                            <Droplets className="w-3 h-3" />
                            {language === 'pt' ? 'Vazão máx.' :
                             language === 'en' ? 'Max flow' :
                             'Caudal máx.'}
                          </div>
                          <div className="font-semibold text-sm text-azul-profundo dark:text-white">
                            {model.specs.maxFlow}
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-1">
                            <Gauge className="w-3 h-3" />
                            {language === 'pt' ? 'Pressão máx.' :
                             language === 'en' ? 'Max pressure' :
                             'Presión máx.'}
                          </div>
                          <div className="font-semibold text-sm text-azul-profundo dark:text-white">
                            {model.specs.maxPressure}
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-1">
                            <Thermometer className="w-3 h-3" />
                            {language === 'pt' ? 'Temp. máx.' :
                             language === 'en' ? 'Max temp.' :
                             'Temp. máx.'}
                          </div>
                          <div className="font-semibold text-sm text-azul-profundo dark:text-white">
                            {model.specs.maxTemp}
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-1">
                            <Settings className="w-3 h-3" />
                            {language === 'pt' ? 'Rotação' :
                             language === 'en' ? 'Rotation' :
                             'Rotación'}
                          </div>
                          <div className="font-semibold text-sm text-azul-profundo dark:text-white">
                            {model.specs.maxRPM}
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        {language === 'pt' ? 'Ver Especificações Completas' :
                         language === 'en' ? 'View Full Specifications' :
                         'Ver Especificaciones Completas'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
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
              className="mt-12"
            >
              <Card className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Info className="w-8 h-8 text-laranja flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-azul-profundo dark:text-white mb-3">
                        {language === 'pt' ? 'Como escolher o modelo ideal?' :
                         language === 'en' ? 'How to choose the ideal model?' :
                         '¿Cómo elegir el modelo ideal?'}
                      </h3>
                      <p className="text-cinza-titanio dark:text-prata/90 mb-4">
                        {language === 'pt' ? 'Os diferentes modelos da mesma bitola oferecem vazões variadas para atender diferentes necessidades. Modelos com letras adicionais (A, D, DA) indicam maior capacidade de vazão.' :
                         language === 'en' ? 'Different models of the same size offer varied flow rates to meet different needs. Models with additional letters (A, D, DA) indicate higher flow capacity.' :
                         'Los diferentes modelos del mismo tamaño ofrecen caudales variados para satisfacer diferentes necesidades. Los modelos con letras adicionales (A, D, DA) indican mayor capacidad de flujo.'}
                      </p>
                      <ul className="space-y-2 text-sm text-cinza-titanio dark:text-prata/90">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span>
                            {language === 'pt' ? 'Modelo padrão: Ideal para aplicações com vazão moderada' :
                             language === 'en' ? 'Standard model: Ideal for moderate flow applications' :
                             'Modelo estándar: Ideal para aplicaciones con flujo moderado'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span>
                            {language === 'pt' ? 'Modelos A/D/DA: Maior capacidade para aplicações exigentes' :
                             language === 'en' ? 'A/D/DA models: Higher capacity for demanding applications' :
                             'Modelos A/D/DA: Mayor capacidad para aplicaciones exigentes'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span>
                            {language === 'pt' ? 'Todos os modelos suportam até 350°C e 22 bar de pressão' :
                             language === 'en' ? 'All models support up to 350°C and 22 bar pressure' :
                             'Todos los modelos soportan hasta 350°C y 22 bar de presión'}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GearPumpVariationsPage;