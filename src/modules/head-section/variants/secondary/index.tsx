/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
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
  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
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
