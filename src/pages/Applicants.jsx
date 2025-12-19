import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Applicants() {
    const { t } = useTranslation();
    const applicants = t("applicants", { returnObjects: true });

    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto w-full xl:w-[1449px] container-edge">
                {/* Title */}
                <h1 className="font-['Cormorant_Garamond'] font-bold italic text-[50px] leading-[100%] tracking-[-0.04em] text-center uppercase text-[#751715] mb-10">
                    {applicants.title}
                </h1>

                {/* University name */}
                <h2 className="font-['Inter'] font-bold text-[25px] leading-[120%] tracking-[0.01em] text-center text-[#0D0D0D] mb-2">
                    {applicants.title2}
                </h2>

                {/* Text blocks */}
                <div className="space-y-10 text-[20px]">

                    {applicants.faculties?.map((i, id) => (
                        <div key={id}>
                            <h3 className="font-['Inter'] font-semibold  leading-[150%] tracking-[0.01em]">
                                {i.name}
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {i.infos?.map((i, id) => (
                                    <li key={id} className="font-['Inter'] font-normal leading-[150%] tracking-[0.01em]">
                                        <span className="font-semibold">{i.span}</span>
                                        {i.p}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="text-[20px] font-['Inter'] font-normal leading-[150%] tracking-[0.01em] my-10">
                    <p>
                        {applicants.conditions?.first}
                    </p>
                    {applicants.conditions.all?.map((i, id) => (
                        <p className='ml-14' key={id}>{i}</p>
                    ))}
                </div>
                <div className="text-[20px] font-['Inter'] font-normal leading-[150%] tracking-[0.01em]">
                    <h3>
                        {applicants.documents?.name}
                    </h3>
                    <ul className="list-decimal pl-5 space-y-1">
                        {applicants.documents.all?.map((i, id) => (
                            <li key={id}>{i}</li>
                        ))}
                    </ul>
                </div>
                {/* Footer info */}
                <div className="mt-[200px] grid gap-6 md:grid-cols-2 ">
                    <div className="space-y-2 grid content-end gap-5">
                        <div className="flex gap-4">
                            <FaWhatsapp className='w-[35px] h-[35px]' />
                            <div className="font-['Inter'] font-medium">
                                <p className=' leading-[120%] tracking-[-0.04em] text-[20px]'>{applicants.contacts.phoneLabel}</p>
                                <p className=" leading-[100%] tracking-[-0.04em] text-[16px] text-[#898989]">{applicants.contacts.phone}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FaPhoneVolume className='w-[35px] h-[35px]' />
                            <div className="font-['Inter'] font-medium">
                                <p className=' leading-[120%] tracking-[-0.04em] text-[20px]'>{applicants.contacts.whatsappLabel}</p>
                                <p className=" leading-[100%] tracking-[-0.04em] text-[16px] text-[#898989]">{applicants.contacts.whatsapp}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MdEmail className='w-[35px] h-[35px]' />
                            <div className="font-['Inter'] font-medium">
                                <p className=' leading-[120%] tracking-[-0.04em] text-[20px]'>{applicants.contacts.emailLabel}</p>
                                <p className=" leading-[100%] tracking-[-0.04em] text-[16px] text-[#898989]">{applicants.contacts.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FaMapLocationDot className='w-[35px] h-[35px]' />
                            <div className="font-['Inter'] font-medium">
                                <p className=' leading-[120%] tracking-[-0.04em] text-[20px]'>{applicants.contacts.addressLabel}</p>
                                <p className=" leading-[100%] tracking-[-0.04em] text-[16px] text-[#898989]">{applicants.contacts.address}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <BsClockFill className='w-[35px] h-[35px]' />
                            <div className="font-['Inter'] font-medium">
                                <p className=' leading-[120%] tracking-[-0.04em] text-[20px]'>{applicants.contacts.hoursLabel}</p>
                                <p className=" leading-[100%] tracking-[-0.04em] text-[16px] text-[#898989]">{applicants.contacts.hours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Map placeholder */}
                    <div className="w-full h-[490px] rounded-2xl overflow-hidden shadow">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.2842962920517!2d74.6122599759964!3d42.845729871151825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb63f121abfe5%3A0xce0c69f455039136!2zMTEzINGD0LsuINCU0LbQsNC90YLQvtGI0LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1766055140937!5m2!1sru!2skg"

                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="border-0"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Applicants
