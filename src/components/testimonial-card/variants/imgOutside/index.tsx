import { AnyVariantsProps } from "@components/testimonial-card";

import { Description, Img, Name, OusideWrapper, PersonDetails, Role, Wrapper } from "./styled";

export const ImgOutside = ({ card }: AnyVariantsProps) => {
  const { image, name, role, text } = card;
  return (
    <OusideWrapper>
      <Wrapper>
        <Img src={image} />
        <Description>{text}</Description>
        <PersonDetails>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </PersonDetails>
      </Wrapper>
    </OusideWrapper>
  );
};
