import { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import ChapterData from "../Chapters/Chapter-Data";

import { useHttps } from "../../hooks/useHttps";
import { fetchManga } from "../../lib/fetchManga";

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
  const { mangaId, title, imgLink } = props;

  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchManga, true);
  console.log(fetchedData);
  useEffect(() => {
    sendRequest(mangaId, "CURRENT");
  }, [sendRequest, mangaId]);

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
    function compare(a, b) {
      if (a.attributes.number > b.attributes.number) {
        return -1;
      }
      if (a.attributes.number < b.attributes.number) {
        return 1;
      }
      return 0;
    }

    const sortedChapters = fetchedData.included.sort(compare);
    if (sortedChapters.length > 5) {
      const sliced = sortedChapters.slice(0, 5);
      return <ChapterData chapterInfo={sliced} withDate={true} />;
    } else {
      return <ChapterData chapterInfo={sortedChapters} withDate={true} />;
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
