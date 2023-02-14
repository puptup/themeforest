import { DropdownList } from "@components/dropdown-list";
import { categories } from "@constants/categories";
import { Language } from "@localization";
import { useTranslation } from "react-i18next";

import { CategoryTitle, Title } from "./styled";

export const Categories = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;
  return (
    <div>
      <Title>{t("blogPost.categories")}</Title>
      {categories[lang].map(({ title, value }) => (
        <DropdownList
          title={<CategoryTitle>{title}</CategoryTitle>}
          textColor="black"
          lineColor="black"
        >
          <p>{value}</p>
        </DropdownList>
      ))}
    </div>
  );
};
