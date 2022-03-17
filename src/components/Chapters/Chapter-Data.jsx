import { Fragment } from "react";

import { BookListDataStyled } from "../../styles/shared/Div.styled";
import { BookListDateStyled } from "../../styles/shared/Span.styled";
function ChapterData(props) {
  const { chapterInfo, withDate } = props;

  // const date = new Date().toUTCString();
  if (chapterInfo.length <= 0) {
    chapterInfo.push({
      id: Math.floor(Math.random() * 10),
      attributes: { number: "1", createdAt: "TBA" },
    });
  }
  return (
    <Fragment>
      {chapterInfo !== null &&
        chapterInfo.length > 0 &&
        chapterInfo.map((el) => {
          return (
            <li key={el.id}>
              <BookListDataStyled>
                <span>
                  Chapter {el.attributes.number ? el.attributes.number : "1"}
                </span>
                {withDate && (
                  <BookListDateStyled>
                    {el.attributes.createdAt.slice(0, 10)}
                  </BookListDateStyled>
                )}
              </BookListDataStyled>
            </li>
          );
        })}
    </Fragment>
  );
}

export default ChapterData;
