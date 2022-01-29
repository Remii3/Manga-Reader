import { useEffect, useState, Fragment } from "react";

import Book from "../Book/Book";

import { fetchManga } from "../../lib/fetchManga";
import useHttps from "../../hooks/useHttp";

import Button from "../UI/Button";

import classes from "./LatestBooks.module.css";

function LatestBooks() {
  const [offset, setOffset] = useState(0);

  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchManga, true);
  let bookIncrement = 10;

  useEffect(() => {
    sendRequest({ pages: 20, offset, sort: "updatedAt" });
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
    <Fragment>
      {status === "completed" &&
        errorMessage === null &&
        fetchedData !== null &&
        fetchedData.data.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.attributes.canonicalTitle}
              chapters={book.relationships.chapters.links.related}
              imgLink={book.attributes.posterImage.tiny}
            />
          );
        })}
      <div className={classes["button-Space"]}>
        {offset >= 10 && (
          <Button className={"big"} fetchData={fetchLessHandler}>
            Previous
          </Button>
        )}
        <Button className={"big"} fetchData={fetchMoreHandler}>
          Next
        </Button>
      </div>
      ;
    </Fragment>
  );
}

export default LatestBooks;
