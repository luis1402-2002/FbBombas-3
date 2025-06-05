import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  Download,
  MessageCircle,
  Droplets,
  Gauge,
  Thermometer,
  Settings,
  ChevronRight,
  FileText,
  Wrench,
  Shield,
  Cog
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

// Especificações completas das bombas FBE
const fbeSpecifications: Record<string, any> = {
  'fbe-1-8': {
    diameter: '1/8"',
    model: '1/8"',
    specs: {
      maxFlow: '5,15 L/min',
      maxPressure: '22 bar',
      maxTemp: '350°C',
      maxRPM: '1750 RPM',
      maxViscosity: '100.000 SSU',
      connection: {
        pt: 'Bocais de sucção e recalque de Ø 1/8" com rosca "BSP"',
        en: 'Suction and discharge nozzles Ø 1/8" with BSP thread',
        es: 'Boquillas de succión y descarga Ø 1/8" con rosca BSP'
      }
    },
    flowData: [
      { rpm: 1150, pressure: 0, flow: 3.50, power: 0.05 },
      { rpm: 1150, pressure: 4, flow: 3.30, power: 0.09 },
      { rpm: 1150, pressure: 8, flow: 3.10, power: 0.13 },
      { rpm: 1150, pressure: 12, flow: 2.90, power: 0.18 },
      { rpm: 1150, pressure: 16, flow: 2.50, power: 0.24 },
      { rpm: 1150, pressure: 20, flow: 2.00, power: 0.30 },
      { rpm: 1750, pressure: 0, flow: 5.15, power: 0.07 },
      { rpm: 1750, pressure: 4, flow: 4.85, power: 0.12 },
      { rpm: 1750, pressure: 8, flow: 4.55, power: 0.17 },
      { rpm: 1750, pressure: 12, flow: 4.25, power: 0.23 },
      { rpm: 1750, pressure: 16, flow: 3.95, power: 0.31 }
    ]
  },
  'fbe-1-4': {
    diameter: '1/4"',
    model: '1/4"',
    specs: {
      maxFlow: '8,90 L/min',
      maxPressure: '22 bar',
      maxTemp: '350°C',
      maxRPM: '1750 RPM',
      maxViscosity: '100.000 SSU',
      connection: {
        pt: 'Bocais de sucção e recalque de Ø 1/4" com rosca "BSP"',
        en: 'Suction and discharge nozzles Ø 1/4" with BSP thread',
        es: 'Boquillas de succión y descarga Ø 1/4" con rosca BSP'
      }
    },
    flowData: [
      { rpm: 1150, pressure: 0, flow: 6.00, power: 0.10 },
      { rpm: 1150, pressure: 4, flow: 5.80, power: 0.18 },
      { rpm: 1150, pressure: 8, flow: 5.60, power: 0.26 },
      { rpm: 1150, pressure: 12, flow: 5.20, power: 0.36 },
      { rpm: 1150, pressure: 16, flow: 4.60, power: 0.48 },
      { rpm: 1150, pressure: 20, flow: 3.70, power: 0.60 },
      { rpm: 1750, pressure: 0, flow: 8.90, power: 0.13 },
      { rpm: 1750, pressure: 4, flow: 8.50, power: 0.23 },
      { rpm: 1750, pressure: 8, flow: 8.10, power: 0.33 },
      { rpm: 1750, pressure: 12, flow: 7.70, power: 0.46 },
      { rpm: 1750, pressure: 16, flow: 6.80, power: 0.62 }
    ]
  },
  // Adicionar mais modelos conforme necessário
};

// Especificações gerais para todos os modelos FBE
const generalSpecs = {
  gears: {
    pt: 'Engrenagens de dentes helicoidais',
    en: 'Helical gear teeth',
    es: 'Engranajes de dientes helicoidales'
  },
  sealing: {
    pt: 'Vedação por gaxeta teflonada ou selo mecânico',
    en: 'PTFE packing or mechanical seal',
    es: 'Sellado por empaquetadura de PTFE o sello mecánico'
  },
  bearings: {
    pt: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
    en: 'TM23 self-lubricating bronze bushing bearings',
    es: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes'
  },
  construction: {
    pt: 'Construção em ferro fundido, aço inox ou aço carbono',
    en: 'Cast iron, stainless steel or carbon steel construction',
    es: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
  },
  optionals: {
    pt: [
      'Válvula de alívio incorporada (retorna até 30% do produto)',
      'Conjunto moto-bomba completo',
      'Aquecimento por vapor ou resistência elétrica',
      'Instrumentação para monitoramento'
    ],
    en: [
      'Built-in relief valve (returns up to 30% of product)',
      'Complete motor-pump assembly',
      'Steam or electric resistance heating',
      'Monitoring instrumentation'
    ],
    es: [
      'Válvula de alivio incorporada (retorna hasta 30% del producto)',
      'Conjunto motor-bomba completo',
      'Calentamiento por vapor o resistencia eléctrica',
      'Instrumentación para monitoreo'
    ]
  }
};

const GearPumpSpecificationsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const diameter = params.diameter ? decodeURIComponent(params.diameter as string) : '';
  const modelId = params.modelId || `fbe-${diameter.toLowerCase().replace('"', '')}`;
  
  const modelData = fbeSpecifications[modelId] || fbeSpecifications['fbe-1-8'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre a bomba FBE ${modelData.model}.` :
      language === 'en' ? `Hello! I would like more information about the FBE ${modelData.model} pump.` :
      `¡Hola! Me gustaría más información sobre la bomba FBE ${modelData.model}.`
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  const downloadManual = () => {
    window.open('/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{`Bomba FBE ${modelData.model} - Especificações Técnicas | FB Bombas`}</title>
        <meta name="description" content={`Especificações técnicas completas da bomba de engrenagem FBE ${modelData.model}. Vazão, pressão, temperatura e dados de desempenho.`} />
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
              onClick={() => window.history.back()}
              variant="ghost"
              className="mb-8 text-white hover:text-laranja hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'pt' ? 'Voltar' :
               language === 'en' ? 'Back' :
               'Volver'}
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <Badge className="mb-4 bg-laranja text-white text-sm px-4 py-1">
                {language === 'pt' ? 'BOMBA DE ENGRENAGEM EXTERNA' :
                 language === 'en' ? 'EXTERNAL GEAR PUMP' :
                 'BOMBA DE ENGRANAJE EXTERNO'}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-light">
                <span className="block">FBE</span>
                <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
                  {modelData.model}
                </span>
              </h1>
              
              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Droplets className="w-6 h-6 text-laranja mx-auto mb-2" />
                  <div className="text-sm text-slate-300">{language === 'pt' ? 'Vazão Máx.' : language === 'en' ? 'Max Flow' : 'Caudal Máx.'}</div>
                  <div className="text-lg font-semibold text-white">{modelData.specs.maxFlow}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Gauge className="w-6 h-6 text-laranja mx-auto mb-2" />
                  <div className="text-sm text-slate-300">{language === 'pt' ? 'Pressão Máx.' : language === 'en' ? 'Max Pressure' : 'Presión Máx.'}</div>
                  <div className="text-lg font-semibold text-white">{modelData.specs.maxPressure}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Thermometer className="w-6 h-6 text-laranja mx-auto mb-2" />
                  <div className="text-sm text-slate-300">{language === 'pt' ? 'Temp. Máx.' : language === 'en' ? 'Max Temp.' : 'Temp. Máx.'}</div>
                  <div className="text-lg font-semibold text-white">{modelData.specs.maxTemp}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Settings className="w-6 h-6 text-laranja mx-auto mb-2" />
                  <div className="text-sm text-slate-300">{language === 'pt' ? 'Rotação' : language === 'en' ? 'Rotation' : 'Rotación'}</div>
                  <div className="text-lg font-semibold text-white">{modelData.specs.maxRPM}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specifications Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <TabsTrigger value="technical" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">
                  <Wrench className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Especificações' : language === 'en' ? 'Specifications' : 'Especificaciones'}
                </TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">
                  <Gauge className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Desempenho' : language === 'en' ? 'Performance' : 'Rendimiento'}
                </TabsTrigger>
                <TabsTrigger value="applications" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">
                  <Cog className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Aplicações' : language === 'en' ? 'Applications' : 'Aplicaciones'}
                </TabsTrigger>
              </TabsList>

              {/* Technical Specifications Tab */}
              <TabsContent value="technical">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="w-5 h-5 text-laranja" />
                        {language === 'pt' ? 'Dados Técnicos' : language === 'en' ? 'Technical Data' : 'Datos Técnicos'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {language === 'pt' ? 'Vazão Máxima' : language === 'en' ? 'Maximum Flow' : 'Caudal Máximo'}
                          </div>
                          <div className="font-semibold">{modelData.specs.maxFlow}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {language === 'pt' ? 'Pressão Máxima' : language === 'en' ? 'Maximum Pressure' : 'Presión Máxima'}
                          </div>
                          <div className="font-semibold">{modelData.specs.maxPressure}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {language === 'pt' ? 'Temperatura Máxima' : language === 'en' ? 'Maximum Temperature' : 'Temperatura Máxima'}
                          </div>
                          <div className="font-semibold">{modelData.specs.maxTemp}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {language === 'pt' ? 'Viscosidade Máxima' : language === 'en' ? 'Maximum Viscosity' : 'Viscosidad Máxima'}
                          </div>
                          <div className="font-semibold">{modelData.specs.maxViscosity}</div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {language === 'pt' ? 'Conexão' : language === 'en' ? 'Connection' : 'Conexión'}
                        </div>
                        <div className="text-sm">{modelData.specs.connection[language]}</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-laranja" />
                        {language === 'pt' ? 'Características Construtivas' : language === 'en' ? 'Construction Features' : 'Características Constructivas'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{language === 'pt' ? 'Engrenagens' : language === 'en' ? 'Gears' : 'Engranajes'}</div>
                        <div className="text-sm">{generalSpecs.gears[language]}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{language === 'pt' ? 'Vedação' : language === 'en' ? 'Sealing' : 'Sellado'}</div>
                        <div className="text-sm">{generalSpecs.sealing[language]}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{language === 'pt' ? 'Mancais' : language === 'en' ? 'Bearings' : 'Cojinetes'}</div>
                        <div className="text-sm">{generalSpecs.bearings[language]}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{language === 'pt' ? 'Construção' : language === 'en' ? 'Construction' : 'Construcción'}</div>
                        <div className="text-sm">{generalSpecs.construction[language]}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Optional Items */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-laranja" />
                      {language === 'pt' ? 'Opcionais Disponíveis' : language === 'en' ? 'Available Options' : 'Opciones Disponibles'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {generalSpecs.optionals[language].map((optional: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{optional}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Performance Tab */}
              <TabsContent value="performance">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-laranja" />
                      {language === 'pt' ? 'Tabela de Desempenho' : language === 'en' ? 'Performance Table' : 'Tabla de Rendimiento'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {modelData.flowData && (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>{language === 'pt' ? 'Rotação (RPM)' : language === 'en' ? 'Rotation (RPM)' : 'Rotación (RPM)'}</TableHead>
                              <TableHead>{language === 'pt' ? 'Pressão (bar)' : language === 'en' ? 'Pressure (bar)' : 'Presión (bar)'}</TableHead>
                              <TableHead>{language === 'pt' ? 'Vazão (L/min)' : language === 'en' ? 'Flow (L/min)' : 'Caudal (L/min)'}</TableHead>
                              <TableHead>{language === 'pt' ? 'Potência (HP)' : language === 'en' ? 'Power (HP)' : 'Potencia (HP)'}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {modelData.flowData.map((data: any, idx: number) => (
                              <TableRow key={idx}>
                                <TableCell>{data.rpm}</TableCell>
                                <TableCell>{data.pressure}</TableCell>
                                <TableCell>{data.flow.toFixed(2)}</TableCell>
                                <TableCell>{data.power.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cog className="w-5 h-5 text-laranja" />
                        {language === 'pt' ? 'Aplicações Típicas' : language === 'en' ? 'Typical Applications' : 'Aplicaciones Típicas'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Transferência de óleos lubrificantes e combustíveis' :
                             language === 'en' ? 'Transfer of lubricating oils and fuels' :
                             'Transferencia de aceites lubricantes y combustibles'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Sistemas de lubrificação industrial' :
                             language === 'en' ? 'Industrial lubrication systems' :
                             'Sistemas de lubricación industrial'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Processamento químico e petroquímico' :
                             language === 'en' ? 'Chemical and petrochemical processing' :
                             'Procesamiento químico y petroquímico'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Indústria alimentícia (xaropes, melados, etc.)' :
                             language === 'en' ? 'Food industry (syrups, molasses, etc.)' :
                             'Industria alimentaria (jarabes, melazas, etc.)'}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-laranja" />
                        {language === 'pt' ? 'Fluidos Compatíveis' : language === 'en' ? 'Compatible Fluids' : 'Fluidos Compatibles'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Óleos minerais e sintéticos' :
                             language === 'en' ? 'Mineral and synthetic oils' :
                             'Aceites minerales y sintéticos'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Produtos viscosos não abrasivos' :
                             language === 'en' ? 'Non-abrasive viscous products' :
                             'Productos viscosos no abrasivos'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Resinas, adesivos e polímeros' :
                             language === 'en' ? 'Resins, adhesives and polymers' :
                             'Resinas, adhesivos y polímeros'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-laranja mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {language === 'pt' ? 'Fluidos com viscosidade até 100.000 SSU' :
                             language === 'en' ? 'Fluids with viscosity up to 100,000 SSU' :
                             'Fluidos con viscosidad hasta 100.000 SSU'}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'pt' ? 'Precisa de Ajuda para Especificar?' :
                     language === 'en' ? 'Need Help Specifying?' :
                     '¿Necesita Ayuda para Especificar?'}
                  </h3>
                  <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto">
                    {language === 'pt' ? 'Nossa equipe técnica está pronta para ajudá-lo a selecionar a bomba ideal para sua aplicação específica.' :
                     language === 'en' ? 'Our technical team is ready to help you select the ideal pump for your specific application.' :
                     'Nuestro equipo técnico está listo para ayudarlo a seleccionar la bomba ideal para su aplicación específica.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-white text-azul-profundo hover:bg-slate-100 font-semibold shadow-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {language === 'pt' ? 'Falar com Consultor' :
                       language === 'en' ? 'Talk to Consultant' :
                       'Hablar con Consultor'}
                    </Button>
                    <Button
                      onClick={downloadManual}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-azul-profundo"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      {language === 'pt' ? 'Baixar Manual Técnico' :
                       language === 'en' ? 'Download Technical Manual' :
                       'Descargar Manual Técnico'}
                    </Button>
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

export default GearPumpSpecificationsPage;