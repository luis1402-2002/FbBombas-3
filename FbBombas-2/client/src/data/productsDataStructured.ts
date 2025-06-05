// Structured products data for FB Bombas
export interface GearPumpDiameter {
  diameter: string;
  displayName: string;
  hasVariations: boolean;
  models: GearPumpModel[];
}

export interface GearPumpModel {
  id: string;
  name: string;
  maxFlow: string;
  maxPressure: string;
  maxRotation: string;
  image?: string;
}

export interface CentrifugalPumpSeries {
  id: string;
  name: string;
  description: {
    pt: string;
    en: string;
    es: string;
  };
  specifications: {
    maxFlow: string;
    maxHeight: string;
    maxTemperature: string;
    sizes: string;
  };
  image: string;
}

// Gear Pumps Data - FBE Series
export const gearPumpDiameters: GearPumpDiameter[] = [
  {
    diameter: '1/8"',
    displayName: '1/8"',
    hasVariations: false,
    models: [{
      id: 'fbe-1-8',
      name: 'FBE 1/8"',
      maxFlow: '5,15 L/min',
      maxPressure: '22 bar',
      maxRotation: '1750 RPM'
    }]
  },
  {
    diameter: '1/4"',
    displayName: '1/4"',
    hasVariations: false,
    models: [{
      id: 'fbe-1-4',
      name: 'FBE 1/4"',
      maxFlow: '8,90 L/min',
      maxPressure: '22 bar',
      maxRotation: '1750 RPM'
    }]
  },
  {
    diameter: '3/8"',
    displayName: '3/8"',
    hasVariations: false,
    models: [{
      id: 'fbe-3-8',
      name: 'FBE 3/8"',
      maxFlow: '14 L/min',
      maxPressure: '22 bar',
      maxRotation: '1750 RPM'
    }]
  },
  {
    diameter: '1/2"',
    displayName: '1/2"',
    hasVariations: false,
    models: [{
      id: 'fbe-1-2',
      name: 'FBE 1/2"',
      maxFlow: '17,70 L/min',
      maxPressure: '22 bar',
      maxRotation: '1750 RPM'
    }]
  },
  {
    diameter: '3/4"',
    displayName: '3/4"',
    hasVariations: false,
    models: [{
      id: 'fbe-3-4',
      name: 'FBE 3/4"',
      maxFlow: '44,40 L/min',
      maxPressure: '22 bar',
      maxRotation: '1750 RPM'
    }]
  },
  {
    diameter: '1"',
    displayName: '1"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-1',
        name: 'FBE 1"',
        maxFlow: '62 L/min',
        maxPressure: '22 bar',
        maxRotation: '1750 RPM'
      },
      {
        id: 'fbe-1-a',
        name: 'FBE 1" A',
        maxFlow: '74 L/min',
        maxPressure: '22 bar',
        maxRotation: '1750 RPM'
      },
      {
        id: 'fbe-1-d',
        name: 'FBE 1" D',
        maxFlow: '88,6 L/min',
        maxPressure: '22 bar',
        maxRotation: '1750 RPM'
      },
      {
        id: 'fbe-1-da',
        name: 'FBE 1" DA',
        maxFlow: '112 L/min',
        maxPressure: '22 bar',
        maxRotation: '1750 RPM'
      }
    ]
  },
  {
    diameter: '2"',
    displayName: '2"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-2',
        name: 'FBE 2"',
        maxFlow: '300 L/min',
        maxPressure: '14 bar',
        maxRotation: '1750 RPM'
      },
      {
        id: 'fbe-2-a',
        name: 'FBE 2" A',
        maxFlow: '420 L/min',
        maxPressure: '12 bar',
        maxRotation: '1750 RPM'
      }
    ]
  },
  {
    diameter: '3"',
    displayName: '3"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-3',
        name: 'FBE 3"',
        maxFlow: '500 L/min',
        maxPressure: '12 bar',
        maxRotation: '1150 RPM'
      },
      {
        id: 'fbe-3-m9',
        name: 'FBE 3" M9',
        maxFlow: '600 L/min',
        maxPressure: '8 bar',
        maxRotation: '1150 RPM'
      }
    ]
  },
  {
    diameter: '4"',
    displayName: '4"',
    hasVariations: true,
    models: [
      {
        id: 'fbe-4-m6',
        name: 'FBE 4" M6',
        maxFlow: '650 L/min',
        maxPressure: '8 bar',
        maxRotation: '1150 RPM'
      },
      {
        id: 'fbe-4-m8',
        name: 'FBE 4" M8',
        maxFlow: '1.000 L/min',
        maxPressure: '8 bar',
        maxRotation: '1150 RPM'
      },
      {
        id: 'fbe-4-m12',
        name: 'FBE 4" M12',
        maxFlow: '1.350 L/min',
        maxPressure: '6 bar',
        maxRotation: '1150 RPM'
      }
    ]
  }
];

// Centrifugal Pumps Data
export const centrifugalPumpsSeries: CentrifugalPumpSeries[] = [
  {
    id: 'fbcn',
    name: 'FBCN',
    description: {
      pt: 'Bombas centrífugas normalizadas para aplicações industriais gerais com alta eficiência e confiabilidade.',
      en: 'Standardized centrifugal pumps for general industrial applications with high efficiency and reliability.',
      es: 'Bombas centrífugas normalizadas para aplicaciones industriales generales con alta eficiencia y confiabilidad.'
    },
    specifications: {
      maxFlow: '2.200 m³/h',
      maxHeight: '135 m',
      maxTemperature: '260°C',
      sizes: 'DN25 até 300mm'
    },
    image: 'https://www.dropbox.com/scl/fi/ex30iww4awnk2r63hannu/Design-sem-nome-72.png?rlkey=anxgdrw333kigr2ntnxztsimn&st=cx6tyvpk&raw=1'
  },
  {
    id: 'fbot',
    name: 'FBOT',
    description: {
      pt: 'Bombas especializadas para sistemas de óleo térmico, suportando altas temperaturas com vedações especiais.',
      en: 'Specialized pumps for thermal oil systems, supporting high temperatures with special seals.',
      es: 'Bombas especializadas para sistemas de aceite térmico, soportando altas temperaturas con sellos especiales.'
    },
    specifications: {
      maxFlow: '400 m³/h',
      maxHeight: '120 m',
      maxTemperature: '350°C',
      sizes: 'DN25 até 200mm'
    },
    image: 'https://www.dropbox.com/scl/fi/l83hvvfk3kd34flvm1kj4/fbotimage.png?rlkey=9cvbkff24qgit6trr515176in&st=u7qsh13g&raw=1'
  }
];

// Helper functions
export const getGearPumpByDiameter = (diameter: string): GearPumpDiameter | undefined => {
  return gearPumpDiameters.find(d => d.diameter === diameter);
};

export const getAllGearPumpModels = (): GearPumpModel[] => {
  return gearPumpDiameters.flatMap(d => d.models);
};

export const getCentrifugalPumpSeries = (id: string): CentrifugalPumpSeries | undefined => {
  return centrifugalPumpsSeries.find(s => s.id === id);
};