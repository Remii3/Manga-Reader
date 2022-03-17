import React, { useEffect } from "react";
import BookDetails from "./BookDetails";

import { fetchChaptersDetails, fetchMangaDetails } from "../../lib/fetchManga";

import { useHttps } from "../../hooks/useHttps";
import { useParams } from "react-router-dom";
const BookDetailsFunctionality = () => {
  const {
    sendRequest: sendRequestManga,
    status: statusManga,
    data: fetchedManga,
    error: errorMessageManga,
  } = useHttps(fetchMangaDetails, true);
  const {
    sendRequest: sendRequestChapters,
    status: statusChapters,
    data: fetchedChapters,
    error: errorMessageChapters,
  } = useHttps(fetchChaptersDetails, true);

  const params = useParams();

  useEffect(() => {
    sendRequestManga(params.bookId);
    sendRequestChapters(params.bookId);
  }, [sendRequestManga, sendRequestChapters, params.bookId]);

  if (statusManga === "pending" || statusChapters === "pending")
    return <h1>Loading</h1>;

  if (errorMessageManga != null || errorMessageChapters != null)
    return <h1>Not found</h1>;

  return (
    <>
      {fetchedManga != null && fetchedChapters != null && (
        <BookDetails
          title={fetchedManga.data[0].attributes.canonicalTitle}
          mangaData={fetchedManga.data[0]}
          mangaChapters={fetchedChapters.data}
        />
      )}
    </>
  );
};

export default BookDetailsFunctionality;
