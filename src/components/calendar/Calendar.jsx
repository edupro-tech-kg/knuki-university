import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './calendar.css';
import { useTranslation } from 'react-i18next';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import ruLocale from '@fullcalendar/core/locales/ru';
import kyLocale from '../../data/locales/ky';
import prev from '../../assets/prev.svg';
import next from '../../assets/next.svg';
import { useRef, useState } from 'react';

export default function Calendar() {
	const { t } = useTranslation();
	const calendarRef = useRef(null);
	const [currentTitle, setCurrentTile] = useState('');
	const calendar = t('calendar');
	const locale = t('locale');

	const dayNamesMap = {
		ky: calendar.days,
		ru: calendar.days,
		en: calendar.days,
	};

	const btnclass = 'px-2 py-1 border rounded-md mr-2 bg-slate-400';

	console.log('ref');

	return (
		<div className='flex flex-col'>
			<div className='flex justify-center mr-4 mb-6'>
				<h2 className='text-2xl italic font-bold font-mono'>{currentTitle}</h2>
			</div>
			<div className='flex items-center justify-between mb-4'>
				<div>
					<button
						className='px-[22px] py-4'
						onClick={() => calendarRef.current?.getApi().prev()}
					>
						<img src={prev} alt='' />
					</button>
					<button
						className='px-[22px] py-4'
						onClick={() => calendarRef.current?.getApi().next()}
					>
						<img src={next} alt='' />
					</button>
					<button onClick={() => calendarRef.current?.getApi().today()}>
						Today
					</button>
				</div>

				<div>
					<button
						className={btnclass}
						onClick={() =>
							calendarRef.current?.getApi().changeView('dayGridMonth')
						}
					>
						Месяц
					</button>
					<button
						className={btnclass}
						onClick={() =>
							calendarRef.current?.getApi().changeView('timeGridWeek')
						}
					>
						Неделя
					</button>
					<button
						className={btnclass}
						onClick={() =>
							calendarRef.current?.getApi().changeView('timeGridDay')
						}
					>
						День
					</button>
				</div>
			</div>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
				initialView='dayGridMonth'
				events={calendar.events}
				ref={calendarRef}
				headerToolbar={false}
				locales={[ruLocale, kyLocale]}
				datesSet={(info) => {
					setCurrentTile(info.view.title);
				}}
				dayHeaderContent={(args) => {
					const lang = locale;
					const index = args.date.getDay();
					const arr = dayNamesMap[lang];

					const correctedIndex = index === 0 ? 6 : index - 1;
					return arr[correctedIndex];
				}}
				locale={t('locale')}
				// headerToolbar={{
				// 	left: 'prev,next today',
				// 	center: 'title',
				// 	right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
				// }}
				eventContent={(arg) => (
					<div className='event-pill'>
						<p className='event-text'>{arg.event.title}</p>
					</div>
				)}
			/>
		</div>
	);
}
