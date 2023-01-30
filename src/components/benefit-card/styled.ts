import { Heading } from "@ui/heading";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.card.padding.l};
  border-radius: ${({ theme }) => theme.spacing.card.borderRadius};
  width: ${({ theme }) => theme.spacing.block.width.xs};
  background-color: ${({ theme }) => theme.color.white};

  &:nth-child(even) {
    transform: translateY(${({ theme }) => theme.spacing.betweenItems.xxl});
  }
`;

export const Icon = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Title = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xs};
`;
