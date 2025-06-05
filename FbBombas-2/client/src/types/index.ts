export interface Product {
  id: string;
  title: string;
  titleEn?: string;
  titleEs?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  shortDescriptionEs?: string;
  tag: string;
  tagEn?: string;
  tagEs?: string;
  tagColor: string;
  maxFlow: string;
  maxHeight: string;
  maxTemperature: string;
  imageUrl: string;
  fullDescription: string;
  fullDescriptionEn?: string;
  fullDescriptionEs?: string;
  generalDescription: string;
  generalDescriptionEn?: string;
  generalDescriptionEs?: string;
  standards: string[];
  specifications: Specification[];
  images: {
    main: string;
    side: string;
    front: string;
  };
  code: string;
}

export interface Specification {
  label: string;
  labelEn?: string;
  labelEs?: string;
  value: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Case {
  id: string;
  category: string;
  title: string;
  description: string;
  product: string;
  year: string;
  imageUrl: string;
}

export interface Download {
  id: string;
  category: string;
  title: string;
  titleKey?: string;
  size: string;
  type: string;
  icon: string;
  description: string;
  descriptionKey?: string;
  fileUrl: string;
}

export interface ContactFormValues {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  modelo: string;
  vazao: string;
  altura: string;
  fluido: string;
  temperatura: string;
  mensagem: string;
  consentimento: boolean;
}

export interface ContactInfo {
  address: string[];
  phones: string[];
  emails: string[];
  hours: string[];
}
