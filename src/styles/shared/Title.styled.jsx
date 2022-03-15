import styled from "styled-components";

export const H3Styled = styled.h3`
  padding: 0.313rem;
  color: ${({ theme }) => theme.colors.mainWhite_color};
`;
export const H3MainBookStyled = styled.h3`
  margin: 0;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.mainWhite_color};
`;

export const H3AllBookStyled = styled.h3`
  margin-top: 0;
  padding-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainWhite_color};
`;
