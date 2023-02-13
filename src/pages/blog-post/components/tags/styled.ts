import styled from "styled-components";

type TagButtonProps = {
  active?: boolean;
};

export const TagButton = styled.button<TagButtonProps>`
  border: ${({ active }) => (!active ? "1px solid #F1F6FA" : "1px solid #185CFF")};
  background-color: ${({ theme, active }) => (active ? theme.color.primary : theme.color.white)};
  color: ${({ theme, active }) => (!active ? theme.color.primary : theme.color.white)};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 800;
  line-height: 24px;
  padding: 4px 11px;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 415px;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: 30px;
`;
