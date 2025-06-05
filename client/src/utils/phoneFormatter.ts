import { Language } from '@/contexts/LanguageContext';

export const formatPhoneNumber = (phone: string, language: Language): string => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Para português, formato sem código de país
  if (language === 'pt') {
    if (cleanPhone.length === 11) {
      return `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7)}`;
    }
    return phone; // Retorna original se não tiver 11 dígitos
  }
  
  // Para inglês e espanhol, adiciona +55
  if (language === 'en' || language === 'es') {
    if (cleanPhone.length === 11) {
      return `+55 (${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7)}`;
    } else if (cleanPhone.length === 13 && cleanPhone.startsWith('55')) {
      // Já tem código do país
      return `+${cleanPhone.slice(0, 2)} (${cleanPhone.slice(2, 4)}) ${cleanPhone.slice(4, 9)}-${cleanPhone.slice(9)}`;
    }
    return phone; // Retorna original se formato inválido
  }
  
  return phone;
};

export const getPhonePlaceholder = (language: Language): string => {
  if (language === 'pt') {
    return '(11) 99999-9999';
  }
  return '+55 (11) 99999-9999';
};

export const getPhoneMask = (language: Language): string => {
  if (language === 'pt') {
    return '(99) 99999-9999';
  }
  return '+55 (99) 99999-9999';
};

// Função para aplicar máscara durante digitação
export const applyPhoneMask = (value: string, language: Language): string => {
  const cleanValue = value.replace(/\D/g, '');
  
  if (language === 'pt') {
    if (cleanValue.length <= 2) {
      return `(${cleanValue}`;
    } else if (cleanValue.length <= 7) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
    } else if (cleanValue.length <= 11) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7)}`;
    }
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`;
  } else {
    // Para en/es, sempre começa com +55
    const phoneWithCountry = cleanValue.startsWith('55') ? cleanValue : `55${cleanValue}`;
    
    if (phoneWithCountry.length <= 2) {
      return `+${phoneWithCountry}`;
    } else if (phoneWithCountry.length <= 4) {
      return `+${phoneWithCountry.slice(0, 2)} (${phoneWithCountry.slice(2)}`;
    } else if (phoneWithCountry.length <= 9) {
      return `+${phoneWithCountry.slice(0, 2)} (${phoneWithCountry.slice(2, 4)}) ${phoneWithCountry.slice(4)}`;
    } else if (phoneWithCountry.length <= 13) {
      return `+${phoneWithCountry.slice(0, 2)} (${phoneWithCountry.slice(2, 4)}) ${phoneWithCountry.slice(4, 9)}-${phoneWithCountry.slice(9)}`;
    }
    return `+${phoneWithCountry.slice(0, 2)} (${phoneWithCountry.slice(2, 4)}) ${phoneWithCountry.slice(4, 9)}-${phoneWithCountry.slice(9, 13)}`;
  }
};