import { device } from "@constants/devices";
import styled from "styled-components";
import { Swiper as UISwiper } from "swiper/react";

export const ControlButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.black};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  }
`;

export const Swiper = styled(UISwiper)`
  padding: 5px;
`;
