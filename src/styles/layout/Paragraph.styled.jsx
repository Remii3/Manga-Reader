import styled from "styled-components";

export const UpperFooterParagraphStyled = styled.p`
  padding: 5px;
  color: ${({ theme }) => theme.colors.mainGrey_color};
  margin: 0;
`;

export const LowerFooterParagraphStyled = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.mainGrey_color};
`;
