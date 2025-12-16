import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function ManagementModal({ isOpen, onClose, person }) {
  const { t } = useTranslation();
  const ManagementInfo = t("managementInfo", { returnObjects: true });

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen || !person) return null;

  const splitName = (fullName) => {
    if (!fullName) return { firstLine: "", secondLine: "" };
    const words = fullName.trim().split(/\s+/);
    if (words.length <= 2) {
      return {
        firstLine: fullName,
        secondLine: "",
      };
    } else {
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return { firstLine, secondLine };
    }
  };

  const { firstLine, secondLine } = splitName(person.name);

  return (
    <>
      <div
        ref={modalRef}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
        onClick={handleOverlayClick}
      >
        <div className="relative w-full max-w-4xl">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-15 h-15 z-20  
                        "
            aria-label="Close"
          >
            <span className="text-xl">×</span>
          </button>

          {/* Модальное окно */}
          <div className="bg-white rounded-lg w-full max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row overflow-hidden shadow-2xl">
            {/* Мобильная версия - вертикальный стек */}
            <div className="md:hidden w-full flex flex-col flex-1 min-h-0">
              <div className="w-full">
                <div className="w-2/3 mt-5 mx-auto aspect-[5/6] bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-lg leading-tight text-gray-800 mb-2">
                    {firstLine}
                    {secondLine && (
                      <>
                        <br />
                        {secondLine}
                      </>
                    )}
                  </h5>
                  <p className="text-gray-600 text-lg mb-2">{person.post}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg w-full max-h-[85vh] flex flex-col overflow-hidden">
                <div className="flex flex-col flex-1 min-h-0">
                  <div className="flex-shrink-0 p-5 pb-0 font-bold text-lg text-gray-800">
                    <h3>{ManagementInfo.resume}</h3>
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto">
                    <div className="p-5 pt-3">
                      <p>{person.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Десктоп версия - горизонтальная раскладка */}
            <div className="hidden md:flex w-full">
              {/* Левая часть - Карточка */}
              <div className="w-2/5 lg:w-1/3 p-6 md:p-8">
                <div className="h-full flex flex-col">
                  <div className="w-full aspect-[5/6] bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-400 text-base">Photo</span>
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold text-lg leading-tight text-gray-800">
                      {firstLine}
                      {secondLine && (
                        <>
                          <br />
                          {secondLine}
                        </>
                      )}
                    </h4>

                    <div className="mt-2">
                      <p className="text-gray-600 text-base">{person.post}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Правая часть - Текст */}
              <div className="w-3/5 lg:w-2/3 p-6 md:p-8 overflow-y-auto">
                <div className="h-full">
                  <h4 className="font-bold text-xl mb-6 text-gray-800">{ManagementInfo.resume}</h4>

                  <div className="text-gray-700 text-base leading-relaxed">
                    <p className="whitespace-pre-line">
                      {person.details ||
                        "Детальная информация о профессиональной деятельности и достижениях."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagementModal;
