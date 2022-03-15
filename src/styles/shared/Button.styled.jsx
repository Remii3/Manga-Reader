import styled from "styled-components";

export const MainChangeButtonStyled = styled.button`
  padding: 6px 8px;
  margin: 20px 10px 15px;
  background-color: ${({ theme }) => theme.colors.mainPurple_bgColor};
  color: var(--secondaryWhite-color);
  border: none;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: var(--mainBlack-shadow);

  min-width: 125px;
  font-size: 16px;

  &:hover {
    color: var(--mainWhite-color);
    background-color: var(--secondaryPurple-bgColor);
    box-shadow: 2px 2px 8px var(--secondaryGrey-bgColor);
  }
`;

export const SecondaryButtonStyled = styled.button`
  padding: 6px 8px;
  margin: 20px 10px 10px;
  background-color: ${({ theme }) => theme.colors.mainPurple_bgColor};
  color: var(--secondaryWhite-color);
  border: none;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: var(--mainBlack-shadow);

  font-size: 13.3px;
  min-width: 62px;
  &:hover {
    color: var(--mainWhite-color);
    background-color: var(--secondaryPurple-bgColor);
    box-shadow: 2px 2px 8px var(--secondaryGrey-bgColor);
  }
`;
