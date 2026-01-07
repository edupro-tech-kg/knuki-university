import React from 'react'
import { useTranslation } from 'react-i18next'

function StudentStructure() {
    const { t } = useTranslation();
    

    const content = t("studentStructure.content", { returnObjects: true });

    return (
        <div className='container-edge my-10 text-center px-10'>
            <h3 className='font-bold md:text-2xl text-lg mb-6 uppercase'>{t("studentStructure.title")}</h3>
            
            {Array.isArray(content) ? (
                <div className='text-base p-2 space-y-4'>
                    {content.map((paragraph, index) => (
                        <p key={index} className="text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            ) : (
      
                <p className='text-base p-2 text-justify'>{content}</p>
            )}
        </div>
    )
}

export default StudentStructure;