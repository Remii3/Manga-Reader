import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";

import classes from "./SingleSwipe-Book.module.css";

function SingleSwipeBook(props) {
  const { id, title, description, imgLink } = props;

  return (
    <Routes>
      <Route
        path={``}
        element={
          <Fragment>
            <img className={classes.backPhoto} src={imgLink.large} alt="" />
            <div className={classes.backdrop}>
              <div className={classes.textSpace}>
                <div className={classes["mainInformation-space"]}>
                  <p>rating</p>
                  <div>
                    <h4>{title}</h4>
                    <p>type</p>
                  </div>
                </div>
                <div className={classes.descriptionSpace}>
                  <p>{description}</p>
                </div>
                <p>rating</p>
              </div>
              <div className={classes.photo}>
                <Link to={`/${title}${id}`}>
                  <img src={imgLink.tiny} alt="manga img" />
                </Link>
              </div>
            </div>
          </Fragment>
        }
      ></Route>
    </Routes>
  );
}
export default SingleSwipeBook;
