// Gear Pumps (FBE Series) Complete Data
export interface GearPumpModel {
  id: string;
  name: string;
  diameter: string;
  maxFlow: number; // L/min
  maxRotation: number; // RPM
  maxPressure: number; // bar
  maxViscosity: string; // SSU
  image: string;
  technicalDrawing: string;
  specifications: {
    suction: string;
    gears: string;
    sealing: string;
    bearings: string;
    construction: string;
  };
  optionals: string[];
  flowTable: {
    rpm: number;
    pressureData: {
      pressure: number;
      flow: number | null;
      power: number | null;
    }[];
  }[];
}

export interface GearPumpSize {
  diameter: string;
  displayName: string;
  models: GearPumpModel[];
  // For sizes with single model
  directModel?: GearPumpModel;
}

// Flow table data for all models
const flowTables = {
  "1/8": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 3.50, power: 0.05 },
        { pressure: 2, flow: 3.40, power: 0.07 },
        { pressure: 4, flow: 3.30, power: 0.09 },
        { pressure: 6, flow: 3.20, power: 0.11 },
        { pressure: 8, flow: 3.10, power: 0.13 },
        { pressure: 10, flow: 3.00, power: 0.15 },
        { pressure: 12, flow: 2.90, power: 0.18 },
        { pressure: 14, flow: 2.70, power: 0.21 },
        { pressure: 16, flow: 2.50, power: 0.24 },
        { pressure: 18, flow: 2.30, power: 0.27 },
        { pressure: 20, flow: 2.00, power: 0.30 },
        { pressure: 22, flow: 1.70, power: 0.34 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 5.15, power: 0.07 },
        { pressure: 2, flow: 5.00, power: 0.09 },
        { pressure: 4, flow: 4.85, power: 0.12 },
        { pressure: 6, flow: 4.70, power: 0.14 },
        { pressure: 8, flow: 4.55, power: 0.17 },
        { pressure: 10, flow: 4.40, power: 0.19 },
        { pressure: 12, flow: 4.25, power: 0.23 },
        { pressure: 14, flow: 4.10, power: 0.27 },
        { pressure: 16, flow: 3.95, power: 0.31 }
      ]
    }
  ],
  "1/4": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 6.00, power: 0.10 },
        { pressure: 2, flow: 5.90, power: 0.14 },
        { pressure: 4, flow: 5.80, power: 0.18 },
        { pressure: 6, flow: 5.70, power: 0.22 },
        { pressure: 8, flow: 5.60, power: 0.26 },
        { pressure: 10, flow: 5.40, power: 0.30 },
        { pressure: 12, flow: 5.20, power: 0.36 },
        { pressure: 14, flow: 5.00, power: 0.42 },
        { pressure: 16, flow: 4.60, power: 0.48 },
        { pressure: 18, flow: 4.20, power: 0.54 },
        { pressure: 20, flow: 3.70, power: 0.60 },
        { pressure: 22, flow: 3.10, power: 0.68 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 8.90, power: 0.13 },
        { pressure: 2, flow: 8.70, power: 0.18 },
        { pressure: 4, flow: 8.50, power: 0.23 },
        { pressure: 6, flow: 8.30, power: 0.28 },
        { pressure: 8, flow: 8.10, power: 0.33 },
        { pressure: 10, flow: 7.90, power: 0.39 },
        { pressure: 12, flow: 7.70, power: 0.46 },
        { pressure: 14, flow: 7.40, power: 0.54 },
        { pressure: 16, flow: 6.80, power: 0.62 }
      ]
    }
  ],
  "3/8": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 9.50, power: 0.15 },
        { pressure: 2, flow: 9.40, power: 0.17 },
        { pressure: 4, flow: 9.30, power: 0.23 },
        { pressure: 6, flow: 9.20, power: 0.42 },
        { pressure: 8, flow: 9.10, power: 0.52 },
        { pressure: 10, flow: 8.90, power: 0.65 },
        { pressure: 12, flow: 8.60, power: 0.76 },
        { pressure: 14, flow: 8.20, power: 0.88 },
        { pressure: 16, flow: 7.70, power: 1.02 },
        { pressure: 18, flow: 7.10, power: 1.30 },
        { pressure: 20, flow: 6.50, power: 1.70 },
        { pressure: 22, flow: 5.80, power: 2.10 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 14.00, power: 0.19 },
        { pressure: 2, flow: 13.90, power: 0.22 },
        { pressure: 4, flow: 13.80, power: 0.30 },
        { pressure: 6, flow: 13.60, power: 0.54 },
        { pressure: 8, flow: 13.40, power: 0.67 },
        { pressure: 10, flow: 13.10, power: 0.80 },
        { pressure: 12, flow: 12.70, power: 0.91 },
        { pressure: 14, flow: 12.10, power: 1.14 },
        { pressure: 16, flow: 11.40, power: null }
      ]
    }
  ],
  "1/2": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 12.00, power: 0.30 },
        { pressure: 2, flow: 11.90, power: 0.40 },
        { pressure: 4, flow: 11.80, power: 0.50 },
        { pressure: 6, flow: 11.70, power: 0.62 },
        { pressure: 8, flow: 11.60, power: 0.75 },
        { pressure: 10, flow: 11.40, power: 0.83 },
        { pressure: 12, flow: 11.20, power: 0.92 },
        { pressure: 14, flow: 10.80, power: 1.00 },
        { pressure: 16, flow: 10.20, power: 1.40 },
        { pressure: 18, flow: 9.60, power: 1.60 },
        { pressure: 20, flow: 9.00, power: 1.90 },
        { pressure: 22, flow: 8.20, power: 2.10 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 17.70, power: 0.39 },
        { pressure: 2, flow: 17.60, power: 0.52 },
        { pressure: 4, flow: 17.50, power: 0.65 },
        { pressure: 6, flow: 17.30, power: 0.80 },
        { pressure: 8, flow: 17.10, power: 0.97 },
        { pressure: 10, flow: 16.80, power: 1.07 },
        { pressure: 12, flow: 16.40, power: 1.18 },
        { pressure: 14, flow: 16.00, power: 1.30 },
        { pressure: 16, flow: 15.00, power: 1.82 }
      ]
    }
  ],
  "3/4": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 30.00, power: 0.40 },
        { pressure: 2, flow: 29.50, power: 0.50 },
        { pressure: 4, flow: 29.00, power: 0.75 },
        { pressure: 6, flow: 28.50, power: 1.00 },
        { pressure: 8, flow: 28.00, power: 1.40 },
        { pressure: 10, flow: 27.00, power: 1.75 },
        { pressure: 12, flow: 26.00, power: 2.00 },
        { pressure: 14, flow: 25.00, power: 2.30 },
        { pressure: 16, flow: 24.00, power: 2.70 },
        { pressure: 18, flow: 22.00, power: 3.00 },
        { pressure: 20, flow: 20.00, power: 3.20 },
        { pressure: 22, flow: 17.00, power: 3.50 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 44.40, power: 0.40 },
        { pressure: 2, flow: 43.60, power: 0.50 },
        { pressure: 4, flow: 42.80, power: 0.90 },
        { pressure: 6, flow: 42.00, power: 1.20 },
        { pressure: 8, flow: 41.00, power: 1.70 },
        { pressure: 10, flow: 40.00, power: 2.00 },
        { pressure: 12, flow: 38.00, power: 2.40 },
        { pressure: 14, flow: 37.00, power: 2.90 }
      ]
    }
  ],
  "1": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 42.00, power: 0.40 },
        { pressure: 2, flow: 41.50, power: 0.50 },
        { pressure: 4, flow: 41.00, power: 0.75 },
        { pressure: 6, flow: 40.50, power: 1.00 },
        { pressure: 8, flow: 40.00, power: 1.50 },
        { pressure: 10, flow: 39.00, power: 2.00 },
        { pressure: 12, flow: 38.00, power: 2.50 },
        { pressure: 14, flow: 37.00, power: 3.00 },
        { pressure: 16, flow: 36.00, power: 3.50 },
        { pressure: 18, flow: 34.00, power: 4.00 },
        { pressure: 20, flow: 32.00, power: 4.50 },
        { pressure: 22, flow: 29.00, power: 5.00 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 62.00, power: 0.60 },
        { pressure: 2, flow: 61.50, power: 0.70 },
        { pressure: 4, flow: 61.00, power: 1.10 },
        { pressure: 6, flow: 60.00, power: 1.70 },
        { pressure: 8, flow: 59.00, power: 2.30 },
        { pressure: 10, flow: 58.00, power: 2.90 },
        { pressure: 12, flow: 57.00, power: 3.60 },
        { pressure: 14, flow: 55.00, power: 4.20 }
      ]
    }
  ],
  "1A": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 50.00, power: 0.75 },
        { pressure: 2, flow: 49.00, power: 1.00 },
        { pressure: 4, flow: 48.00, power: 1.50 },
        { pressure: 6, flow: 47.00, power: 2.00 },
        { pressure: 8, flow: 45.50, power: 2.50 },
        { pressure: 10, flow: 44.00, power: 3.00 },
        { pressure: 12, flow: 42.00, power: 3.70 },
        { pressure: 14, flow: 40.00, power: 4.00 },
        { pressure: 16, flow: 38.00, power: 4.50 },
        { pressure: 18, flow: 35.00, power: 5.20 },
        { pressure: 20, flow: 33.00, power: 6.00 },
        { pressure: 22, flow: 31.00, power: 7.50 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 74.00, power: 0.75 },
        { pressure: 2, flow: 72.50, power: 1.00 },
        { pressure: 4, flow: 71.00, power: 1.50 },
        { pressure: 6, flow: 69.00, power: 2.00 },
        { pressure: 8, flow: 67.00, power: 3.00 },
        { pressure: 10, flow: 65.00, power: 3.50 },
        { pressure: 12, flow: 63.00, power: 4.00 },
        { pressure: 14, flow: 60.00, power: 4.50 }
      ]
    }
  ],
  "1D": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 60.00, power: 0.75 },
        { pressure: 2, flow: 59.50, power: 1.00 },
        { pressure: 4, flow: 59.00, power: 1.50 },
        { pressure: 6, flow: 58.50, power: 2.00 },
        { pressure: 8, flow: 58.00, power: 2.50 },
        { pressure: 10, flow: 57.00, power: 3.00 },
        { pressure: 12, flow: 56.00, power: 3.70 },
        { pressure: 14, flow: 55.00, power: 4.50 },
        { pressure: 16, flow: 54.00, power: 5.20 },
        { pressure: 18, flow: 52.00, power: 6.00 },
        { pressure: 20, flow: 50.00, power: 7.00 },
        { pressure: 22, flow: 48.00, power: 8.00 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 88.60, power: 0.75 },
        { pressure: 2, flow: 88.00, power: 1.00 },
        { pressure: 4, flow: 87.30, power: 1.50 },
        { pressure: 6, flow: 86.60, power: 2.20 },
        { pressure: 8, flow: 85.80, power: 3.10 },
        { pressure: 10, flow: 84.90, power: 3.90 },
        { pressure: 12, flow: 83.80, power: 4.90 }
      ]
    }
  ],
  "1DA": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 75.00, power: 1.00 },
        { pressure: 2, flow: 74.00, power: 1.50 },
        { pressure: 4, flow: 73.00, power: 2.00 },
        { pressure: 6, flow: 71.50, power: 2.50 },
        { pressure: 8, flow: 70.00, power: 3.00 },
        { pressure: 10, flow: 68.50, power: 3.70 },
        { pressure: 12, flow: 67.00, power: 4.50 },
        { pressure: 14, flow: 65.00, power: 5.20 },
        { pressure: 16, flow: 63.00, power: 6.00 },
        { pressure: 18, flow: 61.00, power: 7.20 },
        { pressure: 20, flow: 59.00, power: 8.50 },
        { pressure: 22, flow: 56.00, power: 10.00 }
      ]
    },
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 112.00, power: 1.00 },
        { pressure: 2, flow: 110.00, power: 1.50 },
        { pressure: 4, flow: 108.00, power: 2.40 },
        { pressure: 6, flow: 106.00, power: 3.30 },
        { pressure: 8, flow: 104.00, power: 4.00 },
        { pressure: 10, flow: 101.00, power: 4.90 },
        { pressure: 12, flow: 98.00, power: 5.90 }
      ]
    }
  ],
  "1.1/2": [
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 150.00, power: 4.50 },
        { pressure: 2, flow: 148.50, power: 6.00 },
        { pressure: 4, flow: 147.00, power: 7.50 },
        { pressure: 6, flow: 145.50, power: 9.00 },
        { pressure: 8, flow: 144.00, power: 10.50 },
        { pressure: 10, flow: 142.50, power: 12.00 },
        { pressure: 12, flow: 139.50, power: 13.50 },
        { pressure: 14, flow: 135.00, power: 15.00 }
      ]
    },
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 100.00, power: 3.00 },
        { pressure: 2, flow: 99.00, power: 4.00 },
        { pressure: 4, flow: 98.00, power: 5.00 },
        { pressure: 6, flow: 97.00, power: 6.00 },
        { pressure: 8, flow: 96.00, power: 7.00 },
        { pressure: 10, flow: 95.00, power: 8.00 },
        { pressure: 12, flow: 93.00, power: 9.00 },
        { pressure: 14, flow: 90.00, power: 10.00 }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 70.00, power: 1.50 },
        { pressure: 2, flow: 69.00, power: 2.00 },
        { pressure: 4, flow: 68.00, power: 2.50 },
        { pressure: 6, flow: 67.00, power: 3.00 },
        { pressure: 8, flow: 66.00, power: 3.50 },
        { pressure: 10, flow: 64.00, power: 4.00 },
        { pressure: 12, flow: 62.00, power: 4.50 },
        { pressure: 14, flow: 60.00, power: 5.00 }
      ]
    }
  ],
  "1.1/2A": [
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 200.00, power: 5.25 },
        { pressure: 2, flow: 196.50, power: 6.00 },
        { pressure: 4, flow: 193.50, power: 7.50 },
        { pressure: 6, flow: 190.50, power: 9.00 },
        { pressure: 8, flow: 187.50, power: 11.25 },
        { pressure: 10, flow: 184.50, power: 13.00 },
        { pressure: 12, flow: 181.50, power: 14.25 },
        { pressure: 14, flow: 175.50, power: 15.60 }
      ]
    },
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 133.00, power: 3.50 },
        { pressure: 2, flow: 131.00, power: 4.00 },
        { pressure: 4, flow: 129.00, power: 5.00 },
        { pressure: 6, flow: 127.00, power: 6.00 },
        { pressure: 8, flow: 125.00, power: 7.50 },
        { pressure: 10, flow: 123.00, power: 8.70 },
        { pressure: 12, flow: 121.00, power: 9.50 },
        { pressure: 14, flow: 117.00, power: 10.40 }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 94.00, power: 1.75 },
        { pressure: 2, flow: 92.00, power: 2.00 },
        { pressure: 4, flow: 90.00, power: 2.50 },
        { pressure: 6, flow: 88.00, power: 3.00 },
        { pressure: 8, flow: 86.00, power: 3.80 },
        { pressure: 10, flow: 84.00, power: 4.40 },
        { pressure: 12, flow: 81.00, power: 4.75 },
        { pressure: 14, flow: 78.00, power: 5.20 }
      ]
    }
  ],
  "2": [
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 300.00, power: 6.80 },
        { pressure: 2, flow: 297.00, power: 9.00 },
        { pressure: 4, flow: 294.00, power: 10.50 },
        { pressure: 6, flow: 291.00, power: 12.00 },
        { pressure: 8, flow: 288.00, power: 13.50 },
        { pressure: 10, flow: 285.00, power: 15.00 },
        { pressure: 12, flow: 282.00, power: 16.50 },
        { pressure: 14, flow: 279.00, power: 20.20 }
      ]
    },
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 200.00, power: 4.50 },
        { pressure: 2, flow: 198.00, power: 6.00 },
        { pressure: 4, flow: 196.00, power: 7.00 },
        { pressure: 6, flow: 194.00, power: 8.00 },
        { pressure: 8, flow: 192.00, power: 9.00 },
        { pressure: 10, flow: 190.00, power: 10.00 },
        { pressure: 12, flow: 188.00, power: 11.00 },
        { pressure: 14, flow: 186.00, power: 13.50 }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 139.00, power: 2.80 },
        { pressure: 2, flow: 138.00, power: 3.00 },
        { pressure: 4, flow: 137.00, power: 3.50 },
        { pressure: 6, flow: 136.00, power: 4.20 },
        { pressure: 8, flow: 135.00, power: 5.30 },
        { pressure: 10, flow: 133.00, power: 6.30 },
        { pressure: 12, flow: 131.00, power: 7.90 },
        { pressure: 14, flow: 129.00, power: 9.30 }
      ]
    }
  ],
  "2A": [
    {
      rpm: 1750,
      pressureData: [
        { pressure: 0, flow: 420.00, power: 11.40 },
        { pressure: 2, flow: 408.00, power: 13.70 },
        { pressure: 4, flow: 405.00, power: 16.70 },
        { pressure: 6, flow: 401.00, power: 18.20 },
        { pressure: 8, flow: 396.00, power: 22.80 },
        { pressure: 10, flow: 392.00, power: 27.30 },
        { pressure: 12, flow: 386.00, power: 30.40 }
      ]
    },
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 275.00, power: 7.50 },
        { pressure: 2, flow: 269.00, power: 9.00 },
        { pressure: 4, flow: 267.00, power: 11.00 },
        { pressure: 6, flow: 264.00, power: 12.00 },
        { pressure: 8, flow: 261.00, power: 15.00 },
        { pressure: 10, flow: 258.00, power: 18.00 },
        { pressure: 12, flow: 255.00, power: 20.00 }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 188.00, power: 3.80 },
        { pressure: 2, flow: 187.00, power: 4.50 },
        { pressure: 4, flow: 186.00, power: 5.50 },
        { pressure: 6, flow: 185.00, power: 6.00 },
        { pressure: 8, flow: 184.00, power: 7.50 },
        { pressure: 10, flow: 182.00, power: 9.00 },
        { pressure: 12, flow: 181.00, power: 10.00 }
      ]
    }
  ],
  "3": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 500.00, power: 10.00 },
        { pressure: 2, flow: 498.00, power: 12.00 },
        { pressure: 4, flow: 496.00, power: 15.00 },
        { pressure: 6, flow: 493.00, power: 18.00 },
        { pressure: 8, flow: 490.00, power: 20.00 },
        { pressure: 10, flow: 486.00, power: 25.00 },
        { pressure: 12, flow: null, power: null }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 351.00, power: 6.00 },
        { pressure: 2, flow: 348.00, power: 6.50 },
        { pressure: 4, flow: 347.00, power: 7.50 },
        { pressure: 6, flow: 345.00, power: 9.00 },
        { pressure: 8, flow: 343.00, power: 13.00 },
        { pressure: 10, flow: 340.00, power: 17.20 },
        { pressure: 12, flow: 337.00, power: 21.40 }
      ]
    }
  ],
  "3M9": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 600.00, power: 12.50 },
        { pressure: 2, flow: 597.00, power: 15.00 },
        { pressure: 4, flow: 595.00, power: 19.00 },
        { pressure: 6, flow: 592.00, power: 21.00 },
        { pressure: 8, flow: 588.00, power: 25.00 },
        { pressure: 10, flow: null, power: null }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 420.00, power: 6.40 },
        { pressure: 2, flow: 418.00, power: 7.50 },
        { pressure: 4, flow: 416.00, power: 8.50 },
        { pressure: 6, flow: 414.00, power: 12.00 },
        { pressure: 8, flow: 411.00, power: 17.00 },
        { pressure: 10, flow: null, power: null }
      ]
    }
  ],
  "4M6": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 650.00, power: 11.00 },
        { pressure: 2, flow: 645.00, power: 15.00 },
        { pressure: 4, flow: 640.00, power: 21.00 },
        { pressure: 6, flow: 635.00, power: 23.00 },
        { pressure: 8, flow: 630.00, power: 25.00 },
        { pressure: 10, flow: null, power: null }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 455.00, power: 6.00 },
        { pressure: 2, flow: 452.00, power: 8.00 },
        { pressure: 4, flow: 448.00, power: 11.00 },
        { pressure: 6, flow: 444.00, power: 12.00 },
        { pressure: 8, flow: 440.00, power: 17.00 },
        { pressure: 10, flow: null, power: null }
      ]
    }
  ],
  "4M8": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 1000.00, power: 15.00 },
        { pressure: 2, flow: 995.00, power: 20.00 },
        { pressure: 4, flow: 990.00, power: 25.00 },
        { pressure: 6, flow: 985.00, power: 30.00 },
        { pressure: 8, flow: 980.00, power: 35.00 },
        { pressure: 10, flow: null, power: null }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 700.00, power: 7.50 },
        { pressure: 2, flow: 696.00, power: 10.00 },
        { pressure: 4, flow: 692.00, power: 15.00 },
        { pressure: 6, flow: 688.00, power: 21.00 },
        { pressure: 8, flow: 684.00, power: 30.00 },
        { pressure: 10, flow: null, power: null }
      ]
    }
  ],
  "4M12": [
    {
      rpm: 1150,
      pressureData: [
        { pressure: 0, flow: 1350.00, power: 20.00 },
        { pressure: 2, flow: 1343.00, power: 25.00 },
        { pressure: 4, flow: 1336.00, power: 30.00 },
        { pressure: 6, flow: 1329.00, power: 35.00 },
        { pressure: 8, flow: null, power: null },
        { pressure: 10, flow: null, power: null }
      ]
    },
    {
      rpm: 850,
      pressureData: [
        { pressure: 0, flow: 945.00, power: 10.00 },
        { pressure: 2, flow: 940.00, power: 12.50 },
        { pressure: 4, flow: 935.00, power: 18.00 },
        { pressure: 6, flow: 930.00, power: 26.00 },
        { pressure: 8, flow: null, power: null },
        { pressure: 10, flow: null, power: null }
      ]
    }
  ]
};

// Base specifications for all models
const baseSpecifications = {
  gears: "Engrenagens de dentes helicoidais",
  sealing: "Vedação por gaxeta teflonada ou selo mecânico",
  bearings: "Mancais deslizantes em buchas de bronze TM23 autolubrificantes",
  construction: "Construção em ferro fundido, aço inox ou aço carbono"
};

const baseOptionals = [
  "Válvula de alívio incorporada (retorna até 30% do produto)",
  "Câmara de aquecimento",
  "Conjunto moto-bomba completo",
  "Mancal externo"
];

// Complete gear pump sizes data
export const gearPumpSizes: GearPumpSize[] = [
  {
    diameter: '1/8"',
    displayName: '1/8"',
    directModel: {
      id: "fbe-1-8",
      name: 'FBE 1/8"',
      diameter: '1/8"',
      maxFlow: 5.15,
      maxRotation: 1750,
      maxPressure: 22,
      maxViscosity: "100.000 SSU",
      image: "https://www.dropbox.com/scl/fi/example1.jpg?raw=1",
      technicalDrawing: "https://www.dropbox.com/scl/fi/drawing1.jpg?raw=1",
      specifications: {
        suction: 'Bocais de sucção e recalque de Ø 1/8" com rosca BSP',
        ...baseSpecifications
      },
      optionals: baseOptionals,
      flowTable: flowTables["1/8"]
    },
    models: []
  },
  {
    diameter: '1/4"',
    displayName: '1/4"',
    directModel: {
      id: "fbe-1-4",
      name: 'FBE 1/4"',
      diameter: '1/4"',
      maxFlow: 8.90,
      maxRotation: 1750,
      maxPressure: 22,
      maxViscosity: "100.000 SSU",
      image: "https://www.dropbox.com/scl/fi/example2.jpg?raw=1",
      technicalDrawing: "https://www.dropbox.com/scl/fi/drawing2.jpg?raw=1",
      specifications: {
        suction: 'Bocais de sucção e recalque de Ø 1/4" com rosca BSP',
        ...baseSpecifications
      },
      optionals: baseOptionals,
      flowTable: flowTables["1/4"]
    },
    models: []
  },
  {
    diameter: '3/8"',
    displayName: '3/8"',
    directModel: {
      id: "fbe-3-8",
      name: 'FBE 3/8"',
      diameter: '3/8"',
      maxFlow: 14.00,
      maxRotation: 1750,
      maxPressure: 22,
      maxViscosity: "100.000 SSU",
      image: "https://www.dropbox.com/scl/fi/example3.jpg?raw=1",
      technicalDrawing: "https://www.dropbox.com/scl/fi/drawing3.jpg?raw=1",
      specifications: {
        suction: 'Bocais de sucção e recalque de Ø 3/8" com rosca BSP',
        ...baseSpecifications
      },
      optionals: baseOptionals,
      flowTable: flowTables["3/8"]
    },
    models: []
  },
  {
    diameter: '1/2"',
    displayName: '1/2"',
    directModel: {
      id: "fbe-1-2",
      name: 'FBE 1/2"',
      diameter: '1/2"',
      maxFlow: 17.70,
      maxRotation: 1750,
      maxPressure: 22,
      maxViscosity: "100.000 SSU",
      image: "https://www.dropbox.com/scl/fi/example4.jpg?raw=1",
      technicalDrawing: "https://www.dropbox.com/scl/fi/drawing4.jpg?raw=1",
      specifications: {
        suction: 'Bocais de sucção e recalque de Ø 1/2" com rosca BSP',
        ...baseSpecifications
      },
      optionals: baseOptionals,
      flowTable: flowTables["1/2"]
    },
    models: []
  },
  {
    diameter: '3/4"',
    displayName: '3/4"',
    directModel: {
      id: "fbe-3-4",
      name: 'FBE 3/4"',
      diameter: '3/4"',
      maxFlow: 44.40,
      maxRotation: 1750,
      maxPressure: 22,
      maxViscosity: "100.000 SSU",
      image: "https://www.dropbox.com/scl/fi/example5.jpg?raw=1",
      technicalDrawing: "https://www.dropbox.com/scl/fi/drawing5.jpg?raw=1",
      specifications: {
        suction: 'Bocais de sucção e recalque de Ø 3/4" com rosca BSP',
        ...baseSpecifications
      },
      optionals: baseOptionals,
      flowTable: flowTables["3/4"]
    },
    models: []
  },
  {
    diameter: '1"',
    displayName: '1"',
    models: [
      {
        id: "fbe-1",
        name: 'FBE 1"',
        diameter: '1"',
        maxFlow: 62.00,
        maxRotation: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example6.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing6.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1"]
      },
      {
        id: "fbe-1-a",
        name: 'FBE 1" A',
        diameter: '1"',
        maxFlow: 74.00,
        maxRotation: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example7.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing7.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1A"]
      },
      {
        id: "fbe-1-d",
        name: 'FBE 1" D',
        diameter: '1"',
        maxFlow: 88.60,
        maxRotation: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example8.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing8.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1D"]
      },
      {
        id: "fbe-1-da",
        name: 'FBE 1" DA',
        diameter: '1"',
        maxFlow: 112.00,
        maxRotation: 1750,
        maxPressure: 22,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example9.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing9.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1DA"]
      }
    ]
  },
  {
    diameter: '1.1/2"',
    displayName: '1.1/2"',
    models: [
      {
        id: "fbe-1-1-2",
        name: 'FBE 1.1/2"',
        diameter: '1.1/2"',
        maxFlow: 150.00,
        maxRotation: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example10.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing10.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1.1/2"]
      },
      {
        id: "fbe-1-1-2-a",
        name: 'FBE 1.1/2" A',
        diameter: '1.1/2"',
        maxFlow: 200.00,
        maxRotation: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example11.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing11.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["1.1/2A"]
      }
    ]
  },
  {
    diameter: '2"',
    displayName: '2"',
    models: [
      {
        id: "fbe-2",
        name: 'FBE 2"',
        diameter: '2"',
        maxFlow: 300.00,
        maxRotation: 1750,
        maxPressure: 14,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example12.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing12.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["2"]
      },
      {
        id: "fbe-2-a",
        name: 'FBE 2" A',
        diameter: '2"',
        maxFlow: 420.00,
        maxRotation: 1750,
        maxPressure: 12,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example13.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing13.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["2A"]
      }
    ]
  },
  {
    diameter: '3"',
    displayName: '3"',
    models: [
      {
        id: "fbe-3",
        name: 'FBE 3"',
        diameter: '3"',
        maxFlow: 500.00,
        maxRotation: 1150,
        maxPressure: 12,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example14.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing14.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["3"]
      },
      {
        id: "fbe-3-m9",
        name: 'FBE 3" M9',
        diameter: '3"',
        maxFlow: 600.00,
        maxRotation: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example15.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing15.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["3M9"]
      }
    ]
  },
  {
    diameter: '4"',
    displayName: '4"',
    models: [
      {
        id: "fbe-4-m6",
        name: 'FBE 4" M6',
        diameter: '4"',
        maxFlow: 650.00,
        maxRotation: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example16.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing16.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["4M6"]
      },
      {
        id: "fbe-4-m8",
        name: 'FBE 4" M8',
        diameter: '4"',
        maxFlow: 1000.00,
        maxRotation: 1150,
        maxPressure: 8,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example17.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing17.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["4M8"]
      },
      {
        id: "fbe-4-m12",
        name: 'FBE 4" M12',
        diameter: '4"',
        maxFlow: 1350.00,
        maxRotation: 1150,
        maxPressure: 6,
        maxViscosity: "100.000 SSU",
        image: "https://www.dropbox.com/scl/fi/example18.jpg?raw=1",
        technicalDrawing: "https://www.dropbox.com/scl/fi/drawing18.jpg?raw=1",
        specifications: {
          suction: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          ...baseSpecifications
        },
        optionals: baseOptionals,
        flowTable: flowTables["4M12"]
      }
    ]
  }
];

// Helper function to get all models flat
export const getAllGearPumpModels = (): GearPumpModel[] => {
  const models: GearPumpModel[] = [];
  
  gearPumpSizes.forEach(size => {
    if (size.directModel) {
      models.push(size.directModel);
    }
    if (size.models.length > 0) {
      models.push(...size.models);
    }
  });
  
  return models;
};

// Helper to get model by ID
export const getGearPumpModelById = (id: string): GearPumpModel | undefined => {
  return getAllGearPumpModels().find(model => model.id === id);
};

// Helper to get size info
export const getGearPumpSizeInfo = (diameter: string): GearPumpSize | undefined => {
  return gearPumpSizes.find(size => size.diameter === diameter);
};