import classes from "./Button.module.css";

const Button = (props) => {
  const { fetchData, className } = props;

  const fetchDataHandler = () => {
    if (fetchData) {
      return fetchData();
    }
  };

  return (
    <button
      onClick={fetchDataHandler}
      className={`${classes.button} ${classes[className]}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
