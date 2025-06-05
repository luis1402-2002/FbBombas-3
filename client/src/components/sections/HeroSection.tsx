import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Award, Shield, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Efeito para ocultar o indicador de scroll após o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito de partículas tecnológicas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = [];
    const particleCount = 50;
    
    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dados destacados com animação
  const highlightData = [
    { 
      icon: <Clock className="h-6 w-6 text-laranja" />,
      title: "80+", 
      description: t('hero.years', 'Anos de Experiência')
    },
    { 
      icon: <Award className="h-6 w-6 text-laranja" />,
      title: "API 610", 
      description: t('hero.certified', 'Padrão Internacional')
    },
    { 
      icon: <Shield className="h-6 w-6 text-laranja" />,
      title: "100%", 
      description: t('hero.guarantee', 'Garantia nos produtos')
    }
  ];

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center bg-gradient-to-b from-slate-900 dark:from-slate-950 via-slate-800 dark:via-slate-900 to-slate-700 dark:to-slate-800 pb-8 md:pb-10 lg:pb-12">
      {/* Canvas para efeito de partículas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-30"
      />
      
      {/* Gradiente tecnológico high-end */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-red-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30" />
      </div>
      

      {/* Hero content com animações escalonadas */}
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-4xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Elemento gráfico decorativo */}
          <motion.div 
            className="absolute -left-8 top-1/2 w-1 h-24 bg-laranja rounded-full hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: 120 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          
          <motion.div
            className="inline-flex items-center gap-3 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-laranja" />
            <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
              {t('hero.since', 'Desde 1944')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">{t('hero.title_line1', 'Há mais de 80 anos')}</span>
            <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">{t('hero.title_line2', 'bombeando soluções.')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle', 'Tecnologia de bombeamento e soluções para indústrias que não podem parar. Qualidade e alta performance para os mais exigentes processos industriais.')}
          </motion.p>
          
          {/* Botões com interação avançada */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contato" 
              className="group relative bg-gradient-to-r from-laranja to-red-600 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-laranja opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{t('hero.get_quote', 'Solicitar Orçamento')}</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#produtos" 
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center justify-center overflow-hidden hover:bg-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('hero.explore_products', 'Explorar Produtos')}</span>
            </motion.a>
          </motion.div>
          
          {/* Destaques com animação - Responsivo e Otimizado */}
          <motion.div 
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 md:mt-4 mb-6 md:mb-8 lg:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {highlightData.map((item, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-tight">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradiente sutil para conexão natural com o divisor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-slate-700/50 dark:via-slate-800/50 to-slate-700 dark:to-slate-800 pointer-events-none" />
      
      {/* Indicador de scroll */}
      {scrollIndicator && (
        <motion.div 
          className="absolute bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-white text-sm mb-2">{t('hero.scroll_down', 'Role para explorar')}</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1 flex justify-center"
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
