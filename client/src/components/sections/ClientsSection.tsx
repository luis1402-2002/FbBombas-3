import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

// Lista de clientes únicos com URLs corretas
const clientLogos = [
  { 
    name: "Petrobras", 
    url: "https://www.dropbox.com/scl/fi/dzjnkq4r65rira12fgppe/petrobras-logo-3-1.png?rlkey=70o3oe2il9ud1p7uodgq5cb46&st=uhmh3ppr&raw=1"
  },
  { 
    name: "Ammann", 
    url: "https://www.dropbox.com/scl/fi/fwi1pxxt19db2lnb1nx4y/Ammann_Group_logo.svg.png?rlkey=21chd72x1qtaom4wlm5p7d5w8&st=hgjb6pk6&raw=1"
  },
  { 
    name: "Vale", 
    url: "https://www.dropbox.com/scl/fi/f69jvsr8p2e1ohwm4ucdf/Design-sem-nome-88.svg?rlkey=vimc4a1s1gllsqcorayycff1f&st=km7kl4a8&raw=1"
  },
  { 
    name: "Ipiranga Asfaltos", 
    url: "https://www.dropbox.com/scl/fi/st36rjrexcnmj959uqxl1/New_Ipiranga_Logomark.svg.png?rlkey=rga7qnkn9lcu30mif7c8fa0rj&st=tmciznqn&raw=1"
  },
  { 
    name: "Lintec", 
    url: "https://www.dropbox.com/scl/fi/tdl0gsazb2o0xo1o5hnar/Design-sem-nome-98.svg?rlkey=jmsbkjy59ff3a9c456au6rl2u&st=nsuwybu2&raw=1"
  },
  { 
    name: "CSN", 
    url: "https://www.dropbox.com/scl/fi/vwqc59gh3jawudx4rbhoi/Design-sem-nome-69.png?rlkey=1x7kogusngr7sy2p0opg2g2ep&st=mp6zi5eb&raw=1"
  },
  { 
    name: "Merito", 
    url: "https://www.dropbox.com/scl/fi/4jm78k3hj31xjmn4ggn2e/logo-merito-comercial-1.png?rlkey=9v00hjv19l6fdh6cpmcocg5jd&st=8vhr4iog&raw=1"
  },
  { 
    name: "CacauShow", 
    url: "https://www.dropbox.com/scl/fi/shlm74afwnqk0gyjekeqm/cacau-show-logo-16.png?rlkey=h8jbehasn58j6ankmmhhdh1q5&st=oru3lrx1&raw=1"
  },
  { 
    name: "Emam", 
    url: "https://www.dropbox.com/scl/fi/fwpaigpmjbt2kzgmviqau/Design-sem-nome-86.png?rlkey=vm0yla5vq1yyppqn5nzn3b2wx&st=x1iy0otl&raw=1"
  },
  { 
    name: "Stratura", 
    url: "https://www.dropbox.com/scl/fi/3qzb1n8lkxmkkj3m8gzkc/Design-sem-nome-88.png?rlkey=4u828cqnl6vzbm7bx6i8x43ma&st=wp68l5o6&raw=1"
  },
  { 
    name: "Greca Asfaltos", 
    url: "https://www.dropbox.com/scl/fi/bz1fzmly9g68d79k4rjff/LOGO_GRECA_ASFALTOS.svg?rlkey=p3u0fjovkzqrgvyhw2k3okmlt&st=0iowo01y&raw=1"
  },
  { 
    name: "BASF", 
    url: "https://www.dropbox.com/scl/fi/380ttah3r3dukb2gutwwy/BASF-Logo_bw.svg.png?rlkey=598c6heusknb4ch0bafgbt10f&st=rt9xszh5&raw=1"
  },
  { 
    name: "Bomag", 
    url: "https://www.dropbox.com/scl/fi/qe1bjz5eqv8oy39v2o4vq/BOMAG_201x_logo.svg.png?rlkey=ztwb3prhcftrjtw9yoerdh3yz&st=3qcu6get&raw=1"
  },
  { 
    name: "Dislub", 
    url: "https://www.dropbox.com/scl/fi/hbgjjywit0q5ze5kx55p8/Logo_Grupo_Dislub_-_Escrita_Cinza.png?rlkey=lhd9djiwhr4rvn46lzyggpcyv&st=36z9pg8l&raw=1"
  },
  { 
    name: "Cargill", 
    url: "https://www.dropbox.com/scl/fi/fctma4ighm21g2kdciep8/cargill-logo-1.png?rlkey=qv2gpgvle4opnb34hfgnbraal&st=e86tq8fy&raw=1"
  },
  { 
    name: "Aurora", 
    url: "https://www.dropbox.com/scl/fi/you3ep2v3kdf0fx6ih1cd/Aurora-Coop.webp?rlkey=y9pr6jmbxavw9v7kdxemj831t&st=afi8d7kh&raw=1"
  },
  { 
    name: "MAHLE", 
    url: "https://www.dropbox.com/scl/fi/1e8ziytkqz6n1frfmbgy2/logo-3.png?rlkey=wd6xcgm4ttemnxlhobrrkl4om&st=qvbs9ezq&raw=1"
  },
  { 
    name: "BRF", 
    url: "https://www.dropbox.com/scl/fi/gj5550z0t1sd1vd7ul0qb/BRF_Global.svg.png?rlkey=aoy4to8bikwdm4nt5qyo40d6a&st=p75u4bvf&raw=1"
  },
  { 
    name: "weg", 
    url: "https://www.dropbox.com/scl/fi/biy7aaa4n45plhniqaswl/logo-weg-2048.png?rlkey=o3y4efe3x3xv8bd2pdtbtst8y&st=d11pykmw&raw=1"
  },
  { 
    name: "3M", 
    url: "https://www.dropbox.com/scl/fi/r0ir1ci0v6dckyqicyoyi/logo-3m-4096.png?rlkey=0e4yo59sxe7x5wp32p2lzd4lw&st=ffyfx02x&raw=1"
  },
  { 
    name: "VIBRA", 
    url: "https://www.dropbox.com/scl/fi/hmmzb6rrv82tukkgoxept/Vibra-logo.png?rlkey=pv7sf40sd4enfu7j1nmcjugq1&st=kq73vyrz&raw=1"
  }
];

// Componente de fileira de logos com animação infinita
const InfiniteLogoRow = ({ 
  logos, 
  direction = 'left',
  speed = 50
}: {
  logos: typeof clientLogos;
  direction?: 'left' | 'right';
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const progressRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const speedRef = useRef(speed);
  const currentSpeedRef = useRef(speed);
  
  // Duplicar logos para criar loop contínuo
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    let lastTime = performance.now();
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      if (!containerRef.current) return;
      
      // Calcular velocidade responsiva
      const screenWidth = window.innerWidth;
      let adjustedSpeed = speed;
      if (screenWidth < 640) {
        adjustedSpeed = speed * 0.5; // Mobile
      } else if (screenWidth < 1024) {
        adjustedSpeed = speed * 0.75; // Tablet
      }
      
      // Suavizar transição de velocidade quando pausa/retoma
      const targetSpeed = isPaused ? 0 : adjustedSpeed;
      const speedDiff = targetSpeed - currentSpeedRef.current;
      const acceleration = 0.05; // Quanto menor, mais suave
      
      if (Math.abs(speedDiff) > 0.1) {
        currentSpeedRef.current += speedDiff * acceleration;
      } else {
        currentSpeedRef.current = targetSpeed;
      }
      
      // Aplicar movimento
      const pixelsPerFrame = (currentSpeedRef.current * deltaTime) / 1000;
      
      if (direction === 'left') {
        progressRef.current -= pixelsPerFrame;
      } else {
        progressRef.current += pixelsPerFrame;
      }
      
      // Reset quando uma seção completa passou
      const singleSetWidth = containerRef.current.scrollWidth / 2;
      
      if (direction === 'left' && progressRef.current <= -singleSetWidth) {
        progressRef.current += singleSetWidth;
      } else if (direction === 'right' && progressRef.current >= 0) {
        progressRef.current -= singleSetWidth;
      }
      
      // Aplicar transformação
      containerRef.current.style.transform = `translateX(${progressRef.current}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed, isPaused]);
  
  return (
    <div 
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradientes laterais */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      
      <div
        ref={containerRef}
        className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap will-change-transform"
        style={{
          transform: direction === 'right' ? 'translateX(-50%)' : 'translateX(0)'
        }}
      >
        {duplicatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0"
          >
            <div className="relative bg-white/70 dark:bg-gray-100/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200/50 dark:border-gray-300/50 shadow-sm hover:shadow-md transition-all duration-300 h-[80px] sm:h-[90px] md:h-[100px] w-[140px] sm:w-[160px] md:w-[180px] flex items-center justify-center overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50">
              <img
                src={client.url}
                alt={client.name}
                className={`relative z-10 object-contain ${
                  client.name === 'weg' || client.name === '3M' 
                    ? 'max-w-[95%] max-h-[80%]' 
                    : 'max-w-[90%] max-h-[70%]'
                }`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  // Dividir logos em duas fileiras
  const firstRowLogos = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
  const secondRowLogos = clientLogos.slice(Math.ceil(clientLogos.length / 2));
  
  return (
    <section 
      id="clientes" 
      className="pt-0 pb-16 md:pb-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Linha vermelha decorativa */}
          <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
          
          <h2 className="font-garamond text-4xl md:text-5xl font-bold text-azul-profundo dark:text-white mb-4">
            {t('clients.title', 'Nossos Clientes')}
          </h2>
          
          <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto">
            {t('clients.subtitle', 'Confiança de grandes corporações há mais de 80 anos')}
          </p>
        </motion.div>
      </div>

      {/* Container das fileiras de logos */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Primeira fileira - movimento para direita */}
        <InfiniteLogoRow 
          logos={firstRowLogos} 
          direction="right" 
          speed={50}
        />
        
        {/* Segunda fileira - movimento para esquerda */}
        <InfiniteLogoRow 
          logos={secondRowLogos} 
          direction="left" 
          speed={50}
        />
      </motion.div>
    </section>
  );
};

export default ClientsSection;