import { Link } from "react-router-dom";
import "./customButton.styles.css";

const TransparentButton = (props: { title: string; link: string }) => {
  return (
    <Link to={props.link}>
      <div className="button" id="transparent-button">
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export default TransparentButton;
