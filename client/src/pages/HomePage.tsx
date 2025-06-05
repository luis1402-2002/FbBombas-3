import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CompanySection from "@/components/sections/CompanySection";
import ClientsSection from "@/components/sections/ClientsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ModernWaveDivider from "@/components/ui/modern-wave-divider";
import DownloadsSection from "@/components/sections/DownloadsSection";
import ContactSection from "@/components/sections/ContactSection";
import WorkWithUsSection from "@/components/sections/WorkWithUsSection";
import LgpdBanner from "@/components/sections/LgpdBanner";

const HomePage = () => {
  // Generate the structured data for SEO
  const getStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FB Bombas",
      "url": "https://www.fbbombas.com.br",
      "logo": "https://www.fbbombas.com.br/fb-bombas-logo.svg",
      "description": "Desde 1944 fornecendo soluções em bombeamento de alta qualidade para indústrias que não podem parar.",
      "foundingDate": "1944",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-4898-9200",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://www.linkedin.com/company/fbbombas",
        "https://www.youtube.com/fbbombas",
        "https://www.instagram.com/fbbombas",
        "https://www.facebook.com/fbbombas"
      ]
    };

    return JSON.stringify(structuredData);
  };

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    // Função para o scroll suave
    const handleSmoothScroll = (e: Event, element: Element) => {
      e.preventDefault();
      
      const anchor = element as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const headerOffset = 80; // Height of the fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };
    
    // Adicionar event listeners
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => handleSmoothScroll(e, anchor));
    });

    // Limpar event listeners quando o componente for desmontado
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', (e) => handleSmoothScroll(e, anchor));
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>FB Bombas - Soluções em Bombeamento Industrial desde 1944</title>
        <meta name="description" content="FB Bombas: especialista em bombas centrífugas e de engrenagem para aplicações industriais. Mais de 75 anos de experiência com certificações ISO 9001 e API 610." />
        <meta name="keywords" content="bombas industriais, bombas centrífugas, bombas de engrenagem, FBCN, FBOT, FBE, bombeamento industrial" />
        <meta name="author" content="FB Bombas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fbbombas.com.br" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="FB Bombas - Soluções em Bombeamento Industrial desde 1944" />
        <meta property="og:description" content="Especialista em bombas centrífugas e de engrenagem para aplicações industriais. Mais de 75 anos de experiência." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fbbombas.com.br" />
        <meta property="og:image" content="https://www.fbbombas.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FB Bombas - Soluções em Bombeamento Industrial desde 1944" />
        <meta name="twitter:description" content="Especialista em bombas centrífugas e de engrenagem para aplicações industriais." />
        <meta name="twitter:image" content="https://www.fbbombas.com.br/og-image.jpg" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{getStructuredData()}</script>
      </Helmet>

      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ModernWaveDivider />
        <ClientsSection />
        <BenefitsSection />
        <CompanySection />
        <ProductsSection />
        <DownloadsSection />
        <div className="relative">
          {/* Background Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background Images - Light Theme */}
            <div className="absolute inset-0 dark:hidden">
              <img 
                src="https://www.dropbox.com/scl/fi/aiwyc2l13fzqgc2e6o8ad/5.png?rlkey=l5we3n51misoa8xxa6u2i4mfx&st=nl2mon3x&raw=1"
                alt=""
                className="absolute inset-0 w-full h-full opacity-50 object-cover object-right-bottom"
              />
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none"></div>
            </div>
            {/* Background Images - Dark Theme */}
            <div className="absolute inset-0 hidden dark:block">
              <img 
                src="https://www.dropbox.com/scl/fi/2buladnibnrbimf7q0uxs/6.png?rlkey=1updjxyetqc2l47tj70dfadqf&st=81s16j8q&raw=1"
                alt=""
                className="absolute inset-0 w-full h-full opacity-25 object-cover object-right-bottom"
              />
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-slate-900 via-slate-900/95 to-transparent pointer-events-none"></div>
            </div>
          </div>
          {/* Content */}
          <div className="relative z-10">
            <ContactSection />
            <WorkWithUsSection />
          </div>
        </div>
      </main>
      <Footer />
      <LgpdBanner />
    </>
  );
};

export default HomePage;
