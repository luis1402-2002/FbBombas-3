// Structured Products Data for New Products Page
import { fbeSmallPumps, fbeMediumLargePumps, allFBEPumps, FBEModel } from './fbeCompleteData';
import { fbeMediumLargePumps2 } from './fbeCompleteData2';

// Combine all FBE data
const allCompleteFBEPumps = [...fbeSmallPumps, ...fbeMediumLargePumps, ...fbeMediumLargePumps2];

// Centrifugal Pumps Data (FBCN and FBOT)
export interface CentrifugalPump {
  id: string;
  name: {
    pt: string;
    en: string;
    es: string;
  };
  series: string;
  description: {
    pt: string;
    en: string;
    es: string;
  };
  maxFlow: string;
  maxHead: string;
  maxTemp: string;
  applications: {
    pt: string[];
    en: string[];
    es: string[];
  };
  features: {
    pt: string[];
    en: string[];
    es: string[];
  };
  image: string;
  code: string;
}

export const centrifugalPumps: CentrifugalPump[] = [
  {
    id: 'fbcn',
    name: {
      pt: 'Bomba Centrífuga Normalizada',
      en: 'Normalized Centrifugal Pump',
      es: 'Bomba Centrífuga Normalizada'
    },
    series: 'FBCN',
    description: {
      pt: 'Desenvolvida para trabalhar com líquidos limpos ou turvos em inúmeras aplicações industriais.',
      en: 'Developed to work with clean or turbid liquids in numerous industrial applications.',
      es: 'Desarrollada para trabajar con líquidos limpios o turbios en numerosas aplicaciones industriales.'
    },
    maxFlow: '2.200 m³/h',
    maxHead: '135 m',
    maxTemp: '250°C',
    applications: {
      pt: ['Indústrias químicas', 'Petroquímicas', 'Papel e polpa', 'Siderúrgica', 'Mineração', 'Alimentícia', 'Têxtil', 'Farmacêutica', 'Saneamento', 'Combate à incêndio'],
      en: ['Chemical industries', 'Petrochemical', 'Paper and pulp', 'Steel', 'Mining', 'Food', 'Textile', 'Pharmaceutical', 'Sanitation', 'Fire fighting'],
      es: ['Industrias químicas', 'Petroquímicas', 'Papel y pulpa', 'Siderúrgica', 'Minería', 'Alimentaria', 'Textil', 'Farmacéutica', 'Saneamiento', 'Combate a incendios']
    },
    features: {
      pt: ['Tamanhos DN25 até 300 mm', 'Bomba com corpo em voluta', 'Instalação na horizontal', 'Construção back-pull-out', 'Monoestágio', 'Rotação máxima 3500 RPM'],
      en: ['Sizes DN25 to 300 mm', 'Volute casing pump', 'Horizontal installation', 'Back-pull-out construction', 'Single stage', 'Maximum rotation 3500 RPM'],
      es: ['Tamaños DN25 hasta 300 mm', 'Bomba con cuerpo en voluta', 'Instalación horizontal', 'Construcción back-pull-out', 'Monoetapa', 'Rotación máxima 3500 RPM']
    },
    image: 'https://www.dropbox.com/scl/fi/ex30iww4awnk2r63hannu/Design-sem-nome-72.png?rlkey=anxgdrw333kigr2ntnxztsimn&st=cx6tyvpk&raw=1',
    code: 'MTEC-03/00'
  },
  {
    id: 'fbot',
    name: {
      pt: 'Bomba de Óleo Térmico',
      en: 'Thermal Oil Pump',
      es: 'Bomba de Aceite Térmico'
    },
    series: 'FBOT',
    description: {
      pt: 'Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. O fluído não deve conter partículas abrasivas ou materiais que possam atacar quimicamente os componentes da bomba.',
      en: 'Developed to work in pumping organic thermal oils. The fluid should not contain abrasive particles or materials that can chemically attack pump components.',
      es: 'Desarrollada para trabajar en el bombeo de aceites térmicos orgánicos. El fluido no debe contener partículas abrasivas o materiales que puedan atacar químicamente los componentes de la bomba.'
    },
    maxFlow: '2.200 m³/h',
    maxHead: '135 m',
    maxTemp: '350°C',
    applications: {
      pt: ['Indústria farmacêutica', 'Química', 'Alimentícia', 'Têxtil', 'Plástica'],
      en: ['Pharmaceutical industry', 'Chemical', 'Food', 'Textile', 'Plastic'],
      es: ['Industria farmacéutica', 'Química', 'Alimentaria', 'Textil', 'Plástica']
    },
    features: {
      pt: ['Tamanhos DN25 até 300 mm', 'Bomba com corpo em voluta', 'Instalação na horizontal', 'Construção back-pull-out', 'Monoestágio', 'Rotação máxima 3500 RPM'],
      en: ['Sizes DN25 to 300 mm', 'Volute casing pump', 'Horizontal installation', 'Back-pull-out construction', 'Single stage', 'Maximum rotation 3500 RPM'],
      es: ['Tamaños DN25 hasta 300 mm', 'Bomba con cuerpo en voluta', 'Instalación horizontal', 'Construcción back-pull-out', 'Monoetapa', 'Rotación máxima 3500 RPM']
    },
    image: 'https://www.dropbox.com/scl/fi/t6moru7jiedkzru75ojcn/Design-sem-nome-71.png?rlkey=37vga7o60i112szivf7qm8v7n&st=eslq5fxc&raw=1',
    code: 'MTEC-16/00'
  }
];

// Gear Pumps Structure - Organized by diameter with variations
export interface GearPumpDiameter {
  diameter: string;
  hasVariations: boolean;
  models: GearPumpModel[];
}

export interface GearPumpModel {
  id: string;
  name: string;
  maxFlow: string;
  maxPressure: string;
  maxRPM: string;
  data: FBEModel;
}

// Organize FBE pumps by diameter with correct model names
export const gearPumpsByDiameter: GearPumpDiameter[] = [
  {
    diameter: '1/8"',
    hasVariations: false,
    models: [
      {
        id: 'fbe-1-8',
        name: '1/8"',
        maxFlow: '5,15 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1-8')!
      }
    ]
  },
  {
    diameter: '1/4"',
    hasVariations: false,
    models: [
      {
        id: 'fbe-1-4',
        name: '1/4"',
        maxFlow: '8,90 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1-4')!
      }
    ]
  },
  {
    diameter: '3/8"',
    hasVariations: false,
    models: [
      {
        id: 'fbe-3-8',
        name: '3/8"',
        maxFlow: '14 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-3-8')!
      }
    ]
  },
  {
    diameter: '1/2"',
    hasVariations: false,
    models: [
      {
        id: 'fbe-1-2',
        name: '1/2"',
        maxFlow: '17,70 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1-2')!
      }
    ]
  },
  {
    diameter: '3/4"',
    hasVariations: false,
    models: [
      {
        id: 'fbe-3-4',
        name: '3/4"',
        maxFlow: '44,40 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-3-4')!
      }
    ]
  },
  {
    diameter: '1"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-1-standard',
        name: '1"',
        maxFlow: '62 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1')!
      },
      {
        id: 'fbe-1-a',
        name: '1" A',
        maxFlow: '74 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1')!
      },
      {
        id: 'fbe-1-d',
        name: '1" D',
        maxFlow: '88,6 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1')!
      },
      {
        id: 'fbe-1-da',
        name: '1" DA',
        maxFlow: '112 L/min',
        maxPressure: '22 bar',
        maxRPM: '1750 RPM',
        data: allCompleteFBEPumps.find(p => p.id === 'fbe-1')!
      }
    ]
  },
  {
    diameter: '2"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-2-standard',
        name: '2"',
        maxFlow: '300 L/min',
        maxPressure: '14 bar',
        maxRPM: '1750 RPM',
        data: fbeMediumLargePumps2.find(p => p.id === 'fbe-2')!
      },
      {
        id: 'fbe-2-a',
        name: '2" A',
        maxFlow: '420 L/min',
        maxPressure: '12 bar',
        maxRPM: '1750 RPM',
        data: fbeMediumLargePumps2.find(p => p.id === 'fbe-2')!
      }
    ]
  },
  {
    diameter: '3"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-3-standard',
        name: '3"',
        maxFlow: '500 L/min',
        maxPressure: '12 bar',
        maxRPM: '1150 RPM',
        data: fbeMediumLargePumps2.find(p => p.id === 'fbe-3')!
      },
      {
        id: 'fbe-3-m9',
        name: '3" M9',
        maxFlow: '600 L/min',
        maxPressure: '8 bar',
        maxRPM: '1150 RPM',
        data: fbeMediumLargePumps2.find(p => p.id === 'fbe-3')!
      }
    ]
  },
  {
    diameter: '4"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-4-m6',
        name: '4" M6',
        maxFlow: '1.000 L/min',
        maxPressure: '6 bar',
        maxRPM: '850 RPM',
        data: allCompleteFBEPumps.find(p => p.diameter === '4"') || allCompleteFBEPumps[0]
      },
      {
        id: 'fbe-4-m8',
        name: '4" M8',
        maxFlow: '1.200 L/min',
        maxPressure: '8 bar',
        maxRPM: '850 RPM',
        data: allCompleteFBEPumps.find(p => p.diameter === '4"') || allCompleteFBEPumps[0]
      },
      {
        id: 'fbe-4-m12',
        name: '4" M12',
        maxFlow: '1.350 L/min',
        maxPressure: '12 bar',
        maxRPM: '850 RPM',
        data: allCompleteFBEPumps.find(p => p.diameter === '4"') || allCompleteFBEPumps[0]
      }
    ]
  }
];

// Product Categories for main products page
export interface ProductCategory {
  id: string;
  name: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
  series: string;
  image: string;
  specs: {
    maxFlow: string;
    maxPressure: string;
    maxTemp: string;
  };
  route: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'gear-pumps',
    name: {
      pt: 'Bombas de Engrenagem',
      en: 'Gear Pumps',
      es: 'Bombas de Engranajes'
    },
    description: {
      pt: 'Soluções de alta precisão para transferência de fluidos viscosos em diversas aplicações industriais',
      en: 'High precision solutions for viscous fluid transfer in various industrial applications',
      es: 'Soluciones de alta precisión para transferencia de fluidos viscosos en diversas aplicaciones industriales'
    },
    series: 'FBE',
    image: 'https://www.dropbox.com/scl/fi/sg6d1wpp1tq8l3xh849kl/Design-sem-nome-73.png?rlkey=ocyzqcox27bsyg5ajlfdnv71i&st=2nnd19h1&raw=1',
    specs: {
      maxFlow: '1.350 L/min',
      maxPressure: '22 bar',
      maxTemp: '350°C'
    },
    route: '/produtos/bombas-engrenagem'
  },
  {
    id: 'centrifugal-pumps',
    name: {
      pt: 'Bombas Centrífugas',
      en: 'Centrifugal Pumps',
      es: 'Bombas Centrífugas'
    },
    description: {
      pt: 'Tecnologia avançada para aplicações industriais de alta demanda com máxima eficiência e confiabilidade',
      en: 'Advanced technology for high-demand industrial applications with maximum efficiency and reliability',
      es: 'Tecnología avanzada para aplicaciones industriales de alta demanda con máxima eficiencia y confiabilidad'
    },
    series: 'FBCN / FBOT',
    image: 'https://www.dropbox.com/scl/fi/ex30iww4awnk2r63hannu/Design-sem-nome-72.png?rlkey=anxgdrw333kigr2ntnxztsimn&st=cx6tyvpk&raw=1',
    specs: {
      maxFlow: '2.200 m³/h',
      maxPressure: '135 m',
      maxTemp: '350°C'
    },
    route: '/produtos/bombas-centrifugas'
  }
];