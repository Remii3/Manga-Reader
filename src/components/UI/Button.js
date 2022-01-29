import classes from "./Button.module.css";

const Button = (props) => {
  const { fetchData } = props;
  const fetchDataHandler = () => {
    return fetchData();
  };

  return (
    <button onClick={fetchDataHandler} className={classes.button}>
      {props.children}
    </button>
  );
};
export default Button;
