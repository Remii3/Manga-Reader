import { Fragment } from "react";

function ChapterData(props) {
  const { chapterInfo } = props;
  return (
    <Fragment>
      {chapterInfo !== null &&
        chapterInfo.length > 0 &&
        chapterInfo.map((el) => {
          const test = el.attributes.length - el.attributes.number;

          return (
            <li key={el.id}>
              <span>Chapter {test}</span> <span>{el.attributes.airdate}</span>
            </li>
          );
        })}
    </Fragment>
  );
}

export default ChapterData;
