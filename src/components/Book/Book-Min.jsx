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
import { useDispatch } from "react-redux";
import { mangaDetailsSliceActions } from "../../features/mangaDetails-slice";

////////////////// to finish, make func to tell how old is chapter

function BookMin(props) {
  const { mangaData, title, imgLink, chapters } = props;
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchChapters, true);
  const dispatch = useDispatch();
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
  const showMangaDetailsHandler = () => {
    dispatch(
      mangaDetailsSliceActions.showMangaDetails({
        mangaData: mangaData,
        mangaChapters: fetchedData,
      })
    );
  };
  return (
    <Card size={"small"}>
      <BookAllSpaceStyled>
        <BookAllPhotoSpaceStyled>
          <Link to={`/Books/${title}`}>
            <BookAllImageStyled
              src={imgLink}
              alt=""
              onClick={showMangaDetailsHandler}
            />
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
