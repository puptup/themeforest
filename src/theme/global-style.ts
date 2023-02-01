import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* border: 1px solid green; */
  }

  button, h6, h5, h4, h3, h2, h1 {
    font-family: "Manrope", sans-serif;
  }

  p, div{
    font-family: "Open Sans", sans-serif;
  }
`;
