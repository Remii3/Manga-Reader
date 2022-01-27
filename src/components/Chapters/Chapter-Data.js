import { Fragment } from "react";
import classes from "./Chapter-Data.module.css";

function ChapterData(props) {
  const { chapterInfo } = props;

  const date = new Date().toUTCString();
  console.log(date);
  return (
    <Fragment>
      {chapterInfo !== null &&
        chapterInfo.length > 0 &&
        chapterInfo.map((el) => {
          return (
            <li key={el.id}>
              <div className={classes["chapterLine-space"]}>
                <span>Chapter {el.attributes.number}</span>{" "}
                <span className={classes.date}>
                  {el.attributes.createdAt.slice(0, 10)}
                </span>
              </div>
            </li>
          );
        })}
    </Fragment>
  );
}

export default ChapterData;
