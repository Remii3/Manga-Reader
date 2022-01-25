import Footer from "./Footer";
import Nav from "./Nav";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <Nav></Nav>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
