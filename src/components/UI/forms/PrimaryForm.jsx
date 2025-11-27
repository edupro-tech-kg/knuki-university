import React, { useState } from "react";

const PrimaryForm = ({
  label,
  children = "Text",
  className = "",
  labelClassName = "",
  type = "text",
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const showLabel = focused || value.length > 0;

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4 w-full">
        {label && (
          <label
            htmlFor="primary-input"
            className={`block text-black font-medium mb-2 ${labelClassName}`}
          >
            {label}
          </label>


        )}

        <div className="relative w-full">
          <input
            id="primary-input"
            type={type}
            value={value}
            placeholder={showLabel ? "" : children}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="
              w-full 
              rounded
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
