import React, { useState } from "react";
import search from "../../assets/images/search.svg";

function Search() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full px-2 xs:px-4 sm:px-6 flex justify-center">
      <div className="relative w-full max-w-[690px]">
        <div
          className="flex items-center w-full bg-white rounded-lg 
                        border border-gray-300 hover:border-gray-400 focus-within:border-black 
                        focus-within:ring-1 focus-within:ring-black/20 transition-all duration-200
                        shadow-sm overflow-hidden"
        >
          <div className="flex-1 flex items-center min-w-0">
            <div className="pl-3 xs:pl-4 pr-2 flex-shrink-0">
              <img src={search} alt="Search" className="w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
            </div>

            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Поиск..."
              className="flex-1 min-w-0 h-10 xs:h-12 sm:h-[49px] bg-transparent outline-none 
                         placeholder:text-gray-400 placeholder:text-sm xs:placeholder:text-base
                         text-sm xs:text-base md:text-lg pr-3 text-gray-800"
            />
          </div>

          <button
            className="bg-black text-white font-medium h-10 xs:h-12 sm:h-[49px] 
                       px-3 xs:px-4 sm:px-6 lg:px-8
                       flex items-center justify-center gap-1 xs:gap-2
                       text-sm xs:text-base md:text-lg
                       hover:bg-gray-800 active:bg-gray-900 transition-colors duration-200
                       whitespace-nowrap flex-shrink-0 border-l border-gray-300"
          >
            <span className="hidden xs:inline">Найти</span>
            <span className="xs:hidden">Поиск</span>
            <span className="hidden sm:inline ml-1">→</span>
          </button>
        </div>

        {value && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg 
                         shadow-lg border border-gray-200 p-2 text-sm text-gray-600
                         animate-fadeIn z-10"
          >
            <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
              Искать: <span className="font-semibold">"{value}"</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
