import React from 'react'
import { useTranslation } from 'react-i18next';

function NewsPage() {
    const { t } = useTranslation();

    const news = t("newsPage.news", { returnObjects: true });

    return (
        <div className="mx-5 md:mx-12">

            {news.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between gap-6 my-10"
                >
                    <div>
                        <img className='w-96 h-72 object-cover' src={item.image || ""} alt={item.title} />
                    </div>

                    <div className="max-w-5xl">
                        <h2 className="text-xl font-bold">
                            {item.title}
                        </h2>
                        <p className="mt-2">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default NewsPage;
