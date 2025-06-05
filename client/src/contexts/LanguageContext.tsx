import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Importar arquivos de tradução
import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

// Definir os idiomas disponíveis
export type Language = 'pt' | 'en' | 'es';

// Interface do contexto
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string; // função de tradução
  isInitialized: boolean; // Indica se o contexto já foi inicializado
}

// Criar o contexto com valores padrão
const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt',
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
  isInitialized: false
});

// Função para detectar o idioma do navegador
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return 'pt';
  
  try {
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    
    if (browserLang === 'pt' || browserLang === 'pt-br') {
      return 'pt';
    } else if (browserLang === 'es' || browserLang === 'es-es' || browserLang === 'es-mx') {
      return 'es';
    } else {
      return 'en'; // Inglês como fallback
    }
  } catch (error) {
    console.error("Erro ao detectar o idioma do navegador:", error);
    return 'pt'; // Fallback para português em caso de erro
  }
}

// Dicionário de traduções existentes + arquivos importados
const translations: Record<Language, Record<string, any>> = {
  pt: {
    // Navegação
    'nav.home': 'Início',
    'nav.company': 'Empresa',
    'nav.products': 'Produtos',
    'nav.contact': 'Contato',
    'nav.downloads': 'Downloads',
    'nav.calculator': 'Calculadora',
    
    // Hero
    'hero.since': 'Desde 1944',
    'hero.title': 'Soluções em Bombeamento de Alta Precisão',
    'hero.description': 'Fornecendo tecnologia de bombeamento premium para indústrias que não podem parar. Qualidade, inovação e alta performance para os mais exigentes processos industriais.',
    'hero.get_quote': 'Solicitar Orçamento',
    'hero.explore_products': 'Explorar Produtos',
    'hero.scroll_down': 'Role para explorar',
    'hero.years': 'Anos de Experiência',
    'hero.certified': 'Certificação de Qualidade',
    'hero.guarantee': 'Garantia nos produtos',
    
    // Produtos
    'products.title': 'Nossa Linha de Produtos',
    'products.subtitle': 'Soluções de alta performance para aplicações industriais',
    'products.view_details': 'Ver Detalhes',
    'products.close': 'Fechar',
    'products.max_flow': 'Vazão Máx',
    'products.max_height': 'Altura Máx',
    'products.max_temp': 'Temp. Máx',
    'products.specifications': 'Especificações',
    'products.standards': 'Normas',
    'products.fbcn': 'Série FBCN Normalizada',
    'products.fbot': 'Série FBOT Óleo Térmico',
    'products.fbe': 'Engrenagem Externa FBE',
    'products.centrifugal.subtitle': 'Séries FBCN e FBOT',
    'products.centrifugal.desc': 'Bombas centrífugas para aplicações industriais gerais e óleo térmico, com alta eficiência e confiabilidade operacional.',
    'products.centrifugal.feature1': 'Vazão até 4.500 m³/h',
    'products.centrifugal.feature2': 'Temperatura até 350°C',
    'products.centrifugal.feature3': 'Construção back-pull-out',
    'products.fbe.desc': 'Bombas de deslocamento positivo ideais para fluidos viscosos e aplicações especiais.',
    'products.fbe.feature1': 'Vazão até 390 m³/h',
    'products.fbe.feature2': 'Altura até 220 m',
    'products.fbe.feature3': 'Fluidos viscosos',
    
    // Empresa
    'company.title': 'FB Bombas',
    'company.subtitle': 'Excelência em bombeamento industrial desde 1944',
    'company.history': 'Há mais de 80 anos fabricando bombas de alta qualidade para as mais diversas aplicações industriais.',
    'company.mission': 'Nossa missão é fornecer soluções confiáveis e de alto desempenho para os desafios de bombeamento mais complexos.',
    'company.vision': 'Ser líder em soluções de bombeamento industrial na América Latina, reconhecida pela excelência técnica e inovação.',
    'company.history.title': 'História e Tradição',
    'company.history.p1': 'Fundada em 1944, a FB Bombas nasceu da visão pioneira de fornecer soluções de bombeamento de alta qualidade para a indústria brasileira em plena expansão. Ao longo de mais de 75 anos, crescemos constantemente, mantendo nosso compromisso com a excelência e inovação.',
    'company.history.p2': 'Nossa trajetória é marcada por importantes conquistas tecnológicas e pelo desenvolvimento de produtos cada vez mais eficientes e duráveis, consolidando nossa posição como referência no setor.',
    'company.history.label': 'História da FB Bombas',
    'company.history.caption': 'Nossa História',
    'company.history.today': 'Hoje',
    'company.certifications.title': 'Certificações e Normas',
    'company.certifications.subtitle': 'Qualidade Certificada',
    'company.certifications.description': 'Nossos produtos e processos são certificados pelos mais rigorosos padrões internacionais, garantindo a excelência em todos os nossos produtos.',
    'company.certifications.crcc.title': 'CRCC',
    'company.certifications.crcc.desc': 'Cadastro de Fornecedores para projetos de grande escala e aplicações críticas no Brasil.',
    'company.certifications.api.title': 'API 610',
    'company.certifications.api.desc': 'Conformidade com os rigorosos padrões internacionais para bombas centrífugas em aplicações petroquímicas.',
    'company.factory.title': 'Infraestrutura',
    'company.factory.subtitle': 'Parque Fabril de Alta Tecnologia',
    'company.factory.p1': 'Nossa unidade fabril possui 10.900 m² de área total, sendo 5.545 m² de área construída, equipada com tecnologia de ponta para garantir a fabricação de produtos de alta qualidade.',
    'company.factory.p2': 'Contamos com equipamentos CNC de última geração, células de usinagem especializadas e laboratórios de teste que permitem o controle preciso de todos os processos produtivos.',
    'company.factory.label': 'Parque Fabril FB Bombas',
    'company.factory.caption': 'Parque Fabril',
    'company.factory.f1': '10.900 m² de área total',
    'company.factory.f2': '5.545 m² de área construída',
    'company.factory.f3': 'Maquinário de precisão CNC',
    'company.factory.f4': 'Laboratórios de teste e controle de qualidade',
    'company.engineering.title': 'Tecnologia',
    'company.engineering.subtitle': 'Engenharia & Bancada de Teste',
    'company.engineering.p1': 'Nossa equipe de engenharia utiliza as mais avançadas ferramentas de projeto e simulação para desenvolver soluções de bombeamento de alta performance.',
    'company.engineering.p2': 'A bancada de testes da FB Bombas é uma das mais completas do Brasil, capaz de simular condições extremas de operação, garantindo que nossos produtos funcionem perfeitamente mesmo nas aplicações mais exigentes.',
    'company.engineering.label': 'Engenharia e Bancada de Teste',
    'company.engineering.caption': 'Bancada de Testes',
    'company.engineering.f1': 'Testes de performance até 4.500 m³/h',
    'company.engineering.f2': 'Pressões de até 155 bar',
    'company.engineering.f3': 'Software de modelagem 3D e simulação de fluxo',
    'company.engineering.f4': 'Análise vibratória e balanceamento dinâmico',
    
    // Benefícios
    'benefits.title': 'Por que escolher a FB Bombas?',
    'benefits.subtitle': 'Nossa engenharia de precisão garante equipamentos de alta performance mesmo nas aplicações mais exigentes.',
    'benefits.precision': 'Engenharia de Precisão',
    'benefits.precision.desc': 'Equipamentos de alta performance projetados para as aplicações mais exigentes com inovação de ponta.',
    'benefits.durability': 'Durabilidade Superior',
    'benefits.durability.desc': 'Materiais premium e processos de fabricação avançados garantem vida útil estendida mesmo em condições extremas.',
    'benefits.tech': 'Tecnologia Exclusiva',
    'benefits.tech.desc': 'Soluções proprietárias desenvolvidas com tecnologia industrial de última geração para máxima eficiência energética.',
    'benefits.support': 'Suporte Especializado',
    'benefits.support.desc': 'Equipe técnica altamente qualificada oferece consultoria personalizada durante todo o ciclo de vida do produto.',
    
    // Downloads
    'downloads.title': 'Área de Downloads',
    'downloads.subtitle': 'Catálogos técnicos, manuais e softwares',
    
    // Clientes
    'clients.title': 'Nossos Clientes',
    'clients.subtitle': 'Confiança de grandes corporações há mais de 75 anos',
    
    // Trabalhe Conosco
    'careers.title': 'Trabalhe Conosco',
    'careers.subtitle': 'Faça parte de uma equipe que constrói o futuro da indústria brasileira há mais de 75 anos',
    'careers.team.title': 'Equipe Especializada',
    'careers.team.desc': 'Trabalhe com profissionais altamente qualificados e apaixonados por tecnologia',
    'careers.growth.title': 'Crescimento Profissional',
    'careers.growth.desc': 'Oportunidades de desenvolvimento e capacitação contínua',
    'careers.stability.title': 'Estabilidade e Tradição',
    'careers.stability.desc': 'Empresa sólida com mais de 75 anos de mercado',
    'careers.cta.title': 'Pronto para fazer a diferença?',
    'careers.cta.description': 'Envie seu currículo e faça parte da nossa equipe de excelência',
    'careers.cta.button': 'Entre em Contato',
    'downloads.all': 'Todos',
    'downloads.catalogs': 'Catálogos',
    'downloads.manuals': 'Manuais',
    'downloads.software': 'Softwares',
    'downloads.size': 'Tamanho',
    'downloads.download': 'Baixar',
    'downloads.manuais': 'Manuais Técnicos',
    'downloads.catalogos': 'Catálogos',
    'downloads.curvas': 'Curvas de Performance',
    'downloads.softwares': 'Ferramentas de Software',
    'downloads.manual': 'o Manual',
    'downloads.catalog': 'o Catálogo',
    'downloads.curve': 'as Curvas',
    'downloads.software_file': 'o Software',
    
    // Detalhes dos downloads
    'downloads.fbcn_manual.title': 'Manual Técnico FBCN',
    'downloads.fbcn_manual.description': 'Manual técnico completo da linha de bombas centrífugas normalizadas FBCN, com especificações, diagramas e instruções de operação.',
    'downloads.fbot_manual.title': 'Manual Técnico FBOT',
    'downloads.fbot_manual.description': 'Manual técnico completo da linha de bombas para óleo térmico FBOT, com especificações detalhadas de operação e manutenção.',
    'downloads.fbe_manual.title': 'Manual Técnico FBE',
    'downloads.fbe_manual.description': 'Manual técnico completo da linha de bombas de engrenagem externa FBE, com detalhes de instalação e manutenção.',
    
    'downloads.fbcn_performance.title': 'Curvas de Performance FBCN',
    'downloads.fbcn_performance.description': 'Curvas de vazão, pressão e eficiência para toda a linha de bombas centrífugas FBCN, com dados para dimensionamento preciso.',
    'downloads.fbot_performance.title': 'Curvas de Performance FBOT',
    'downloads.fbot_performance.description': 'Curvas de vazão, pressão e eficiência para toda a linha de bombas para óleo térmico FBOT, com dados para diferentes temperaturas.',
    'downloads.fbe_performance.title': 'Curvas de Performance FBE',
    'downloads.fbe_performance.description': 'Curvas de vazão, pressão e eficiência para toda a linha de bombas de engrenagem externa FBE, incluindo diferentes viscosidades.',
    
    'downloads.general_catalog.title': 'Catálogo Geral FB Bombas',
    'downloads.general_catalog.description': 'Catálogo completo com toda a linha de produtos FB Bombas, incluindo diagramas técnicos e especificações detalhadas.',
    'downloads.selection_software.title': 'Software de Seleção FB Select',
    'downloads.selection_software.description': 'Software para seleção e dimensionamento preciso de bombas FB para qualquer aplicação industrial.',
    
    // Services
    'services.title': 'Assistência Técnica',
    'services.subtitle': 'Bombeando Soluções',
    'services.description': 'A FB com sua vasta experiência em fabricação de bombas conta com uma equipe especializada também para atendimento na área de serviços. Confira abaixo nossa linha e solicite uma visita.',
    'services.cta': 'Solicitar Visita',
    'services.maintenance': 'Manutenção e Assistência Técnica',
    'services.startup': 'Start-up e Comissionamento',
    'services.alignment': 'Alinhamento e Análise de Vibração',
    'services.painting': 'Jateamento e Pintura',
    'services.testing': 'Teste de Bancada (Performance/Hidrostático)',
    'services.contract': 'Contratação de Manutenção Anual (Pacote)',
    'services.improvements': 'Projeto de Melhorias em Processo Produtivo',
    'services.reconditioning': 'Recondicionamento em bombas multimarcas',

    // Contato
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para atender suas necessidades',
    'contact.form.name': 'Nome',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefone',
    'contact.form.model': 'Modelo',
    'contact.form.flow': 'Vazão',
    'contact.form.height': 'Altura Manométrica',
    'contact.form.message': 'Mensagem',
    'contact.form.consent': 'Concordo com a política de privacidade',
    'contact.form.send': 'Enviar Mensagem',
    'contact.address': 'Endereço',
    'contact.phone': 'Telefone',
    'contact.email': 'E-mail',
    'contact.hours': 'Horário de Atendimento',
    'contact.form.request_quote': 'Solicite um Orçamento',
    'contact.form.submit': 'Enviar Solicitação',
    'contact.form.sending': 'Enviando...',
    'contact.form.pump_model': 'Modelo de Bomba',
    'contact.form.select_model': 'Selecione um modelo',
    'contact.form.model_fbcn': 'Série FBCN Normalizada',
    'contact.form.model_fbot': 'Série FBOT Óleo Térmico',
    'contact.form.model_fbe': 'Engrenagem Externa FBE',
    'contact.form.flow_rate': 'Vazão (m³/h)',
    'contact.form.head': 'Altura Manométrica (m)',
    'contact.form.fluid': 'Fluido Bombeado',
    'contact.form.temperature': 'Temperatura (°C)',
    'contact.form.additional_info': 'Informações Adicionais',
    'contact.form.privacy_consent': 'Concordo com a',
    'contact.form.privacy_policy': 'Política de Privacidade',
    'contact.form.data_consent': 'e autorizo o tratamento dos meus dados pessoais para contato comercial.',
    'contact.form.success_title': 'Formulário enviado com sucesso!',
    'contact.form.success_message': 'Em breve entraremos em contato.',
    'contact.form.error_title': 'Erro ao enviar formulário',
    'contact.form.error_message': 'Por favor, tente novamente mais tarde.',
    'contact.info.title': 'Informações de Contato',
    'contact.info.address': 'Endereço',
    'contact.info.phone': 'Telefone',
    'contact.info.email': 'E-mail',
    'contact.info.hours': 'Horário de Atendimento',
    'contact.map.aria_label': 'Mapa de localização da FB Bombas',
    'contact.map.title': 'Localização FB Bombas',
    'contact.whatsapp.aria_label': 'Contato via WhatsApp',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.developed_by': 'Desenvolvido por',
    'footer.products': 'Produtos',
    'footer.centrifugal': 'Bombas Centrífugas FBCN',
    'footer.thermal': 'Bombas para Óleo Térmico FBOT',
    'footer.gear': 'Bombas de Engrenagem FBE',
    'footer.parts': 'Peças de Reposição',
    'footer.accessories': 'Acessórios',
    'footer.information': 'Informações',
    'footer.about': 'Sobre a Empresa',
    'footer.catalogs': 'Catálogos e Downloads',
    'footer.privacy': 'Política de Privacidade',
    'footer.contact': 'Contato',
    'footer.careers': 'Trabalhe Conosco',
    
    // LGPD
    'lgpd.title': 'Política de Privacidade',
    'lgpd.text': 'Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.',
    'lgpd.accept': 'Aceitar',
    'lgpd.more': 'Saber mais',
    
    // Acessibilidade
    'accessibility.change_language': 'Mudar idioma',

    // Calculadora
    'calculator.title': 'Calculadora de Bombas',
    'calculator.subtitle': 'Encontre a bomba ideal para sua aplicação',
    'calculator.flow': 'Vazão necessária',
    'calculator.head': 'Altura manométrica',
    'calculator.fluid': 'Tipo de fluido',
    'calculator.temperature': 'Temperatura',
    'calculator.viscosity': 'Viscosidade',
    'calculator.density': 'Densidade',
    'calculator.calculate': 'Calcular',
    'calculator.results': 'Resultados',
    'calculator.recommended': 'Bomba recomendada',
    'calculator.efficiency': 'Eficiência',
    'calculator.power': 'Potência requerida',
    'calculator.npshr': 'NPSH requerido',
    'calculator.notes': 'Notas importantes',
    'calculator.pump_type': 'Tipo de Bomba',
    'calculator.centrifugal_pump': 'Bomba Centrífuga',
    'calculator.thermal_oil_pump': 'Bomba de Óleo Térmico',
    'calculator.gear_pump': 'Bomba de Engrenagem',
    'calculator.rotation': 'Rotação',
    'calculator.fluid_water': 'Água',
    'calculator.fluid_oil': 'Óleo',
    'calculator.fluid_thermal_oil': 'Óleo Térmico',
    'calculator.fluid_slurry': 'Lama/Suspensão',
    'calculator.fluid_chemical': 'Produtos Químicos',
    'calculator.recommendations.title': 'Recomendações técnicas',
    'calculator.recommendations.fbcn_general': 'Bomba Centrífuga Normalizada ideal para aplicações gerais de água e fluidos similares.',
    'calculator.recommendations.high_viscosity': 'Para alta viscosidade, considere uma bomba FBE para melhor desempenho.',
    'calculator.recommendations.high_temperature': 'Para altas temperaturas, verifique a compatibilidade dos selos mecânicos.',
    'calculator.recommendations.fbot_general': 'Bomba de Óleo Térmico especialmente projetada para fluidos térmicos em alta temperatura.',
    'calculator.recommendations.fbot_low_temp': 'Esta bomba é otimizada para temperaturas elevadas. Aplicações abaixo de 80°C podem não ser ideais.',
    'calculator.recommendations.fbot_max_temp': 'Temperatura próxima do limite máximo. Considere verificar o sistema de refrigeração.',
    'calculator.recommendations.fbe_general': 'Bomba de Engrenagens Externas ideal para fluidos viscosos e transferência de precisão.',
    'calculator.recommendations.fbe_low_viscosity': 'Baixa viscosidade pode comprometer a lubrificação. Considere uma bomba FBCN para fluidos pouco viscosos.',
    'calculator.recommendations.fbe_extreme_viscosity': 'Viscosidade extremamente alta. Verifique a potência necessária e considere redutores adicionais.',
    'calculator.recommendations.hot_water': 'Água em alta temperatura. Considere usar selo mecânico especial para água quente.',
    'calculator.recommendations.high_viscosity_oil': 'Óleo de alta viscosidade. Recomenda-se pré-aquecimento para partida do sistema.',
    'calculator.recommendations.thermal_fluid': 'Para fluidos térmicos, evite operação abaixo de 60% do fluxo nominal para prevenir sobreaquecimento.',
    'calculator.recommendations.slurry': 'Para lamas e suspensões, considere usar um impulsor semi-aberto ou especial para abrasivos.',
    
    // Novas chaves de tradução para a calculadora refinada
    'calculator.simple_calculator': 'Cálculo Simplificado',
    'calculator.advanced_calculator': 'Cálculo Avançado',
    'calculator.system_parameters': 'Parâmetros do Sistema',
    'calculator.enter_data': 'Informe os dados do seu sistema de bombeamento',
    'calculator.select_fluid': 'Selecione o fluido',
    'calculator.results_description': 'Resultado da análise e seleção de bomba ideal para sua aplicação',
    'calculator.recommended_model': 'Modelo recomendado',
    'calculator.tips': 'Recomendações Técnicas',
    'calculator.view_more': 'Ver mais',
    'calculator.view_curves': 'Ver Curvas de Desempenho',
    'calculator.request_quote': 'Solicitar Cotação',
    'calculator.no_results': 'Nenhum resultado disponível',
    'calculator.fill_parameters': 'Preencha os parâmetros no formulário ao lado e clique em \'Calcular\' para encontrar a bomba ideal para sua aplicação.',
    'calculator.advanced_calculation': 'Cálculo Avançado e Personalizado',
    'calculator.advanced_description': 'O cálculo avançado permite uma personalização detalhada de todos os parâmetros do sistema, incluindo perdas de carga, altura estática, NPSH disponível, características específicas da instalação e requisitos especiais de aplicação.',
    'calculator.technical_department': 'Nossa equipe de engenheiros especializados está disponível para auxiliá-lo na seleção precisa do equipamento ideal para sua aplicação. Com análises técnicas aprofundadas e soluções customizadas, garantimos o melhor desempenho e eficiência.',
    'calculator.contact_engineering': 'Contatar Equipe de Engenharia',
    'calculator.calculate_button': 'Calcular Seleção de Bomba',
    'calculator.calculating': 'Calculando...',
    'calculator.detailed_results': 'Resultados Detalhados',
    'calculator.detailed_description': 'Informações técnicas detalhadas sobre o modelo selecionado para sua aplicação.',
    'calculator.flow_rate': 'Vazão',
    'calculator.pump_specifications': 'Especificações da Bomba',
    'calculator.model': 'Modelo',
    'calculator.type': 'Tipo',
    'calculator.rotation_speed': 'Rotação',
    'calculator.technical_recommendations': 'Recomendações Técnicas',
    'calculator.performance_curve': 'Curva de Desempenho',
    'calculator.pump_curve': 'Curva da Bomba',
    'calculator.system_curve': 'Curva do Sistema',
    'calculator.operation_point': 'Ponto de Operação',
    'calculator.npsh': 'NPSH Requerido',
    'calculator.curve_info': 'A curva de desempenho mostra a relação entre vazão e altura manométrica para a bomba selecionada. O ponto de operação (em azul) indica onde a curva da bomba cruza com a curva do sistema, representando o desempenho esperado no seu sistema.',
    'calculator.contact_info': 'Para mais informações técnicas, entre em contato com nossa equipe de engenharia',
    'calculator.close': 'Fechar',
    'calculator.request_quotation': 'Solicitar Cotação',
    'calculator.advanced_note': 'Nota sobre cálculos avançados',
    'calculator.advanced_contact': 'Para acessar os cálculos avançados, entre em contato com nosso departamento técnico que terá o prazer em auxiliá-lo com a especificação completa.',
    'calculator.contact_technical': 'Contactar Departamento Técnico',
    
    // Tradução para os tipos de bombas
    'pump_type.fbcn': 'Bomba Centrífuga Normalizada',
    'pump_type.fbot': 'Bomba de Óleo Térmico',
    'pump_type.fbe': 'Bomba de Engrenagens Externas',
    
    // Recomendações adicionais com diferentes níveis de viscosidade
    'calculator.recommendations.fbe_very_high_viscosity': 'Viscosidade muito alta (10.000-50.000 cP). Recomenda-se sistema de pré-aquecimento e partida sem carga.',
    'calculator.recommendations.fbe_high_viscosity': 'Viscosidade alta (5.000-10.000 cP). Verifique a potência necessária e considere redutores adicionais.',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.company': 'Company',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.downloads': 'Downloads',

    
    // Hero
    'hero.since': 'Since 1944',
    'hero.title': 'High-Precision Pumping Solutions',
    'hero.description': 'Providing premium pumping technology for industries that cannot stop. Quality, innovation, and high performance for the most demanding industrial processes.',
    'hero.get_quote': 'Request Quote',
    'hero.explore_products': 'Explore Products',
    'hero.scroll_down': 'Scroll to explore',
    'hero.years': 'Years of Experience',
    'hero.certified': 'Quality Certification',
    'hero.guarantee': 'Product Warranty',
    
    // Products
    'products.title': 'Our Product Line',
    'products.subtitle': 'High-performance solutions for industrial applications',
    'products.view_details': 'View Details',
    'products.close': 'Close',
    'products.max_flow': 'Max Flow',
    'products.max_height': 'Max Height',
    'products.max_temp': 'Max Temp',
    'products.specifications': 'Specifications',
    'products.standards': 'Standards',
    'products.fbcn': 'FBCN Standardized Series',
    'products.fbot': 'FBOT Thermal Oil Series',
    'products.fbe': 'FBE External Gear',
    'products.centrifugal.subtitle': 'FBCN and FBOT Series',
    'products.centrifugal.desc': 'Centrifugal pumps for general industrial applications and thermal oil, with high efficiency and operational reliability.',
    'products.centrifugal.feature1': 'Flow up to 4,500 m³/h',
    'products.centrifugal.feature2': 'Temperature up to 350°C',
    'products.centrifugal.feature3': 'Back-pull-out construction',
    'products.fbe.desc': 'Positive displacement pumps ideal for viscous fluids and special applications.',
    'products.fbe.feature1': 'Flow up to 390 m³/h',
    'products.fbe.feature2': 'Head up to 220 m',
    'products.fbe.feature3': 'Viscous fluids',
    'nav.services': 'Services',
    'footer.services': 'Services',
    
    // Company
    'company.title': 'FB Bombas',
    'company.subtitle': 'Excellence in industrial pumping since 1944',
    'company.history': 'More than 75 years manufacturing high-quality pumps for a wide range of industrial applications.',
    'company.mission': 'Our mission is to provide reliable and high-performance solutions for the most complex pumping challenges.',
    'company.vision': 'To be a leader in industrial pumping solutions in Latin America, recognized for technical excellence and innovation.',
    'company.history.title': 'History and Tradition',
    'company.history.p1': 'Founded in 1944, FB Bombas was born from a pioneering vision to provide high-quality pumping solutions for the expanding Brazilian industry. Over more than 75 years, we have grown steadily, maintaining our commitment to excellence and innovation.',
    'company.history.p2': 'Our journey is marked by important technological achievements and the development of increasingly efficient and durable products, consolidating our position as a reference in the sector.',
    'company.history.label': 'FB Bombas History',
    'company.history.caption': 'Our History',
    'company.history.today': 'Today',
    'company.certifications.title': 'Certifications and Standards',
    'company.certifications.subtitle': 'Certified Quality',
    'company.certifications.description': 'Our products and processes are certified by the most rigorous international standards, ensuring excellence in all our products.',
    'company.certifications.crcc.title': 'CRCC',
    'company.certifications.crcc.desc': 'Supplier Registration for large-scale projects and critical applications in Brazil.',
    'company.certifications.api.title': 'API 610',
    'company.certifications.api.desc': 'Compliance with rigorous international standards for centrifugal pumps in petrochemical applications.',
    'company.factory.title': 'Infrastructure',
    'company.factory.subtitle': 'High-Tech Manufacturing Plant',
    'company.factory.p1': 'Our manufacturing facility has a total area of 10,900 m², with 5,545 m² of built area, equipped with state-of-the-art technology to ensure the manufacture of high-quality products.',
    'company.factory.p2': 'We have latest-generation CNC equipment, specialized machining cells, and testing laboratories that allow precise control of all production processes.',
    'company.factory.label': 'FB Bombas Manufacturing Plant',
    'company.factory.caption': 'Manufacturing Plant',
    'company.factory.f1': '10,900 m² total area',
    'company.factory.f2': '5,545 m² built area',
    'company.factory.f3': 'CNC precision machinery',
    'company.factory.f4': 'Testing and quality control laboratories',
    'company.engineering.title': 'Technology',
    'company.engineering.subtitle': 'Engineering & Test Bench',
    'company.engineering.p1': 'Our engineering team uses the most advanced design and simulation tools to develop high-performance pumping solutions.',
    'company.engineering.p2': 'FB Bombas test bench is one of the most complete in Brazil, capable of simulating extreme operating conditions, ensuring that our products work perfectly even in the most demanding applications.',
    'company.engineering.label': 'Engineering and Test Bench',
    'company.engineering.caption': 'Test Bench',
    'company.engineering.f1': 'Performance tests up to 4,500 m³/h',
    'company.engineering.f2': 'Pressures up to 155 bar',
    'company.engineering.f3': '3D modeling and flow simulation software',
    'company.engineering.f4': 'Vibratory analysis and dynamic balancing',
    
    // Benefits
    'benefits.title': 'Why choose FB Bombas?',
    'benefits.subtitle': 'Our precision engineering ensures high-performance equipment even in the most demanding applications.',
    'benefits.precision': 'Precision Engineering',
    'benefits.precision.desc': 'High-performance equipment designed for the most demanding applications with cutting-edge innovation.',
    'benefits.durability': 'Superior Durability',
    'benefits.durability.desc': 'Premium materials and advanced manufacturing processes ensure extended service life even in extreme conditions.',
    'benefits.tech': 'Exclusive Technology',
    'benefits.tech.desc': 'Proprietary solutions developed with state-of-the-art industrial technology for maximum energy efficiency.',
    'benefits.support': 'Specialized Support',
    'benefits.support.desc': 'Highly qualified technical team offers personalized consulting throughout the product life cycle.',
    
    // Downloads
    'downloads.title': 'Downloads Area',
    'downloads.subtitle': 'Technical catalogs, manuals, and software',
    
    // Clients
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trust from major corporations for over 75 years',
    
    // Careers
    'careers.title': 'Work With Us',
    'careers.subtitle': 'Be part of a team that has been building the future of Brazilian industry for over 75 years',
    'careers.team.title': 'Specialized Team',
    'careers.team.desc': 'Work with highly qualified professionals passionate about technology',
    'careers.growth.title': 'Professional Growth',
    'careers.growth.desc': 'Continuous development and training opportunities',
    'careers.stability.title': 'Stability and Tradition',
    'careers.stability.desc': 'Solid company with over 75 years in the market',
    'careers.cta.title': 'Ready to make a difference?',
    'careers.cta.description': 'Send your resume and join our team of excellence',
    'careers.cta.button': 'Contact Us',
    
    'downloads.all': 'All',
    'downloads.catalogs': 'Catalogs',
    'downloads.manuals': 'Manuals',
    'downloads.software': 'Software',
    'downloads.size': 'Size',
    'downloads.download': 'Download',
    'downloads.manuais': 'Technical Manuals',
    'downloads.catalogos': 'Catalogs',
    'downloads.curvas': 'Performance Curves',
    'downloads.softwares': 'Software Tools',
    'downloads.manual': 'the Manual',
    'downloads.catalog': 'the Catalog',
    'downloads.curve': 'the Curves',
    'downloads.software_file': 'the Software',
    
    // Downloads details
    'downloads.fbcn_manual.title': 'FBCN Technical Manual',
    'downloads.fbcn_manual.description': 'Complete technical manual for the FBCN standardized centrifugal pump line, with specifications, diagrams, and operating instructions.',
    'downloads.fbot_manual.title': 'FBOT Technical Manual',
    'downloads.fbot_manual.description': 'Complete technical manual for the FBOT thermal oil pump line, with detailed operation and maintenance specifications.',
    'downloads.fbe_manual.title': 'FBE Technical Manual',
    'downloads.fbe_manual.description': 'Complete technical manual for the FBE external gear pump line, with installation and maintenance details.',
    
    'downloads.fbcn_performance.title': 'FBCN Performance Curves',
    'downloads.fbcn_performance.description': 'Flow, pressure, and efficiency curves for the entire FBCN centrifugal pump line, with data for precise sizing.',
    'downloads.fbot_performance.title': 'FBOT Performance Curves',
    'downloads.fbot_performance.description': 'Flow, pressure, and efficiency curves for the entire FBOT thermal oil pump line, with data for different temperatures.',
    'downloads.fbe_performance.title': 'FBE Performance Curves',
    'downloads.fbe_performance.description': 'Flow, pressure, and efficiency curves for the entire FBE external gear pump line, including different viscosities.',
    
    'downloads.general_catalog.title': 'FB Bombas General Catalog',
    'downloads.general_catalog.description': 'Complete catalog with the entire FB Bombas product line, including technical diagrams and detailed specifications.',
    'downloads.selection_software.title': 'FB Select Selection Software',
    'downloads.selection_software.description': 'Software for precise selection and sizing of FB pumps for any industrial application.',
    
    // Services
    'services.title': 'Technical Assistance',
    'services.subtitle': 'Pumping Solutions',
    'services.description': 'FB with its vast experience in pump manufacturing has a specialized team also for service area support. Check out our line below and request a visit.',
    'services.cta': 'Request Visit',
    'services.maintenance': 'Maintenance and Technical Support',
    'services.startup': 'Start-up and Commissioning',
    'services.alignment': 'Alignment and Vibration Analysis',
    'services.painting': 'Blasting and Painting',
    'services.testing': 'Bench Testing (Performance/Hydrostatic)',
    'services.contract': 'Annual Maintenance Contract (Package)',
    'services.improvements': 'Production Process Improvement Projects',
    'services.reconditioning': 'Multi-brand pump reconditioning',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to meet your needs',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.model': 'Model',
    'contact.form.flow': 'Flow',
    'contact.form.height': 'Head',
    'contact.form.message': 'Message',
    'contact.form.consent': 'I agree with the privacy policy',
    'contact.form.send': 'Send Message',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.form.request_quote': 'Request a Quote',
    'contact.form.submit': 'Submit Request',
    'contact.form.sending': 'Sending...',
    'contact.form.pump_model': 'Pump Model',
    'contact.form.select_model': 'Select a model',
    'contact.form.model_fbcn': 'FBCN Standardized Series',
    'contact.form.model_fbot': 'FBOT Thermal Oil Series',
    'contact.form.model_fbe': 'FBE External Gear',
    'contact.form.flow_rate': 'Flow Rate (m³/h)',
    'contact.form.head': 'Head (m)',
    'contact.form.fluid': 'Pumped Fluid',
    'contact.form.temperature': 'Temperature (°C)',
    'contact.form.additional_info': 'Additional Information',
    'contact.form.privacy_consent': 'I agree with the',
    'contact.form.privacy_policy': 'Privacy Policy',
    'contact.form.data_consent': 'and authorize the processing of my personal data for commercial contact.',
    'contact.form.success_title': 'Form submitted successfully!',
    'contact.form.success_message': 'We will contact you soon.',
    'contact.form.error_title': 'Error submitting form',
    'contact.form.error_message': 'Please try again later.',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.map.aria_label': 'FB Bombas location map',
    'contact.map.title': 'FB Bombas Location',
    'contact.whatsapp.aria_label': 'Contact via WhatsApp',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.developed_by': 'Developed by',
    'footer.products': 'Products',
    'footer.centrifugal': 'FBCN Centrifugal Pumps',
    'footer.thermal': 'FBOT Thermal Oil Pumps',
    'footer.gear': 'FBE Gear Pumps',
    'footer.parts': 'Spare Parts',
    'footer.accessories': 'Accessories',
    'footer.information': 'Information',
    'footer.about': 'About the Company',
    'footer.catalogs': 'Catalogs and Downloads',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.careers': 'Work with Us',
    
    // LGPD
    'lgpd.title': 'Privacy Policy',
    'lgpd.text': 'This site uses cookies to improve your experience. By continuing to browse, you agree to our privacy policy.',
    'lgpd.accept': 'Accept',
    'lgpd.more': 'Learn more',
    
    // Accessibility
    'accessibility.change_language': 'Change language',

    // Calculator
    'calculator.title': 'Pump Calculator',
    'calculator.subtitle': 'Find the ideal pump for your application',
    'calculator.flow': 'Required flow',
    'calculator.head': 'System head',
    'calculator.fluid': 'Fluid type',
    'calculator.temperature': 'Temperature',
    'calculator.viscosity': 'Viscosity',
    'calculator.density': 'Density',
    'calculator.calculate': 'Calculate',
    'calculator.results': 'Results',
    'calculator.recommended': 'Recommended pump',
    'calculator.efficiency': 'Efficiency',
    'calculator.power': 'Required power',
    'calculator.npshr': 'NPSH required',
    'calculator.notes': 'Important notes',
    'calculator.pump_type': 'Pump Type',
    'calculator.centrifugal_pump': 'Centrifugal Pump',
    'calculator.thermal_oil_pump': 'Thermal Oil Pump',
    'calculator.gear_pump': 'Gear Pump',
    'calculator.rotation': 'Rotation',
    'calculator.fluid_water': 'Water',
    'calculator.fluid_oil': 'Oil',
    'calculator.fluid_thermal_oil': 'Thermal Oil',
    'calculator.fluid_slurry': 'Slurry',
    'calculator.fluid_chemical': 'Chemical Products',
    'calculator.recommendations.title': 'Technical recommendations',
    'calculator.recommendations.fbcn_general': 'Standardized Centrifugal Pump ideal for general applications with water and similar fluids.',
    'calculator.recommendations.high_viscosity': 'For high viscosity, consider an FBE pump for better performance.',
    'calculator.recommendations.high_temperature': 'For high temperatures, check the compatibility of mechanical seals.',
    'calculator.recommendations.fbot_general': 'Thermal Oil Pump specially designed for high-temperature thermal fluids.',
    'calculator.recommendations.fbot_low_temp': 'This pump is optimized for high temperatures. Applications below 80°C may not be ideal.',
    'calculator.recommendations.fbot_max_temp': 'Temperature near the maximum limit. Consider checking the cooling system.',
    'calculator.recommendations.fbe_general': 'External Gear Pump ideal for viscous fluids and precision transfer.',
    'calculator.recommendations.fbe_low_viscosity': 'Low viscosity may compromise lubrication. Consider an FBCN pump for low-viscosity fluids.',
    'calculator.recommendations.fbe_extreme_viscosity': 'Extremely high viscosity. Check the required power and consider additional reducers.',
    'calculator.recommendations.hot_water': 'Hot water. Consider using a special mechanical seal for hot water.',
    'calculator.recommendations.high_viscosity_oil': 'High viscosity oil. Preheating is recommended for system startup.',
    'calculator.recommendations.thermal_fluid': 'For thermal fluids, avoid operation below 60% of nominal flow to prevent overheating.',
    'calculator.recommendations.slurry': 'For slurries and suspensions, consider using a semi-open or special impeller for abrasives.',
    
    // Novas chaves de tradução para a calculadora refinada
    'calculator.simple_calculator': 'Simple Calculation',
    'calculator.advanced_calculator': 'Advanced Calculation',
    'calculator.system_parameters': 'System Parameters',
    'calculator.enter_data': 'Enter your pumping system data',
    'calculator.select_fluid': 'Select fluid',
    'calculator.results_description': 'Result of analysis and ideal pump selection for your application',
    'calculator.recommended_model': 'Recommended model',
    'calculator.tips': 'Technical Recommendations',
    'calculator.view_more': 'View more',
    'calculator.view_curves': 'View Performance Curves',
    'calculator.request_quote': 'Request Quote',
    'calculator.no_results': 'No results available',
    'calculator.fill_parameters': 'Fill in the parameters in the form and click \'Calculate\' to find the ideal pump for your application.',
    'calculator.advanced_calculation': 'Advanced and Customized Calculation',
    'calculator.advanced_description': 'Advanced calculation allows detailed customization of all system parameters, including head losses, static head, available NPSH, specific installation characteristics, and special application requirements.',
    'calculator.technical_department': 'Our team of specialized engineers is available to assist you in the precise selection of the ideal equipment for your application. With in-depth technical analysis and customized solutions, we ensure the best performance and efficiency.',
    'calculator.contact_engineering': 'Contact Engineering Team',
    'calculator.calculate_button': 'Calculate Pump Selection',
    'calculator.calculating': 'Calculating...',
    'calculator.detailed_results': 'Detailed Results',
    'calculator.detailed_description': 'Detailed technical information about the selected model for your application.',
    'calculator.flow_rate': 'Flow Rate',
    'calculator.pump_specifications': 'Pump Specifications',
    'calculator.model': 'Model',
    'calculator.type': 'Type',
    'calculator.rotation_speed': 'Rotation Speed',
    'calculator.technical_recommendations': 'Technical Recommendations',
    'calculator.performance_curve': 'Performance Curve',
    'calculator.pump_curve': 'Pump Curve',
    'calculator.system_curve': 'System Curve',
    'calculator.operation_point': 'Operation Point',
    'calculator.npsh': 'Required NPSH',
    'calculator.curve_info': 'The performance curve shows the relationship between flow and head for the selected pump. The operation point (in blue) indicates where the pump curve crosses the system curve, representing the expected performance in your system.',
    'calculator.contact_info': 'For more technical information, contact our engineering team',
    'calculator.close': 'Close',
    'calculator.request_quotation': 'Request Quotation',
    'calculator.advanced_note': 'Note on advanced calculations',
    'calculator.advanced_contact': 'To access advanced calculations, contact our technical department, which will be pleased to assist you with the complete specification.',
    'calculator.contact_technical': 'Contact Technical Department',
    
    // Tradução para os tipos de bombas
    'pump_type.fbcn': 'Standardized Centrifugal Pump',
    'pump_type.fbot': 'Thermal Oil Pump',
    'pump_type.fbe': 'External Gear Pump',
    
    // Recomendações adicionais com diferentes níveis de viscosidade
    'calculator.recommendations.fbe_very_high_viscosity': 'Very high viscosity (10,000-50,000 cP). Pre-heating system and no-load startup are recommended.',
    'calculator.recommendations.fbe_high_viscosity': 'High viscosity (5,000-10,000 cP). Check required power and consider additional reducers.',
  },
  
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.company': 'Empresa',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',
    'nav.downloads': 'Descargas',
    'nav.calculator': 'Calculadora',
    
    // Hero
    'hero.since': 'Desde 1944',
    'hero.title': 'Soluciones de Bombeo de Alta Precisión',
    'hero.description': 'Proporcionando tecnología de bombeo premium para industrias que no pueden detenerse. Calidad, innovación y alto rendimiento para los procesos industriales más exigentes.',
    'hero.get_quote': 'Solicitar Cotización',
    'hero.explore_products': 'Explorar Productos',
    'hero.scroll_down': 'Desplázate para explorar',
    'hero.years': 'Años de Experiencia',
    'hero.certified': 'Certificación de Calidad',
    'hero.guarantee': 'Garantía de Productos',
    
    // Productos
    'products.title': 'Nuestra Línea de Productos',
    'products.subtitle': 'Soluciones de alto rendimiento para aplicaciones industriales',
    'products.view_details': 'Ver Detalles',
    'products.close': 'Cerrar',
    'products.max_flow': 'Caudal Máx',
    'products.max_height': 'Altura Máx',
    'products.max_temp': 'Temp. Máx',
    'products.specifications': 'Especificaciones',
    'products.standards': 'Normas',
    'products.fbcn': 'Serie FBCN Normalizada',
    'products.fbot': 'Serie FBOT Aceite Térmico',
    'products.fbe': 'Engranaje Externo FBE',
    'products.centrifugal.subtitle': 'Series FBCN y FBOT',
    'products.centrifugal.desc': 'Bombas centrífugas para aplicaciones industriales generales y aceite térmico, con alta eficiencia y confiabilidad operacional.',
    'products.centrifugal.feature1': 'Caudal hasta 4.500 m³/h',
    'products.centrifugal.feature2': 'Temperatura hasta 350°C',
    'products.centrifugal.feature3': 'Construcción back-pull-out',
    'products.fbe.desc': 'Bombas de desplazamiento positivo ideales para fluidos viscosos y aplicaciones especiales.',
    'products.fbe.feature1': 'Caudal hasta 390 m³/h',
    'products.fbe.feature2': 'Altura hasta 220 m',
    'products.fbe.feature3': 'Fluidos viscosos',
    
    // Empresa
    'company.title': 'FB Bombas',
    'company.subtitle': 'Excelencia en bombeo industrial desde 1944',
    'company.history': 'Más de 75 años fabricando bombas de alta calidad para una amplia gama de aplicaciones industriales.',
    'company.mission': 'Nuestra misión es proporcionar soluciones confiables y de alto rendimiento para los desafíos de bombeo más complejos.',
    'company.vision': 'Ser líder en soluciones de bombeo industrial en América Latina, reconocido por su excelencia técnica e innovación.',
    'company.history.title': 'Historia y Tradición',
    'company.history.p1': 'Fundada en 1944, FB Bombas nació de la visión pionera de proporcionar soluciones de bombeo de alta calidad para la industria brasileña en expansión. Durante más de 75 años, hemos crecido constantemente, manteniendo nuestro compromiso con la excelencia y la innovación.',
    'company.history.p2': 'Nuestra trayectoria está marcada por importantes logros tecnológicos y por el desarrollo de productos cada vez más eficientes y duraderos, consolidando nuestra posición como referencia en el sector.',
    'company.history.label': 'Historia de FB Bombas',
    'company.history.caption': 'Nuestra Historia',
    'company.history.today': 'Hoy',
    'company.certifications.title': 'Certificaciones y Normas',
    'company.certifications.subtitle': 'Calidad Certificada',
    'company.certifications.description': 'Nuestros productos y procesos están certificados por los más rigurosos estándares internacionales, garantizando la excelencia en todos nuestros productos.',
    'company.certifications.crcc.title': 'CRCC',
    'company.certifications.crcc.desc': 'Registro de Proveedores para proyectos de gran escala y aplicaciones críticas en Brasil.',
    'company.certifications.api.title': 'API 610',
    'company.certifications.api.desc': 'Conformidad con los estándares internacionales rigurosos para bombas centrífugas en aplicaciones petroquímicas.',
    'company.factory.title': 'Infraestructura',
    'company.factory.subtitle': 'Planta de Fabricación de Alta Tecnología',
    'company.factory.p1': 'Nuestra planta de fabricación tiene un área total de 10.900 m², con 5.545 m² de área construida, equipada con tecnología de vanguardia para garantizar la fabricación de productos de alta calidad.',
    'company.factory.p2': 'Contamos con equipos CNC de última generación, células de mecanizado especializadas y laboratorios de prueba que permiten un control preciso de todos los procesos productivos.',
    'company.factory.label': 'Planta de Fabricación FB Bombas',
    'company.factory.caption': 'Planta de Fabricación',
    'company.factory.f1': '10.900 m² de área total',
    'company.factory.f2': '5.545 m² de área construida',
    'company.factory.f3': 'Maquinaria de precisión CNC',
    'company.factory.f4': 'Laboratorios de prueba y control de calidad',
    'company.engineering.title': 'Tecnología',
    'company.engineering.subtitle': 'Ingeniería y Banco de Pruebas',
    'company.engineering.p1': 'Nuestro equipo de ingeniería utiliza las herramientas de diseño y simulación más avanzadas para desarrollar soluciones de bombeo de alto rendimiento.',
    'company.engineering.p2': 'El banco de pruebas de FB Bombas es uno de los más completos de Brasil, capaz de simular condiciones extremas de operación, garantizando que nuestros productos funcionen perfectamente incluso en las aplicaciones más exigentes.',
    'company.engineering.label': 'Ingeniería y Banco de Pruebas',
    'company.engineering.caption': 'Banco de Pruebas',
    'company.engineering.f1': 'Pruebas de rendimiento hasta 4.500 m³/h',
    'company.engineering.f2': 'Presiones de hasta 155 bar',
    'company.engineering.f3': 'Software de modelado 3D y simulación de flujo',
    'company.engineering.f4': 'Análisis vibratorio y equilibrado dinámico',
    
    // Services
    'services.title': 'Asistencia Técnica',
    'services.subtitle': 'Bombeando Soluciones',
    'services.description': 'FB con su vasta experiencia en fabricación de bombas cuenta con un equipo especializado también para atención en el área de servicios. Consulte nuestra línea a continuación y solicite una visita.',
    'services.cta': 'Solicitar Visita',
    'services.maintenance': 'Mantenimiento y Asistencia Técnica',
    'services.startup': 'Puesta en marcha y Comisionamiento',
    'services.alignment': 'Alineación y Análisis de Vibración',
    'services.painting': 'Granallado y Pintura',
    'services.testing': 'Prueba de Banco (Rendimiento/Hidrostático)',
    'services.contract': 'Contratación de Mantenimiento Anual (Paquete)',
    'services.improvements': 'Proyecto de Mejoras en Proceso Productivo',
    'services.reconditioning': 'Reacondicionamiento en bombas multimarcas',

    // Beneficios
    'benefits.title': '¿Por qué elegir FB Bombas?',
    'benefits.subtitle': 'Nuestra ingeniería de precisión garantiza equipos de alto rendimiento incluso en las aplicaciones más exigentes.',
    'benefits.precision': 'Ingeniería de Precisión',
    'benefits.precision.desc': 'Equipos de alto rendimiento diseñados para las aplicaciones más exigentes con innovación de vanguardia.',
    'benefits.durability': 'Durabilidad Superior',
    'benefits.durability.desc': 'Materiales premium y procesos de fabricación avanzados garantizan una larga vida útil incluso en condiciones extremas.',
    'benefits.tech': 'Tecnología Exclusiva',
    'benefits.tech.desc': 'Soluciones propietarias desarrolladas con tecnología industrial de última generación para máxima eficiencia energética.',
    'benefits.support': 'Soporte Especializado',
    'benefits.support.desc': 'Equipo técnico altamente calificado ofrece consultoría personalizada durante todo el ciclo de vida del producto.',
    
    // Descargas
    'downloads.title': 'Área de Descargas',
    'downloads.subtitle': 'Catálogos técnicos, manuales y software',
    'downloads.all': 'Todos',
    'downloads.catalogs': 'Catálogos',
    'downloads.manuals': 'Manuales',
    'downloads.software': 'Software',
    'downloads.size': 'Tamaño',
    'downloads.download': 'Descargar',
    'downloads.manuais': 'Manuales Técnicos',
    'downloads.catalogos': 'Catálogos',
    'downloads.curvas': 'Curvas de Rendimiento',
    'downloads.softwares': 'Herramientas de Software',
    'downloads.manual': 'el Manual',
    'downloads.catalog': 'el Catálogo',
    'downloads.curve': 'las Curvas',
    'downloads.software_file': 'el Software',
    
    // Detalles de las descargas
    'downloads.fbcn_manual.title': 'Manual Técnico FBCN',
    'downloads.fbcn_manual.description': 'Manual técnico completo de la línea de bombas centrífugas normalizadas FBCN, con especificaciones, diagramas e instrucciones de operación.',
    'downloads.fbot_manual.title': 'Manual Técnico FBOT',
    'downloads.fbot_manual.description': 'Manual técnico completo de la línea de bombas para aceite térmico FBOT, con especificaciones detalladas de operación y mantenimiento.',
    'downloads.fbe_manual.title': 'Manual Técnico FBE',
    'downloads.fbe_manual.description': 'Manual técnico completo de la línea de bombas de engranaje externo FBE, con detalles de instalación y mantenimiento.',
    
    'downloads.fbcn_performance.title': 'Curvas de Rendimiento FBCN',
    'downloads.fbcn_performance.description': 'Curvas de caudal, presión y eficiencia para toda la línea de bombas centrífugas FBCN, con datos para dimensionamiento preciso.',
    'downloads.fbot_performance.title': 'Curvas de Rendimiento FBOT',
    'downloads.fbot_performance.description': 'Curvas de caudal, presión y eficiencia para toda la línea de bombas para aceite térmico FBOT, con datos para diferentes temperaturas.',
    'downloads.fbe_performance.title': 'Curvas de Rendimiento FBE',
    'downloads.fbe_performance.description': 'Curvas de caudal, presión y eficiencia para toda la línea de bombas de engranaje externo FBE, incluyendo diferentes viscosidades.',
    
    'downloads.general_catalog.title': 'Catálogo General FB Bombas',
    'downloads.general_catalog.description': 'Catálogo completo con toda la línea de productos FB Bombas, incluyendo diagramas técnicos y especificaciones detalladas.',
    'downloads.selection_software.title': 'Software de Selección FB Select',
    'downloads.selection_software.description': 'Software para selección y dimensionamiento preciso de bombas FB para cualquier aplicación industrial.',
    
    // Contacto
    'contact.title': 'Contáctenos',
    'contact.subtitle': 'Estamos listos para atender sus necesidades',
    'contact.form.name': 'Nombre',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.model': 'Modelo',
    'contact.form.flow': 'Caudal',
    'contact.form.height': 'Altura Manométrica',
    'contact.form.message': 'Mensaje',
    'contact.form.consent': 'Estoy de acuerdo con la política de privacidad',
    'contact.form.send': 'Enviar Mensaje',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo Electrónico',
    'contact.hours': 'Horario de Atención',
    'contact.form.request_quote': 'Solicite un Presupuesto',
    'contact.form.submit': 'Enviar Solicitud',
    'contact.form.sending': 'Enviando...',
    'contact.form.pump_model': 'Modelo de Bomba',
    'contact.form.select_model': 'Seleccione un modelo',
    'contact.form.model_fbcn': 'Serie FBCN Normalizada',
    'contact.form.model_fbot': 'Serie FBOT Aceite Térmico',
    'contact.form.model_fbe': 'Engranaje Externo FBE',
    'contact.form.flow_rate': 'Caudal (m³/h)',
    'contact.form.head': 'Altura Manométrica (m)',
    'contact.form.fluid': 'Fluido Bombeado',
    'contact.form.temperature': 'Temperatura (°C)',
    'contact.form.additional_info': 'Información Adicional',
    'contact.form.privacy_consent': 'Estoy de acuerdo con la',
    'contact.form.privacy_policy': 'Política de Privacidad',
    'contact.form.data_consent': 'y autorizo el tratamiento de mis datos personales para contacto comercial.',
    'contact.form.success_title': '¡Formulario enviado con éxito!',
    'contact.form.success_message': 'Nos pondremos en contacto pronto.',
    'contact.form.error_title': 'Error al enviar el formulario',
    'contact.form.error_message': 'Por favor, inténtelo de nuevo más tarde.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.hours': 'Horario de Atención',
    'contact.map.aria_label': 'Mapa de ubicación de FB Bombas',
    'contact.map.title': 'Ubicación FB Bombas',
    'contact.whatsapp.aria_label': 'Contacto vía WhatsApp',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.developed_by': 'Desarrollado por',
    'footer.products': 'Productos',
    'footer.centrifugal': 'Bombas Centrífugas FBCN',
    'footer.thermal': 'Bombas para Aceite Térmico FBOT',
    'footer.gear': 'Bombas de Engranaje FBE',
    'footer.parts': 'Repuestos',
    'footer.accessories': 'Accesorios',
    'footer.information': 'Información',
    'footer.about': 'Sobre la Empresa',
    'footer.catalogs': 'Catálogos y Descargas',
    'footer.privacy': 'Política de Privacidad',
    'footer.contact': 'Contacto',
    'footer.careers': 'Trabaja con Nosotros',
    
    // LGPD
    'lgpd.title': 'Política de Privacidad',
    'lgpd.text': 'Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, usted acepta nuestra política de privacidad.',
    'lgpd.accept': 'Aceptar',
    'lgpd.more': 'Saber más',
    
    // Accessibilidad
    'accessibility.change_language': 'Cambiar idioma',

    // Calculadora
    'calculator.title': 'Calculadora de Bombas',
    'calculator.subtitle': 'Encuentra la bomba ideal para tu aplicación',
    'calculator.flow': 'Caudal requerido',
    'calculator.head': 'Altura del sistema',
    'calculator.fluid': 'Tipo de fluido',
    'calculator.temperature': 'Temperatura',
    'calculator.viscosity': 'Viscosidad',
    'calculator.density': 'Densidad',
    'calculator.calculate': 'Calcular',
    'calculator.results': 'Resultados',
    'calculator.recommended': 'Bomba recomendada',
    'calculator.efficiency': 'Eficiencia',
    'calculator.power': 'Potencia requerida',
    'calculator.npshr': 'NPSH requerido',
    'calculator.notes': 'Notas importantes',
    'calculator.pump_type': 'Tipo de Bomba',
    'calculator.centrifugal_pump': 'Bomba Centrífuga',
    'calculator.thermal_oil_pump': 'Bomba de Aceite Térmico',
    'calculator.gear_pump': 'Bomba de Engranaje',
    'calculator.rotation': 'Rotación',
    'calculator.fluid_water': 'Agua',
    'calculator.fluid_oil': 'Aceite',
    'calculator.fluid_thermal_oil': 'Aceite Térmico',
    'calculator.fluid_slurry': 'Lodo/Suspensión',
    'calculator.fluid_chemical': 'Productos Químicos',
    'calculator.recommendations.title': 'Recomendaciones técnicas',
    'calculator.recommendations.fbcn_general': 'Bomba Centrífuga Normalizada ideal para aplicaciones generales con agua y fluidos similares.',
    'calculator.recommendations.high_viscosity': 'Para alta viscosidad, considere una bomba FBE para un mejor rendimiento.',
    'calculator.recommendations.high_temperature': 'Para altas temperaturas, verifique la compatibilidad de los sellos mecánicos.',
    'calculator.recommendations.fbot_general': 'Bomba de Aceite Térmico especialmente diseñada para fluidos térmicos a alta temperatura.',
    'calculator.recommendations.fbot_low_temp': 'Esta bomba está optimizada para temperaturas elevadas. Las aplicaciones por debajo de 80°C pueden no ser ideales.',
    'calculator.recommendations.fbot_max_temp': 'Temperatura cerca del límite máximo. Considere verificar el sistema de refrigeración.',
    'calculator.recommendations.fbe_general': 'Bomba de Engranajes Externos ideal para fluidos viscosos y transferencia de precisión.',
    'calculator.recommendations.fbe_low_viscosity': 'La baja viscosidad puede comprometer la lubricación. Considere una bomba FBCN para fluidos de baja viscosidad.',
    'calculator.recommendations.fbe_extreme_viscosity': 'Viscosidad extremadamente alta. Verifique la potencia requerida y considere reductores adicionales.',
    'calculator.recommendations.hot_water': 'Agua caliente. Considere usar un sello mecánico especial para agua caliente.',
    'calculator.recommendations.high_viscosity_oil': 'Aceite de alta viscosidad. Se recomienda precalentamiento para el arranque del sistema.',
    'calculator.recommendations.thermal_fluid': 'Para fluidos térmicos, evite la operación por debajo del 60% del flujo nominal para prevenir el sobrecalentamiento.',
    'calculator.recommendations.slurry': 'Para lodos y suspensiones, considere usar un impulsor semiabierto o especial para abrasivos.',
    
    // Novas chaves de tradução para a calculadora refinada
    'calculator.simple_calculator': 'Cálculo Simplificado',
    'calculator.advanced_calculator': 'Cálculo Avanzado',
    'calculator.system_parameters': 'Parámetros del Sistema',
    'calculator.enter_data': 'Ingrese los datos de su sistema de bombeo',
    'calculator.select_fluid': 'Seleccione el fluido',
    'calculator.results_description': 'Resultado del análisis y selección de bomba ideal para su aplicación',
    'calculator.recommended_model': 'Modelo recomendado',
    'calculator.tips': 'Recomendaciones Técnicas',
    'calculator.view_more': 'Ver más',
    'calculator.view_curves': 'Ver Curvas de Rendimiento',
    'calculator.request_quote': 'Solicitar Cotización',
    'calculator.no_results': 'No hay resultados disponibles',
    'calculator.fill_parameters': 'Complete los parámetros en el formulario y haga clic en \'Calcular\' para encontrar la bomba ideal para su aplicación.',
    'calculator.advanced_calculation': 'Cálculo Avanzado y Personalizado',
    'calculator.advanced_description': 'El cálculo avanzado permite una personalización detallada de todos los parámetros del sistema, incluyendo pérdidas de carga, altura estática, NPSH disponible, características específicas de la instalación y requisitos especiales de aplicación.',
    'calculator.technical_department': 'Nuestro equipo de ingenieros especializados está disponible para ayudarlo en la selección precisa del equipo ideal para su aplicación. Con análisis técnicos profundos y soluciones personalizadas, garantizamos el mejor rendimiento y eficiencia.',
    'calculator.contact_engineering': 'Contactar Equipo de Ingeniería',
    'calculator.calculate_button': 'Calcular Selección de Bomba',
    'calculator.calculating': 'Calculando...',
    'calculator.detailed_results': 'Resultados Detallados',
    'calculator.detailed_description': 'Información técnica detallada sobre el modelo seleccionado para su aplicación.',
    'calculator.flow_rate': 'Caudal',
    'calculator.pump_specifications': 'Especificaciones de la Bomba',
    'calculator.model': 'Modelo',
    'calculator.type': 'Tipo',
    'calculator.rotation_speed': 'Velocidad de Rotación',
    'calculator.technical_recommendations': 'Recomendaciones Técnicas',
    'calculator.performance_curve': 'Curva de Rendimiento',
    'calculator.pump_curve': 'Curva de la Bomba',
    'calculator.system_curve': 'Curva del Sistema',
    'calculator.operation_point': 'Punto de Operación',
    'calculator.npsh': 'NPSH Requerido',
    'calculator.curve_info': 'La curva de rendimiento muestra la relación entre el caudal y la altura para la bomba seleccionada. El punto de operación (en azul) indica dónde la curva de la bomba cruza la curva del sistema, representando el rendimiento esperado en su sistema.',
    'calculator.contact_info': 'Para más información técnica, contacte a nuestro equipo de ingeniería',
    'calculator.close': 'Cerrar',
    'calculator.request_quotation': 'Solicitar Cotización',
    'calculator.advanced_note': 'Nota sobre cálculos avanzados',
    'calculator.advanced_contact': 'Para acceder a los cálculos avanzados, contacte a nuestro departamento técnico, que tendrá el placer de ayudarlo con la especificación completa.',
    'calculator.contact_technical': 'Contactar Departamento Técnico',
    
    // Tradução para os tipos de bombas
    'pump_type.fbcn': 'Bomba Centrífuga Normalizada',
    'pump_type.fbot': 'Bomba de Aceite Térmico',
    'pump_type.fbe': 'Bomba de Engranajes Externos',
    
    // Recomendações adicionais com diferentes níveis de viscosidade
    'calculator.recommendations.fbe_very_high_viscosity': 'Viscosidad muy alta (10.000-50.000 cP). Se recomienda sistema de precalentamiento y arranque sin carga.',
    'calculator.recommendations.fbe_high_viscosity': 'Viscosidad alta (5.000-10.000 cP). Verifique la potencia requerida y considere reductores adicionales.',
  }
};

// Provider do contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Usar o idioma do navegador como padrão inicial, mas salvar preferência no localStorage
  const [language, setLanguage] = useState<Language>('pt'); // Começamos com valor padrão
  
  // Carrega as configurações do localStorage após a montagem do componente
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const savedLanguage = localStorage.getItem('fb-bombas-language');
        if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en' || savedLanguage === 'es')) {
          setLanguage(savedLanguage as Language);
        } else {
          const detectedLanguage = detectBrowserLanguage();
          setLanguage(detectedLanguage);
        }
      }
      setIsInitialized(true);
    } catch (error) {
      console.error("Erro ao inicializar idioma:", error);
      setIsInitialized(true);
    }
  }, []);
  
  // Atualizar o localStorage quando o idioma mudar
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('fb-bombas-language', language);
        
        // Atualizar o atributo lang do HTML para acessibilidade
        if (typeof document !== 'undefined') {
          document.documentElement.lang = language === 'en' ? 'en' : language === 'es' ? 'es' : 'pt-BR';
        }
        
        console.log("Idioma alterado para:", language);
      }
    } catch (error) {
      console.error("Erro ao salvar idioma:", error);
    }
  }, [language, isInitialized]);

  // Função de tradução aprimorada que utiliza os arquivos de tradução importados
  const t = (key: string, fallback?: string): string => {
    if (!key) return fallback || '';
    
    try {
      // Selecionar o mapa de traduções correto com base no idioma
      const translationMap = translations[language];
      if (!translationMap) {
        console.warn(`Idioma não encontrado: ${language}`);
        return fallback || key;
      }
      
      // Verificar nos arquivos importados de tradução
      const parts = key.split('.');
      let result: any = null;
      
      // Primeiro, tentar encontrar a tradução nos arquivos importados
      if (language === 'pt') {
        result = findNestedValue(ptTranslations, parts);
      } else if (language === 'en') {
        result = findNestedValue(enTranslations, parts);
      } else if (language === 'es') {
        result = findNestedValue(esTranslations, parts);
      }
      
      // Se encontrou a tradução nos arquivos importados, retornar
      if (result) {
        return result;
      }
      
      // Caso contrário, buscar no objeto de traduções inline
      const translation = translationMap[key];
      if (!translation) {
        console.warn(`Chave de tradução não encontrada: ${key} (${language})`);
        return fallback || key;
      }
      
      return translation;
    } catch (error) {
      console.error(`Erro na tradução para a chave: ${key}`, error);
      return fallback || key;
    }
  };
  
  // Função auxiliar para encontrar valores aninhados nos objetos de tradução
  const findNestedValue = (obj: any, keyParts: string[]): string | null => {
    try {
      let current = obj;
      
      for (const part of keyParts) {
        if (current && typeof current === 'object' && part in current) {
          current = current[part];
        } else {
          return null;
        }
      }
      
      return typeof current === 'string' ? current : null;
    } catch (e) {
      return null;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para usar o contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}