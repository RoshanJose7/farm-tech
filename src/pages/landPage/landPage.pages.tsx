import SolidButton from "../../components/customButton/solidButton.component";
import "./landPage.styles.css";

export default function LandPage() {
  return (
    <div id="land-main">
      <div id="land-head">
        <div id="land-back" />
      </div>
      <div id="land-info">
        <div className="land">
          <div className="text">
            <h3>Earn Revenue by giving your land for Eco-Friendly measures</h3>
            <p>
              Farmers can earn Revenue by giving your land to us for
              Eco-Friendly purposes. And we will take care of the rest.
            </p>
            <p>For furthur enquires you can contact us.</p>
            <SolidButton title="Contact" link="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
