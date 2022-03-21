import { Fragment } from "react";

import Book from "../Book/Book";

import Button from "../UI/Button";

import { ChapterButtonSpaceStyled } from "../../styles/shared/Div.styled";
function LatestBooks(props) {
  const { mangaData, offset, fetchMore, fetchLess } = props;
  return (
    <Fragment>
      {mangaData.data.map((book) => {
        return (
          <Book
            key={book.id}
            mangaId={book.id}
            title={book.attributes.canonicalTitle}
            imgLink={book.attributes.posterImage.tiny}
          />
        );
      })}
      <ChapterButtonSpaceStyled>
        {offset >= 10 && <Button fetchData={fetchLess}>Previous</Button>}
        <Button fetchData={fetchMore}>Next</Button>
      </ChapterButtonSpaceStyled>
    </Fragment>
  );
}

export default LatestBooks;
