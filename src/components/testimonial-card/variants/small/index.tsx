import { AnyVariantsProps } from "@components/testimonial-card";

import { Description, HeadWrapper, Img, Name, PersonDetails, Role, Wrapper } from "./styled";

export const Small = ({ card }: AnyVariantsProps) => {
  const { image, name, role, text } = card;

  return (
    <Wrapper>
      <HeadWrapper>
        <Img src={image} />
        <PersonDetails>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </PersonDetails>
      </HeadWrapper>
      <Description>{text}</Description>
    </Wrapper>
  );
};
