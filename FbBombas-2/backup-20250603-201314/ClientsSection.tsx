import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

// Lista de clientes únicos com URLs corretas
const clientLogos = [
  { 
    name: "Petrobras", 
    url: "https://www.dropbox.com/scl/fi/f8dats5wm3dmrk8bsa8cx/99f125b7-5fd0-4df9-bc1a-e37bb72e63c3.png?rlkey=bbippd8m7flvrj96rnsppqaj3&st=bmac4p6k&raw=1",
    sector: "Energia"
  },
  { 
    name: "Ammann", 
    url: "https://www.dropbox.com/scl/fi/fwi1pxxt19db2lnb1nx4y/Ammann_Group_logo.svg.png?rlkey=21chd72x1qtaom4wlm5p7d5w8&st=hgjb6pk6&raw=1",
    sector: "Saneamento"
  },
  { 
    name: "Vale", 
    url: "https://www.dropbox.com/scl/fi/kr3vyawin6sw1w10mx1l6/Design-sem-nome-61.png?rlkey=xkuby5vq9cap0m4awn2sdag82&st=k5olh34y&raw=1",
    sector: "Mineração"
  },
  { 
    name: "Ipiranga Asfaltos", 
    url: "https://www.dropbox.com/scl/fi/st36rjrexcnmj959uqxl1/New_Ipiranga_Logomark.svg.png?rlkey=rga7qnkn9lcu30mif7c8fa0rj&st=tmciznqn&raw=1",
    sector: "Petroquímica"
  },
  { 
    name: "Lintec", 
    url: "https://www.dropbox.com/scl/fi/z9zqoaks1d06ektu2i98k/lintec.svg?rlkey=7beaiw0kr7kpbaazraw1jcvm4&st=f1zazd60&raw=1",
    sector: "Saneamento"
  },
  { 
    name: "CSN", 
    url: "https://www.dropbox.com/scl/fi/vwqc59gh3jawudx4rbhoi/Design-sem-nome-69.png?rlkey=1x7kogusngr7sy2p0opg2g2ep&st=mp6zi5eb&raw=1",
    sector: "Siderurgia"
  },
  { 
    name: "Merito", 
    url: "https://www.dropbox.com/scl/fi/4jm78k3hj31xjmn4ggn2e/logo-merito-comercial-1.png?rlkey=9v00hjv19l6fdh6cpmcocg5jd&st=8vhr4iog&raw=1",
    sector: "Química"
  },
  { 
    name: "CacauShow", 
    url: "https://www.dropbox.com/scl/fi/shlm74afwnqk0gyjekeqm/cacau-show-logo-16.png?rlkey=h8jbehasn58j6ankmmhhdh1q5&st=oru3lrx1&raw=1",
    sector: "Saneamento"
  },
  { 
    name: "Emam", 
    url: "https://www.dropbox.com/scl/fi/fwpaigpmjbt2kzgmviqau/Design-sem-nome-86.png?rlkey=vm0yla5vq1yyppqn5nzn3b2wx&st=x1iy0otl&raw=1",
    sector: "Tintas"
  },
  { 
    name: "Stratura", 
    url: "https://www.dropbox.com/scl/fi/3qzb1n8lkxmkkj3m8gzkc/Design-sem-nome-88.png?rlkey=4u828cqnl6vzbm7bx6i8x43ma&st=wp68l5o6&raw=1",
    sector: "Revestimentos"
  },
  { 
    name: "Greca Asfaltos", 
    url: "https://www.dropbox.com/scl/fi/bz1fzmly9g68d79k4rjff/LOGO_GRECA_ASFALTOS.svg?rlkey=p3u0fjovkzqrgvyhw2k3okmlt&st=0iowo01y&raw=1",
    sector: "Asfaltos"
  },
  { 
    name: "BASF", 
    url: "https://www.dropbox.com/scl/fi/380ttah3r3dukb2gutwwy/BASF-Logo_bw.svg.png?rlkey=598c6heusknb4ch0bafgbt10f&st=rt9xszh5&raw=1",
    sector: "Química"
  },
  { 
    name: "Bomag", 
    url: "https://www.dropbox.com/scl/fi/qe1bjz5eqv8oy39v2o4vq/BOMAG_201x_logo.svg.png?rlkey=ztwb3prhcftrjtw9yoerdh3yz&st=3qcu6get&raw=1",
    sector: "Equipamentos"
  },
  { 
    name: "Dislub", 
    url: "https://www.dropbox.com/scl/fi/hbgjjywit0q5ze5kx55p8/Logo_Grupo_Dislub_-_Escrita_Cinza.png?rlkey=lhd9djiwhr4rvn46lzyggpcyv&st=36z9pg8l&raw=1",
    sector: "Alimentos"
  },
  { 
    name: "Cargill", 
    url: "https://www.dropbox.com/scl/fi/fctma4ighm21g2kdciep8/cargill-logo-1.png?rlkey=qv2gpgvle4opnb34hfgnbraal&st=e86tq8fy&raw=1",
    sector: "Agronegócio"
  },
  { 
    name: "Aurora", 
    url: "https://www.dropbox.com/scl/fi/you3ep2v3kdf0fx6ih1cd/Aurora-Coop.webp?rlkey=y9pr6jmbxavw9v7kdxemj831t&st=afi8d7kh&raw=1",
    sector: "Equipamentos"
  },
  { 
    name: "MAHLE", 
    url: "https://www.dropbox.com/scl/fi/1e8ziytkqz6n1frfmbgy2/logo-3.png?rlkey=wd6xcgm4ttemnxlhobrrkl4om&st=qvbs9ezq&raw=1",
    sector: "Asfaltos"
  },
  { 
    name: "BRF", 
    url: "https://www.dropbox.com/scl/fi/gj5550z0t1sd1vd7ul0qb/BRF_Global.svg.png?rlkey=aoy4to8bikwdm4nt5qyo40d6a&st=p75u4bvf&raw=1",
    sector: "Industrial"
  },
  { 
    name: "weg", 
    url: "https://www.dropbox.com/scl/fi/biy7aaa4n45plhniqaswl/logo-weg-2048.png?rlkey=o3y4efe3x3xv8bd2pdtbtst8y&st=d11pykmw&raw=1",
    sector: "Asfaltos"
  },
  { 
    name: "3M", 
    url: "https://www.dropbox.com/scl/fi/r0ir1ci0v6dckyqicyoyi/logo-3m-4096.png?rlkey=0e4yo59sxe7x5wp32p2lzd4lw&st=ffyfx02x&raw=1",
    sector: "Pavimentação"
  },
  { 
    name: "VIBRA", 
    url: "https://www.dropbox.com/scl/fi/hmmzb6rrv82tukkgoxept/Vibra-logo.png?rlkey=pv7sf40sd4enfu7j1nmcjugq1&st=kq73vyrz&raw=1",
    sector: "Regional"
  }
];

// Criar múltiplas cópias para loop infinito
const createLogoSets = () => {
  return Array(4).fill(clientLogos).flat();
};

const ClientsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const [logoSets] = useState(createLogoSets);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    let animationId: number;
    
    const animate = () => {
      if (!isHovered && track) {
        const currentTransform = track.style.transform;
        const currentX = currentTransform ? 
          parseFloat(currentTransform.replace('translateX(', '').replace('px)', '')) : 0;
        
        const logoWidth = 176; // Width of each logo container + margin
        const totalWidth = clientLogos.length * logoWidth;
        
        let newX = currentX - 0.5; // Slow, smooth movement
        
        // Reset position for infinite loop
        if (Math.abs(newX) >= totalWidth) {
          newX = 0;
        }
        
        track.style.transform = `translateX(${newX}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);
  
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header padronizado */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
          <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
            {t('clients.title', 'Nossos Clientes')}
          </h2>
          <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
            {t('clients.subtitle', 'Confiança de grandes corporações há mais de 75 anos')}
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className="overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={trackRef}
              className="flex items-center"
              style={{ width: 'max-content' }}
            >
              {logoSets.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-44 h-20 mx-3 flex items-center justify-center bg-white dark:bg-slate-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 group border border-slate-100 dark:border-slate-300"
                >
                  <img
                    src={client.url}
                    alt={`${client.name} - Cliente FB Bombas`}
                    className="max-w-[120px] max-h-[50px] object-contain transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays para bordas suaves */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-900 pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-900 pointer-events-none z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;