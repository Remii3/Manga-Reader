import Card from "../UI/Card";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./Book.module.css";

function Book(props) {
  const { id, title, description, imgLink } = props;

  return (
    <Routes>
      <Route
        path={``}
        element={
          <Card>
            <div className={classes.outerSpace}>
              <div>
                <div className={classes["mainInformation-space"]}>
                  <p>rating</p>
                  <div>
                    <h1>{title}</h1>
                    <p>type</p>
                  </div>
                </div>
                <div>
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
          </Card>
        }
      ></Route>
    </Routes>
  );
}
export default Book;
