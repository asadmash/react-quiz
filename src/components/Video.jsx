import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
import { Link } from "react-router-dom";

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total Points:{noq * 5}</p>
      </div>
    </div>
  );
}
