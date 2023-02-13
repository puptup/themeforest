import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

type ActiveProps = {
  active: boolean;
};

export const Item = styled.div<ActiveProps>`
  padding-left: 35px;
  padding-top: 18px;
  padding-bottom: 18px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ theme, active }) => (!active ? theme.color.blue3 : theme.color.primary)};
  }
`;

export const Link = styled.a<ActiveProps>`
  color: ${({ theme, active }) => (!active ? theme.color.black : theme.color.primary)};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
