import styled from "styled-components";

export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;

  width: 100px;
  height: 100px;
  margin: 40px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Wrapper = styled.div`
  min-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
