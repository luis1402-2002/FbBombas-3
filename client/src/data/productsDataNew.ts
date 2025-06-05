// New products data structure with better type safety
export interface ProductNew {
  id: string;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  shortDescription: {
    pt: string;
    en: string;
    es: string;
  };
  tag: string;
  tagColor: string;
  maxFlow: string;
  maxHeight: string;
  maxTemperature: string;
  images: {
    main: string;
  };
  specifications: Array<{
    label: string;
    value: string;
  }>;
}

export const productsData: ProductNew[] = [
  {
    id: "fbcn",
    title: {
      pt: "Bomba Centrífuga Série FBCN",
      en: "FBCN Series Centrifugal Pump",
      es: "Bomba Centrífuga Serie FBCN"
    },
    shortDescription: {
      pt: "Desenvolvida para trabalhar com líquidos limpos ou turvos em diversas aplicações industriais.",
      en: "Developed to work with clean or turbid liquids in various industrial applications.",
      es: "Desarrollada para trabajar con líquidos limpios o turbios en diversas aplicaciones industriales."
    },
    tag: "Normalizada",
    tagColor: "bg-azul-profundo text-white",
    maxFlow: "2.200 m³/h",
    maxHeight: "135 m",
    maxTemperature: "260°C",
    images: {
      main: "https://www.dropbox.com/scl/fi/ex30iww4awnk2r63hannu/Design-sem-nome-72.png?rlkey=anxgdrw333kigr2ntnxztsimn&st=cx6tyvpk&raw=1"
    },
    specifications: [
      { label: "Tamanhos", value: "DN25 até 300mm" },
      { label: "Vazões", value: "até 2200m³/h" },
      { label: "Altura manométrica", value: "até 135m" },
      { label: "Temperaturas", value: "até 260°C" },
      { label: "Rotações", value: "até 3500rpm" }
    ]
  },
  {
    id: "fbot",
    title: {
      pt: "Bomba Centrífuga Série FBOT",
      en: "FBOT Series Centrifugal Pump",
      es: "Bomba Centrífuga Serie FBOT"
    },
    shortDescription: {
      pt: "Bombas especiais para fluidos térmicos de alta temperatura.",
      en: "Special pumps for high temperature thermal fluids.",
      es: "Bombas especiales para fluidos térmicos de alta temperatura."
    },
    tag: "Óleo Térmico",
    tagColor: "bg-laranja text-white",
    maxFlow: "400 m³/h",
    maxHeight: "120 m",
    maxTemperature: "350°C",
    images: {
      main: "https://www.dropbox.com/scl/fi/t6moru7jiedkzru75ojcn/Design-sem-nome-71.png?rlkey=37vga7o60i112szivf7qm8v7n&st=jduoioe3&raw=1"
    },
    specifications: [
      { label: "Tamanhos", value: "DN25 até 200mm" },
      { label: "Vazões", value: "até 400m³/h" },
      { label: "Altura manométrica", value: "até 120m" },
      { label: "Temperaturas", value: "até 350°C" },
      { label: "Rotações", value: "até 3500rpm" }
    ]
  },
  {
    id: "fbe",
    title: {
      pt: "Bomba de Engrenagem Série FBE",
      en: "FBE Series Gear Pump",
      es: "Bomba de Engranajes Serie FBE"
    },
    shortDescription: {
      pt: "Ideal para fluidos viscosos com deslocamento positivo e precisão.",
      en: "Ideal for viscous fluids with positive displacement and precision.",
      es: "Ideal para fluidos viscosos con desplazamiento positivo y precisión."
    },
    tag: "Engrenagem",
    tagColor: "bg-primary text-white",
    maxFlow: "1.350 L/min",
    maxHeight: "22 bar",
    maxTemperature: "250°C",
    images: {
      main: "https://www.dropbox.com/scl/fi/sg6d1wpp1tq8l3xh849kl/Design-sem-nome-73.png?rlkey=ocyzqcox27bsyg5ajlfdnv71i&st=9j7yjsc7&raw=1"
    },
    specifications: [
      { label: "Diâmetros", value: '1/8" até 4"' },
      { label: "Vazões", value: "até 1.350 L/min" },
      { label: "Pressão", value: "até 22 bar" },
      { label: "Viscosidade", value: "até 100.000 SSU" },
      { label: "Rotações", value: "até 1750rpm" }
    ]
  }
];