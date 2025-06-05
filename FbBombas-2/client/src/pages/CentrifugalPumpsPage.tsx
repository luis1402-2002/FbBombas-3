import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Droplets,
  Thermometer,
  Gauge,
  MessageCircle,
  Download,
  ChevronLeft,
  ArrowRight,
  Factory,
  Flame
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';
import { getWhatsAppUrl } from '../data/gearPumpsFullData';

const CentrifugalPumpsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultantClick = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de mais informações sobre bombas centrífugas FB Bombas.'
      : language === 'en'
      ? 'Hello! I would like more information about FB Bombas centrifugal pumps.'
      : 'Hola! Me gustaría más información sobre las bombas centrífugas FB Bombas.';
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const pumpSeries = [
    {
      id: 'fbcn',
      icon: Factory,
      title: 'FBCN',
      fullName: {
        pt: 'Bombas Centrífugas Normalizadas',
        en: 'Normalized Centrifugal Pumps',
        es: 'Bombas Centrífugas Normalizadas'
      },
      description: {
        pt: 'Seguem as normas DIN 24255/ISO 2858, com alta eficiência e durabilidade para aplicações industriais diversas',
        en: 'Follow DIN 24255/ISO 2858 standards, with high efficiency and durability for various industrial applications',
        es: 'Siguen las normas DIN 24255/ISO 2858, con alta eficiencia y durabilidad para diversas aplicaciones industriales'
      },
      specs: {
        flow: '2.200 m³/h',
        head: '135m',
        temperature: '260°C'
      },
      features: {
        pt: [
          'Construção back-pull-out',
          'Intercambiabilidade dimensional',
          'Alta eficiência hidráulica',
          'Manutenção simplificada'
        ],
        en: [
          'Back-pull-out construction',
          'Dimensional interchangeability',
          'High hydraulic efficiency',
          'Simplified maintenance'
        ],
        es: [
          'Construcción back-pull-out',
          'Intercambiabilidad dimensional',
          'Alta eficiencia hidráulica',
          'Mantenimiento simplificado'
        ]
      },
      applications: {
        pt: [
          'Indústria química e petroquímica',
          'Siderurgia e metalurgia',
          'Papel e celulose',
          'Tratamento de água',
          'Indústria alimentícia'
        ],
        en: [
          'Chemical and petrochemical industry',
          'Steel and metallurgy',
          'Pulp and paper',
          'Water treatment',
          'Food industry'
        ],
        es: [
          'Industria química y petroquímica',
          'Siderurgia y metalurgia',
          'Papel y celulosa',
          'Tratamiento de agua',
          'Industria alimenticia'
        ]
      },
      materials: {
        pt: 'Ferro fundido, aço inox 304/316, bronze',
        en: 'Cast iron, stainless steel 304/316, bronze',
        es: 'Hierro fundido, acero inoxidable 304/316, bronce'
      },
      gradient: 'from-blue-600 to-blue-800',
      accentColor: 'text-blue-600',
      manualFile: '/assets/manuals/FB_Manual_Tecnico_FBCN.pdf'
    },
    {
      id: 'fbot',
      icon: Flame,
      title: 'FBOT',
      fullName: {
        pt: 'Bombas para Óleo Térmico',
        en: 'Thermal Oil Pumps',
        es: 'Bombas de Aceite Térmico'
      },
      description: {
        pt: 'Especialmente projetadas para fluidos térmicos em altas temperaturas, com materiais e vedações especiais',
        en: 'Specially designed for thermal fluids at high temperatures, with special materials and seals',
        es: 'Especialmente diseñadas para fluidos térmicos a altas temperaturas, con materiales y sellos especiales'
      },
      specs: {
        flow: '400 m³/h',
        head: '120m',
        temperature: '350°C'
      },
      features: {
        pt: [
          'Vedação por selo mecânico especial',
          'Câmara de resfriamento',
          'Projeto API 610',
          'Alta confiabilidade operacional'
        ],
        en: [
          'Special mechanical seal',
          'Cooling chamber',
          'API 610 design',
          'High operational reliability'
        ],
        es: [
          'Sello mecánico especial',
          'Cámara de enfriamiento',
          'Diseño API 610',
          'Alta confiabilidad operacional'
        ]
      },
      applications: {
        pt: [
          'Sistemas de aquecimento industrial',
          'Indústria química',
          'Refinarias',
          'Plantas de processamento',
          'Indústria têxtil'
        ],
        en: [
          'Industrial heating systems',
          'Chemical industry',
          'Refineries',
          'Processing plants',
          'Textile industry'
        ],
        es: [
          'Sistemas de calefacción industrial',
          'Industria química',
          'Refinerías',
          'Plantas de procesamiento',
          'Industria textil'
        ]
      },
      materials: {
        pt: 'Aço carbono, aço inox, materiais especiais sob consulta',
        en: 'Carbon steel, stainless steel, special materials on request',
        es: 'Acero al carbono, acero inoxidable, materiales especiales bajo consulta'
      },
      gradient: 'from-orange-600 to-red-700',
      accentColor: 'text-orange-600',
      manualFile: '/assets/manuals/FB_Manual_Tecnico_FBOT.pdf'
    }
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
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100">
                <Droplets className="w-3 h-3 mr-1" />
                FBCN / FBOT Series
              </Badge>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 dark:text-white">
                {language === 'pt' ? 'Bombas Centrífugas Industriais' : 
                 language === 'en' ? 'Industrial Centrifugal Pumps' : 
                 'Bombas Centrífugas Industriales'}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {language === 'pt' ? 'Tecnologia avançada para aplicações industriais de alta demanda, com eficiência superior e confiabilidade comprovada.' :
                 language === 'en' ? 'Advanced technology for high-demand industrial applications, with superior efficiency and proven reliability.' :
                 'Tecnología avanzada para aplicaciones industriales de alta demanda, con eficiencia superior y confiabilidad comprobada.'}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Droplets, label: t('products.specs.maxFlow'), value: '2.200 m³/h' },
                  { icon: Gauge, label: t('products.specs.maxHeight'), value: '135m' },
                  { icon: Thermometer, label: t('products.specs.maxTemp'), value: '350°C' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
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

        {/* Pump Series Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {pumpSeries.map((series, index) => (
                <motion.div
                  key={series.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="p-8 lg:p-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center",
                          "bg-gradient-to-br",
                          series.gradient,
                          "shadow-lg"
                        )}>
                          <series.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className={cn("text-sm font-semibold", series.accentColor)}>
                          {series.title}
                        </Badge>
                      </div>

                      {/* Title and Description */}
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {series.fullName[language]}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {series.description[language]}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-center">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t('products.specs.maxFlow')}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{series.specs.flow}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t('products.specs.maxHeight')}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{series.specs.head}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t('products.specs.maxTemp')}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{series.specs.temperature}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                          {language === 'pt' ? 'Características' : language === 'en' ? 'Features' : 'Características'}
                        </h3>
                        <ul className="space-y-2">
                          {series.features[language].map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                          {language === 'pt' ? 'Aplicações' : language === 'en' ? 'Applications' : 'Aplicaciones'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {series.applications[language].map((app, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          {language === 'pt' ? 'Materiais de Construção' : language === 'en' ? 'Construction Materials' : 'Materiales de Construcción'}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {series.materials[language]}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          className="flex-1"
                          onClick={handleConsultantClick}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {t('products.talkToConsultant')}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.open(series.manualFile, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'pt' ? 'Manual Técnico' : language === 'en' ? 'Technical Manual' : 'Manual Técnico'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl font-light mb-4 text-gray-900 dark:text-white">
                {language === 'pt' ? 'Seleção Personalizada' :
                 language === 'en' ? 'Custom Selection' :
                 'Selección Personalizada'}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {language === 'pt' ? 'Para informações sobre modelos específicos de bombas centrífugas, nossa equipe técnica está pronta para realizar uma análise personalizada de sua aplicação.' :
                 language === 'en' ? 'For information on specific centrifugal pump models, our technical team is ready to perform a personalized analysis of your application.' :
                 'Para información sobre modelos específicos de bombas centrífugas, nuestro equipo técnico está listo para realizar un análisis personalizado de su aplicación.'}
              </p>

              <Button
                size="lg"
                className="bg-azul-profundo hover:bg-dark-azul"
                onClick={handleConsultantClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Iniciar Consulta Técnica' :
                 language === 'en' ? 'Start Technical Consultation' :
                 'Iniciar Consulta Técnica'}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                {language === 'pt' ? 'Pronto para otimizar seu sistema?' :
                 language === 'en' ? 'Ready to optimize your system?' :
                 '¿Listo para optimizar su sistema?'}
              </h2>
              
              <p className="text-xl text-blue-100 mb-8">
                {language === 'pt' ? 'Com mais de 80 anos de experiência, oferecemos as melhores soluções em bombeamento centrífugo.' :
                 language === 'en' ? 'With over 80 years of experience, we offer the best centrifugal pumping solutions.' :
                 'Con más de 80 años de experiencia, ofrecemos las mejores soluciones de bombeo centrífugo.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-cyan-700 hover:bg-gray-100"
                  onClick={() => setLocation('/#calculadora')}
                >
                  {language === 'pt' ? 'Usar Calculadora de Seleção' :
                   language === 'en' ? 'Use Selection Calculator' :
                   'Usar Calculadora de Selección'}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                  onClick={() => setLocation('/downloads')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'pt' ? 'Baixar Catálogos' :
                   language === 'en' ? 'Download Catalogs' :
                   'Descargar Catálogos'}
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

export default CentrifugalPumpsPage;