import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes for FB Bombas website
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { nome, empresa, email, telefone, modelo, vazao, altura, fluido, temperatura, mensagem } = req.body;
      
      // Validate required fields
      if (!nome || !empresa || !email || !telefone) {
        return res.status(400).json({ 
          success: false, 
          message: 'Campos obrigatórios não preenchidos' 
        });
      }
      
      // In a real implementation, you would:
      // 1. Save the form data to a database
      // 2. Send an email notification
      // 3. Integrate with CRM systems like HubSpot
      
      // For now, we'll just send a success response
      return res.status(200).json({
        success: true,
        message: 'Formulário enviado com sucesso'
      });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      return res.status(500).json({
        success: false,
        message: 'Erro ao processar sua solicitação'
      });
    }
  });
  
  // Product catalog API
  app.get('/api/products', (_req, res) => {
    // This would typically fetch from a database
    const products = [
      {
        id: "fbcn",
        title: "Bomba Centrífuga Série FBCN",
        tag: "Normalizada",
        maxFlow: "até 2200m³/h",
        maxHeight: "até 135m",
        maxTemperature: "até 260°C",
      },
      {
        id: "fbot",
        title: "Bomba Centrífuga Série FBOT",
        tag: "Óleo Térmico",
        maxFlow: "até 2200m³/h",
        maxHeight: "até 135m",
        maxTemperature: "até 350°C",
      },
      {
        id: "fbe",
        title: "Bombas de Engrenagem Externa FBE",
        tag: "Engrenagem",
        maxFlow: "até 390m³/h",
        maxHeight: "até 220m",
        maxTemperature: "até 350°C",
      }
    ];
    
    res.status(200).json(products);
  });
  
  // Product details API
  app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    
    // In a real implementation, you would fetch this from a database
    // For now, we'll return a mock response based on the ID
    const productData = {
      fbcn: {
        id: "fbcn",
        title: "Bomba Centrífuga Série FBCN",
        fullDescription: "Desenvolvida para trabalhar com líquidos limpos ou turvos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica e saneamento.",
        standards: [
          "Dimensionalmente conforme ISO 2858",
          "Mecanicamente conforme ASME B73.1",
          "Construção \"back-pull-out\""
        ],
        specifications: [
          { label: "Tamanhos", value: "DN25 até 300mm" },
          { label: "Vazões", value: "até 2200m³/h" },
          { label: "Altura manométrica", value: "até 135m" },
          { label: "Temperaturas", value: "até 260°C" },
          { label: "Rotações", value: "até 3500rpm" },
          { label: "Código", value: "MTEC-03/00" }
        ]
      },
      fbot: {
        id: "fbot",
        title: "Bomba Centrífuga Série FBOT",
        fullDescription: "Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. Pode ser utilizada na indústria farmacêutica, química, alimentícia, têxtil, plástica, etc.",
        standards: [
          "Construção \"back-pull-out\"",
          "Selo mecânico imerso em óleo + gaxetas de grafite (dupla vedação)"
        ],
        specifications: [
          { label: "Tamanhos", value: "DN25 até 300mm" },
          { label: "Vazões", value: "até 2200m³/h" },
          { label: "Altura manométrica", value: "até 135m" },
          { label: "Temperaturas", value: "até 350°C" },
          { label: "Rotações", value: "até 3500rpm" },
          { label: "Código", value: "MTEC-16/00" }
        ]
      },
      fbe: {
        id: "fbe",
        title: "Bombas de Engrenagem Externa FBE",
        fullDescription: "Desenvolvida para trabalhar com fluidos viscosos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica e saneamento.",
        standards: [
          "Corpo com pés para fixação",
          "Engrenagens com dentes helicoidais",
          "Vedação configurável conforme aplicação"
        ],
        specifications: [
          { label: "Tamanhos", value: "DN 1/8\" até 6\"" },
          { label: "Vazões", value: "até 390m³/h" },
          { label: "Altura manométrica", value: "até 220m" },
          { label: "Temperaturas", value: "até 350°C" },
          { label: "Rotação", value: "1750rpm" },
          { label: "Código", value: "MTEC-01/01" }
        ]
      }
    };
    
    const product = productData[productId];
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado'
      });
    }
    
    res.status(200).json(product);
  });
  
  // Cases study API
  app.get('/api/cases', (req, res) => {
    const category = req.query.category as string;
    
    // This would typically come from a database
    const allCases = [
      {
        id: "case-1",
        category: "petroquimica",
        title: "Modernização de Sistema de Bombeamento em Refinaria",
        description: "Substituição de bombas antigas por unidades FBCN com ganho de 32% em eficiência energética e redução de manutenções.",
        product: "FBCN",
        year: "2023"
      },
      {
        id: "case-2", 
        category: "alimentos",
        title: "Sistema de Bombeamento para Indústria de Laticínios",
        description: "Implementação de bombas FBE para transporte de produtos viscosos com certificação sanitária.",
        product: "FBE",
        year: "2022"
      },
      {
        id: "case-3",
        category: "siderurgia",
        title: "Bombas para Sistema de Refrigeração de Alto Forno",
        description: "Fornecimento de bombas FBOT para refrigeração de alto forno operando em condições extremas de temperatura.",
        product: "FBOT",
        year: "2023"
      }
    ];
    
    // Filter by category if specified
    const filteredCases = category && category !== 'all'
      ? allCases.filter(c => c.category === category)
      : allCases;
    
    res.status(200).json(filteredCases);
  });
  
  // Downloads API
  app.get('/api/downloads', (req, res) => {
    const category = req.query.category as string;
    
    // This would typically come from a database
    const allDownloads = [
      {
        id: "download-1",
        category: "catalogos",
        title: "Catálogo Técnico FBCN",
        size: "4.2 MB",
        type: "PDF",
        description: "Especificações técnicas completas da linha de bombas centrífugas normalizadas FBCN."
      },
      {
        id: "download-2",
        category: "catalogos",
        title: "Catálogo Técnico FBOT",
        size: "3.8 MB",
        type: "PDF",
        description: "Especificações técnicas completas da linha de bombas para óleo térmico FBOT."
      },
      {
        id: "download-3",
        category: "curvas",
        title: "Curvas de Performance FBCN",
        size: "2.3 MB",
        type: "PDF",
        description: "Curvas de vazão, pressão e eficiência para toda a linha de bombas centrífugas FBCN."
      }
    ];
    
    // Filter by category if specified
    const filteredDownloads = category && category !== 'all'
      ? allDownloads.filter(d => d.category === category)
      : allDownloads;
    
    res.status(200).json(filteredDownloads);
  });

  const httpServer = createServer(app);

  return httpServer;
}
