import { useEffect } from "react";
import Book from "../components/Books/Book";
import classes from "./MainPage.module.css";
import fetchAllBooks from "../lib/fetchPages";
import useHttps from "../hooks/useHttp";
import SwipeBook from "../components/Books/Swipe-Books";

function MainPage() {
  const {
    sendRequest,
    status,
    data: receivedData,
    error,
  } = useHttps(fetchAllBooks, true);

  useEffect(() => {
    sendRequest();
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
        {receivedData.data.length > 0 &&
          receivedData.data.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.attributes.canonicalTitle}
              description={book.attributes.description}
              imgLink={book.attributes.posterImage.tiny}
            />
          ))}
      </div>
    </div>
  );
}

export default MainPage;
