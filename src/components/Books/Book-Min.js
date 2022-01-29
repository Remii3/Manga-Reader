import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import useHttps from "../../hooks/useHttp";
import { fetchEpisodes } from "../../lib/fetchPages";

import classes from "./Book-Min.module.css";

////////////////// to finish, make func to tell how old is chapter

function BookMin(props) {
  const { title, imgLink, chapters } = props;
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchEpisodes, true);

  useEffect(() => {
    sendRequest({ chapters });
  }, [sendRequest, chapters]);

  if (status === "pending") {
    return <h1 className="loading">Loading...</h1>;
  }

  if (status === "completed" && errorMessage !== null) {
    return errorMessage.map((error) => {
      return (
        <div key={errorMessage.length}>
          <h1>{error.title}</h1>
          <p>For more information open console</p>
        </div>
      );
    });
  }

  const slicedEpisodes = () => {
    if (fetchedData.data.length > 1) {
      const sliced = fetchedData.data.slice(0, 1);
      return <ChapterData chapterInfo={sliced} />;
    } else {
      return <ChapterData chapterInfo={fetchedData.data} />;
    }
  };

  return (
    <Routes>
      <Route
        path={``}
        element={
          <Card className={"card-BookMini"}>
            <div className={classes.outerSpace}>
              <div className={classes.photo}>
                <Link to={`/Books/${title}`}>
                  <img src={imgLink} alt="" />
                </Link>
              </div>
              <div className={classes["mainInformation-space"]}>
                <h3>{title}</h3>
                <ul>
                  {fetchedData !== null &&
                    fetchedData.data.length > 0 &&
                    slicedEpisodes()}
                </ul>
              </div>
            </div>
          </Card>
        }
      ></Route>
    </Routes>
  );
}
export default BookMin;
