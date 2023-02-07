import styled from "styled-components";

type MemberCardProps = {
  name: string;
  role: string;
  image: string;
};

type MemberCardWrapperProps = {
  background: string;
};

export const MemberCardWrapper = styled.div<MemberCardWrapperProps>`
  width: 350px;
  height: 500px;
  background-image: ${({ background }) => `url(${background})`};
  padding: ${({ theme }) => theme.spacing.card.padding.l};

  display: flex;
  align-items: flex-end;

  &:nth-child(3n + 2) {
    transform: translateY(-120px);
  }
`;

export const Img = styled.img`
  display: block;
`;

export const Name = styled.h5`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h5};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h5};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
`;

export const MemberCard = ({ name, role, image }: MemberCardProps) => {
  return (
    <MemberCardWrapper background={image}>
      <div>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </div>
    </MemberCardWrapper>
  );
};
