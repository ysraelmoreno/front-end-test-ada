import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }
  body {
    -web-font-smoothing: antialiased;
    background-color: #F6F8FA;
    min-height: 100vh;
  }
  body, input, button {
    font-family: 'Fira Sans';
    font-size: 14px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }`;
