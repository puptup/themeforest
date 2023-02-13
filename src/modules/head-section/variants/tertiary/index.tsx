/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
import { Links } from "@constants/links";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

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
  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>{title}</Title>
            <LinksWrapper>
              <Link to={`${Links.home}`}>Home</Link>
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
