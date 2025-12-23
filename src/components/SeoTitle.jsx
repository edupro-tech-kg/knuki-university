import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SeoTitle() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const pageLabel = useMemo(() => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    if (cleanPath === "/") return "";
    if (cleanPath.startsWith("/faculty")) return t("pageTitles.faculty");
    const map = {
      "/history": t("pageTitles.history"),
      "/news": t("pageTitles.news"),
      "/studentsLife": t("pageTitles.studentsLife"),
      "/applicants": t("pageTitles.applicants"),
      "/library": t("pageTitles.library"),
      "/qualification": t("pageTitles.qualification"),
      "/management": t("pageTitles.management"),
      "/practice-career": t("pageTitles.practiceCareer"),
      "/HRdepartment": t("pageTitles.department"),
      "/ebilim": t("pageTitles.ebilim"),
      "/education": t("pageTitles.education"),
      "/literature": t("pageTitles.literature"),
      "/documents": t("pageTitles.documents"),
      "/science": t("pageTitles.science"),
    };
    return map[cleanPath] || "";
  }, [pathname, t]);

  useEffect(() => {
    const baseTitle = t("seo.title");
    const trimmedBase =
      pageLabel && baseTitle
        ? (() => {
            const byEmDash = baseTitle.split("—")[0]?.trim();
            if (byEmDash) return byEmDash;
            const byDash = baseTitle.split("-")[0]?.trim();
            return byDash || baseTitle;
          })()
        : baseTitle;

    const fullTitle = pageLabel ? `${trimmedBase} - ${pageLabel}` : baseTitle;
    if (baseTitle) document.title = fullTitle;
  }, [i18n.language, pageLabel, t]);

  return null;
}
