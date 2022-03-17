import { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import { useHttps } from "../../hooks/useHttps";
import { fetchChapters } from "../../lib/fetchManga";

import {
  BookAllDataSpaceStyled,
  BookAllPhotoSpaceStyled,
  BookAllSpaceStyled,
} from "../../styles/shared/Div.styled";
import { BookAllImageStyled } from "../../styles/shared/Img.styled";
import { H3AllBookStyled } from "../../styles/shared/Title.styled";
import { AllBookInformationListStyled } from "../../styles/shared/Ul.styled";

////////////////// to finish, make func to tell how old is chapter

function BookMin(props) {
  const { title, mangaId, imgLink, chapters } = props;
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchChapters, true);
  useEffect(() => {
    sendRequest({ chapters });
  }, [sendRequest, chapters]);

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

  const slicedEpisodes = () => {
    if (fetchedData.data.length > 1) {
      const sliced = fetchedData.data.slice(0, 1);
      return <ChapterData chapterInfo={sliced} />;
    } else {
      return <ChapterData chapterInfo={fetchedData.data} />;
    }
  };

  return (
    <Card size={"small"}>
      <BookAllSpaceStyled>
        <BookAllPhotoSpaceStyled>
          <Link to={`/Books/${mangaId}`}>
            <BookAllImageStyled src={imgLink} alt="" />
          </Link>
        </BookAllPhotoSpaceStyled>
        <BookAllDataSpaceStyled>
          <H3AllBookStyled>{title}</H3AllBookStyled>
          <AllBookInformationListStyled>
            {fetchedData !== null &&
              fetchedData.data.length > 0 &&
              slicedEpisodes()}
          </AllBookInformationListStyled>
        </BookAllDataSpaceStyled>
      </BookAllSpaceStyled>
    </Card>
  );
}
export default BookMin;
