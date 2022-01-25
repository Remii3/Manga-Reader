import Card from "../UI/Card";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./SingleSwipe-Book.module.css";

function SingleSwipeBook(props) {
  const { id, title, description, imgLink } = props;

  return (
    <Routes>
      <Route
        path={``}
        element={
          <div className={classes.outerSpace}>
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

              <p>status</p>
            </div>
            <div className={classes.photo}>
              <Link to={`/${title}${id}`}>
                <img src={imgLink} alt="" />
              </Link>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
}
export default SingleSwipeBook;
