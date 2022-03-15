import { Fragment } from "react";

import Nav from "./Nav";
import Footer from "./Footer";

import { MainStyled } from "../../styles/layout/Container.styled";
function Layout(props) {
  return (
    <Fragment>
      <Nav></Nav>
      <MainStyled>{props.children}</MainStyled>
      <Footer />
    </Fragment>
  );
}

export default Layout;
