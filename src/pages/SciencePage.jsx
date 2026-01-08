import React from "react";
import { useTranslation } from "react-i18next";

import photo1 from "../assets/images/faculties/science/science1.jpg";
import photo2 from "../assets/images/faculties/science/science2.jpg";
import photo3 from "../assets/images/faculties/science/science3.jpg";
function ImageTextBlock({ src, float, text1, text2 }) {
  const isRight = float === "right";
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
      <div className={`flex items-center justify-center ${isRight ? "lg:order-2" : ""}`}>
        <img
          src={src}
          alt=""
          className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-md"
        />
      </div>
      
      <div className={`flex flex-col justify-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed ${isRight ? "lg:order-1" : ""}`}>
        <p className="mb-4">{text1}</p>
        <p className="mb-0">{text2}</p>
      </div>
    </div>
  );
}

function SciencePage() {
  const { t } = useTranslation();
  const data = t("sciencePage", { returnObjects: true });
  if (!data || !data.infos || !Array.isArray(data.infos)) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
      <h1 className="uppercase font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-primary italic text-center">
        {data.title}
      </h1>

      <div className="text-gray-700">
        <ImageTextBlock 
          src={photo1} 
          float="left" 
          text1={data.infos[0]?.text} 
          text2={data.infos[1]?.text} 
        />
        
        <ImageTextBlock 
          src={photo2} 
          float="right" 
          text1={data.infos[2]?.text} 
          text2={data.infos[3]?.text} 
        />
 
        <ImageTextBlock 
          src={photo3} 
          float="left" 
          text1={data.infos[4]?.text} 
          text2={data.infos[5]?.text} 
        />
      </div>

      <div className="mt-12">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-900">
          {data.name}
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
          {data.list?.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SciencePage;