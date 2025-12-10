import { useState } from "react";

const TextAreaForm = ({ className, classTextarea, label, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className={`${className} w-full mt-8`}>
      <label htmlFor="primary-textarea" className="w-full ">
        <p className="text-[#0D0D0D] text-lg font-normal mb-[18px]">{label}</p>
        <textarea
          className={` ${classTextarea} w-full resize-y max-h-36 px-3 py-5 rounded-lg border border-[#EEEEEE]  outline-none focus:border-black focus:ring-black focus:ring-2 duration-150 transition-all  `}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={5}
          id="primary-textarea"
        ></textarea>
      </label>
    </div>
  );
};

export default TextAreaForm;
