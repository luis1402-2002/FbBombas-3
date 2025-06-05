import { Download } from "../types";

export const downloads: Download[] = [
  {
    id: "fbcn-manual",
    category: "manuais",
    titleKey: "downloads.fbcn_manual.title",
    title: "Manual Técnico FBCN",
    size: "1.1 MB",
    type: "PDF",
    icon: "file-pdf",
    descriptionKey: "downloads.fbcn_manual.description",
    description: "Manual técnico completo da linha de bombas centrífugas normalizadas FBCN, com especificações, diagramas e instruções de operação.",
    fileUrl: "/attached_assets/catalogo_5.pdf"
  },
  {
    id: "fbot-manual",
    category: "manuais",
    titleKey: "downloads.fbot_manual.title",
    title: "Manual Técnico FBOT",
    size: "407 KB",
    type: "PDF",
    icon: "file-pdf",
    descriptionKey: "downloads.fbot_manual.description",
    description: "Manual técnico completo da linha de bombas para óleo térmico FBOT, com especificações detalhadas de operação e manutenção.",
    fileUrl: "/attached_assets/catalogo_8.pdf"
  },
  {
    id: "fbe-manual",
    category: "manuais",
    titleKey: "downloads.fbe_manual.title",
    title: "Manual Técnico FBE",
    size: "605 KB",
    type: "PDF",
    icon: "file-pdf",
    descriptionKey: "downloads.fbe_manual.description",
    description: "Manual técnico completo da linha de bombas de engrenagem externa FBE, com detalhes de instalação e manutenção.",
    fileUrl: "/attached_assets/catalogo_16.pdf"
  }
];

export const downloadCategories = [
  { id: "all", label: "Todos" },
  { id: "manuais", label: "Manuais Técnicos" },
  { id: "catalogos", label: "Catálogos" },
  { id: "curvas", label: "Curvas de Performance" },
  { id: "softwares", label: "Softwares" }
];
