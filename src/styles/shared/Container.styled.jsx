import styled from "styled-components";

export const MainOuterStyled = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  min-width: 0;
  @media (min-width: 860px) {
    min-width: 0;
  }
  @media (min-width: 1400px) {
    min-width: 87.5rem;
    max-width: 87.5rem;
  }
`;

export const TrendingOuterStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 50rem;
  margin-top: calc(1.5625rem + 0.125rem);
  min-width: 0;

  @media (min-width: 860px) {
    width: 70%;
    min-width: 42.1875rem;
    max-width: 42.1875rem;
  }
`;

export const UpdatedBooksOuterStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.9375rem;
  min-width: 0;
  @media (min-width: 930px) {
    min-width: 60%;
    max-width: 56.25rem;
  }
`;

export const AllBooksOuterStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
`;

export const BigCardStyled = styled.div`
  border-radius: 9px;
  box-shadow: var(--mainGrey-shadow);
  width: 100%;
  margin: 10px 0;
  background-color: var(--mainGrey-bgColor);

  @media (min-width: 860px) {
    min-width: 400px;
    max-width: 400px;
  }
`;
export const SmallCardStyled = styled.div`
  border-radius: 9px;
  box-shadow: 0 2px 8px #202020;
  width: calc(100% / 4.5);
  margin: 10px 10px;
  background-color: var(--mainGrey-bgColor);
  min-width: calc(100% / 4 + 40px);

  @media (min-width: 860px) {
    max-width: 160px;
    min-width: 160px;
  }
`;

export const SwipeBookOuterStyled = styled.div`
  min-height: 330px;
  max-height: 330px;
  background-color: var(--mainBlack-bgColor);
  display: flex;
`;

export const ChapterMainViewStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
`;
