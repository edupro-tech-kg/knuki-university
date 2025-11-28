import Calendar from '../components/calendar/Calendar';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';
import patterns from '../assets/patterns.svg';
import test from '../assets/image/lastFone.png';

export default function CalendarMini() {
	const { t } = useTranslation();
	const calendar = t('calendar');
	console.log(calendar);

	return (
		<>
			<section className='min-h-screen'>
				<div>
					<img src={patterns} alt='patterns' className='w-full' />
				</div>
				<div className='bg-[#751715] py-24  '>
					<div className='flex justify-center '>
						<p className=' italic font-[auto] font-medium text-6xl text-white mb-24'>
							КАЛЕНДАРЬ СОБЫТИЙ
						</p>
					</div>
					<div className='flex justify-center absolute  '>
						<img src={test} alt='' className='relative w-[97%] -z-0 ' />
					</div>
					<div
						className={`mt-24 flex justify-between    ter pb-20 relative z-10 `}
					>
						<div className=' w-[50%] pr-[55px] pl-[100px]'>
							<Calendar />
						</div>
						<div className='w-[50%] pl-16 pr-20'>
							<h1 className='text-zinc-950 '>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
								eveniet qui ex doloribus repellat repudiandae, hic eum
								recusandae culpa. Magni earum blanditiis maiores enim veritatis
								consequatur sint, cumque cupiditate architecto.
							</h1>
						</div>
					</div>
					<div className='min-h-screen'></div>
				</div>
			</section>
		</>
	);
}
