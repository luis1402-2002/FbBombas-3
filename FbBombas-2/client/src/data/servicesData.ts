import { Service } from "../types";

export const services: Service[] = [
  {
    id: "service-1",
    icon: "tools",
    title: "Manutenção & Retrofit Multimarcas",
    description: "Nossa equipe técnica especializada realiza manutenção preventiva e corretiva em bombas de qualquer fabricante, garantindo a máxima performance e vida útil do equipamento.",
    features: [
      "Reparos em campo ou em nossa oficina",
      "Modernização de sistemas antigos (retrofit)",
      "Peças de reposição originais ou equivalentes"
    ]
  },
  {
    id: "service-2",
    icon: "play-circle",
    title: "Start-up & Comissionamento",
    description: "Garantimos que sua bomba inicie sua operação com os parâmetros ideais, realizando todos os ajustes necessários para máxima eficiência e durabilidade.",
    features: [
      "Verificação completa pré-operacional",
      "Ajustes de alinhamento e calibração",
      "Treinamento da equipe de operação"
    ]
  },
  {
    id: "service-3",
    icon: "flask",
    title: "Testes de Performance",
    description: "Nossa bancada de testes permite simular as condições reais de operação, garantindo que sua bomba atenda a todos os requisitos de desempenho.",
    features: [
      "Testes de vazão até 4.500 m³/h",
      "Pressões de até 155 bar",
      "Certificação detalhada com curvas de desempenho"
    ]
  },
  {
    id: "service-4",
    icon: "file-contract",
    title: "Contratos de Manutenção",
    description: "Oferecemos contratos de manutenção preventiva e preditiva personalizados para sua operação, garantindo disponibilidade e reduzindo custos operacionais.",
    features: [
      "Visitas técnicas programadas",
      "Manutenção preditiva com análise vibratória",
      "Prioridade em atendimentos emergenciais"
    ]
  }
];

export const contactInfo = {
  address: [
    "Av. Adolpho João Traldi, 80",
    "Jacaré, Cabreúva - SP",
    "CEP 13318-000"
  ],
  phones: [
    "+55 (11) 99987-6316"
  ],
  emails: [
    "comercial@fbbombas.com.br"
  ],
  hours: [
    "Segunda a Sexta: 7h às 17h"
  ]
};
