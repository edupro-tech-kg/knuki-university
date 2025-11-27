import React, { useState } from "react";
import { CiFileOn } from "react-icons/ci";

const FileForm = ({ 
  label,
  className = "",
  labelClassName = "",
  accept,
  multiple = false,
  onChange 
}) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selected = multiple ? e.target.files : e.target.files[0];
    setFile(selected);

    if (onChange) onChange(selected);
  };

  const getDisplayText = () => {
    if (!file) return "Выберите файл";
    if (multiple && file.length > 0) return `Выбрано: ${file.length}`;
    return file.name;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4 w-full">
      {label && (
          <label className={`block text-black font-medium mb-2 ${labelClassName}`}>
            {label}
          </label>
        )}


        <label
          className="
            w-full
            flex items-center justify-between px-4 py-3 
            border border-gray-300 rounded
            cursor-pointer text-gray-700 bg-white
            transition-all duration-200
            hover:border-gray-400 
            focus-within:ring-2 focus-within:ring-black focus-within:border-black
          "
        >
          <span className="truncate text-base">{getDisplayText()}</span>
          <CiFileOn size={20} className="ml-3 text-gray-500" />

          <input
            type="file"
            onChange={handleChange}
            accept={accept}
            multiple={multiple}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default FileForm;
