import { Fragment } from "react";
import { Link } from "react-router-dom";

import { ImageBackgroundStyled } from "../../styles/shared/Img.styled";
import {
  BackdropStyled,
  TrendingBooksTextSpace,
  TrendingBooksPhotoSpace,
} from "../../styles/shared/Div.styled";
function SwipeBookInner(props) {
  const { id, title, description, imgLink } = props;

  return (
    <Fragment>
      <ImageBackgroundStyled src={imgLink.large} alt="" />
      <BackdropStyled>
        <TrendingBooksTextSpace>
          <p>rating</p>
          <h4>{title}</h4>
          <p>type</p>
          <p>{description}</p>
        </TrendingBooksTextSpace>
        <TrendingBooksPhotoSpace>
          <Link to={`/Books/${title}${id}`}>
            <img src={imgLink.tiny} alt="manga img" />
          </Link>
        </TrendingBooksPhotoSpace>
      </BackdropStyled>
    </Fragment>
  );
}
export default SwipeBookInner;
