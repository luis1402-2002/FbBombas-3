// Continuation of FBE Complete Data - Medium and Large Pumps

import { FBEModel } from './fbeCompleteData';

export const fbeMediumLargePumps2: FBEModel[] = [
  {
    id: 'fbe-1-5',
    diameter: '1.1/2"',
    maxFlow: '200',
    maxRPM: '1750',
    maxPressure: '14',
    hasVariations: true,
    variations: [
      {
        id: 'fbe-1-5-standard',
        maxFlow: '150 L/min',
        specs: {
          maxFlow: '150 L/min',
          maxRPM: '1750 RPM',
          maxPressure: '14 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1750,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [150.00, 148.50, 147.00, 145.50, 144.00, 142.50, 139.50, 135.00],
            power: [4.50, 6.00, 7.50, 9.00, 10.50, 12.00, 13.50, 15.00]
          },
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [100.00, 99.00, 98.00, 97.00, 96.00, 95.00, 93.00, 90.00],
            power: [3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [70.00, 69.00, 68.00, 67.00, 66.00, 64.00, 62.00, 60.00],
            power: [1.50, 2.00, 2.50, 3.00, 3.50, 4.00, 4.50, 5.00]
          }
        ]
      },
      {
        id: 'fbe-1-5-a',
        maxFlow: '200 L/min',
        specs: {
          maxFlow: '200 L/min',
          maxRPM: '1750 RPM',
          maxPressure: '14 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1750,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [200.00, 196.50, 193.50, 190.50, 187.50, 184.50, 181.50, 175.50],
            power: [5.25, 6.00, 7.50, 9.00, 11.25, 13.00, 14.25, 15.60]
          },
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [133.00, 131.00, 129.00, 127.00, 125.00, 123.00, 121.00, 117.00],
            power: [3.50, 4.00, 5.00, 6.00, 7.50, 8.70, 9.50, 10.40]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [94.00, 92.00, 90.00, 88.00, 86.00, 84.00, 81.00, 78.00],
            power: [1.75, 2.00, 2.50, 3.00, 3.80, 4.40, 4.75, 5.20]
          }
        ]
      }
    ]
  },
  {
    id: 'fbe-2',
    diameter: '2"',
    maxFlow: '420',
    maxRPM: '1750',
    maxPressure: '14',
    hasVariations: true,
    variations: [
      {
        id: 'fbe-2-standard',
        maxFlow: '300 L/min',
        specs: {
          maxFlow: '300 L/min',
          maxRPM: '1750 RPM',
          maxPressure: '14 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1750,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [300.00, 297.00, 294.00, 291.00, 288.00, 285.00, 282.00, 279.00],
            power: [6.80, 9.00, 10.50, 12.00, 13.50, 15.00, 16.50, 20.20]
          },
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [200.00, 198.00, 196.00, 194.00, 192.00, 190.00, 188.00, 186.00],
            power: [4.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 13.50]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8, 10, 12, 14],
            flow: [139.00, 138.00, 137.00, 136.00, 135.00, 133.00, 131.00, 129.00],
            power: [2.80, 3.00, 3.50, 4.20, 5.30, 6.30, 7.90, 9.30]
          }
        ]
      },
      {
        id: 'fbe-2-a',
        maxFlow: '420 L/min',
        specs: {
          maxFlow: '420 L/min',
          maxRPM: '1750 RPM',
          maxPressure: '12 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1750,
            pressure: [0, 2, 4, 6, 8, 10, 12],
            flow: [420.00, 408.00, 405.00, 401.00, 396.00, 392.00, 386.00],
            power: [11.40, 13.70, 16.70, 18.20, 22.80, 27.30, 30.40]
          },
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8, 10, 12],
            flow: [275.00, 269.00, 267.00, 264.00, 261.00, 258.00, 255.00],
            power: [7.50, 9.00, 11.00, 12.00, 15.00, 18.00, 20.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8, 10, 12],
            flow: [188.00, 187.00, 186.00, 185.00, 184.00, 182.00, 181.00],
            power: [3.80, 4.50, 5.50, 6.00, 7.50, 9.00, 10.00]
          }
        ]
      }
    ]
  },
  {
    id: 'fbe-3',
    diameter: '3"',
    maxFlow: '600',
    maxRPM: '1150',
    maxPressure: '12',
    hasVariations: true,
    variations: [
      {
        id: 'fbe-3-standard',
        maxFlow: '500 L/min',
        maxPressure: '12',
        specs: {
          maxFlow: '500 L/min',
          maxRPM: '1150 RPM',
          maxPressure: '12 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8, 10, 12],
            flow: [500.00, 498.00, 496.00, 493.00, 490.00, 486.00, 482.00],
            power: [10.00, 12.00, 15.00, 18.00, 20.00, 25.00, 25.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8, 10, 12],
            flow: [351.00, 348.00, 347.00, 345.00, 343.00, 340.00, 337.00],
            power: [6.00, 6.50, 7.50, 9.00, 13.00, 17.20, 21.40]
          }
        ]
      },
      {
        id: 'fbe-3-m9',
        maxFlow: '600 L/min',
        maxPressure: '8',
        specs: {
          maxFlow: '600 L/min',
          maxRPM: '1150 RPM',
          maxPressure: '8 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8],
            flow: [600.00, 597.00, 595.00, 592.00, 588.00],
            power: [12.50, 15.00, 19.00, 21.00, 25.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8],
            flow: [420.00, 418.00, 416.00, 414.00, 411.00],
            power: [6.40, 7.50, 8.50, 12.00, 17.00]
          }
        ]
      }
    ]
  },
  {
    id: 'fbe-4',
    diameter: '4"',
    maxFlow: '1.350',
    maxRPM: '1150',
    maxPressure: '8',
    hasVariations: true,
    variations: [
      {
        id: 'fbe-4-m6',
        maxFlow: '650 L/min',
        maxPressure: '8',
        specs: {
          maxFlow: '650 L/min',
          maxRPM: '1150 RPM',
          maxPressure: '8 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8],
            flow: [650.00, 645.00, 640.00, 635.00, 630.00],
            power: [11.00, 15.00, 21.00, 23.00, 25.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8],
            flow: [455.00, 452.00, 448.00, 444.00, 440.00],
            power: [6.00, 8.00, 11.00, 12.00, 17.00]
          }
        ]
      },
      {
        id: 'fbe-4-m8',
        maxFlow: '1.000 L/min',
        maxPressure: '8',
        specs: {
          maxFlow: '1.000 L/min',
          maxRPM: '1150 RPM',
          maxPressure: '8 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6, 8],
            flow: [1000.00, 995.00, 990.00, 985.00, 980.00],
            power: [15.00, 20.00, 25.00, 30.00, 35.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6, 8],
            flow: [700.00, 696.00, 692.00, 688.00, 684.00],
            power: [7.50, 10.00, 15.00, 21.00, 30.00]
          }
        ]
      },
      {
        id: 'fbe-4-m12',
        maxFlow: '1.350 L/min',
        maxPressure: '6',
        specs: {
          maxFlow: '1.350 L/min',
          maxRPM: '1150 RPM',
          maxPressure: '6 bar',
          maxViscosity: '100.000 SSU',
          connection: {
            pt: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            en: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            es: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1'
          },
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
              'Câmara de aquecimento',
              'Conjunto moto-bomba completo',
              'Mancal externo'
            ],
            en: [
              'Built-in relief valve (returns up to 30% of product)',
              'Heating chamber',
              'Complete motor-pump assembly',
              'External bearing'
            ],
            es: [
              'Válvula de alivio incorporada (retorna hasta 30% del producto)',
              'Cámara de calentamiento',
              'Conjunto motor-bomba completo',
              'Cojinete externo'
            ]
          }
        },
        flowData: [
          {
            rpm: 1150,
            pressure: [0, 2, 4, 6],
            flow: [1350.00, 1343.00, 1336.00, 1329.00],
            power: [20.00, 25.00, 30.00, 35.00]
          },
          {
            rpm: 850,
            pressure: [0, 2, 4, 6],
            flow: [945.00, 940.00, 935.00, 930.00],
            power: [10.00, 12.50, 18.00, 26.00]
          }
        ]
      }
    ]
  }
];

// Export all large pumps
export default fbeMediumLargePumps2;