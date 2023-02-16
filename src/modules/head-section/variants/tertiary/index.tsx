/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";

import { Link } from "../styled";
import { Block, Container, HeadSectionWrapper, LinksWrapper, Title } from "./styled";

export type TertiaryVariantProps = {
  variant?: "tertiary";
  pageName: string;
  title: string;
  additionalLinkName?: string;
  additionalLink?: string;
};

export const TertiaryVariant = ({
  pageName,
  title,
  additionalLinkName,
  additionalLink,
}: TertiaryVariantProps) => {
  const { t } = useLocalization();

  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>{title}</Title>
            <LinksWrapper>
              <Link to={`${Links.home}`}>{t("mainLinks.home")}</Link>
              <img src={controlIcons.Divider} alt="divider" />
              {additionalLink && (
                <>
                  <Link to={additionalLink}>{additionalLinkName}</Link>
                  <img src={controlIcons.Divider} alt="divider" />
                </>
              )}
              <span>{pageName}</span>
            </LinksWrapper>
          </Block>
        </Container>
      </MainWrapper>
    </HeadSectionWrapper>
  );
};
