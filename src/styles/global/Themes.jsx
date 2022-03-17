import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainGrey_bgColor: "#222222",
    secondaryGrey_bgColor: "#2f2f2f",
    mainPurple_bgColor: "#913fe2",
    lighterGrey_bgColor: "#343434",

    mainGrey_border: "1px solid #312f40",

    mainWhite_color: "#fff",
    mainGrey_color: "#999",
    secondaryGrey_color: "#555",

    /* shadow */
    mainBlack_shadow: "2px 1px 10px #000",
    mainGrey_shadow: "0 2px 8px #202020",

    /* pre-hover */
    secondaryWhite_color: "rgba(255, 255, 255, 0.8)",
    secondaryPurple_bgColor: "rgba(147, 64, 230, 0.9)",
  },
};

const Themes = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Themes;
