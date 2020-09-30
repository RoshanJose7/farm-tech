import React from "react";
import "./customButton.styles.scss";

const NavButton = ({ title, link }) => {
  return (
    <div className="button" id="nav-button">
      <a href={link}>{title}</a>
    </div>
  );
};

export default NavButton;
