import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";
import { Button } from "../components/Button";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-dark text-white">
      <div className="container-edge grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Контакты"
            title="Запишитесь на консультацию"
            description="Оставьте контактные данные, и мы расскажем о программах, датах приема и вступительных экзаменах."
          />
          <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/60">Адрес</p>
              <p className="text-base font-semibold">г. Бишкек, пр. Чуй 123</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/60">Телефон</p>
              <p className="text-base font-semibold">+996 (312) 000 000</p>
            </div>
          </div>
        </div>

        <div className="section-surface space-y-4 bg-white/95 text-dark shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-gray-500">Заявка</p>
              <p className="text-lg font-semibold text-dark">Получить консультацию</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-primary/10"></div>
          </div>
          <div className="grid gap-4">
            <Input label="Имя и фамилия" placeholder="Айсулуу Т." />
            <Input label="Email" type="email" placeholder="name@email.com" />
            <Input label="Телефон" type="tel" placeholder="+996 (___) ___ ___" />
            <Input label="Комментарий" textarea placeholder="Интересует факультет..." />
          </div>
          <Button className="w-full justify-center">Отправить заявку</Button>
          <p className="text-xs text-gray-500">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </div>
      </div>
    </section>
  );
}
