import styled from "styled-components";

export const ImageBackgroundStyled = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  filter: blur(3px) brightness(35%);
  transform: scale(1.1);
`;

export const BookMainImageStyled = styled.img`
  width: 100%;
  border-radius: 3px 0 0 3px;
`;

export const BookAllImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px 3px 0 0;
`;
