import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";

const SideBar = ({ onClose }) => {
  const { t } = useTranslation();
  const headerTranslations = t("header", { returnObjects: true });
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-inter font-semibold text-white">{headerTranslations.menu}</span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center text-white text-xl hover:bg-white/10 rounded-lg"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      
      <div className="px-6 text-center mt-2 pb-4">
        <p className="text-lg font-inter text-white font-semibold leading-relaxed max-w-xs">
          {headerTranslations.universityName}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <NavBar menu={true} onItemClick={onClose} />
      </div>
    </div>
  );
};

export default SideBar;
