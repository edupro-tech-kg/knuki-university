export default function EducationPage() {
  const programs = {
    first: [
      { id: 1, title: "550600 Көркөмдүк билим берүү (Бакалавриат)" },
      { id: 2, title: "570002 Театр таануу (Адистик)" },
      { id: 3, title: "570005 Кино таануу (Адистик)" },
      { id: 4, title: "570027 Адабий чыгармачылык (Адистик)" },
      { id: 5, title: "570013 Үн режиссурасы (колдонулуучу багыттары боюнча) (Адистик)" },
      { id: 6, title: "570014 Актёрдук өнөр (Адистик)" },
      { id: 7, title: "570015 Режиссура (колдонулуучу багыттары боюнча) (Адистик)" },
      { id: 8, title: "570006 Кинооператорлук (Адистик)" },
      { id: 9, title: "570029 Социалдык-маданий ишмердүүлүгү (Адистик)" },
      { id: 10, title: "570019 Хореография педагогикасы (Адистик)" },
      { id: 11, title: "570031 Музей иши жана эстеликтерди коргоо (Адистик)" },
      { id: 12, title: "Элдик музыкалык искусство (Эксперимент.) (Адистик)" },
      { id: 13, title: "570200 Музыкалык искусство (Магистратура)" },
      { id: 14, title: "570300 Театралдык искусство (Магистратура)" },
      { id: 15, title: "550600 Көркөмдүк билим берүү (Магистратура)" },
    ],
    second: [
      { id: 17, title: "17.00.02 Музыкалык искусство (Аспирантура)" },
      { id: 18, title: "24.00.01 Маданияттын тарыхы жана теориясы (Аспирантура)" },
    ],
  };

  const additionalPrograms = [
    { id: 1, title: "Жогорку адабий курс (күндүзгү, 2 жыл)" },
    { id: 2, title: "Хореография (күндүзгү, 72 саат)" },
    { id: 3, title: "Музыкалык аткаруучулук (түрлөрү боюнча) (күндүзгү, 72 саат)" },
    { id: 4, title: "Көркөмдүк билим берүү (күндүзгү, 72 саат)" },
    { id: 5, title: "Музыка мугалими (күндүзгү, 72 саат)" },
    {
      id: 6,
      title:
        "«Социалдык-маданий ишмердүүлүк» багыты боюнча маданият жана искусство чөйрөсүндө эмгектенген кызматкерлердин адистигин жогорулатуу курсу (күндүзгү, 1 ай)",
    },
    {
      id: 7,
      title:
        "Б.Бейшеналиева атындагы КУМИУнун алдындагы Кыргыз кинематография жана телересурсу Жогорку мектебинин курстары:",
      list: [
        "Театр жана кино сүрөтчү-коюучу",
        "Кино жана телересурстун кино-продюссери",
        "Костюм боюнча сүрөтчү-коюучу, гримёр",
        "Үн режиссурасы",
        "Кинооператор – сүрөт-тележурналист",
        "Кино таануу",
        "Кинодраматургия",
        "Кинорежиссура",
      ],
      footer: "(күндүзгү, 10 ай)",
    },
  ];

  const styles = {
    border: "border border-black",
    text: "font-normal xl:text-xl md:text-base text-sm",
    heading: "xl:text-2xl lg:text-lg md:text-base",
    center: "flex justify-center",
    cellPadding: "pt-7 pb-11 pl-6",
  };

  const sections = [
    {
      title: "Жогорку кесиптик билим берүү",
      data: programs.first,
    },
    {
      title: "Жогорку окуу жайдан кийинки кесиптик билим берүү",
      data: programs.second,
    },
  ];

  return (
    <div className="pb-28">
      <div className="flex justify-center mt-[51px]">
        <h1 className="italic xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-primary font-cormorant font-bold">
          БИЛИМ
        </h1>
      </div>

      <div className="mx-auto max-w-[2000px] px-5">
        <div className="flex flex-wrap md:flex-nowrap justify-around items-start gap-8 mt-[70px]">
          <table className={`${styles.border} border-collapse w-full max-w-[888px]`}>
            <thead>
              <tr>
                <th className={`${styles.border} px-3`}>№</th>
                <th className={`${styles.border} pt-8 pb-10`}>
                  <h2 className={styles.heading}>Билим берүү программасынын аталышы</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <>
                  <tr>
                    <td className={styles.border}></td>
                    <td className={`pt-7 pb-11 ${styles.center}`}>
                      <b className={`${styles.heading} text-center `}>{section.title}</b>
                    </td>
                  </tr>

                  {section.data.map((item) => (
                    <tr key={item.id} className={styles.border}>
                      <td>
                        <div className={`${styles.center} text-sm md:text-lg  `}>{item.id}</div>
                      </td>
                      <td className={`${styles.border} ${styles.cellPadding}`}>
                        <p className={styles.text}>{item.title}</p>
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>

          <table className="border-collapse w-full max-w-[888px]">
            <thead className={styles.border}>
              <tr>
                <th className="pt-8 pb-10">
                  <h2 className={styles.heading}>Кошумча билим берүү</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {additionalPrograms.map((item) => (
                <tr key={item.id} className={styles.border}>
                  <td className="pt-7 pb-11 px-6">
                    <p className={styles.text}>{item.title}</p>

                    {item.list && (
                      <ul className="list-disc pl-7 space-y-2">
                        {item.list.map((li) => (
                          <li key={li} className={`${styles.text} pl-10`}>
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.footer && <p className={`mt-3 italic ${styles.text}`}>{item.footer}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
