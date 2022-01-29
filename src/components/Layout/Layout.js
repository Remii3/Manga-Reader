import { Fragment } from "react";

import Nav from "./Nav";
import Footer from "./Footer";

import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <Nav></Nav>
      <main className={classes.mainLayout}>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
