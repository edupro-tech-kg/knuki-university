import { useState } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "../../assets/images/search.svg";

function Search() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="flex items-center w-full max-w-[690px] h-[49px]">
        <div className="flex items-center w-full bg-white rounded-md shadow-sm border border-transparent focus-within:border-black transition">
          <div className="ml-4 mr-2">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t("search.placeholder")}
            className={`w-full h-[45px] bg-transparent outline-none placeholder:text-gray-400 ${
              value ? "text-black" : "text-gray-600"
            }`}
          />

          <button
            type="submit"
            className="w-[200px] h-[49px] bg-black text-white px-6 rounded-md flex items-center justify-center gap-2 text-lg"
          >
            {t("search.button")}
            <span className="text-white">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
