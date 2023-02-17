import { categories } from "@constants/categories";
import { useLocalization } from "@hooks/useLocalization";
import { DropdownList } from "tmfcomponents";

import { CategoryTitle, Title } from "./styled";

export const Categories = () => {
  const { t, language } = useLocalization();

  return (
    <div>
      <Title>{t("blogPost.categories")}</Title>
      {categories[language].map(({ title, value }) => (
        <DropdownList
          title={<CategoryTitle>{title}</CategoryTitle>}
          textColor="black"
          lineColor="black"
          key={title}
        >
          <p>{value}</p>
        </DropdownList>
      ))}
    </div>
  );
};
