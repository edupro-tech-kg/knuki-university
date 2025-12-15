import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import Button from "./UI/Button";

function ManagementCard({ onOpenModal }) {
  const { t } = useTranslation();
  const ManagementInfo = t("managementInfo", { returnObjects: true });
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);


  const splitName = (fullName) => {
    const words = fullName.trim().split(/\s+/);
    
    if (words.length <= 2) {

      return {
        firstLine: fullName,
        secondLine: ""
      };
    } else {
  
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return { firstLine, secondLine };
    }
  };


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || window.innerWidth >= 768) return;

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) return;

      scrollIntervalRef.current = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          container.scrollBy({
            left: 280,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('touchstart', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('touchend', startAutoScroll);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('touchstart', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
      container.removeEventListener('touchend', startAutoScroll);
    };
  }, []);

  return (
    <section className="w-full mt-14 px-3 sm:px-4 lg:px-8">
      <h1 className="text-lg sm:text-xl lg:text-4xl font-semibold text-center mb-3 sm:mb-4 uppercase italic font-serif text-primary">
        {ManagementInfo.title}
      </h1>

    
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 lg:gap-4 overflow-x-auto md:overflow-x-visible snap-x hide-scrollbar"
        >
          {ManagementInfo.person.map((item, index) => {
            const { firstLine, secondLine } = splitName(item.name);
            
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[78%] sm:w-[60%] md:w-full snap-start flex flex-col rounded-lg bg-white p-2.5 sm:p-3 mr-2.5 sm:mr-3 md:mr-0 last:mr-0"
              >
 
                <div className="w-full aspect-[5/6] bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-xs">Photo</span>
                </div>


                <div className="flex flex-col flex-1 text-center">

                  <div className="mb-1">
                    <p className="font-bold leading-tight">
                      {firstLine}
                    </p>
                    {secondLine && (
                      <p className="font-bold leading-tight">
                        {secondLine}
                      </p>
                    )}
                  </div>
                  

                  <div className="min-h-[2.5rem] sm:min-h-[3rem] mb-1 flex items-center justify-center">
                    <p className="text-gray-600 leading-tight line-clamp-2">
                      {item.post}
                    </p>
                  </div>


                  <div className="mt-auto pt-1.5">
                    <Button
                      variant="secondary"
                      onClick={() => onOpenModal(item)}
                      className="w-full"
                    >
                      {ManagementInfo.btn}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default ManagementCard;