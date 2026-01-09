import Button from "../components/UI/Button";
import PrimaryForm from "../components/UI/forms/PrimaryForm";
import DropdownForm from "../components/UI/forms/DropdownForm";
import { useTranslation } from "react-i18next";
import TextAreaForm from "../components/UI/forms/TextAreaForm";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className=" bg-white container mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="flex justify-between flex-wrap  lg:flex-nowrap gap-16 lg:gap-8 items-start">
        <div className="pt-6 max-w-[670px] w-full">
          <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-left italic">
            {t("consultation.title")}
          </h2>

          <p className="2xl:text-xl 2xl:font-light text-base md:text-lg lg:text-base font-sans max-w-[85%]">
            {t("consultation.description")}
          </p>
        </div>

        <div className="w-full">
          <div className=" gap-4 md:gap-6  mb-[50px]">
            <div className="flex flex-wrap lg:gap-8 lg:flex-nowrap  ">
              <PrimaryForm
                label={t("consultation.form.name")}
                children={t("consultation.form.namePlaceholder")}
                className="w-full"
                labelClassName="text-sm md:text-sm lg:text-base"
              />
              <DropdownForm
                labelClassName="text-sm md:text-sm lg:text-base"
                fields={[
                  {
                    name: "program",
                    label: t("consultation.form.faculty"),
                    required: true,
                    options: [
                      { value: "program1", label: t("consultation.form.programs.program1") },
                      { value: "program2", label: t("consultation.form.programs.program2") },
                      { value: "program3", label: t("consultation.form.programs.program3") },
                    ],
                  },
                ]}
                inputWidth="w-full"
              />
            </div>

            <PrimaryForm
              label={t("consultation.form.phone")}
              children={t("consultation.form.phonePlaceholder")}
              className="w-full"
              labelClassName="text-sm md:text-sm lg:text-base"
              type="number"
            />

            <TextAreaForm
              placeholder={t("consultation.form.note.placeholder")}
              label={t("consultation.form.note.label")}
            />
          </div>

          <Button variant="secondary" className="!w-full">
            {t("consultation.form.submit")}
          </Button>
        </div>
      </div>
    </section>
  );
}
