import { device } from "@constants/devices";
import styled from "styled-components";

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }
`;

export const List = styled.ul``;
export const ListElement = styled.li`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }

  &::marker {
    color: black;
  }
`;

export const Img = styled.img``;
