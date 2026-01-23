import { useState } from "react";
import { useTranslation } from "react-i18next";
import PdfModal from "../components/UI/PdfModal";
import DocumentTable from "../components/UI/DocumentTable";

import doc1 from "../assets/pdf/doc1.pdf";
import doc2 from "../assets/pdf/doc2.pdf";
import doc3 from "../assets/pdf/doc3.pdf";
import doc6 from "../assets/pdf/doc6.pdf";
import doc7 from "../assets/pdf/doc7.pdf";
import doc47 from "../assets/pdf/doc47.pdf";
import doc48 from "../assets/pdf/doc48.pdf";
import doc49 from "../assets/pdf/doc49.pdf";
import doc50 from "../assets/pdf/doc50.pdf";
import doc51 from "../assets/pdf/doc51.pdf";
import doc53 from "../assets/pdf/doc53.pdf";
import doc54 from "../assets/pdf/doc54.pdf";
import doc56 from "../assets/pdf/doc56.pdf";
import doc64 from "../assets/pdf/doc64.pdf";
import doc72 from "../assets/pdf/doc72.pdf";
import doc85 from "../assets/pdf/doc85.pdf";
import doc89 from "../assets/pdf/doc89.pdf";
import doc91 from "../assets/pdf/doc91.pdf";
import doc94 from "../assets/pdf/doc94.pdf";
import doc95 from "../assets/pdf/doc95.pdf";
import doc96 from "../assets/pdf/doc96.pdf";
import doc102 from "../assets/pdf/doc102.pdf";
import doc110 from "../assets/pdf/doc110.pdf";
import doc114 from "../assets/pdf/doc114.pdf";
import doc116 from "../assets/pdf/doc116.pdf";
import doc58 from "../assets/pdf/doc58.pdf";
import doc52 from "../assets/pdf/doc52.pdf";
import doc55 from "../assets/pdf/doc55.pdf";
import doc71 from "../assets/pdf/doc71.pdf";
import doc76 from "../assets/pdf/doc76.pdf";
import doc104 from "../assets/pdf/doc104.pdf";
import doc106 from "../assets/pdf/doc106.pdf";
import doc149 from "../assets/pdf/doc149.pdf";
import doc29 from "../assets/pdf/doc29.pdf";
import doc146 from "../assets/pdf/doc146.pdf";
import doc138 from "../assets/pdf/doc138.pdf";
import doc140 from "../assets/pdf/doc140.pdf";
import doc141 from "../assets/pdf/doc141.pdf";
import doc142 from "../assets/pdf/doc142.pdf";
import doc143 from "../assets/pdf/doc143.pdf";
import doc144 from "../assets/pdf/doc144.pdf";
import doc150 from "../assets/pdf/doc150.pdf";
import doc152 from "../assets/pdf/doc152.pdf";
import doc153 from "../assets/pdf/doc153.pdf";
import doc154 from "../assets/pdf/doc154.pdf";
import doc155 from "../assets/pdf/doc155.pdf";
import doc156 from "../assets/pdf/doc156.pdf";
import doc157 from "../assets/pdf/doc157.pdf";
import doc158 from "../assets/pdf/doc158.pdf";
import doc159 from "../assets/pdf/doc159.pdf";
import doc160 from "../assets/pdf/doc160.pdf";
import doc161 from "../assets/pdf/doc161.pdf";
import doc162 from "../assets/pdf/doc162.pdf";
import doc163 from "../assets/pdf/doc163.pdf";

const nlaKgukiPdfs = {
  doc1,
  doc2,
  doc3,
  doc6,
  doc7,
  doc47,
  doc48,
  doc49,
  doc50,
  doc51,
  doc53,
  doc54,
  doc56,
  doc64,
  doc72,
  doc85,
  doc89,
  doc91,
  doc94,
  doc95,
  doc96,
  doc102,
  doc110,
  doc114,
  doc116,
  doc58,
  doc52,
  doc55,
  doc71,
  doc76,
  doc104,
  doc106,
  doc149,
  doc29,
  doc146,
  doc138,
  doc140,
  doc141,
  doc142,
  doc143,
  doc144,
  doc150,
  doc152,
  doc153,
  doc154,
  doc155,
  doc156,
  doc157,
  doc158,
  doc159,
  doc160,
  doc161,
  doc162,
  doc163,
};

const nlaKgukiDocuments = [
  {
    text: "Постановление Совета Министров Киргизской ССР № 482 от 30 августа 1967 года «Об организации Киргизского государственного института искусств» (КГИИ).",
    id: "doc1",
  },
  {
    text: "Постановление Совета Министров Киргизской ССР № 21 от 28 января 1974 года, об официальном наименование КГИИ, как «Киргизский государственный институт искусств имени Бубусары Бейшеналиевой».",
    id: "doc2",
  },
  {
    text: "КРнын Президентинин Жарлыгы. Бүбүсара Бейшеналиева атындагы Кыргыз мамлекеттик маданият жана искусство университетине “улуттук” статусту ыйгаруу жөнүндө. №96, 22.03.2025.",
    id: "doc3",
  },
  {
    text: "Кайра каттоо күбөлүгү / Свидетельство о государственной перерегистрации (2025)",
    id: "doc6",
  },
  {
    text: "КУМИУнун Уставы (2025)  / Устав КНУКИ (2025);",
    id: "doc7",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университети жөнүндө ЖОБО.",
    id: "doc47",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин окуу-усулдук бирикмеси жөнүндө ЖОБОсу",
    id: "doc48",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин факультет жана кафедра жөнүндө ЖОБОсу",
    id: "doc49",
  },
  {
    text: "Б.  Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинин Окумуштуулар Кеңеши жөнүндө ЖОБОсу",
    id: "doc50",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинини профессордук-окутуучулук курамдын кызмат орундарын ээлөө тартиби жөнүндө ЖОБОсу",
    id: "doc51",
  },
  {
    text: "Б.Бейшеналиева атындагы КУМИУда академиялык кредиттерди колдонуу менен окуу процессин уюштуруу жөнүндө ЖОБО",
    id: "doc53",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде билим алуучуларын которуу, окуудан чыгаруу, окууга калыбына келтирүү жана академиялык өргүү берүү тартиби жөнүндө ЖОБО",
    id: "doc54",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде окутуунун модулдук-рейтингдик технологиясын колдонуу боюнча НУСКАМА (И Н С Т Р У К Ц И Я);",
    id: "doc56",
  },
  {
    text: "Положение об основной образовательной программе (ООП) Кыргызского национального университета культуры и искусств им. Б. Бейшеналиевой",
    id: "doc64",
  },
  {
    text: "КУМИУнун бүтүрүүчүлөрүн жыйынтыктоочу мам.аттестациялоо ж-до Жобосу",
    id: "doc72",
  },
  {
    text: "Положение о ящике доверия КНУКИ им. Б.Бейшеналиевой",
    id: "doc85",
  },
  {
    text: "Положение об отделе качества образования, лицензирования и аккредитации Кыргызского национального университета культуры и искусств им. Б. Бейшеналиевой",
    id: "doc89",
  },
  {
    text: "Положение об УМК",
    id: "doc91",
  },
  {
    text: "Положение об академической мобильности",
    id: "doc94",
  },
  {
    text: "Б.Бейшеналиева ат. КУМИУнун музыкалык аспаптарды сактоо жөнүндө жобосу",
    id: "doc95",
  },
  {
    text: "Положение о мониторинге удовлетворенности  качеством образования потребителей КНУКИ им. Б.Бейшеналиевой",
    id: "doc96",
  },
  {
    text: "Университеттин практиканы уюштуруу жана өткөрүү жөнүндө жобосу",
    id: "doc102",
  },
  {
    text: "Магистранттардын практикаларды өтөө жөнүндө жобо",
    id: "doc110",
  },
  {
    text: "Магистрдик диссертация боюнча жобо",
    id: "doc114",
  },
  {
    text: "Б.Бейшеналиева атындагағы Кыргыгыз улуттук маданият жана искусство университетинде ун эмгекти коргоо жана билим берүү процессссинде коопсуз шарттарды камсыз кылуу тууралуу жобо",
    id: "doc116",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетиндеги студенттердин тандоо курстары жөнүндө жобо",
    id: "doc58",
  },
  {
    text: "Б.Бейшеналиева атындагы КУМИУнун өрт коопсуздугу боюнча нускамасы",
    id: "doc52",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетинде билим алуучуларды учурдагы көзөмөлдөө жана орто аралык аттестациялоо жөнүндө жобо",
    id: "doc55",
  },
  {
    text: "Б.Бейшеналиева атындагы Кыргыз улуттук маданият жана искусство университетиндеги студенттердин тандоо курстары жөнүндө жобо",
    id: "doc58",
  },
  {
    text: "Академиялык календарь 2025-2026 (Окуу графиги/ График учебного процесса)",
    id: "doc71",
  },
  {
    text: "Студенттин өз алдынча иши жөнүндө жобо",
    id: "doc76",
  },

  {
    text: "КУМИУнун бүтүрүүчүлөрүн жыйынтыктоочу мам.аттестациялоо ж-до жобосу./ Положение об итоговой государственной аттестации выпускников КНУКИ им. Б. Бейшеналиевой",
    id: "doc72",
  },

  {
    text: "Университеттин окутуучулары жана студенттери үчүн Практиканы уюштуруу жана өткөрүү боюнча методикалык колдонмо",
    id: "doc104",
  },
  {
    text: "Программа практики по направлению подготовки магистр",
    id: "doc106",
  },
  {
    text: "КУМИУнун сыйлыктар жөнүндө жобосу",
    id: "doc149",
  },
  {
    text: "КММИУнун ректораты жана Профсоюз комитетинин ортосунда 2023-2026-жылдарга социалдык-экономикалык жана эмгек маселелери боюнча ЖАМААТТЫК КЕЛИШИМ",
    id: "doc29",
  },
  {
    text: "Положение о сайте КНУКИ",
    id: "doc146",
  },
  {
    text: "Магистратура жана аспирантура бөлүмү жөнүндө Жобо",
    id: "doc138",
  },
  {
    text: "КУМИУде илимдин магистрлерин даярдоо боюнча Жобо ",
    id: "doc140",
  },
  {
    text: "Иш берүүчүлөр кеңеши” жөнүндө жобо (аспирантура жана магистратура программалары үчүн)",
    id: "doc141",
  },
  {
    text: "Жогорку окуу жайынан кийинки кесиптик билим берүү программасы, 2025",
    id: "doc142",
  },
  {
    text: "Жогорку окуу жайынан кийинки кесиптик билим берүү программалары боюнча илимий жана илимий-педагогикалык кадрларды даярдоо жөнүндө ЖОБО, 2025",
    id: "doc143",
  },
  {
    text: "Б.Бейшеналиева атындагы КУМИУнун аспиранттарынын практикаларды өтөө тартиби жөнүндө жобосу",
    id: "doc144",
  },
  {
    text: " “Спорт -ден соолук” жобосу ",
    id: "doc150",
  },
  {
    text: "Студенттик кеңештин жобосу",
    id: "doc152",
  },
  {
    text: "Жеңилдик комиссиясы жобо",
    id: "doc153",
  },
  {
    text: "МАМТИЛ жобо",
    id: "doc154",
  },
  {
    text: "Кыргызтест.Жобо",
    id: "doc155",
  },
  {
    text: "Правила пользования библиотечным фондом",
    id: "doc156",
  },
  {
    text: "Положение о Библиотеке",
    id: "doc157",
  },
  {
    text: "Пожарный безопасность для студентов",
    id: "doc158",
  },
  {
    text: "Бүтүрүүчүлөр Ассоциациясы ЖОБО",
    id: "doc159",
  },
  {
    text: "Положение об работе охране труда",
    id: "doc160",
  },
  {
    text: "Пожарный безопасность",
    id: "doc161",
  },
  {
    text: "Бүтүр.Ассоциациянын мүчөлөрү",
    id: "doc162",
  },
  {
    text: "Положение о комиссии по охране труда",
    id: "doc163",
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
        title: item.text,
      });
    }
  };

  const closePdfModal = () => {
    setModalState({ isOpen: false, pdf: null, title: "" });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-8">
      <h2 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 sm:py-9 uppercase italic">
        НПА КНУКИ
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
        <PdfModal pdf={modalState.pdf} title={modalState.title} onClose={closePdfModal} />
      )}
    </section>
  );
}
