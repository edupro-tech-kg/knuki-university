export default function EducationPage() {
  const programs = [
    { id: 1, title: "550600 Көркөмдүк билим берүү (Бакалавриат)" },
    { id: 2, title: "570002 Театр таануу (Адистик)" },
    { id: 3, title: "570005 Кино таануу (Адистик)" },
    { id: 4, title: "570027 Адабий чыгармачылык (Адистик)" },
    { id: 5, title: "570013 Үн режиссурасы (колдонулуучу багыттары боюнча) (Адистик)" },
    { id: 6, title: " 570014 Актёрдук өнөр (Адистик)" },
    { id: 7, title: "570015 Режиссура (колдонулуучу багыттары боюнча) (Адистик)" },
    { id: 8, title: "570006 Кинооператорлук (Адистик)" },
    { id: 9, title: "570029 Социалдык-маданий ишмердүүлүгү (Адистик)" },
    { id: 10, title: "570019 Хореография педагогикасы (Адистик)" },
    { id: 11, title: "570031 Музей иши жана эстеликтерди коргоо (Адистик)" },
    { id: 12, title: "Элдик музыкалык искусство (Эксперимент.) (Адистик)" },
    { id: 13, title: "570200 Музыкалык искусство (Магистратура)" },
    { id: 14, title: "570300 Театралдык искусство (Магистратура)" },
    { id: 15, title: "550600 Көркөмдүк билим берүү (Магистратура)" },
  ];

  const borderClass = "border border-black ";

  return (
    <div>
      <div className="flex justify-center mt-[51px]">
        <h1 className="italic text-6xl text-primary font-cormorant font-bold">БИЛИМ</h1>
      </div>
      <div className="flex  w-full justify-center mt-[70px]">
        <table className={`${borderClass} max-w-[800px] border-collapse  w-full`}>
          <thead className={`${borderClass}`}>
            <tr className={`${borderClass}`}>
              <th className={`${borderClass} px-3`}>№</th>
              <th className={`${borderClass} pt-8 pb-10 font-bold`}>
                <h2 className="text-[26px]">Билим берүү программасынын аталышы</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={`${borderClass}`}>
              <td className={borderClass}></td>
              <td className="pt-7 pb-11 flex justify-center ">
                <b className="text-[26px]">Жогорку кесиптик билим берүү</b>
              </td>
            </tr>
            {programs.map((item) => (
              <tr className={`${borderClass}`} key={item.id}>
                <td className={` `}>
                  <div className={`flex justify-center`}>{item.id}</div>
                </td>
                <td className={`${borderClass} `}>
                  <div className="flex justify-start pt-7 pb-11 pl-6 ">
                    <p className="font-normal text-[26px]">{item.title}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
