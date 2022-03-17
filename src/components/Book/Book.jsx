import { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import { useHttps } from "../../hooks/useHttps";
import { fetchChapters } from "../../lib/fetchManga";

import { ChapterMainViewStyled } from "../../styles/shared/Container.styled";
import {
  BookPhotoSpaceStyled,
  BookMainInformationSpaceStyled,
} from "../../styles/shared/Div.styled";
import { BookMainImageStyled } from "../../styles/shared/Img.styled";
import { MainBookInformationListStyled } from "../../styles/shared/Ul.styled";
import { H3MainBookStyled } from "../../styles/shared/Title.styled";
////////////////// to finish, make func to tell how old is chapter

function Book(props) {
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
    if (fetchedData.data.length > 5) {
      const sliced = fetchedData.data.slice(0, 5);
      return <ChapterData chapterInfo={sliced} withDate={true} />;
    } else {
      return <ChapterData chapterInfo={fetchedData.data} withDate={true} />;
    }
  };

  return (
    <Card size={"big"}>
      <ChapterMainViewStyled>
        <BookPhotoSpaceStyled>
          <Link to={`/Books/${mangaId}`}>
            <BookMainImageStyled src={imgLink} alt="" />
          </Link>
        </BookPhotoSpaceStyled>
        <BookMainInformationSpaceStyled>
          <H3MainBookStyled>{title}</H3MainBookStyled>
          <MainBookInformationListStyled>
            {fetchedData !== null && slicedEpisodes()}
          </MainBookInformationListStyled>
        </BookMainInformationSpaceStyled>
      </ChapterMainViewStyled>
    </Card>
  );
}
export default Book;
