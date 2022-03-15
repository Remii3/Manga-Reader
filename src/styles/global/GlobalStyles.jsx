import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    font-family: -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #16151d;
  }
  
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  
  .centered {
    text-align: center;
  }
  
  .loading {
    color: var(--mainGrey-color);
  }
  
  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--secondaryPurple-bgColor);
  }
  .swiper-pagination-bullet {
    background-color: var(--mainWhite-color);
    min-width: 11px;
    min-height: 11px;
  }
`;

export default GlobalStyles;
