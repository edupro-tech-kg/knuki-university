import React from 'react';
import goalbg from "../assets/images/goalbg.png";
import man from "../assets/images/goalman.png";
import graybg from '../assets/images/graybg.png';

function Goal() {
    return (
        <div className="container-edge relative overflow-visible">

            <div
                className="absolute inset-x-0 top-[25%] h-[52%] bg-no-repeat bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${graybg})` }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-8 lg:gap-14 ">

                <div className="w-full lg:w-[50%] flex justify-center">
                    <img
                        src={man}
                        alt="speaker"
                        className="h-[60vh] lg:h-[60%] object-cover mt-28"
                    />
                </div>

                <div
                    className="w-full lg:w-[40%] p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center  flex items-center justify-center my-28"
                    style={{ backgroundImage: `url(${goalbg})` }}
                >
                    <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed">
                        Максаты: адистердин квалификациясын жогорулатуу жана кесиптик кайра даярдоо боюнча семинарларды, тренингдерди, курстарды уюштуруу жана өткөрүү, кесиптик ишти аткаруу үчүн зарыл болгон илимдин айрым дисциплиналарын, бөлүмдөрүн окутууну караган билим берүү программалары боюнча алардын кошумча билимдерди, көндүмдөрдү жана көндүмдөрдү алуусу болуп саналат. Квалификацияны жогорулатуунун, кошумча билим берүүнүн жана кошумча кесиптик билим берүүнүн натыйжалары боюнча угуучулар белгилүү бир чөйрөдө кесиптик иш жүргүзүү укугун (квалификациясын) ырастоочу Сертификат алышат.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Goal;