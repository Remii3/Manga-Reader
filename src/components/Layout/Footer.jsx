import {
  UpperFooterStyled,
  LowerFooterStyled,
} from "../../styles/layout/Container.styled";
import { Fragment } from "react";
import { FooterIconStyled } from "../../styles/layout/Icon.styled";
import {
  UpperFooterParagraphStyled,
  LowerFooterParagraphStyled,
} from "../../styles/layout/Paragraph.styled.jsx";

function Footer() {
  return (
    <Fragment>
      <UpperFooterStyled>
        <UpperFooterParagraphStyled>Crated by Remi</UpperFooterParagraphStyled>
      </UpperFooterStyled>
      <LowerFooterStyled>
        <FooterIconStyled className="fas fa-book-open"></FooterIconStyled>
        <LowerFooterParagraphStyled>
          Any business-related queries, please contact me at
          remek778790@gmail.com
        </LowerFooterParagraphStyled>
      </LowerFooterStyled>
    </Fragment>
  );
}

export default Footer;
