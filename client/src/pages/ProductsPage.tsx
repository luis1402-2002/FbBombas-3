import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  Droplets,
  ArrowRight,
  ChevronRight,
  Gauge,
  Thermometer,
  Activity,
  Ruler
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ModernWaveDivider from '../components/ui/modern-wave-divider';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { gearPumpDiameters, centrifugalPumpsSeries } from '../data/productsDataStructured';

const ProductsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGearPumpClick = (diameter: any) => {
    if (!diameter.hasVariations) {
      // Diâmetro com apenas um modelo - vai direto para detalhes
      setLocation(`/produtos/fbe/${diameter.models[0].id}`);
    } else {
      // Diâmetro com variações - vai para página de seleção
      setLocation(`/produtos/bombas-engrenagem/${diameter.diameter.replace(/"/g, '')}`);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section - Similar ao estilo da HomePage */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Subtle wave pattern like home page */}
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
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
            <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6 leading-tight">
              {t('products.catalog_title', 'Catálogo de Produtos')}
            </h1>
            <p className="text-lg md:text-xl text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
              {t('products.catalog_description', 'Conheça nossa linha completa de bombas industriais de alta performance')}
            </p>
          </motion.div>
        </section>

        <ModernWaveDivider />

        {/* Products Tabs Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={tabsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={tabsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <Tabs defaultValue="gear-pumps" className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
                  <TabsTrigger value="gear-pumps" className="text-base">
                    <Cog className="w-4 h-4 mr-2" />
                    {t('products.gear_pumps', 'Bombas de Engrenagem')}
                  </TabsTrigger>
                  <TabsTrigger value="centrifugal-pumps" className="text-base">
                    <Droplets className="w-4 h-4 mr-2" />
                    {t('products.centrifugal_pumps', 'Bombas Centrífugas')}
                  </TabsTrigger>
                </TabsList>

                {/* Gear Pumps Tab */}
                <TabsContent value="gear-pumps" className="mt-0">
                  <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="font-garamond text-3xl md:text-4xl text-azul-profundo dark:text-white mb-4">
                      {t('products.gear_pumps_series', 'Bombas de Engrenagem Externa - Série FBE')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t('products.gear_pumps_description', 'Ideal para transferência e dosagem precisa de fluidos viscosos')}
                    </p>
                  </div>

                  {/* Diameter Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {gearPumpDiameters.map((diameter, index) => (
                      <motion.div
                        key={diameter.diameter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Card 
                          className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700/50 overflow-hidden"
                          onClick={() => handleGearPumpClick(diameter)}
                        >
                          {/* Product Image Section */}
                          <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6">
                            <img 
                              src="https://www.dropbox.com/scl/fi/6hfqa4pa9i17xvj5em7iz/fbebomba.png?rlkey=a08rw80ed1em2m34rx2eiava2&st=7cxib7er&raw=1"
                              alt={`FBE ${diameter.diameter}`}
                              className="w-full h-full object-contain"
                            />
                            {diameter.hasVariations && (
                              <Badge className="absolute top-4 right-4 bg-[#E30613] text-white">
                                {diameter.models.length} {t('products.models', 'modelos')}
                              </Badge>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-azul-profundo dark:text-white group-hover:text-[#E30613] transition-colors">
                              FBE {diameter.displayName}
                            </h3>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <Activity className="w-4 h-4 mr-2 text-[#E30613]" />
                                <span>{t('products.max_flow', 'Vazão Máx')}: {diameter.hasVariations ? diameter.models[diameter.models.length - 1].maxFlow : diameter.models[0].maxFlow}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <Gauge className="w-4 h-4 mr-2 text-[#E30613]" />
                                <span>{t('products.pressure', 'Pressão')}: {diameter.models[0].maxPressure}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[#E30613] group-hover:text-[#c60411]">
                                {diameter.hasVariations ? t('products.view_models', 'Ver modelos') : t('products.view_details', 'Ver detalhes')}
                              </span>
                              <ChevronRight className="w-5 h-5 text-[#E30613] group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Centrifugal Pumps Tab */}
                <TabsContent value="centrifugal-pumps" className="mt-0">
                  <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="font-garamond text-3xl md:text-4xl text-azul-profundo dark:text-white mb-4">
                      {t('products.centrifugal_title', 'Bombas Centrífugas Industriais')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t('products.centrifugal_description', 'Soluções robustas para diversas aplicações industriais')}
                    </p>
                  </div>

                  {/* Centrifugal Pumps Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {centrifugalPumpsSeries.map((series, index) => (
                      <motion.div
                        key={series.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <Card className="group h-full hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 overflow-hidden">
                          {/* Series Image */}
                          <div className="relative h-64 bg-white dark:bg-slate-800 p-8">
                            <img 
                              src={series.image}
                              alt={`Série ${series.name}`}
                              className="w-full h-full object-contain"
                            />
                            <Badge className="absolute top-4 right-4 bg-azul-profundo text-white">
                              Série {series.name}
                            </Badge>
                          </div>

                          {/* Series Info */}
                          <div className="p-8">
                            <h3 className="font-garamond text-2xl md:text-3xl font-bold mb-4 text-azul-profundo dark:text-white">
                              {t(`products.series.${series.id}.title`, `Série ${series.name}`)}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                              {series.description[language]}
                            </p>

                            {/* Specifications Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Droplets className="w-4 h-4 text-[#E30613] mr-2" />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{t('products.max_flow', 'Vazão Máx.')}</span>
                                </div>
                                <p className="text-sm font-semibold text-azul-profundo dark:text-white">{series.specifications.maxFlow}</p>
                              </div>
                              
                              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Activity className="w-4 h-4 text-[#E30613] mr-2" />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{t('products.max_height', 'Altura Máx.')}</span>
                                </div>
                                <p className="text-sm font-semibold text-azul-profundo dark:text-white">{series.specifications.maxHeight}</p>
                              </div>
                              
                              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Thermometer className="w-4 h-4 text-[#E30613] mr-2" />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{t('products.max_temp', 'Temp. Máx.')}</span>
                                </div>
                                <p className="text-sm font-semibold text-azul-profundo dark:text-white">{series.specifications.maxTemperature}</p>
                              </div>
                              
                              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Ruler className="w-4 h-4 text-[#E30613] mr-2" />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{t('products.sizes', 'Tamanhos')}</span>
                                </div>
                                <p className="text-sm font-semibold text-azul-profundo dark:text-white">{series.specifications.sizes}</p>
                              </div>
                            </div>

                            <a 
                              href={`/produtos/centrifugas/${series.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setLocation(`/produtos/centrifugas/${series.id}`);
                              }}
                              className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              {t('products.know_more', 'Saiba Mais')}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;