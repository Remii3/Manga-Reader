import { useState, useEffect } from "react";
import { useHttps } from "../../hooks/useHttps";
import LatestBooks from "./LatestBooks";
import { fetchManga } from "../../lib/fetchManga";
const LatestBooksFunctionality = () => {
  const [offset, setOffset] = useState(0);

  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchManga, true);
  let bookIncrement = 10;

  useEffect(() => {
    sendRequest({ pages: 10, offset, sort: "updatedAt" }, "ALL_MANGA");
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
    return <>{console.log(errorMessage)}</>;
    // return errorMessage.map((error) => {
    //   return (
    //     <div key={errorMessage.length}>
    //       <h1>{error.title}</h1>
    //     </div>
    //   );
    // });
  }
  if (fetchedData === null) return;
  return (
    <LatestBooks
      mangaData={fetchedData}
      offset={offset}
      fetchMore={fetchMoreHandler}
      fetchLess={fetchLessHandler}
    />
  );
};

export default LatestBooksFunctionality;
