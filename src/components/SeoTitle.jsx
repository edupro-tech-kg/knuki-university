import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function SeoTitle() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t("seo.title");
    if (title) document.title = title;
  }, [i18n.language, t]);

  return null;
}
