import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import useHttps from "../../hooks/useHttp";
import { fetchChapters } from "../../lib/fetchManga";

import classes from "./Book.module.css";

////////////////// to finish, make func to tell how old is chapter

function Book(props) {
  const { title, imgLink, chapters } = props;
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchChapters, true);

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
    if (fetchedData.data.length > 5) {
      const sliced = fetchedData.data.slice(0, 5);
      return <ChapterData chapterInfo={sliced} withDate={true} />;
    } else {
      return <ChapterData chapterInfo={fetchedData.data} withDate={true} />;
    }
  };

  return (
    <Routes>
      <Route
        path={``}
        element={
          <Card className={"card-Book"}>
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
export default Book;
