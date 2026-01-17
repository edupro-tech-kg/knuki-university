import React from "react";
import { useTranslation } from "react-i18next";

function LibraryUsers() {
  const { t } = useTranslation();
  const libraryUsers = t("libraryUsers", { returnObjects: true });

  return (
    <section className="container-edge my-14">
      <h2 className="text-center uppercase tracking-wide font-cormorant italic font-semibold text-3xl md:text-4xl mb-12 text-text-primary">
        {libraryUsers.title}
      </h2>

      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {libraryUsers.users.map((item, i) => (
          <div
            key={i}
            className="border-l-2 pl-4 text-text-primary"
            style={{ borderColor: "#7a1f2b" }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>


  );
}

export default LibraryUsers;
