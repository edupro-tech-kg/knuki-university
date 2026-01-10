import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FACULTIES } from "../data/faculties";

const NAV_LINKS = [
  { key: "home", to: "/", type: "route" },
  { key: "management", to: "/management", type: "route" },
  { key: "faculties", to: null, type: "dropdown" },
  { key: "students", to: "/studentsLife", type: "route" },
  { key: "education", to: "/education", type: "route" },
  { key: "science", to: "/science", type: "route" },
  { key: "news", to: "/news", type: "route" },
  { key: "documents", to: "/documents", type: "route" },
  { key: "applicants", to: "/applicants", type: "route" },
  { key: "contacts", to: "/consultation", type: "route" },
];

const NavBar = ({ menu, onItemClick }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const labels = t("navLinks", { returnObjects: true });
  const [showDropdown, setShowDropdown] = useState(false);
  const isHome = location.pathname === "/";

  const linkClass = menu
    ? "block text-base font-inter text-white py-3 px-4 hover:bg-white/10 rounded-lg w-full text-center"
    : "sadopacity-80 hover:opacity-100 transition hover:text-[#751715]/90";

  const facultyItems = useMemo(
    () =>
      FACULTIES.map((f) => ({
        slug: f.slug,
        label: t(`facultiesData.items.${f.slug}.title`, { defaultValue: f.title }),
      })),
    [t]
  );

  const handleLinkClick = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }

    if (onItemClick) {
      onItemClick();
    }
  };

  const renderScrollOrRoute = (link, label) => {
    if (link.type === "scroll") {
      // On non-home pages, route back to home anchor
      if (!isHome) {
        return (
          <Link key={link.key} to={`/#${link.to}`} className={linkClass} onClick={handleLinkClick}>
            {label}
          </Link>
        );
      }
      return (
        <ScrollLink
          key={link.key}
          to={link.to}
          smooth={true}
          duration={400}
          offset={-120}
          className={linkClass}
          onClick={handleLinkClick}
        >
          {label}
        </ScrollLink>
      );
    }

    return (
      <Link key={link.key} to={link.to} className={linkClass} onClick={handleLinkClick}>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`${menu ? "flex flex-col " : "flex flex-1 justify-center items-center gap-8 text-sm font-medium font-inter"}`}
    >
      {NAV_LINKS.map((link) => {
        const label = labels?.[link.key] || link.key;

        if (link.type === "dropdown") {
          return (
            <div
              key={link.key}
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                type="button"
                className={`${linkClass} ${menu ? "" : "flex items-center gap-1"}`}
                onClick={() => setShowDropdown((prev) => !prev)}
                aria-expanded={showDropdown}
              >
                {label}
                <span className="text-xs">▾</span>
              </button>
              {showDropdown && (
                <div
                  className={`absolute ${menu ? "left-0 right-0" : "left-1/2 -translate-x-1/2"} bg-white shadow-lg border border-gray-200 rounded-md top-full min-w-[220px] z-50`}
                >
                  <ul className="py-2">
                    {facultyItems.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/faculty/${item.slug}`}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => {
                            setShowDropdown(false);
                            if (onItemClick) onItemClick();
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }

        return renderScrollOrRoute(link, label);
      })}
    </nav>
  );
};

export default NavBar;
