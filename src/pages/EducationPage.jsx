import { useTranslation } from "react-i18next";

export default function EducationPage() {
  const { t } = useTranslation();
  const edicationDate = t("education");

  const styles = {
    border: "border border-black",
    text: "font-normal xl:text-xl md:text-base text-sm",
    heading: "xl:text-2xl lg:text-lg md:text-base",
    center: "flex justify-center",
    cellPadding: "pt-7 pb-11 pl-6",
  };

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
              {edicationDate.tables.map((section) => (
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
              {edicationDate.additionalPrograms.map((item) => (
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
