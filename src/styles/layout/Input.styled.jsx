import styled from "styled-components";

export const InputStyled = styled.input`
  height: 34px;
  outline-width: 0;
  font-size: 14px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.secondaryGrey_bgColor};
  border: ${({ theme }) => theme.colors.mainGrey_border};
  color: ${({ theme }) => theme.colors.mainWhite_color};
  border-radius: 3px;
  padding: 6px 12px;
  box-shadow: ${({ theme }) => theme.colors.mainGrey_shadow};
  width: 80%;

  @media (min-width: 860px) {
    max-width: 21.875rem;
  }
`;
