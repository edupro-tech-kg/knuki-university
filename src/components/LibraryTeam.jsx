import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdPerson } from "react-icons/io";

function LibraryTeam() {
    const { t } = useTranslation()
    const libraryTeam = t("libraryTeam", { returnObjects: true });
    return (
        <div className='container-edge text-center my-10'>
            <h2 className='uppercase font-cormorant font-bold text-4xl mb-8 text-text-primary'>{libraryTeam.title}</h2>
            <div className='grid grid-cols-2 gap-4'>
                {libraryTeam.personality.map((item) =>
                    <div className='flex items-center gap-3 bg-[#F4F4F4] text-left p-3 rounded'>
                        <IoMdPerson className='bg-[#BF211F] w-10 h-10 p-2 rounded-full text-[#FFFFFF]' />
                        <div>
                            <h4 className='font-semibold text-text-primary text-lg'>{item.name}</h4>
                            <p className='font-normal text-button-secondary text-base'>{item.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LibraryTeam
