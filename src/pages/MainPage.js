import { useEffect } from "react";

import Book from "../components/Books/Book";
import SwipeBook from "../components/Books/Swipe-Books";

import fetchAllBooks from "../lib/fetchPages";
import useHttps from "../hooks/useHttp";

import classes from "./MainPage.module.css";

function MainPage() {
  const {
    sendRequest,
    status,
    data: receivedData,
    error,
  } = useHttps(fetchAllBooks, true);

  useEffect(() => {
    sendRequest(null);
  }, [sendRequest]);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (
    status === "completed" &&
    (!receivedData || receivedData.data.length === 0)
  ) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className={classes.trendingBooks}>{<SwipeBook />}</div>
      <div className={classes.bookSpace}>
        {receivedData !== null &&
          receivedData.data.length > 0 &&
          receivedData.data.map((book) => {
            console.log(book);
            return (
              <Book
                key={book.id}
                title={book.attributes.canonicalTitle}
                episodes={book.relationships.episodes.links.related}
                imgLink={book.attributes.posterImage.tiny}
                bookIntel={book.attributes}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MainPage;
