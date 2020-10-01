import React from "react";
import SolidButton from "../customButton/solidButton.component";
import "./card.styles.scss";

function CustomCard({ title, imgLink }) {
  return (
    <div id="card">
      <div
        style={{ backgroundImage: `url(${imgLink})` }}
        className="card-img"
      />
      <div id="title">
        <h3>{title}</h3>
      </div>
      <SolidButton title="Read More..." link="#" />
    </div>
  );
}
export default CustomCard;
