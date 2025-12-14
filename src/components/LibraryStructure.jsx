import React from 'react'
import { useTranslation } from 'react-i18next';

function LibraryStructure() {
    const { t } = useTranslation();
    const libraryStruct = t("libraryStructure", { returnObjects: true });

    return (
        <div className='container-edge py-10 bg-text-accent text-center my-10'>
            <h2 className='uppercase font-cormorant font-bold text-4xl mb-8 text-[#FFFFFF]'>{libraryStruct.title}</h2>
            <div className=' grid grid-cols-4 gap-4 text-left'>
                {libraryStruct.list.map((item => (
                    <div className='bg-white p-3 flex items-center' key={item.id}   >
                        <p key={item.id}>{item.content}</p>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default LibraryStructure
