import { Link, Routes, Route } from "react-router-dom";

import SwipeBooks from "../components/SwipeBooks/Swipe-Books";
import LatestBooks from "../components/LatestBooks/LatestBooks";

import classes from "./MainPage.module.css";
import Button from "../components/UI/Button";

function MainPage() {
  return (
    <div className={classes.outerSpace}>
      <div className={classes.trendingBooks}>{<SwipeBooks />}</div>
      <div className={classes.updatedBooks}>
        <div className={classes["viewAll-Space"]}>
          <h3>Latest Updates</h3>
          <Routes>
            <Route
              path=""
              element={
                <Link to={"/Books"}>
                  <Button className={"small"}>View all</Button>
                </Link>
              }
            />
          </Routes>
        </div>
        <div className={classes.bookSpace}>
          <LatestBooks />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
