import React, { useState } from "react";
import search from "../assets/svg/search.svg";

function Search() {
  const [value, setValue] = useState("");

  return (
    <div className="w-[690px] flex justify-center">
      <div className="flex items-center w-[690px] h-[49px] max-w-full">
        <div
          className="flex items-center w-[690px] bg-white rounded-md shadow-sm 
          border border-transparent focus-within:border-black transition"
        >
          <div className="ml-4 mr-2">
            <img src={search} alt="Search" className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Поиск"
            className={`w-full h-[45px] bg-transparent outline-none 
                       placeholder:text-gray-400
                       ${value ? "text-black" : "text-gray-600"}
                      `}
          />

          <button
            className="w-[200px] h-[49px] bg-black text-white px-6 rounded-md
                           flex items-center justify-center gap-2 text-lg"
          >
            Далее
            <span className="text-white">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
