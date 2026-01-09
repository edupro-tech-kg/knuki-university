import { useMemo, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "../../assets/images/search.svg";
import { IoClose } from "react-icons/io5";

function Search() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const documents = useMemo(() => {
    const docs = [];

    const newsItems = t("news.items", { returnObjects: true }) || [];
    newsItems.forEach((item, idx) => {
      if (item?.title) {
        docs.push({
          id: `news-${idx}`,
          title: item.title,
          subtitle: t("news.title"),
          type: "news",
          path: "/news",
        });
      }
    });

    const management = t("managementInfo.person", { returnObjects: true }) || [];
    management.forEach((item, idx) => {
      if (item?.name) {
        docs.push({
          id: `management-${idx}`,
          title: item.name,
          subtitle: item.post,
          type: "management",
          path: "/management",
        });
      }
    });

    const scholars = t("scholars", { returnObjects: true }) || {};
    (scholars.nationalScholars || []).forEach((item, idx) => {
      if (item?.name) {
        docs.push({
          id: `scholar-national-${idx}`,
          title: item.name,
          subtitle: scholars.national,
          type: "scholar",
          path: "/studentsLife",
        });
      }
    });
    (scholars.presidentialScholars || []).forEach((item, idx) => {
      if (item?.name) {
        docs.push({
          id: `scholar-presidential-${idx}`,
          title: item.name,
          subtitle: scholars.presidential,
          type: "scholar",
          path: "/studentsLife",
        });
      }
    });

    const clubs = t("studentClubs", { returnObjects: true }) || [];
    clubs.forEach((item, idx) => {
      if (item?.name) {
        docs.push({
          id: `club-${idx}`,
          title: item.name,
          subtitle: item.description?.slice(0, 120),
          type: "club",
          path: "/studentsLife",
        });
      }
    });

    const faculties = t("facultiesData.items", { returnObjects: true }) || {};
    Object.entries(faculties).forEach(([slug, item]) => {
      if (item?.title) {
        docs.push({
          id: `faculty-${slug}`,
          title: item.title,
          subtitle: item.description || t("facultiesData.studyFormsLabel"),
          type: "faculty",
          path: `/faculty/${slug}`,
        });
      }
    });

    const pageTitles = t("pageTitles", { returnObjects: true }) || {};
    const pagePathMap = {
      home: "/",
      history: "/history",
      news: "/news",
      studentsLife: "/studentsLife",
      applicants: "/applicants",
      library: "/library",
      qualification: "/qualification",
      management: "/management",
      practiceCareer: "/practice-career",
      HRdepartment: "/HRdepartment",
      education: "/education",
      literature: "/literature",
      documents: "/documents",
      science: "/science",
    };
    Object.entries(pageTitles).forEach(([key, title]) => {
      if (title && pagePathMap[key]) {
        docs.push({
          id: `page-${key}`,
          title,
          subtitle: t("header.universityName"),
          type: "page",
          path: pagePathMap[key],
        });
      }
    });

    return docs;
  }, [t]);

  const runSearch = (query) => {
    const q = query.trim().toLowerCase();
    setValue(query);
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const filtered = documents
      .filter((doc) => {
        const titleMatch = doc.title?.toLowerCase().includes(q);
        const subMatch = doc.subtitle?.toLowerCase().includes(q);
        return titleMatch || subMatch;
      })
      .slice(0, 8);

    setResults(filtered);
    setOpen(true);
  };

  const close = useCallback(() => {
    setOpen(false);
    setResults([]);
    setValue("");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    runSearch(value);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[690px] relative">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center w-full h-[49px]">
              <div className="flex items-center w-full bg-white rounded-md shadow-sm border border-transparent focus-within:border-black transition px-4">
                <div className="mr-2">
                  <img src={searchIcon} alt="Search" className="w-5 h-5" />
                </div>

                <input
                  type="text"
                  value={value}
                  onChange={(e) => runSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                  placeholder={t("search.placeholder")}
                  className={`w-full h-[45px] bg-transparent outline-none placeholder:text-gray-400 ${
                    value ? "text-black" : "text-gray-600"
                  }`}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-start justify-center bg-black/40 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              close();
            }
          }}
        >
          <div className="mt-20 w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
              <input
                autoFocus
                value={value}
                onChange={(e) => runSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder={t("search.placeholder")}
                className="w-full h-10 outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={close}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Close search"
              >
                <IoClose className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {value.trim().length < 2 && (
                <div className="px-4 py-4 text-sm text-gray-600">
                  {t("search.minChars", { defaultValue: "Type at least 2 characters" })}
                </div>
              )}

              {value.trim().length >= 2 && results.length === 0 && (
                <div className="px-4 py-4 text-sm text-gray-600">
                  {t("search.noResults", { defaultValue: "No matches found" })}
                </div>
              )}

              {results.length > 0 && (
                <ul className="divide-y divide-gray-100">
                  {results.map((res) => (
                    <li key={res.id}>
                      <a
                        className="px-4 py-3 block hover:bg-gray-50 transition"
                        href={res.path || "#"}
                        onClick={close}
                      >
                        <p className="text-sm font-semibold text-gray-900">{res.title}</p>
                        {res.subtitle && (
                          <p className="text-xs text-gray-600 mt-1">{res.subtitle}</p>
                        )}
                        <p className="text-[10px] uppercase text-gray-400 mt-1 tracking-wide">
                          {t(`search.type.${res.type}`, { defaultValue: res.type })}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
