import {
  BigCardStyled,
  SmallCardStyled,
} from "../../styles/shared/Container.styled";

function Card(props) {
  const { size } = props;
  let CardType;

  switch (size) {
    case "big":
      CardType = <BigCardStyled>{props.children}</BigCardStyled>;
      break;
    case "small":
      CardType = <SmallCardStyled>{props.children}</SmallCardStyled>;
      break;
    default:
      CardType = <></>;
      break;
  }

  return <>{CardType}</>;
}

export default Card;
