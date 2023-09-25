import classes from "../styles/Button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
}
