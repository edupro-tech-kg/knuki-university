import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const contact = t("contact");

  return (
    <section id="contact" className="bg-dark text-white">
      <div className="container-edge grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div className="space-y-6">
          <SectionTitle
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/60">{contact.addressLabel}</p>
              <p className="text-base font-semibold">{contact.addressValue}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/60">{contact.phoneLabel}</p>
              <p className="text-base font-semibold">{contact.phoneValue}</p>
            </div>
          </div>
        </div>

        <div className="section-surface space-y-4 bg-white/95 text-dark shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-gray-500">{contact.formBadge}</p>
              <p className="text-lg font-semibold text-dark">{contact.formTitle}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-primary/10"></div>
          </div>
          <div className="grid gap-4">
            <Input label={contact.fields.name} placeholder="Айсулуу Т." />
            <Input label={contact.fields.email} type="email" placeholder="name@email.com" />
            <Input label={contact.fields.phone} type="tel" placeholder="+996 (___) ___ ___" />
            <Input label={contact.fields.comment} textarea placeholder="Интересует факультет..." />
          </div>
          <Button className="w-full justify-center">{contact.submit}</Button>
          <p className="text-xs text-gray-500">{contact.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
