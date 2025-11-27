import ButtonSecondary from "../components/UI/ButtonSecondary";
import PrimaryForm from "../components/UI/forms/PrimaryForm";
import DropdownForm from "../components/UI/forms/DropdownForm";
import FileForm from "../components/UI/forms/FileForm";
import { useTranslation } from "react-i18next";

export default function ConsultationSection() {
  const { t } = useTranslation();
 
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">

        <div className="pt-6">
          <h1 className="text-xl md:text-xl lg:text-4xl font-semibold mb-4 font-serif uppercase italic max-w-[80%]">
            {t('consultation.title')}
          </h1>

          <p className="text-base md:text-lg lg:text-lg font-sans max-w-[85%]">
            {t('consultation.description')}
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 ">

            <PrimaryForm
              label={t('consultation.form.name')}
              children={t('consultation.form.namePlaceholder')}
              className="w-full"
              labelClassName="text-sm md:text-sm lg:text-base"
            />

            <DropdownForm
              labelClassName="text-sm md:text-sm lg:text-base"
              fields={[
                {
                  name: "program",
                  label: t('consultation.form.faculty'),
                  required: true,
                  options: [
                    { value: "program1", label: t('consultation.form.programs.program1') },
                    { value: "program2", label: t('consultation.form.programs.program2') },
                    { value: "program3", label: t('consultation.form.programs.program3') },
                  ],
                },
              ]}
              inputWidth="w-full"
            />

            <PrimaryForm
              label={t('consultation.form.phone')}
              children={t('consultation.form.phonePlaceholder')}
              className="w-full"
              labelClassName="text-sm md:text-sm lg:text-base"
            />

            <FileForm
              label={t('consultation.form.portfolio')}
              children={t('consultation.form.upload')}
              className="w-full"
              labelClassName="text-sm md:text-sm lg:text-base"
            />

          </div>

          <ButtonSecondary className="!w-full mt-6">
            {t('consultation.form.submit')}
          </ButtonSecondary>
        </div>

      </div>
    </section>
  );
}