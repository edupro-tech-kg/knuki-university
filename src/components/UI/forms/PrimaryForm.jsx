import React, { useState } from "react";

const PrimaryForm = ({ 
  label,
  className = "",
  inputWidth = "md",
  type = "text",
  onChange 
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const showLabel = focused || value.length > 0;

  const widthClasses = {
    sm: "max-w-xs",  
    md: "max-w-md",   
    lg: "max-w-lg",   
    xl: "max-w-xl"   
  };

  return (
    <div className={`mx-auto p-6 ${className}`}>
      <div className="mb-4">
        {label && (
          <label 
            htmlFor="primary-input"
            className="block text-white text-lg font-medium mb-2"
          >
            {label}
          </label>
        )}

        <div className={`relative ${widthClasses[inputWidth]}`}>
          <input
            id="primary-input"
            type={type}
            value={value}
            placeholder={showLabel ? "" : "Text"}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
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
              bg-white
              hover:border-gray-400
              placeholder-gray-500
            "
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryForm;