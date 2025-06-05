import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from "../contexts/LanguageContext";
import { 
  ArrowLeft, 
  Download, 
  Phone, 
  MessageSquare,
  Settings
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Dados de exemplo para os detalhes dos modelos FBE
const fbeModelsData = [
  {
    id: "fbe-1-8",
    name: "FBE 1/8\"",
    description: "Bomba de engrenagens externas para aplicações de baixo volume e alta precisão. Adequada para dosagem e transferência de fluidos viscosos em sistemas com espaço limitado.",
    imageUrl: "/images/models/fbe-1-8.png", // Placeholder
    technicalSpecs: {
      maxFlow: "120 L/h",
      maxPressure: "10 bar",
      rpm: ["870", "1150", "1750"],
      connectionDiameter: "1/8\"",
      bodyMaterial: ["Ferro Fundido", "Aço Inoxidável"],
      gearMaterial: ["Aço Carbono", "Aço Inoxidável"],
      sealType: ["Gaxeta", "Selo Mecânico"],
      driveOptions: ["Acoplamento Direto", "Montagem em Base"]
    },
    applications: [
      "Dosagem química",
      "Sistemas de lubrificação",
      "Transferência de óleos",
      "Processos industriais de precisão"
    ],
    pdfUrl: "/downloads/fbe-1-8-datasheet.pdf"
  },
  {
    id: "fbe-1-4",
    name: "FBE 1/4\"",
    description: "Bomba de engrenagens externas projetada para aplicações que requerem vazões moderadas com alta pressão. Ideal para transferência e circulação de fluidos viscosos.",
    imageUrl: "/images/models/fbe-1-4.png", // Placeholder
    technicalSpecs: {
      maxFlow: "350 L/h",
      maxPressure: "12 bar",
      rpm: ["870", "1150", "1750"],
      connectionDiameter: "1/4\"",
      bodyMaterial: ["Ferro Fundido", "Aço Inoxidável"],
      gearMaterial: ["Aço Carbono", "Aço Inoxidável"],
      sealType: ["Gaxeta", "Selo Mecânico"],
      driveOptions: ["Acoplamento Direto", "Montagem em Base"]
    },
    applications: [
      "Transferência de óleos lubrificantes",
      "Sistemas hidráulicos",
      "Processos químicos",
      "Indústria alimentícia (versão inox)"
    ],
    pdfUrl: "/downloads/fbe-1-4-datasheet.pdf"
  },
  {
    id: "fbe-4-m12",
    name: "FBE 4\" M12",
    description: "Bomba de engrenagens externas de alta capacidade projetada para aplicações industriais pesadas. Oferece vazões elevadas com excelente desempenho para fluidos de alta viscosidade.",
    imageUrl: "/images/models/fbe-4-m12.png", // Placeholder
    technicalSpecs: {
      maxFlow: "90 m³/h",
      maxPressure: "14 bar",
      rpm: ["870", "1150", "1750"],
      connectionDiameter: "4\"",
      bodyMaterial: ["Ferro Fundido", "Aço Inoxidável"],
      gearMaterial: ["Aço Carbono", "Aço Inoxidável"],
      sealType: ["Gaxeta", "Selo Mecânico", "Selo Cartucho"],
      driveOptions: ["Acoplamento Direto", "Montagem em Base"]
    },
    applications: [
      "Transferência de óleos pesados",
      "Indústria petroquímica",
      "Processos industriais com alta viscosidade",
      "Sistemas de filtração de alta capacidade"
    ],
    pdfUrl: "/downloads/fbe-4-m12-datasheet.pdf"
  }
];

interface FBEModelDetail {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  technicalSpecs: {
    maxFlow: string;
    maxPressure: string;
    rpm: string[];
    connectionDiameter: string;
    bodyMaterial: string[];
    gearMaterial: string[];
    sealType: string[];
    driveOptions: string[];
  };
  applications: string[];
  pdfUrl?: string;
}

export default function ProductDetailPage() {
  const [location, setLocation] = useLocation();
  const { t, language } = useLanguage();
  const [product, setProduct] = useState<FBEModelDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<FBEModelDetail[]>([]);
  
  // Recuperar o ID do produto da URL
  const modelId = location.split('/').pop();
  
  useEffect(() => {
    setIsLoading(true);
    
    // Buscar detalhes do produto com base no ID
    if (modelId) {
      const foundProduct = fbeModelsData.find(model => model.id === modelId);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Buscar produtos relacionados (mesma categoria, mas não o mesmo produto)
        const related = fbeModelsData
          .filter(model => model.id !== modelId)
          .slice(0, 3); // Limitar a 3 produtos relacionados
        
        setRelatedProducts(related);
      }
    }
    
    setIsLoading(false);
  }, [modelId]);
  
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">{t('loading', 'Carregando...')}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('product_not_found', 'Produto não encontrado')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('product_not_found_message', 'Não foi possível encontrar o produto especificado. Verifique o endereço ou escolha outro modelo.')}
            </p>
            <Button 
              onClick={() => setLocation('/bombas-de-engrenagem')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('products.back_to_all', 'Voltar para todos os modelos')}
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
      
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:text-primary transition-colors">{t('nav.home', 'Início')}</a>
              <span className="mx-2">›</span>
              <a href="/bombas-de-engrenagem" className="hover:text-primary transition-colors">
                {t('products.gear_pumps', 'Bombas de Engrenagem')}
              </a>
              <span className="mx-2">›</span>
              <span className="text-gray-900 dark:text-white">{product.name}</span>
            </div>
          </div>
          
          {/* Botão voltar para mobile */}
          <div className="lg:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setLocation('/bombas-de-engrenagem')}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('products.back_to_all', 'Voltar para todos os modelos')}
            </Button>
          </div>
          
          {/* Conteúdo principal do produto */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Imagem do produto */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="aspect-square w-full bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 p-6">
                  <img 
                    src="https://www.dropbox.com/scl/fi/sg6d1wpp1tq8l3xh849kl/Design-sem-nome-73.png?rlkey=ocyzqcox27bsyg5ajlfdnv71i&st=9j7yjsc7&raw=1"
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => alert('Botão de orçamento em desenvolvimento')}
                    className="w-full"
                  >
                    {t('products.request_quote', 'Solicitar Orçamento')}
                  </Button>
                  
                  <Button
                    onClick={() => window.open('/assets/fbe_manual.pdf', '_blank')}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t('products.download_manual', 'Baixar Manual Técnico')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Detalhes do produto */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
                  <Badge variant="outline" className="self-start sm:self-auto">
                    {t('products.gear_pump_desc', 'Bomba de Engrenagens Externas')}
                  </Badge>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300 mr-3">
                      {t('products.max_flow', 'Vazão Máx.')}:
                    </span>
                    <span className="text-gray-900 dark:text-white">{product.technicalSpecs.maxFlow}</span>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300 mr-3">
                      {t('products.max_pressure', 'Pressão')}:
                    </span>
                    <span className="text-gray-900 dark:text-white">{product.technicalSpecs.maxPressure}</span>
                  </div>
                </div>
              </div>
              
              {/* Especificações técnicas */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('products.technical_specs', 'Especificações Técnicas')}
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.rotation_speeds', 'Rotações')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.rpm.join(', ')} RPM
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.connection_diameter', 'Diâmetro da Conexão')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.connectionDiameter}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.body_material', 'Material do Corpo')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.bodyMaterial.join(', ')}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.gear_material', 'Material das Engrenagens')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.gearMaterial.join(', ')}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.seal_type', 'Tipo de Vedação')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.sealType.join(', ')}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="py-3 px-2 font-medium text-gray-700 dark:text-gray-300">
                          {t('products.drive_options', 'Opções de Acionamento')}
                        </td>
                        <td className="py-3 px-2 text-gray-900 dark:text-white">
                          {product.technicalSpecs.driveOptions.join(', ')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Aplicações */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('products.typical_applications', 'Aplicações Típicas')}
            </h2>
            
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {product.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
          
          {/* Produtos relacionados */}
          {relatedProducts.length > 0 && (
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('products.other_models', 'Outros modelos desta série')}
                </h2>
                
                <Button 
                  variant="ghost" 
                  asChild
                  className="text-primary"
                >
                  <a href="/bombas-de-engrenagem">
                    {t('products.view_all', 'Ver todos')}
                    <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Card 
                    key={related.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setLocation(`/bombas-de-engrenagem/${related.id}`)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle>{related.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="aspect-video w-full bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center mb-4">
                        <Settings className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                        {related.description.substring(0, 100)}...
                      </p>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="p-0 text-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLocation(`/bombas-de-engrenagem/${related.id}`);
                        }}
                      >
                        {t('products.view_details', 'Ver detalhes')}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to action para soluções personalizadas */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-6 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('products.need_custom_quote', 'Precisa de uma solução personalizada?')}
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('products.custom_quote_desc', 'Entre em contato com nossa equipe técnica para discutir especificações especiais, configurações personalizadas ou qualquer outra necessidade específica do seu projeto.')}
              </p>
              
              <Button
                onClick={() => alert('Contato em desenvolvimento')}
                size="lg"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t('products.quick_contact', 'Contato Rápido')}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}