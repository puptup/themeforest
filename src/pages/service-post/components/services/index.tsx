import { DropdownList } from "@components/dropdown-list";
import { serviceCards } from "@constants/serviceCards";
import { Language } from "@localization";
import { useTranslation } from "react-i18next";

import { CategoryTitle, Title, Wrapper } from "./styled";

const tPath = "servicePost.services.";

export const Services = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <Wrapper>
      <Title>{t(`${tPath}title`)}</Title>
      {serviceCards[lang].map(({ title, description }) => (
        <DropdownList
          key={title}
          title={<CategoryTitle>{title}</CategoryTitle>}
          textColor="black"
          lineColor="black"
        >
          <p>{description}</p>
        </DropdownList>
      ))}
    </Wrapper>
  );
};
