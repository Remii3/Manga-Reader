import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import Themes from "./styles/global/Themes.jsx";
import GlobalStyles from "./styles/global/GlobalStyles.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Themes>
      <GlobalStyles />
      <App />
    </Themes>
  </BrowserRouter>,
  document.getElementById("root")
);
