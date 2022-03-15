import { Link } from "react-router-dom";

import LatestBooks from "../components/LatestBooks/LatestBooks";
import SwipeBooks from "../components/SwipeBooks/Swipe-Books";

import { SecondaryButtonStyled } from "../styles/shared/Button.styled.jsx";
import {
  MainOuterStyled,
  TrendingOuterStyled,
  UpdatedBooksOuterStyled,
} from "../styles/shared/Container.styled";
import {
  BooksSpaceStyled,
  BooksUpperButtonSpaceStyled,
} from "../styles/shared/Div.styled.jsx";
import { H3Styled } from "../styles/shared/Title.styled.jsx";

function MainPage() {
  return (
    <MainOuterStyled>
      <TrendingOuterStyled>
        <SwipeBooks />
      </TrendingOuterStyled>
      <UpdatedBooksOuterStyled>
        <BooksUpperButtonSpaceStyled>
          <H3Styled>Latest Updates</H3Styled>
          <Link to={"/Books"}>
            <SecondaryButtonStyled>View all</SecondaryButtonStyled>
          </Link>
        </BooksUpperButtonSpaceStyled>
        <BooksSpaceStyled>
          <LatestBooks />
        </BooksSpaceStyled>
      </UpdatedBooksOuterStyled>
    </MainOuterStyled>
  );
}

export default MainPage;
