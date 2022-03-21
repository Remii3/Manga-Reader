import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useHttps } from "../../hooks/useHttps";
import { fetchManga } from "../../lib/fetchManga";

import BookDetails from "./BookDetails";

const BookDetailsFunctionality = () => {
  const {
    sendRequest: sendRequestManga,
    status: statusManga,
    data: fetchedManga,
    error: errorMessageManga,
  } = useHttps(fetchManga, true);

  const params = useParams();
  useEffect(() => {
    sendRequestManga(params.bookId, "CURRENT");
  }, [sendRequestManga, params.bookId]);

  if (statusManga === "pending") return <h1>Loading</h1>;

  if (errorMessageManga != null) return <h1>Not found</h1>;
  console.log(fetchedManga);
  return (
    <>
      {fetchedManga != null && (
        <BookDetails
          title={fetchedManga.data[0].attributes.canonicalTitle}
          mangaData={fetchedManga.data[0]}
          mangaIncluded={fetchedManga.included}
        />
      )}
    </>
  );
};

export default BookDetailsFunctionality;
