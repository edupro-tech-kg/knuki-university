import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdownForm = ({ 
  fields = [], 
  className = "",
  spacing = "normal",
  inputWidth = "md" 
}) => {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (fields.find(f => f.name === name)?.onChange) {
      fields.find(f => f.name === name).onChange(value);
    }
  };

  const spacingClasses = {
    compact: "mb-3",
    normal: "mb-4",
    loose: "mb-6"
  };

  const widthClasses = {
    sm: "max-w-xs",  
    md: "max-w-md",   
    lg: "max-w-lg",   
    xl: "max-w-xl"   
  };

  return (
    <div className={`mx-auto p-6 ${className}`}>
      {fields.map((field) => (
        <div key={field.name} className={spacingClasses[spacing]}>
          {field.label && (
            <label 
              htmlFor={field.name}
              className="block text-white text-lg font-medium mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
          )}

          {/* Контейнер с контролируемой шириной */}
          <div className={`relative ${widthClasses[inputWidth]}`}>
            <select
              id={field.name}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              disabled={field.disabled}
              className="
                w-full 
                rounded-lg 
                px-4
                py-3
                text-gray-800 
                border 
                border-gray-300
                transition-all 
                duration-200 
                outline-none
                focus:ring-2 
                focus:ring-black
                focus:border-black
                text-base
                appearance-none
                bg-white
                cursor-pointer
                disabled:bg-gray-100
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <option value="" disabled={field.required}>
                {field.placeholder || "Select an option..."}
              </option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDown className="text-gray-600 text-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownForm;