import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import Themes from "./styles/global/Themes.jsx";
import GlobalStyles from "./styles/global/GlobalStyles.jsx";
import store from "./app/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Themes>
        <GlobalStyles />
        <App />
      </Themes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
