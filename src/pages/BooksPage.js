import { useEffect, useState } from "react";

import BookMin from "../components/Book/Book-Min";

import { fetchManga } from "../lib/fetchManga";
import useHttps from "../hooks/useHttp";

import Button from "../components/UI/Button";

import classes from "./BooksPage.module.css";

const BooksPage = () => {
  const [offset, setOffset] = useState(0);
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchManga, true);
  let bookIncrement = 20;

  useEffect(() => {
    sendRequest({ pages: 20, offset, sort: "id" });
  }, [sendRequest, offset]);

  const fetchMoreHandler = () => {
    setOffset((prevValue) => prevValue + bookIncrement);
  };

  const fetchLessHandler = () => {
    setOffset((prevValue) => prevValue - bookIncrement);
  };

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

  return (
    <div className={classes.outerSpace}>
      <div className={classes.booksSpace}>
        {status === "completed" &&
          errorMessage === null &&
          fetchedData !== null &&
          fetchedData.data.map((book) => {
            return (
              <BookMin
                key={book.id}
                title={book.attributes.canonicalTitle}
                chapters={book.relationships.chapters.links.related}
                imgLink={book.attributes.posterImage.large}
              />
            );
          })}
        <div className={classes["button-Space"]}>
          {offset >= 20 && (
            <Button fetchData={fetchLessHandler}>Previous</Button>
          )}
          <Button fetchData={fetchMoreHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
};
export default BooksPage;
