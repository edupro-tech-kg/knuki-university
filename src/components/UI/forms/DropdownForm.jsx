import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdownForm = ({ fields = [] }) => {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {fields.map((field) => (
        <div key={field.name} className="relative mb-6">
          <select
            value={values[field.name]}
            onChange={(e) => handleChange(field.name, e.target.value)}
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
              sm:py-2.5 sm:text-base
              md:py-3
              lg:py-3.5
              appearance-none
            "
          >
            <option value="" disabled hidden>
              {field.placeholder || "Select..."}
            </option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          
          {/* Простая иконка */}
          <div className="absolute right-11 top-1/2 -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown className="text-gray-500 text-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownForm;