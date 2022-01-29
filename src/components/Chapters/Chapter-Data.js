import { Fragment } from "react";

import classes from "./Chapter-Data.module.css";

function ChapterData(props) {
  const { chapterInfo, withDate } = props;

  // const date = new Date().toUTCString();
  return (
    <Fragment>
      {chapterInfo !== null &&
        chapterInfo.length > 0 &&
        chapterInfo.map((el) => {
          return (
            <li key={el.id}>
              <div className={classes["chapterLine-space"]}>
                <span>Chapter {el.attributes.number}</span>{" "}
                {withDate && (
                  <span className={classes.date}>
                    {el.attributes.createdAt.slice(0, 10)}
                  </span>
                )}
              </div>
              <div className={classes.rating}>
                <div className={classes.starsSpace}></div>
                <div className={classes.numericRate}></div>
              </div>
            </li>
          );
        })}
    </Fragment>
  );
}

export default ChapterData;
