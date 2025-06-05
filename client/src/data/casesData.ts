import { Case } from "../types";

export const cases: Case[] = [
  {
    id: "case-1",
    category: "petroquimica",
    title: "Modernização de Sistema de Bombeamento em Refinaria",
    description: "Substituição de bombas antigas por unidades FBCN com ganho de 32% em eficiência energética e redução de manutenções.",
    product: "FBCN",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1518354727798-496fa1b1b8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cGV0cm9jaGVtaWNhbHxlbnwwfHx8fDE3NDUwODQ4MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "case-2", 
    category: "alimentos",
    title: "Sistema de Bombeamento para Indústria de Laticínios",
    description: "Implementação de bombas FBE para transporte de produtos viscosos com certificação sanitária.",
    product: "FBE",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1595100804300-9f23a3c6a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Zm9vZCUyMGZhY3Rvcnl8ZW58MHx8fHwxNzQ1MDg0ODQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "case-3",
    category: "siderurgia",
    title: "Bombas para Sistema de Refrigeração de Alto Forno",
    description: "Fornecimento de bombas FBOT para refrigeração de alto forno operando em condições extremas de temperatura.",
    product: "FBOT",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1505059152565-42971f574ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHN0ZWVsJTIwZmFjdG9yeXxlbnwwfHx8fDE3NDUwODQ4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "case-4",
    category: "papel",
    title: "Retrofit de Sistema de Bombeamento em Fábrica de Papel",
    description: "Modernização de bombas para pasta de celulose com redução de 45% em paradas não programadas.",
    product: "FBCN",
    year: "2021",
    imageUrl: "https://images.unsplash.com/photo-1570293386060-ea18e7140645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHBhcGVyJTIwbWlsbHxlbnwwfHx8fDE3NDUwODQ4OTF8MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "case-5",
    category: "petroquimica",
    title: "Sistema de Transferência para Terminal Petroquímico",
    description: "Fornecimento de bombas API 610 com monitoramento remoto para operação contínua em terminal portuário.",
    product: "FBCN",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1508616184338-3782330b2fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fG9pbCUyMGluZHVzdHJ5fGVufDB8fHx8MTc0NTA4NDkyOHww&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "case-6",
    category: "alimentos",
    title: "Bombas para Indústria de Bebidas",
    description: "Implementação de sistema de bombeamento sanitário com certificação FDA para indústria de bebidas.",
    product: "FBE",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGZvb2QlMjBmYWN0b3J5fGVufDB8fHx8MTc0NTA4NDk1OXww&ixlib=rb-4.0.3&q=80&w=1080"
  }
];

export const categories = [
  { id: "all", label: "Todos" },
  { id: "petroquimica", label: "Petroquímica" },
  { id: "alimentos", label: "Alimentos" },
  { id: "siderurgia", label: "Siderurgia" },
  { id: "papel", label: "Papel e Celulose" }
];
