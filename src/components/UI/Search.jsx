import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "../../assets/images/search.svg";

function Search() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runSearch(value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[690px] relative">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex items-center w-full h-[49px] relative">
            <div className="flex items-center w-full bg-white rounded-md shadow-sm border border-transparent focus-within:border-black transition">
              <div className="ml-4 mr-2">
                <img src={searchIcon} alt="Search" className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={value}
                onChange={(e) => runSearch(e.target.value)}
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

        {value.trim().length >= 2 && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-soft overflow-hidden z-20">
            {results.length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-600">
                {t("search.noResults", { defaultValue: "No matches found" })}
              </div>
            )}

            {results.length > 0 && (
              <ul className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                {results.map((res) => (
                  <li key={res.id}>
                    <a
                      className="px-4 py-3 block hover:bg-gray-50 transition"
                      href={res.path || "#"}
                    >
                      <p className="text-sm font-semibold text-gray-900">{res.title}</p>
                      {res.subtitle && <p className="text-xs text-gray-600 mt-1">{res.subtitle}</p>}
                      <p className="text-[10px] uppercase text-gray-400 mt-1 tracking-wide">{res.type}</p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
