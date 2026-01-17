import { useTranslation } from "react-i18next";
import ContactForm from "../sections/ContactForm";
import { Icons } from "../assets/svg";
import TwoGisMap from "../components/TwoGisMap";

const iconMap = {
  phone: Icons.phone,
  email: Icons.mail,
  address: Icons.maps,
};

const ContactItem = ({ type, label, value, href }) => {
  const icon = iconMap[type];

  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-[#751715]/10 flex items-center justify-center">
        {icon ? (
          <img src={icon} alt={label} className="w-5 h-5" />
        ) : (
          <span className="text-xs font-semibold text-[#751715] uppercase">{label?.[0]}</span>
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-600">{label}</p>
        {href ? (
          <a href={href} className="font-semibold text-gray-900 hover:text-[#751715] break-words">
            {value}
          </a>
        ) : (
          <p className="font-semibold text-gray-900 break-words">{value}</p>
        )}
      </div>
    </div>
  );
};

export default function ConsultationPage() {
  const { t } = useTranslation();
  const contact = t("consultationPage.contact", { returnObjects: true }) || {};
  const items = contact.items || [];

  return (
    <div className="bg-white">
      <ContactForm />

      <section className="container mx-auto px-4 md:px-8 pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] items-start">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
            {contact.title && (
              <h3 className="text-xl font-semibold text-[#751715]">{contact.title}</h3>
            )}
            <div className="space-y-4">
              {items.map((item) => (
                <ContactItem
                  key={item.type}
                  type={item.type}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <TwoGisMap
              lat={42.845696}
              lon={74.614825}
              zoom={18}
              markerText="Жантошева көч. 113"
              className="w-full h-[380px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
