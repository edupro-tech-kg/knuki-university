import React, { useEffect } from "react";

function PdfModal({ pdf, onClose, title = "Документ" }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; 
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-5/6 rounded-lg overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-700 truncate pr-2">{title}</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            ×
          </button>
        </div>
        
        <div className="w-full h-[calc(100%-64px)]">
          <iframe 
            src={pdf} 
            className="w-full h-full"
            title={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default PdfModal;