import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { formatPhoneNumber } from "@/utils/phoneFormatter";

// URL do logo oficial
const logoWhite = "https://www.dropbox.com/scl/fi/5ruavod1yonbn8nfm5hgv/Design-sem-nome-44.png?rlkey=itk2xms0sw2jsh0bjwm0f00nu&st=864su6e6&raw=1";

const Footer = () => {
  const { t, language } = useLanguage();
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(true);
  const footerRef = useRef<HTMLElement>(null);

  // Links das redes sociais
  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://www.instagram.com/fbbombas/?utm_source=ig_web_button_share_sheet" 
    }
  ];

  // Effect to handle WhatsApp visibility based on footer visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the footer's developed by section is visible
      // We consider it visible when the bottom part of footer is in view
      const footerBottomVisible = footerRect.bottom - 100 <= windowHeight && footerRect.bottom >= 0;
      
      setIsWhatsAppVisible(!footerBottomVisible);
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dados de contato
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      text: "Av. Adolpho João Traldi, 80 - Jacaré, Cabreúva - SP",
      url: "https://maps.google.com/?q=Fabricadora+Bombas+Indústria+Comércio+Av.+Adolpho+João+Traldi+80+Jacaré+Cabreúva+SP"
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      text: formatPhoneNumber('11999876316', language),
      url: "tel:+5511999876316"
    },
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      text: "comercial@fbbombas.com.br",
      url: "mailto:comercial@fbbombas.com.br"
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="pt-20 pb-6 bg-primary text-white relative overflow-hidden"
      itemScope 
      itemType="http://schema.org/Organization"
    >
      {/* Efeitos de background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#E30613]/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-40 h-40 rounded-full bg-[#E30613]/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Coluna 1: Informações da empresa */}
          <div className="lg:col-span-1">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <img 
                  src={logoWhite} 
                  alt="FB Bombas" 
                  className="h-24 sm:h-28 w-auto"
                  itemProp="logo"
                />
                <meta itemProp="name" content="FB Bombas" />
              </div>
              
              <p className="text-white/80 text-sm mb-6 leading-relaxed max-w-xs" itemProp="description">
                {t('footer.company_description')}
              </p>
              
              <div className="mt-auto">
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-[#E30613] p-2.5 rounded-full transition-all duration-300"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna 2: Produtos */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xl text-white mb-5 flex items-center">
              {t('footer.products')}
            </h4>
            
            <ul className="space-y-4">
              <li>
                <a 
                  href="/bombas-centrifugas" 
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('products.centrifugal_pumps', 'Bombas Centrífugas')}
                </a>
              </li>
              <li>
                <a 
                  href="/bombas-de-engrenagem" 
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('footer.gear_pumps', 'Bombas de Engrenagem')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Links úteis */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xl text-white mb-5 flex items-center">
              {t('footer.information')}
            </h4>
            
            <ul className="space-y-4">
              <li>
                <a 
                  href="/#empresa" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#empresa';
                  }}
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('footer.history', 'Nossa História')}
                </a>
              </li>
              <li>
                <a 
                  href="/#downloads" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#downloads';
                  }}
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('nav.downloads', 'Downloads')}
                </a>
              </li>
              <li>
                <a 
                  href="/#contato" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#contato';
                  }}
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a 
                  href="/#trabalhe-conosco" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#trabalhe-conosco';
                  }}
                  className="flex items-center text-white hover:text-white group transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 transition-transform duration-300 group-hover:scale-150"></span>
                  {t('footer.careers', 'Trabalhe Conosco')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xl text-white mb-5 flex items-center">
              {t('contact.title')}
            </h4>
            
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.url} 
                    target={item.url.startsWith('https') ? "_blank" : "_self"}
                    rel={item.url.startsWith('https') ? "noopener noreferrer" : ""}
                    className="flex items-start group"
                  >
                    <div className="mt-0.5 mr-3 text-white group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-white group-hover:text-white transition-colors" itemProp={
                      index === 0 ? "address" : index === 1 ? "telephone" : "email"
                    }>
                      {item.text}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <Button
                asChild
                className="bg-[#E30613] hover:bg-[#c60411] text-white font-medium px-5 py-2.5 rounded-md transition-colors duration-200 flex items-center space-x-2 w-full justify-center"
              >
                <a href="/#contato" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#contato';
                }}>
                  <span>{t('contact.form.send')}</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divisor */}
        <div className="border-t border-white/10 pt-6 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 FB Bombas. {t('footer.rights_reserved', 'Todos os direitos reservados')}.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-sm">{t('footer.developed_by', 'Desenvolvido por')}</span>
              <a 
                href="https://axnexlabs.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white text-sm font-medium transition-colors"
              >
                AxnexLabs
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp flutuante */}
      <a 
        href="https://wa.me/5511972874837?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20bombas." 
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#20BA5C] z-50",
          "transition-all duration-300 ease-in-out",
          isWhatsAppVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-20 pointer-events-none"
        )}
        aria-label="Contato via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="h-6 w-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
      {/* Schema.org metadata */}
      <meta itemProp="telephone" content="+5511999876316" />
      <meta itemProp="email" content="comercial@fbbombas.com.br" />
      <meta itemProp="url" content="https://www.fbbombas.com.br" />
    </footer>
  );
};

export default Footer;
