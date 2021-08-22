import SolidButton from "../customButton/solidButton.component";
import "./card.styles.css";

export default function CustomCard(props: {
  title: string;
  imgLink: string;
  link: string;
}) {
  return (
    <div id="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.imgLink} alt="Female" />
        </div>
        <div className="card-back">
          <h3>{props.title}</h3>
          <SolidButton title="Read More..." link={props.link} />
        </div>
      </div>
    </div>
  );
}
