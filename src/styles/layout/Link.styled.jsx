import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  font-size: 1.28rem;
  color: ${({ theme }) => theme.colors.mainWhite_color};
  padding: 0.625rem 0;
  text-align: center;
  padding: 0.625rem 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
