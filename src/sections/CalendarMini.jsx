import Calendar from '../components/calendar/Calendar';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';
import test from '../assets/patterns.svg';

export default function CalendarMini() {
	const { t } = useTranslation();
	const calendar = t('calendar');
	console.log(calendar);

	return (
		<>
			<section>
				<div>
					<img src={test} alt=''  className='w-full'/>
				</div>
				<div className='bg-[#751715] py-24'>
					<div className='flex justify-center '>
						<p className=' italic font-[auto] font-medium text-6xl text-white'>
							КАЛЕНДАРЬ СОБЫТИЙ
						</p>
					</div>
					<div className='mt-36' >
						<Calendar />
					</div>
				</div>
			</section>
		</>
	);
}
