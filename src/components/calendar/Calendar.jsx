import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './calendar.css';
import { useTranslation } from 'react-i18next';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import ruLocale from '@fullcalendar/core/locales/ru';
import kyLocale from '../../data/locales/ky';

export default function Calendar() {
	const { t } = useTranslation();
	const calendar = t('calendar');
	const locale = t('locale');

	const dayNamesMap = {
		ky: calendar.days,
		ru: calendar.days,
		en: calendar.days,
	};

	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
			initialView='dayGridMonth'
			events={calendar.events}
			locales={[ruLocale, kyLocale]}
			dayHeaderContent={(args) => {
				const lang = locale;
				const index = args.date.getDay();
				const arr = dayNamesMap[lang];

				const correctedIndex = index === 0 ? 6 : index - 1;
				return arr[correctedIndex];
			}}
			locale={t('locale')}
			headerToolbar={{
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
			}}
			eventContent={(arg) => (
				<div className='event-pill'>
					<p className='event-text'>{arg.event.title}</p>
				</div>
			)}
		/>
	);
}
