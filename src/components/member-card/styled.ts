import { device } from "@constants/devices";
import styled from "styled-components";

type MemberCardWrapperProps = {
  background: string;
};

export const MemberCardWrapper = styled.div<MemberCardWrapperProps>`
  cursor: pointer;
  width: 350px;
  height: 500px;
  padding: ${({ theme }) => theme.spacing.card.padding.l};
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-image: ${({ background }) => `url(${background})`};
    width: 100%;
    height: 100%;
  }

  &:nth-child(3n + 2) {
    transform: translateY(-120px);
  }

  @media ${device.laptop} {
    height: 315px;
    padding: 0;

    &:nth-child(3n + 2) {
      transform: translateY(0);
    }

    &::before {
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: 250px;
      margin: 0 auto;
      border-radius: 6px;
    }
  }
`;

export const Name = styled.h5`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h5};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h5};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};

  @media ${device.laptop} {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};

  @media ${device.laptop} {
    color: ${({ theme }) => theme.color.grey};
  }
`;
