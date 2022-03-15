import { MainChangeButtonStyled } from "../../styles/shared/Button.styled.jsx";

const Button = (props) => {
  const { fetchData } = props;

  const fetchDataHandler = () => {
    if (fetchData) {
      return fetchData();
    }
  };

  return (
    <MainChangeButtonStyled onClick={fetchDataHandler}>
      {props.children}
    </MainChangeButtonStyled>
  );
};
export default Button;
