/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Container, Description, HeadSectionWrapper, LinksWrapper, Title } from "./styled";

export type SecondaryVariantProps = {
  variant?: "secondary";
  pageName: string;
  title: string;
  description: string[];
};

export const SecondaryVariant = ({ pageName, title, description }: SecondaryVariantProps) => {
  const { t } = useLocalization();

  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <LinksWrapper>
          <Link to={`${Links.home}`}>{t("mainLinks.home")}</Link>
          <img src={controlIcons.Divider} alt="divider" />
          <span>{pageName}</span>
        </LinksWrapper>
        <Container>
          <Title>{title}</Title>
          <div>
            {description.map((item, index) => (
              <Description key={index}>{item}</Description>
            ))}
          </div>
        </Container>
      </MainWrapper>
    </HeadSectionWrapper>
  );
};
