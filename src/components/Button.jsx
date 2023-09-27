import classes from "../styles/Button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({ className, children }) {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}
