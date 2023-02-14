import { DropdownList } from "@components/dropdown-list";
import { serviceCards } from "@constants/serviceCards";
import { useLocalization } from "@hooks/useLocalization";

import { CategoryTitle, Title, Wrapper } from "./styled";

const tPath = "servicePost.services.";

export const Services = () => {
  const { t, language } = useLocalization();

  return (
    <Wrapper>
      <Title>{t(`${tPath}title`)}</Title>
      {serviceCards[language].map(({ title, description }) => (
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
