import { Link, Routes, Route } from "react-router-dom";

import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={classes.upperSpace}>
        <Routes>
          <Route
            path="/*"
            element={
              <Link to="/" className={classes.homeButton}>
                <i className="fas fa-book-open"></i>
              </Link>
            }
          />
        </Routes>
        <input type="text" placeholder="Search" />
        <div>Color Change</div>
      </div>
      <div className={classes["lowerSpace-outer"]}>
        <Routes>
          <Route
            path="/*"
            element={
              <div className={classes.lowerSpace}>
                <Link className={classes.links} to="/Auth">
                  <i className="fas fa-user-circle"></i>
                </Link>
                <Link className={classes.links} to="/">
                  Home
                </Link>
                <Link className={classes.links} to="/Favorites">
                  Favorites
                </Link>
                <Link className={classes.links} to="/Books">
                  Books
                </Link>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </nav>
  );
}

export default Nav;
