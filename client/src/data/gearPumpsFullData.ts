// Comprehensive FBE Gear Pumps Data with Flow Tables
export interface FlowTableEntry {
  pressure: number;
  flow: number;
  power: number;
}

export interface PumpVariation {
  model: string;
  maxFlow: number;
  maxRPM: number;
  maxPressure: number;
  maxViscosity: string;
  image?: string;
  technicalDrawing?: string;
  specifications: {
    suction: string;
    gears: string;
    sealing: string;
    bearings: string;
    construction: string;
  };
  optionals: string[];
  flowTable: {
    [rpm: string]: FlowTableEntry[];
  };
}

export interface DiameterGroup {
  diameter: string;
  displayDiameter: string;
  maxFlow: number;
  maxRPM: number;
  variations: PumpVariation[];
}

export const fbeGearPumpsData: DiameterGroup[] = [
  // FBE 1/8"
  {
    diameter: "1/8",
    displayDiameter: '1/8"',
    maxFlow: 5.15,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 1/8"',
        maxFlow: 5.15,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1/8" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 3.5, power: 0.05 },
            { pressure: 2, flow: 3.4, power: 0.07 },
            { pressure: 4, flow: 3.3, power: 0.09 },
            { pressure: 6, flow: 3.2, power: 0.11 },
            { pressure: 8, flow: 3.1, power: 0.13 },
            { pressure: 10, flow: 3.0, power: 0.15 },
            { pressure: 12, flow: 2.9, power: 0.18 },
            { pressure: 14, flow: 2.7, power: 0.21 },
            { pressure: 16, flow: 2.5, power: 0.24 },
            { pressure: 18, flow: 2.3, power: 0.27 },
            { pressure: 20, flow: 2.0, power: 0.30 },
            { pressure: 22, flow: 1.7, power: 0.34 }
          ],
          "1750": [
            { pressure: 0, flow: 5.15, power: 0.07 },
            { pressure: 2, flow: 5.0, power: 0.09 },
            { pressure: 4, flow: 4.85, power: 0.12 },
            { pressure: 6, flow: 4.7, power: 0.14 },
            { pressure: 8, flow: 4.55, power: 0.17 },
            { pressure: 10, flow: 4.4, power: 0.19 },
            { pressure: 12, flow: 4.25, power: 0.23 },
            { pressure: 14, flow: 4.1, power: 0.27 },
            { pressure: 16, flow: 3.95, power: 0.31 }
          ]
        }
      }
    ]
  },
  // FBE 1/4"
  {
    diameter: "1/4",
    displayDiameter: '1/4"',
    maxFlow: 8.9,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 1/4"',
        maxFlow: 8.9,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1/4" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 6.0, power: 0.10 },
            { pressure: 2, flow: 5.9, power: 0.14 },
            { pressure: 4, flow: 5.8, power: 0.18 },
            { pressure: 6, flow: 5.7, power: 0.22 },
            { pressure: 8, flow: 5.6, power: 0.26 },
            { pressure: 10, flow: 5.4, power: 0.30 },
            { pressure: 12, flow: 5.2, power: 0.36 },
            { pressure: 14, flow: 5.0, power: 0.42 },
            { pressure: 16, flow: 4.6, power: 0.48 },
            { pressure: 18, flow: 4.2, power: 0.54 },
            { pressure: 20, flow: 3.7, power: 0.60 },
            { pressure: 22, flow: 3.1, power: 0.68 }
          ],
          "1750": [
            { pressure: 0, flow: 8.9, power: 0.13 },
            { pressure: 2, flow: 8.7, power: 0.18 },
            { pressure: 4, flow: 8.5, power: 0.23 },
            { pressure: 6, flow: 8.3, power: 0.28 },
            { pressure: 8, flow: 8.1, power: 0.33 },
            { pressure: 10, flow: 7.9, power: 0.39 },
            { pressure: 12, flow: 7.7, power: 0.46 },
            { pressure: 14, flow: 7.4, power: 0.54 },
            { pressure: 16, flow: 6.8, power: 0.62 }
          ]
        }
      }
    ]
  },
  // FBE 3/8"
  {
    diameter: "3/8",
    displayDiameter: '3/8"',
    maxFlow: 14.0,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 3/8"',
        maxFlow: 14.0,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3/8" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 9.5, power: 0.15 },
            { pressure: 2, flow: 9.4, power: 0.17 },
            { pressure: 4, flow: 9.3, power: 0.23 },
            { pressure: 6, flow: 9.2, power: 0.42 },
            { pressure: 8, flow: 9.1, power: 0.52 },
            { pressure: 10, flow: 8.9, power: 0.65 },
            { pressure: 12, flow: 8.6, power: 0.76 },
            { pressure: 14, flow: 8.2, power: 0.88 },
            { pressure: 16, flow: 7.7, power: 1.02 },
            { pressure: 18, flow: 7.1, power: 1.30 },
            { pressure: 20, flow: 6.5, power: 1.70 },
            { pressure: 22, flow: 5.8, power: 2.10 }
          ],
          "1750": [
            { pressure: 0, flow: 14.0, power: 0.19 },
            { pressure: 2, flow: 13.9, power: 0.22 },
            { pressure: 4, flow: 13.8, power: 0.30 },
            { pressure: 6, flow: 13.6, power: 0.54 },
            { pressure: 8, flow: 13.4, power: 0.67 },
            { pressure: 10, flow: 13.1, power: 0.80 },
            { pressure: 12, flow: 12.7, power: 0.91 },
            { pressure: 14, flow: 12.1, power: 1.14 },
            { pressure: 16, flow: 11.4, power: 1.14 }
          ]
        }
      }
    ]
  },
  // FBE 1/2"
  {
    diameter: "1/2",
    displayDiameter: '1/2"',
    maxFlow: 17.7,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 1/2"',
        maxFlow: 17.7,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1/2" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 12.0, power: 0.30 },
            { pressure: 2, flow: 11.9, power: 0.40 },
            { pressure: 4, flow: 11.8, power: 0.50 },
            { pressure: 6, flow: 11.7, power: 0.62 },
            { pressure: 8, flow: 11.6, power: 0.75 },
            { pressure: 10, flow: 11.4, power: 0.83 },
            { pressure: 12, flow: 11.2, power: 0.92 },
            { pressure: 14, flow: 10.8, power: 1.00 },
            { pressure: 16, flow: 10.2, power: 1.40 },
            { pressure: 18, flow: 9.6, power: 1.60 },
            { pressure: 20, flow: 9.0, power: 1.90 },
            { pressure: 22, flow: 8.2, power: 2.10 }
          ],
          "1750": [
            { pressure: 0, flow: 17.7, power: 0.39 },
            { pressure: 2, flow: 17.6, power: 0.52 },
            { pressure: 4, flow: 17.5, power: 0.65 },
            { pressure: 6, flow: 17.3, power: 0.80 },
            { pressure: 8, flow: 17.1, power: 0.97 },
            { pressure: 10, flow: 16.8, power: 1.07 },
            { pressure: 12, flow: 16.4, power: 1.18 },
            { pressure: 14, flow: 16.0, power: 1.30 },
            { pressure: 16, flow: 15.0, power: 1.82 }
          ]
        }
      }
    ]
  },
  // FBE 3/4"
  {
    diameter: "3/4",
    displayDiameter: '3/4"',
    maxFlow: 44.4,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 3/4"',
        maxFlow: 44.4,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3/4" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 30.0, power: 0.40 },
            { pressure: 2, flow: 29.5, power: 0.50 },
            { pressure: 4, flow: 29.0, power: 0.75 },
            { pressure: 6, flow: 28.5, power: 1.00 },
            { pressure: 8, flow: 28.0, power: 1.40 },
            { pressure: 10, flow: 27.0, power: 1.75 },
            { pressure: 12, flow: 26.0, power: 2.00 },
            { pressure: 14, flow: 25.0, power: 2.30 },
            { pressure: 16, flow: 24.0, power: 2.70 },
            { pressure: 18, flow: 22.0, power: 3.00 },
            { pressure: 20, flow: 20.0, power: 3.20 },
            { pressure: 22, flow: 17.0, power: 3.50 }
          ],
          "1750": [
            { pressure: 0, flow: 44.4, power: 0.40 },
            { pressure: 2, flow: 43.6, power: 0.50 },
            { pressure: 4, flow: 42.8, power: 0.90 },
            { pressure: 6, flow: 42.0, power: 1.20 },
            { pressure: 8, flow: 41.0, power: 1.70 },
            { pressure: 10, flow: 40.0, power: 2.00 },
            { pressure: 12, flow: 38.0, power: 2.40 },
            { pressure: 14, flow: 37.0, power: 2.90 }
          ]
        }
      }
    ]
  },
  // FBE 1"
  {
    diameter: "1",
    displayDiameter: '1"',
    maxFlow: 112.0,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 1"',
        maxFlow: 62.0,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 42.0, power: 0.40 },
            { pressure: 2, flow: 41.5, power: 0.50 },
            { pressure: 4, flow: 41.0, power: 0.75 },
            { pressure: 6, flow: 40.5, power: 1.00 },
            { pressure: 8, flow: 40.0, power: 1.50 },
            { pressure: 10, flow: 39.0, power: 2.00 },
            { pressure: 12, flow: 38.0, power: 2.50 },
            { pressure: 14, flow: 37.0, power: 3.00 },
            { pressure: 16, flow: 36.0, power: 3.50 },
            { pressure: 18, flow: 34.0, power: 4.00 },
            { pressure: 20, flow: 32.0, power: 4.50 },
            { pressure: 22, flow: 29.0, power: 5.00 }
          ],
          "1750": [
            { pressure: 0, flow: 62.0, power: 0.60 },
            { pressure: 2, flow: 61.5, power: 0.70 },
            { pressure: 4, flow: 61.0, power: 1.10 },
            { pressure: 6, flow: 60.0, power: 1.70 },
            { pressure: 8, flow: 59.0, power: 2.30 },
            { pressure: 10, flow: 58.0, power: 2.90 },
            { pressure: 12, flow: 57.0, power: 3.60 },
            { pressure: 14, flow: 55.0, power: 4.20 }
          ]
        }
      },
      {
        model: 'FBE 1" A',
        maxFlow: 74.0,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 50.0, power: 0.75 },
            { pressure: 2, flow: 49.0, power: 1.00 },
            { pressure: 4, flow: 48.0, power: 1.50 },
            { pressure: 6, flow: 47.0, power: 2.00 },
            { pressure: 8, flow: 45.5, power: 2.50 },
            { pressure: 10, flow: 44.0, power: 3.00 },
            { pressure: 12, flow: 42.0, power: 3.70 },
            { pressure: 14, flow: 40.0, power: 4.00 },
            { pressure: 16, flow: 38.0, power: 4.50 },
            { pressure: 18, flow: 35.0, power: 5.20 },
            { pressure: 20, flow: 33.0, power: 6.00 },
            { pressure: 22, flow: 31.0, power: 7.50 }
          ],
          "1750": [
            { pressure: 0, flow: 74.0, power: 0.75 },
            { pressure: 2, flow: 72.5, power: 1.00 },
            { pressure: 4, flow: 71.0, power: 1.50 },
            { pressure: 6, flow: 69.0, power: 2.00 },
            { pressure: 8, flow: 67.0, power: 3.00 },
            { pressure: 10, flow: 65.0, power: 3.50 },
            { pressure: 12, flow: 63.0, power: 4.00 },
            { pressure: 14, flow: 60.0, power: 4.50 }
          ]
        }
      },
      {
        model: 'FBE 1" D',
        maxFlow: 88.6,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 60.0, power: 0.75 },
            { pressure: 2, flow: 59.5, power: 1.00 },
            { pressure: 4, flow: 59.0, power: 1.50 },
            { pressure: 6, flow: 58.5, power: 2.00 },
            { pressure: 8, flow: 58.0, power: 2.50 },
            { pressure: 10, flow: 57.0, power: 3.00 },
            { pressure: 12, flow: 56.0, power: 3.70 },
            { pressure: 14, flow: 55.0, power: 4.50 },
            { pressure: 16, flow: 54.0, power: 5.20 },
            { pressure: 18, flow: 52.0, power: 6.00 },
            { pressure: 20, flow: 50.0, power: 7.00 },
            { pressure: 22, flow: 48.0, power: 8.00 }
          ],
          "1750": [
            { pressure: 0, flow: 88.6, power: 0.75 },
            { pressure: 2, flow: 88.0, power: 1.00 },
            { pressure: 4, flow: 87.3, power: 1.50 },
            { pressure: 6, flow: 86.6, power: 2.20 },
            { pressure: 8, flow: 85.8, power: 3.10 },
            { pressure: 10, flow: 84.9, power: 3.90 },
            { pressure: 12, flow: 83.8, power: 4.90 }
          ]
        }
      },
      {
        model: 'FBE 1" DA',
        maxFlow: 112.0,
        maxRPM: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "1150": [
            { pressure: 0, flow: 75.0, power: 1.00 },
            { pressure: 2, flow: 74.0, power: 1.50 },
            { pressure: 4, flow: 73.0, power: 2.00 },
            { pressure: 6, flow: 71.5, power: 2.50 },
            { pressure: 8, flow: 70.0, power: 3.00 },
            { pressure: 10, flow: 68.5, power: 3.70 },
            { pressure: 12, flow: 67.0, power: 4.50 },
            { pressure: 14, flow: 65.0, power: 5.20 },
            { pressure: 16, flow: 63.0, power: 6.00 },
            { pressure: 18, flow: 61.0, power: 7.20 },
            { pressure: 20, flow: 59.0, power: 8.50 },
            { pressure: 22, flow: 56.0, power: 10.00 }
          ],
          "1750": [
            { pressure: 0, flow: 112.0, power: 1.00 },
            { pressure: 2, flow: 110.0, power: 1.50 },
            { pressure: 4, flow: 108.0, power: 2.40 },
            { pressure: 6, flow: 106.0, power: 3.30 },
            { pressure: 8, flow: 104.0, power: 4.00 },
            { pressure: 10, flow: 101.0, power: 4.90 },
            { pressure: 12, flow: 98.0, power: 5.90 }
          ]
        }
      }
    ]
  },
  // FBE 1.1/2"
  {
    diameter: "1.5",
    displayDiameter: '1.1/2"',
    maxFlow: 200.0,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 1.1/2"',
        maxFlow: 150.0,
        maxRPM: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 70.0, power: 1.50 },
            { pressure: 2, flow: 69.0, power: 2.00 },
            { pressure: 4, flow: 68.0, power: 2.50 },
            { pressure: 6, flow: 67.0, power: 3.00 },
            { pressure: 8, flow: 66.0, power: 3.50 },
            { pressure: 10, flow: 64.0, power: 4.00 },
            { pressure: 12, flow: 62.0, power: 4.50 },
            { pressure: 14, flow: 60.0, power: 5.00 }
          ],
          "1150": [
            { pressure: 0, flow: 100.0, power: 3.00 },
            { pressure: 2, flow: 99.0, power: 4.00 },
            { pressure: 4, flow: 98.0, power: 5.00 },
            { pressure: 6, flow: 97.0, power: 6.00 },
            { pressure: 8, flow: 96.0, power: 7.00 },
            { pressure: 10, flow: 95.0, power: 8.00 },
            { pressure: 12, flow: 93.0, power: 9.00 },
            { pressure: 14, flow: 90.0, power: 10.00 }
          ],
          "1750": [
            { pressure: 0, flow: 150.0, power: 4.50 },
            { pressure: 2, flow: 148.5, power: 6.00 },
            { pressure: 4, flow: 147.0, power: 7.50 },
            { pressure: 6, flow: 145.5, power: 9.00 },
            { pressure: 8, flow: 144.0, power: 10.50 },
            { pressure: 10, flow: 142.5, power: 12.00 },
            { pressure: 12, flow: 139.5, power: 13.50 },
            { pressure: 14, flow: 135.0, power: 15.00 }
          ]
        }
      },
      {
        model: 'FBE 1.1/2" A',
        maxFlow: 200.0,
        maxRPM: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 94.0, power: 1.75 },
            { pressure: 2, flow: 92.0, power: 2.00 },
            { pressure: 4, flow: 90.0, power: 2.50 },
            { pressure: 6, flow: 88.0, power: 3.00 },
            { pressure: 8, flow: 86.0, power: 3.80 },
            { pressure: 10, flow: 84.0, power: 4.40 },
            { pressure: 12, flow: 81.0, power: 4.75 },
            { pressure: 14, flow: 78.0, power: 5.20 }
          ],
          "1150": [
            { pressure: 0, flow: 133.0, power: 3.50 },
            { pressure: 2, flow: 131.0, power: 4.00 },
            { pressure: 4, flow: 129.0, power: 5.00 },
            { pressure: 6, flow: 127.0, power: 6.00 },
            { pressure: 8, flow: 125.0, power: 7.50 },
            { pressure: 10, flow: 123.0, power: 8.70 },
            { pressure: 12, flow: 121.0, power: 9.50 },
            { pressure: 14, flow: 117.0, power: 10.40 }
          ],
          "1750": [
            { pressure: 0, flow: 200.0, power: 5.25 },
            { pressure: 2, flow: 196.5, power: 6.00 },
            { pressure: 4, flow: 193.5, power: 7.50 },
            { pressure: 6, flow: 190.5, power: 9.00 },
            { pressure: 8, flow: 187.5, power: 11.25 },
            { pressure: 10, flow: 184.5, power: 13.00 },
            { pressure: 12, flow: 181.5, power: 14.25 },
            { pressure: 14, flow: 175.5, power: 15.60 }
          ]
        }
      }
    ]
  },
  // FBE 2"
  {
    diameter: "2",
    displayDiameter: '2"',
    maxFlow: 420.0,
    maxRPM: 1750,
    variations: [
      {
        model: 'FBE 2"',
        maxFlow: 300.0,
        maxRPM: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 139.0, power: 2.80 },
            { pressure: 2, flow: 138.0, power: 3.00 },
            { pressure: 4, flow: 137.0, power: 3.50 },
            { pressure: 6, flow: 136.0, power: 4.20 },
            { pressure: 8, flow: 135.0, power: 5.30 },
            { pressure: 10, flow: 133.0, power: 6.30 },
            { pressure: 12, flow: 131.0, power: 7.90 },
            { pressure: 14, flow: 129.0, power: 9.30 }
          ],
          "1150": [
            { pressure: 0, flow: 200.0, power: 4.50 },
            { pressure: 2, flow: 198.0, power: 6.00 },
            { pressure: 4, flow: 196.0, power: 7.00 },
            { pressure: 6, flow: 194.0, power: 8.00 },
            { pressure: 8, flow: 192.0, power: 9.00 },
            { pressure: 10, flow: 190.0, power: 10.00 },
            { pressure: 12, flow: 188.0, power: 11.00 },
            { pressure: 14, flow: 186.0, power: 13.50 }
          ],
          "1750": [
            { pressure: 0, flow: 300.0, power: 6.80 },
            { pressure: 2, flow: 297.0, power: 9.00 },
            { pressure: 4, flow: 294.0, power: 10.50 },
            { pressure: 6, flow: 291.0, power: 12.00 },
            { pressure: 8, flow: 288.0, power: 13.50 },
            { pressure: 10, flow: 285.0, power: 15.00 },
            { pressure: 12, flow: 282.0, power: 16.50 },
            { pressure: 14, flow: 279.0, power: 20.20 }
          ]
        }
      },
      {
        model: 'FBE 2" A',
        maxFlow: 420.0,
        maxRPM: 1750,
        maxPressure: 12,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 188.0, power: 3.80 },
            { pressure: 2, flow: 187.0, power: 4.50 },
            { pressure: 4, flow: 186.0, power: 5.50 },
            { pressure: 6, flow: 185.0, power: 6.00 },
            { pressure: 8, flow: 184.0, power: 7.50 },
            { pressure: 10, flow: 182.0, power: 9.00 },
            { pressure: 12, flow: 181.0, power: 10.00 }
          ],
          "1150": [
            { pressure: 0, flow: 275.0, power: 7.50 },
            { pressure: 2, flow: 269.0, power: 9.00 },
            { pressure: 4, flow: 267.0, power: 11.00 },
            { pressure: 6, flow: 264.0, power: 12.00 },
            { pressure: 8, flow: 261.0, power: 15.00 },
            { pressure: 10, flow: 258.0, power: 18.00 },
            { pressure: 12, flow: 255.0, power: 20.00 }
          ],
          "1750": [
            { pressure: 0, flow: 420.0, power: 11.40 },
            { pressure: 2, flow: 408.0, power: 13.70 },
            { pressure: 4, flow: 405.0, power: 16.70 },
            { pressure: 6, flow: 401.0, power: 18.20 },
            { pressure: 8, flow: 396.0, power: 22.80 },
            { pressure: 10, flow: 392.0, power: 27.30 },
            { pressure: 12, flow: 386.0, power: 30.40 }
          ]
        }
      }
    ]
  },
  // FBE 3"
  {
    diameter: "3",
    displayDiameter: '3"',
    maxFlow: 600.0,
    maxRPM: 1150,
    variations: [
      {
        model: 'FBE 3"',
        maxFlow: 500.0,
        maxRPM: 1150,
        maxPressure: 12,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 351.0, power: 6.00 },
            { pressure: 2, flow: 348.0, power: 6.50 },
            { pressure: 4, flow: 347.0, power: 7.50 },
            { pressure: 6, flow: 345.0, power: 9.00 },
            { pressure: 8, flow: 343.0, power: 13.00 },
            { pressure: 10, flow: 340.0, power: 17.20 },
            { pressure: 12, flow: 337.0, power: 21.40 }
          ],
          "1150": [
            { pressure: 0, flow: 500.0, power: 10.00 },
            { pressure: 2, flow: 498.0, power: 12.00 },
            { pressure: 4, flow: 496.0, power: 15.00 },
            { pressure: 6, flow: 493.0, power: 18.00 },
            { pressure: 8, flow: 490.0, power: 20.00 },
            { pressure: 10, flow: 486.0, power: 25.00 }
          ]
        }
      },
      {
        model: 'FBE 3" M9',
        maxFlow: 600.0,
        maxRPM: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 420.0, power: 6.40 },
            { pressure: 2, flow: 418.0, power: 7.50 },
            { pressure: 4, flow: 416.0, power: 8.50 },
            { pressure: 6, flow: 414.0, power: 12.00 },
            { pressure: 8, flow: 411.0, power: 17.00 }
          ],
          "1150": [
            { pressure: 0, flow: 600.0, power: 12.50 },
            { pressure: 2, flow: 597.0, power: 15.00 },
            { pressure: 4, flow: 595.0, power: 19.00 },
            { pressure: 6, flow: 592.0, power: 21.00 },
            { pressure: 8, flow: 588.0, power: 25.00 }
          ]
        }
      }
    ]
  },
  // FBE 4"
  {
    diameter: "4",
    displayDiameter: '4"',
    maxFlow: 1350.0,
    maxRPM: 1150,
    variations: [
      {
        model: 'FBE 4" M6',
        maxFlow: 650.0,
        maxRPM: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 455.0, power: 6.00 },
            { pressure: 2, flow: 452.0, power: 8.00 },
            { pressure: 4, flow: 448.0, power: 11.00 },
            { pressure: 6, flow: 444.0, power: 12.00 },
            { pressure: 8, flow: 440.0, power: 17.00 }
          ],
          "1150": [
            { pressure: 0, flow: 650.0, power: 11.00 },
            { pressure: 2, flow: 645.0, power: 15.00 },
            { pressure: 4, flow: 640.0, power: 21.00 },
            { pressure: 6, flow: 635.0, power: 23.00 },
            { pressure: 8, flow: 630.0, power: 25.00 }
          ]
        }
      },
      {
        model: 'FBE 4" M8',
        maxFlow: 1000.0,
        maxRPM: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 700.0, power: 7.50 },
            { pressure: 2, flow: 696.0, power: 10.00 },
            { pressure: 4, flow: 692.0, power: 15.00 },
            { pressure: 6, flow: 688.0, power: 21.00 },
            { pressure: 8, flow: 684.0, power: 30.00 }
          ],
          "1150": [
            { pressure: 0, flow: 1000.0, power: 15.00 },
            { pressure: 2, flow: 995.0, power: 20.00 },
            { pressure: 4, flow: 990.0, power: 25.00 },
            { pressure: 6, flow: 985.0, power: 30.00 },
            { pressure: 8, flow: 980.0, power: 35.00 }
          ]
        }
      },
      {
        model: 'FBE 4" M12',
        maxFlow: 1350.0,
        maxRPM: 1150,
        maxPressure: 6,
        maxViscosity: "100.000 SSU",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: "Engrenagens de dentes helicoidais",
          sealing: "Vedação por gaxeta teflonada ou selo mecânico",
          bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
          construction: "Construção em ferro fundido, aço inox ou aço carbono"
        },
        optionals: [
          "Válvula de alívio incorporada (retorna até 30% do produto)",
          "Câmara de aquecimento",
          "Conjunto moto-bomba completo",
          "Mancal externo"
        ],
        flowTable: {
          "850": [
            { pressure: 0, flow: 945.0, power: 10.00 },
            { pressure: 2, flow: 940.0, power: 12.50 },
            { pressure: 4, flow: 935.0, power: 18.00 },
            { pressure: 6, flow: 930.0, power: 26.00 }
          ],
          "1150": [
            { pressure: 0, flow: 1350.0, power: 20.00 },
            { pressure: 2, flow: 1343.0, power: 25.00 },
            { pressure: 4, flow: 1336.0, power: 30.00 },
            { pressure: 6, flow: 1329.0, power: 35.00 }
          ]
        }
      }
    ]
  }
];

// Helper function to get WhatsApp URL
export const getWhatsAppUrl = (message: string = "") => {
  const phoneNumber = "5511943653399"; // Same as footer WhatsApp
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};