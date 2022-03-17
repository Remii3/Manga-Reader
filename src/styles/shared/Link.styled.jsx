import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  color: white;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: hsl;
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryPurple_bgColor};
  }
`;
