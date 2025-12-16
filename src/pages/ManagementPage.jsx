import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import ManagementCard from '../components/ManagementCard';

function ManagementPage({ onOpenModal }) {
    const { t } = useTranslation();
    const ManagementInfo = t("managementInfo", { returnObjects: true });

    const scrollContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);

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
        <section className="w-full mt-10 lg:mt-10 sm:mt-2 px-2 sm:px-4 lg:px-8 mb-10">
            <h1 className="text-2xl lg:text-4xl font-semibold text-center mb-4 sm:mb-6 lg:mb-5 uppercase italic font-serif text-primary">
                {ManagementInfo.title}
            </h1>

            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 lg:gap-4 overflow-x-auto md:overflow-x-visible snap-x hide-scrollbar"
                >
                    {ManagementInfo.person.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[70%] sm:w-[60%] md:w-full snap-start" // Уменьшил ширину на мобилке
                        >
                            <ManagementCard
                                name={item.name}
                                post={item.post}
                                onOpenModal={() => onOpenModal(item)}
                                btnText={ManagementInfo.btn}
                            />
                        </div>
                    ))}
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
        
        /* Меньший шаг прокрутки на мобилках */
        @media (max-width: 767px) {
          .snap-x > * {
            scroll-margin-left: 8px;
          }
        }
      `}</style>
        </section>
    );
}

export default ManagementPage;