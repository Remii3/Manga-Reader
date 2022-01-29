import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${classes["outer-Space"]} centered`}>
      <div className={classes.upperFooter}>
        <p>Crated by Remi</p>
      </div>
      <div className={classes.lowerFooter}>
        <div>icon</div>
        <p>
          Any business-related queries, please contact me at
          remek778790@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
