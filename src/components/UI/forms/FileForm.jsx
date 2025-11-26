import React, { useState } from "react";
import { CiFileOn } from "react-icons/ci";

const FileForm = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label
        className={`
          w-full 
          max-w-[12rem] sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem]
          flex items-center justify-between px-3 py-3 border border-gray-300 rounded
          cursor-pointer text-gray-700 bg-white
          transition-all duration-200
          hover:border-black focus-within:border-black focus-within:ring-2 focus-within:ring-black
        `}
      >
        <span className="truncate">
          {file ? file.name : "Выберите файл"}
        </span>
        <CiFileOn size={24} className="ml-2 text-gray-500" />
        <input
          type="file"
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileForm;
