import { useState } from "react";
import { useTranslation } from "react-i18next";
import PdfModal from "../components/UI/PdfModal";
import DocumentTable from "../components/UI/DocumentTable";


import doc1 from "../assets/pdf/doc1.pdf";
import doc2 from "../assets/pdf/doc2.pdf";
import doc3 from "../assets/pdf/doc3.pdf";
import doc4 from "../assets/pdf/doc4.pdf";
import doc5 from "../assets/pdf/doc5.pdf";
import doc6 from "../assets/pdf/doc6.pdf";
import doc7 from "../assets/pdf/doc7.pdf";
import doc8 from "../assets/pdf/doc8.pdf";
import doc9 from "../assets/pdf/doc9.pdf";
import doc10 from "../assets/pdf/doc10.pdf";
import doc11 from "../assets/pdf/doc11.pdf";
import doc12 from "../assets/pdf/doc12.pdf";
import doc13 from "../assets/pdf/doc13.pdf";
import doc14 from "../assets/pdf/doc14.pdf";
import doc15 from "../assets/pdf/doc15.pdf";
import doc16 from "../assets/pdf/doc16.pdf";
import doc17 from "../assets/pdf/doc17.pdf";
import doc18 from "../assets/pdf/doc18.pdf";
import doc19 from "../assets/pdf/doc19.pdf";
import doc20 from "../assets/pdf/doc20.pdf";
import doc21 from "../assets/pdf/doc21.pdf";
import doc22 from "../assets/pdf/doc22.pdf";
import doc23 from "../assets/pdf/doc23.pdf";
import doc24 from "../assets/pdf/doc24.pdf";
import doc25 from "../assets/pdf/doc25.pdf";
import doc26 from "../assets/pdf/doc26.pdf";
import doc27 from "../assets/pdf/doc27.pdf";
import doc28 from "../assets/pdf/doc28.pdf";
import doc29 from "../assets/pdf/doc29.pdf";
import doc30 from "../assets/pdf/doc30.pdf";
import doc31 from "../assets/pdf/doc31.pdf";

const nlaKgukiPdfs = {
  doc1,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  doc7,
  doc8,
  doc9,
  doc10,
  doc11,
  doc12,
  doc13,
  doc14,
  doc15,
  doc16,
  doc17,
  doc18,
  doc19,
  doc20,
  doc21,
  doc22,
  doc23,
  doc24,
  doc25,
  doc26,
  doc27,
  doc28,
  doc29,
  doc30,
  doc31,
};

const nlaKgukiDocuments = [
  {
    text: "Постановление Совета Министров Киргизской ССР № 482 от 30 августа 1967 года «Об организации Киргизского государственного института искусств» (КГИИ).",
    id: "doc1",
  },
   {
    text: "Постановление Совета Министров Киргизской ССР № 21 от 28 января 1974 года, об официальном наименовании КГИИ, как «Киргизский государственный институт искусств имени Бубусары Бейшеналиевой».",
    id: "doc2",
  },
  {
    text: "Постановление Правительства КР №470 от 28.08.2013 года, о преобразовании Кыргызского государственного института искусств имени Б.Бейшеналиевой в Кыргызский государственный университет культуры и искусств имени Бубусары Бейшеналиевой.",
    id: "doc3",
  },
  {
    text: "КРнын Президентинин Жарлыгы. Бубусара Бейшеналиева атындагы Кыргыз мамлекеттик маданият жана искусство университетине “улуттук” статусту ыйгаруу жөнүндө. №96, 22.03.2025.",
    id: "doc4",
  },
  {
    text: "Кайра каттоо күбөлүгү / Свидетельство о государственной перерегистрации (2025)",
    id: "doc5",
  },
  {
    text: "КУМИУнун Уставы (2025) / Устав КНУКИ (2025);",
    id: "doc6",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университети жөнүндө ЖОБО.",
    id: "doc7",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин окуу-усулдук бирикмеси жөнүндөгү ЖОБОсу",
    id: "doc8",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин факультет жана кафедра жөнүндө ЖОБОсу",
    id: "doc9",
  },
  {
    text: "Б. Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин Окумуштуулар Кеңеши жөнүндөгү ЖОБОсу",
    id: "doc10",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин профессордук-окутуучулук курамдын кызмат орундарын ээлөө тартиби жөнүндөгү ЖОБОсу",
    id: "doc11",
  },
  {
    text: "Б.Бейшеналиева атындагы КУМИУда академиялык кредиттерди колдонуу менен окуу процессин уюштуруу жөнүндөгү ЖОБО",
    id: "doc12",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде билим алуучуларын которуу, окуудан чыгаруу, окууга калыбына келтиру жана академиялык өргүү берүү тартиби жөнүндөгү ЖОБО",
    id: "doc13",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде окутуунун модулдук-рейтингдик технологиясын колдонуу боюнча НУСКАМА (И Н С Т Р У К Ц И Я)",
    id: "doc14",
  },
  {
    text: "Бейшеналиева ат. КУМИУнин коррупцияга каршы саясаты жөнүндөгү ЖОБОсу.",
    id: "doc15",
  },
  {
    text: 'КЫРГЫЗ РЕСПУБЛИКАСЫНЫН ЖОГОРКУ КЕСИПТИК БИЛИМ БЕРҮҮНҮН МАМЛЕКЕТТИК БИЛИМ БЕРҮҮ СТАНДАРТЫ. Квалификация: "Специалист" (2021-жылдын 11-декабрындагы №1578/1 буйругу менен бекитилген.) 570002 Театр таануу 570027 Адабий чыгармачылык 570013 Үн режиссурасы (колдонулуучу багыттары боюнча) 570014 Актердук өнөр 570015 Режиссура (колдонулуучу багыттары боюнча) 570006 Кинооператорлук 570029 Социалдык-маданий ишмердүүлүк 570019 Хореография педагогикасы 550600 Көркөмдүк билим берү',
    id: "doc16",
  },
  {
    text: 'КЫРГЫЗ РЕСПУБЛИКАСЫНЫН ЖОГОРКУ КЕСИПТИК БИЛИМ БЕРҮҮНҮН МАМЛЕКЕТТИК БИЛИМ БЕРҮҮ СТАНДАРТЫ. Квалификация: "магистр" (2024-жылдын 21-сентябрындагы №1815/1 буйругу менен бекитилген.) 570200 Музыкалык искусство 570300 Театралдык искусство 550600 Көркөмдүк билим берүү',
    id: "doc17",
  },
  {
    text: "Положение об основной образовательной программе (ООП) Кыргызского национального университета культуры и искусств им. Б. Бейшеналиевой",
    id: "doc18",
  },
  {
    text: "КУМИУнун бүтүрүүчүлөрүн жыйынтыктоочу мам.аттестациялоо ж-до Жобосу",
    id: "doc19",
  },
  {
    text: "Положение о документах о среднем и высшем профессиональном образовании государственного образца, порядке их изготовления, оплаты, хранения, выдачи и учета. Приложение к приказу МОН КР от 10.03.2025 года №249/1.",
    id: "doc20",
  },
  {
    text: "Положение о ящике доверия КНУКИ им. Б.Бейшеналиевой",
    id: "doc21",
  },
  {
    text: "Положение об отделе качества образования, лицензирования и аккредитации Кыргызского национального университета культуры и искусств им. Б. Бейшеналиевой",
    id: "doc22",
  },
  {
    text: "Положение об УМК",
    id: "doc23",
  },
  {
    text: "Положение об академической мобильности",
    id: "doc24",
  },
  {
    text: "Б.БЕЙШЕНАЛИЕВА АТ. КУМИУнун МУЗЫКАЛЫК АСПАПТАРДЫ САКТОО ЖӨНҮНДӨ ЖОБОСУ",
    id: "doc25",
  },
  {
    text: "Положение о мониторинге удовлетворенности качеством образования потребителей КНУКИ им. Б.Бейшеналиевой",
    id: "doc26",
  },
  {
    text: "Университеттин практиканы уюштурууга жана өткөрүү жөнүндө жобосу",
    id: "doc27",
  },
  {
    text: "Магистранттардын практикаларды өтөө жөнүндө жобо",
    id: "doc28",
  },
  {
    text: "МАГИСТРДИК ДИССЕРТАЦИЯ БОЮНЧА ЖОБО",
    id: "doc29",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде ун эмгекти коргоо жана билим беруу процесссинде коопсуз шарттарды камсыз кылуу тууралуу ЖОБО",
    id: "doc30",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетиндеги студенттердин тандоо курстары жөнүндө ЖОБО",
    id: "doc31",
  },
];

export default function NLAkguki() {
  const { t } = useTranslation();
  const [modalState, setModalState] = useState({
    isOpen: false,
    pdf: null,
    title: "",
  });

  const tableData = nlaKgukiDocuments.map((item, index) => ({
    id: index + 1, 
    docId: item.id, 
    text: item.text,
    pdf: nlaKgukiPdfs[item.id],
    displayIndex: index + 1,
  }));

  const openPdfModal = (item) => {
    if (item.pdf) {
      setModalState({ 
        isOpen: true, 
        pdf: item.pdf, 
        title: item.text 
      });
    }
  };

  const closePdfModal = () => {
    setModalState({ isOpen: false, pdf: null, title: "" });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-8">
      <h2 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 sm:py-9 uppercase italic">
        НПА КР
      </h2>

      <DocumentTable
        data={tableData}
        config={{
          hasIndexColumn: true,
          hasActionColumn: true,
          actionType: "pdf",
          indexColumnWidth: "w-16",
          actionColumnWidth: "w-48",
          textColumnClass: "px-4 py-3 text-base text-gray-700",
          borderClass: "border border-black border-collapse",
          rowBorderClass: "border-b border-black last:border-b-0",
          hoverEffect: true,
          itemTextKey: "text",
          itemIdKey: "displayIndex", 
          buttonVariant: "secondary",
          buttonClassName: "px-6 py-2 text-sm",
          showButtonIfNoAction: false,
        }}
        buttonText={t("NLAkguki.btnText") || "Открыть PDF"}
        onActionClick={openPdfModal}
        mobileView="cards"
      />

      {modalState.isOpen && (
        <PdfModal
          pdf={modalState.pdf}
          title={modalState.title}
          onClose={closePdfModal}
        />
      )}
    </section>
  );
}