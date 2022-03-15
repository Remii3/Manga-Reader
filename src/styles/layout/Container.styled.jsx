import styled from "styled-components";

export const MainStyled = styled.main`
  min-height: 100vh;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpperNavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.125rem 0rem;
  max-width: 87.5rem;
  box-sizing: border-box;
  min-height: 3.75rem;
  width: 100%;
  padding: 0 0.625rem;
`;

export const LowerNavigationOuterStyled = styled.div`
  width: 100%;
  padding: 0 calc(((100% - 87.5rem) / 2));
  background-color: ${({ theme }) => theme.colors.mainPurple_bgColor};
`;

export const LowerNavigationStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.625rem;
  width: 100%;
`;

export const OuterFooterStyled = styled.div``;

export const UpperFooterStyled = styled.div`
  background-color: var(--mainPurple-bgColor);
  width: 100%;
  height: 35%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LowerFooterStyled = styled.div`
  background-color: var(--secondaryGrey-bgColor);
  width: 100%;
  padding: 15px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
