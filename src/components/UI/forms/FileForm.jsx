import React, { useState } from "react";
import { CiFileOn } from "react-icons/ci";

const FileForm = ({
  label,
  className = "",
  inputWidth = "md",
  accept,
  multiple = false,
  onChange,
}) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = multiple ? e.target.files : e.target.files[0];
    setFile(selectedFile);

    if (onChange) {
      onChange(selectedFile);
    }
  };

  const widthClasses = {
    sm: "max-w-xs",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  const spacingClasses = {
    compact: "mb-3",
    normal: "mb-4",
    loose: "mb-6",
  };

  const getDisplayText = () => {
    if (!file) return "Выберите файл";
    if (multiple && file.length > 0) {
      return `Выбрано файлов: ${file.length}`;
    }
    if (multiple) return "Выберите файлы";
    return file.name;
  };

  return (
    <div className={`mx-auto p-6 ${className}`}>
      <div className={spacingClasses.normal}>
        {label && <label className="block text-white text-lg font-medium mb-2">{label}</label>}

        <label
          className={`
            w-full 
            ${widthClasses[inputWidth]}
            flex items-center justify-between px-4 py-3 
            border border-gray-300 rounded-lg
            cursor-pointer text-gray-700 bg-white
            transition-all duration-200
            hover:border-gray-400 
            focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
          `}
        >
          <span className="truncate text-base">{getDisplayText()}</span>
          <CiFileOn size={20} className="ml-3 flex-shrink-0 text-gray-500" />
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
