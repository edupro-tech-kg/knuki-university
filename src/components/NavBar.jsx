import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const NavBar = ({ menu }) => {
  const { t } = useTranslation();
  const navLinks = t("navLinks");
  return (
    <nav
      className={`${menu ? "flex flex-col " : "flex flex-1 justify-center items-center gap-8 text-sm font-medium font-inter"}`}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${menu ? "block text-base font-inter text-white py-3 px-4 hover:bg-white/10 rounded-lg w-full text-center" : "sadopacity-80 hover:opacity-100 transition hover:text-[#751715]/90"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
