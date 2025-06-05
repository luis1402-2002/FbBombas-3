import { useState, useEffect } from "react";

const LgpdBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the LGPD terms
    const lgpdAccepted = localStorage.getItem("lgpdAccepted") === "true";
    if (!lgpdAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lgpdAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-azul-profundo border-t border-prata/20 p-4 z-50">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-prata/80 text-sm text-center md:text-left">
          Este site utiliza cookies essenciais para seu funcionamento. Ao continuar navegando, você concorda com nossa {" "}
          <a href="/privacidade" className="text-white underline">
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-laranja hover:bg-laranja/90 text-white text-sm font-medium py-2 px-6 rounded-md transition whitespace-nowrap"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LgpdBanner;
