import React from "react";
import { Link } from "react-router-dom";
import "./customButton.styles.css";

const SolidButton = (props: { title: string; link: string }) => {
  return (
    <Link to={props.link}>
      <div className="button" id="solid-button">
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export default SolidButton;
