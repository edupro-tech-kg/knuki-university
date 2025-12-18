import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";
import ManagementCard from "../components/ManagementCard";
import ManagementModal from "../components/ManagementModal";

function ManagementPage() {
  const { t, i18n } = useTranslation();

  // Получаем данные из переводов
  const ManagementInfo = t("managementInfo", { returnObjects: true });

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const handleOpenModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPerson(null), 300);
  };

  useEffect(() => {}, [i18n.language]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || window.innerWidth >= 768) return;

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) return;

      scrollIntervalRef.current = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: 280,
            behavior: "smooth",
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

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    container.addEventListener("touchend", startAutoScroll);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
      container.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  // Проверка наличия данных
  if (!ManagementInfo || !ManagementInfo.person || !Array.isArray(ManagementInfo.person)) {
    console.error("No management data found!");
    return (
      <section className="w-full mt-12 sm:mt-16 lg:mt-20 px-3 sm:px-4 lg:px-8">
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center mb-4 sm:mb-6 lg:mb-8 uppercase italic font-serif text-primary">
          {ManagementInfo?.title || "Руководство"}
        </h1>
        <div className="text-center py-10">
          <p className="text-gray-500">Данные не загружены</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full mt-5 sm:mt-16 lg:mt-12 px-3 sm:px-4 lg:px-8">
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center mb-4 sm:mb-6 lg:mb-8 uppercase italic font-serif text-primary">
          {ManagementInfo.title}
        </h1>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 lg:gap-4 overflow-x-auto md:overflow-x-visible snap-x hide-scrollbar"
          >
            {ManagementInfo.person.map((item, index) => (
              <div
                key={`management-${index}`}
                className="flex-shrink-0 w-[70%] sm:w-[60%] md:w-full snap-start"
              >
                <ManagementCard
                  name={item.name}
                  post={item.post}
                  onOpenModal={() => handleOpenModal(item)}
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
        `}</style>
      </section>

      <ManagementModal isOpen={isModalOpen} onClose={handleCloseModal} person={selectedPerson} />
    </>
  );
}

export default ManagementPage;
