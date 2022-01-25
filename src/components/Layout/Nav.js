import classes from "./Nav.module.css";
import { Link, Routes, Route } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className={classes.upperSpace}>
        <Routes>
          <Route
            path="/*"
            element={
              <Link to="/">
                <i className="fas fa-book-open"></i>
              </Link>
            }
          />
        </Routes>
        <input type="text" placeholder="Search" />
        <div>Color Change</div>
      </div>
      <Routes>
        <Route
          path="/*"
          element={
            <div className={classes.lowerSpace}>
              <Link className={classes.links} to="/auth">
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
    </nav>
  );
}

export default Nav;
