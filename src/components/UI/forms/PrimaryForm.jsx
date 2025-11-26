import React, { useState } from "react";

const PrimaryForm = () => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    const showLabel = focused || value.length > 0;

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="relative">

               <input
  type="text"
  placeholder={showLabel ? "" : "Text"}
  className="
    w-full 
    max-w-[12rem]        
    sm:max-w-[16rem] 
    md:max-w-[20rem]    
    lg:max-w-[24rem]    
    mx-auto            

    rounded px-3 text-gray-700 border border-gray-300
    transition-all duration-200 outline-none
    focus:ring-2 focus:ring-black

  
    py-2 text-sm
    sm:py-3 sm:text-base
    md:py-4
  "
/>

            </div>
        </div>
    );
};

export default PrimaryForm;
