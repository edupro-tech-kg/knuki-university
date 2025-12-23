import Button from "../components/UI/Button";
import { useTranslation } from "react-i18next";

const STATIC_ITEMS = [
  {
    text: "Кыргыз Республикасынын Өкмөтүнүн 2011-жылдын 23-августундагы № 496 токтому. Кыргыз Республикасында жогорку кесиптик билим берүүнүн эки деңгээлдүү түзүмүн белгилөө жөнүндө",
    link: "https://cbd.minjust.gov.kg/7-14864/edition/19609/kg?editionCode=exact",
  },
  {
    text: "КР Министрлер Кабинетинин 2024-жылдын 27-сентябрындагы № 590 Жогорку кесиптик билим берүүнүн билим берүү уюмдарынын ишин жөнгө салган ченемдик укуктук актыларды бекитүү жөнүндө токтому.",
    link: "https://cbd.minjust.gov.kg/7-33050/edition/17445/kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2024-жылдын 27-сентябрындагы № 590 токтомуна 1-тиркеме. Академиялык эркиндикти колдоону жогорулатуу кесиптик билим берүү уюмдарына билим берүү программаларын иштеп чыгууга коюлуучу талаптарды белгилөө",
    link: "https://cbd.minjust.gov.kg/230318483/edition/17447/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2024-жылдын 27-сентябрындагы № 590 токтомуна 2-тиркеме. КРнын жогорку кесиптик билим берүүнүн билим берүү уюмдарынын билим алуучуларын которуу, окуудан чыгаруу, окууга калыбына келтирүү жана академиялык өргүү берүү тартиби жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230014839/edition/17452/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2024-жылдын 27-сентябрындагы № 590 токтомуна 3-тиркеме. КРнын жогорку кесиптик билим берүүнүн билим берүү уюмдарынын билим алуучуларын учурдагы контролдоо жана орто аралык аттестациялоо жөнүнө ЖОБО",
    link: "https://cbd.minjust.gov.kg/230051681/edition/17455/kg?lang=kg",
  },
  {
    text: "AIS диплом 2025 санариптик реестри жөнүндө жобо.",
    link: "https://diplom.edu.gov.kg/diploma/",
  },
  {
    text: "2024-жылдын 22-майындагы № 258 токтому. ИМА жөнүндө ЖОБО",
    link: "https://cbd.minjust.gov.kg/46-3664/edition/8733/ru",
  },
  {
    text: "2025-жылдын 10-июну КР Министрлер Кабинетинин № 329 Кесиптик жогорку жана орто билим берүү жаатындагы ченемдик укуктук актыларды бекитүү жөнүндө токтому.",
    link: "https://cbd.minjust.gov.kg/7-43071/edition/34437/kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 1-тиркеме. Кыргыз Республикасынын кесиптик жогорку жана жогорку окуу жайынан кийинки билим берүү уюму жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029680/edition/35047/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 2-тиркеме. Кыргыз Республикасынын кесиптик жогорку жана орто билим берүүсүнүн мамлекеттик билим берүү стандарттары жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029723/edition/35177/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 3-тиркеме. Кыргыз Республикасынын кесиптик жогорку жана орто билим берүүнүн окуу-методикалык бирикмеси жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029742/edition/35178/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 4-тиркеме. Кыргыз Республикасынын кесиптик жогорку билим берүү уюмунун факультети жана кафедрасы жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029762/edition/35180/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 5-тиркеме. Кыргыз Республикасынын кесиптик жогорку билим берүү уюмунун окумуштуулар кеңеши жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029770/edition/35181/kg?lang=kg",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 6-тиркеме. Кыргыз Республикасынын кесиптик жогорку билим берүү уюмдарында профессордук-окутуучулук курамдын кызмат орундарын ээлөө тартиби жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029826/edition/35182/kg?lang=k",
  },
  {
    text: "КР Министрлер Кабинетинин 2025-жылдын 10-июнундагы № 329 токтомуна 7-тиркеме. Кыргыз Республикасында кесиптик кошумча билим берүү жөнүндө ЖОБО.",
    link: "https://cbd.minjust.gov.kg/230029729/edition/35183/kg?lang=kg",
  },
  {
    text: "Постановление №231 от 10 мая 2024 года Кыргызской Республики. О порядке финансирования государственных образовательных организация НПО, СПО и ВПО.",
    link: "https://drive.google.com/file/d/10IJ84Fae5tIlB9Pwn0W_mG4hOyqK6I-Z/view",
  },
];

export default function NLAKyrgyzRepublic() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-3">
      <h1 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 md:py-9 uppercase italic">
        НПА КР
      </h1>

      <div className="md:hidden space-y-4">
        {STATIC_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium">
                {index + 1}
              </span>
              <p className="text-sm sm:text-base text-gray-700 flex-1">
                {item.text}
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={() => window.open(item.link, "_blank")}
                className="px-4 py-2 text-sm w-full sm:w-auto"
                fullWidth
              >
                {t("documentNLA.btnText")}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-black">
          <tbody>
            {STATIC_ITEMS.map((item, index) => (
              <tr
                key={index}
                className="border-b border-black last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="w-16 px-4 py-3 text-center text-base font-medium text-gray-900 border-r border-black">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-base text-gray-700">
                  {item.text}
                </td>
                <td className="w-48 px-4 py-3">
                  <div className="flex justify-end">
                    <Button
                      variant="secondary"
                      onClick={() => window.open(item.link, "_blank")}
                      className="px-6 py-2 text-sm"
                    >
                      {t("documentNLA.btnText")}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
