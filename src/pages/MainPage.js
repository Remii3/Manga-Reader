import { useEffect, useState } from "react";

import Book from "../components/Books/Book";
import SwipeBooks from "../components/SwipeBooks/Swipe-Books";

import fetchAllBooks from "../lib/fetchPages";
import useHttps from "../hooks/useHttp";

import Button from "../components/UI/Button";

import classes from "./MainPage.module.css";

function MainPage() {
  const [offset, setOffset] = useState(0);

  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchAllBooks, true);
  let bookIncrement = 10;

  useEffect(() => {
    sendRequest({ pages: 10, offset, sorting: "updatedAt" });
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
      <div className={classes.trendingBooks}>{<SwipeBooks />}</div>
      <div className={classes.bookSpace}>
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
            <Button fetchData={fetchLessHandler}>Previous</Button>
          )}
          <Button fetchData={fetchMoreHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
