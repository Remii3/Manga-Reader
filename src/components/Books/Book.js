import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import useHttps from "../../hooks/useHttp";
import { fetchEpisodes } from "../../lib/fetchPages";

import classes from "./Book.module.css";

////////////////// to finish, make func to tell how old is chapter

function Book(props) {
  const { title, imgLink, chapters } = props;
  const {
    sendRequest,
    status,
    data: fetchedData,
    error,
  } = useHttps(fetchEpisodes, true);

  useEffect(() => {
    sendRequest(chapters);
  }, [sendRequest, chapters]);

  const slicedEpisodes = () => {
    if (fetchedData.data.length > 6) {
      const sliced = fetchedData.data.slice(0, 5);
      return <ChapterData chapterInfo={sliced} />;
    } else {
      return <ChapterData chapterInfo={fetchedData.data} />;
    }
  };

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (
    status === "completed" &&
    (fetchedData === null || fetchedData.length === 0)
  ) {
    return <p>{error}</p>;
  }

  return (
    <Routes>
      <Route
        path={``}
        element={
          <Card>
            <div className={classes.outerSpace}>
              <div className={classes.photo}>
                <Link to={`/${title}`}>
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
