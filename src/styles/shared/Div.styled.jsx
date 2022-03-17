import styled from "styled-components";

// Home

export const BooksUpperButtonSpaceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 15px 0;
  border-bottom: var(--mainGrey-border);
  width: 100%;
`;

export const BooksSpaceStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const AllBookSpaceStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 840px) {
    min-width: 900px;
    width: 60%;
    justify-content: flex-start;
  }

  @media (min-width: 940px) {
    min-width: 100px;
    width: 100%;
  }
`;

export const ChapterButtonSpaceStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: var(--mainGrey-border);
  margin-top: 15px;
`;

export const BackdropStyled = styled.div`
  padding: 20px;
  display: flex;
  min-width: 100%;
  position: relative;
`;

export const TrendingBooksTextSpace = styled.div`
  color: ${({ theme }) => theme.colors.mainWhite_color};
  max-height: 290px;
  max-width: 450px;
  overflow: hidden;
`;
export const TrendingBooksPhotoSpace = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 25px 0 110px;
`;

export const BookListDataStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.mainGrey_color};
`;

export const BookPhotoSpaceStyled = styled.div`
  max-height: 156px;
  max-width: 110px;
`;

export const BookMainInformationSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 130px);
`;

// Books

export const BookAllSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookAllPhotoSpaceStyled = styled.div`
  max-height: 213px;
  max-width: 160px;
`;
export const BookAllDataSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 147px;
`;

// Card Details

export const CardHighlight = styled.div`
  background-color: ${({ theme }) => theme.colors.mainGrey_bgColor};
  margin: 0 0 2rem;
  padding: 0.95rem;
  color: #fff;
  border-radius: 0.5rem;
`;
export const CardHighlightLightStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterGrey_bgColor};
  margin: 0 0 2rem;
  padding: 0.95rem;
  color: #fff;
  border-radius: 0.5rem;
`;
