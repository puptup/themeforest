import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, h6, h5, h4, h3, h2, h1 , a {
    font-family: "Manrope", sans-serif;
  }

  p, div, input{
    font-family: "Open Sans", sans-serif;
  }

  .swiper-wrapper{
    max-width: 1000px
  }
`;
