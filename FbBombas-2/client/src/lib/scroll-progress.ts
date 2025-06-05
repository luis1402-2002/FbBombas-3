/**
 * Atualiza o indicador de progresso de rolagem na página
 * com animações e cálculos aprimorados
 */
export const updateScrollProgress = (): void => {
  const progressBar = document.querySelector('.scroll-progress-indicator') as HTMLElement;
  if (!progressBar) return;
  
  // Calcula a porcentagem de rolagem
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
  
  // Aplica a largura ao indicador com animação suave
  progressBar.style.width = `${progress * 100}%`;
  
  // Aplica cor gradiente ao indicador conforme rola
  const hue = 30 - (progress * 30); // Vai de laranja para vermelho
  progressBar.style.background = `linear-gradient(to right, hsl(${hue}, 93%, 54%), hsl(${hue - 10}, 95%, 45%))`;
  
  // Ajusta altura com base no progresso para efeito sutil
  const height = 4 + (progress * 1); // Aumenta levemente conforme rola
  progressBar.style.height = `${height}px`;
  
  // Adiciona sombra para efeito premium quando a rolagem avança
  const shadowOpacity = progress * 0.4;
  progressBar.style.boxShadow = `0 0 10px rgba(234, 88, 12, ${shadowOpacity})`;
};

/**
 * Inicializa o sistema de progresso de rolagem com animações aprimoradas
 * e efeitos visuais avançados
 */
export const initScrollProgress = (): (() => void) => {
  // Adicionar evento de rolagem com throttling para melhor performance
  let ticking = false;
  
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Também atualizar durante resize para garantir medidas corretas
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  
  // Inicializar na montagem
  setTimeout(updateScrollProgress, 100);
  
  // Retornar função para limpar os listeners
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', updateScrollProgress);
  };
};
