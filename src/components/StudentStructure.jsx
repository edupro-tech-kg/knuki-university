import React from 'react'
import { useTranslation } from 'react-i18next'

function StudentStructure() {
    const { t } = useTranslation();

    return (
        <div className='container-edge my-10 text-center'>
            <h3 className='font-bold text-2xl mb-3'>{t("studentStructure.title")}</h3>
            <p className='text-base p-2'>{t("studentStructure.content")}</p>
        </div>
    )
}

export default StudentStructure;
