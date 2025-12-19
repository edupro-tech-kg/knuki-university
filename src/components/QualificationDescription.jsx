import React from 'react'
import ProgramsSection from '../sections/ProgramsSection'
import { useTranslation } from 'react-i18next'

function QualificationDescription() {
    const { t } = useTranslation()

    return (
        <div className='container-edge my-10'>
            <h1 className='font-serif uppercase italic text-center text-3xl md:text-4xl font-bold mb-10 text-primary'>{t("qualificationDescription.title")}</h1>
            <p className='-mb-20 font-medium text-lg'>{t("qualificationDescription.firstCont")}</p>
            <ProgramsSection />
            <p className='mt-10 font-medium text-lg'>{t("qualificationDescription.secondCont")}</p>
        </div>
    )
}

export default QualificationDescription
