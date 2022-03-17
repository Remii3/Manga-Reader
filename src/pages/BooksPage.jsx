import { useEffect, useState } from "react";

import BookMin from "../components/Book/Book-Min";

import { fetchManga } from "../lib/fetchManga";
import { useHttps } from "../hooks/useHttps";

import Button from "../components/UI/Button";

import { AllBooksOuterStyled } from "../styles/shared/Container.styled";
import {
  AllBookSpaceStyled,
  ChapterButtonSpaceStyled,
} from "../styles/shared/Div.styled";
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
    <AllBooksOuterStyled>
      <AllBookSpaceStyled>
        {status === "completed" &&
          errorMessage === null &&
          fetchedData !== null &&
          fetchedData.data.map((book) => {
            return (
              <BookMin
                key={book.id}
                title={book.attributes.canonicalTitle}
                mangaId={book.id}
                chapters={book.relationships.chapters.links.related}
                imgLink={book.attributes.posterImage.small}
              />
            );
          })}
        <ChapterButtonSpaceStyled>
          {offset >= 20 && (
            <Button fetchData={fetchLessHandler}>Previous</Button>
          )}
          <Button fetchData={fetchMoreHandler}>Next</Button>
        </ChapterButtonSpaceStyled>
      </AllBookSpaceStyled>
    </AllBooksOuterStyled>
  );
};
export default BooksPage;
