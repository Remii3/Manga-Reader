import { useParams } from "react-router-dom";

import {
  MainOuterStyled,
  TrendingOuterStyled,
} from "../../styles/shared/Container.styled";
import {
  CardHighlight,
  CardHighlightLightStyled,
} from "../../styles/shared/Div.styled";
import { LinkStyled } from "../../styles/shared/Link.styled";

function BookDetails(props) {
  const { mangaData, title, mangaIncluded } = props;
  const mangaGenres = mangaIncluded.filter((item) => item.type === "genres");
  const mangaChapters = mangaIncluded.filter(
    (item) => item.type === "chapters"
  );

  const urlResult = useParams();
  return (
    <MainOuterStyled>
      <TrendingOuterStyled>
        <CardHighlight>
          <LinkStyled to={"/"}>Home</LinkStyled>
          <span>{" > "}</span>
          <LinkStyled to={`/Books/${urlResult.bookId}`}>{title}</LinkStyled>
        </CardHighlight>
        <CardHighlight>
          <div>
            <div>
              <img
                src={mangaData.attributes.posterImage.original}
                alt="poster"
              />
            </div>
            <CardHighlightLightStyled>
              status {mangaData.attributes.status}
            </CardHighlightLightStyled>
            <CardHighlightLightStyled>
              subtype {mangaData.attributes.subtype}
            </CardHighlightLightStyled>
          </div>
          <div>
            <h3>{mangaData.attributes.canonicalTitle}</h3>
            <p>
              {Object.keys(mangaData.attributes.titles)
                .filter((keyName) => mangaData.attributes.titles[keyName])
                .map((keyName, i) => (
                  <li key={i}>
                    <span>Name: {mangaData.attributes.titles[keyName]}</span>
                  </li>
                ))}
            </p>
            <p>{mangaData.attributes.synopsis}</p>
            <p>Serialization: {mangaData.attributes.serialization}</p>
            <p>Created at: {mangaData.attributes.createdAt}</p>
            <p>Updated at: {mangaData.attributes.updatedAt}</p>
            <p>
              <span>Genres:</span>
              {mangaGenres.map((item) => (
                <li key={item.id}>
                  <span>{item.attributes.name}</span>
                </li>
              ))}
            </p>
          </div>
        </CardHighlight>

        <CardHighlight>
          <input
            type="number"
            placeholder="Search chapter, example: 25 or 175 "
          />
          <ul>
            {mangaChapters.map((chapter) => (
              <li key={chapter.id}>Chapter: {chapter.attributes.number}</li>
            ))}
          </ul>
        </CardHighlight>
        <div>
          <p>Comments</p>
          <input type="text" />
          <p></p>
        </div>
      </TrendingOuterStyled>
    </MainOuterStyled>
  );
}

export default BookDetails;
