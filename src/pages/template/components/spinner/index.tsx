import { MainWrapper } from "tmfcomponents";

import { StyledSpinner, Wrapper } from "./styled";

export const Spinner = () => (
  <MainWrapper>
    <Wrapper>
      <h3>Loading</h3>
      <StyledSpinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
      </StyledSpinner>
    </Wrapper>
  </MainWrapper>
);
