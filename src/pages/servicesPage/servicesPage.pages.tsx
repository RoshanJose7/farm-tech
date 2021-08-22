import fruits from "../../assets/fruit-market.jpg";
import SolidButton from "../../components/customButton/solidButton.component";
import "./servicesPage.styles.css";

export default function Services() {
  return (
    <div id="services">
      <div id="services-head">
        <div id="services-back" />
        <h1>Services</h1>
      </div>
      <div id="services-info">
        <div className="service">
          <div className="text">
            <h3>Want to sell yours vegetables?</h3>
            <p>
              Farmers can sell there fresh vegetables and fruits with our
              company according to the updated price of APMC .
            </p>
            <SolidButton title="Contact" link="/contact" />
          </div>
          <div className="img" style={{ backgroundImage: `url(${fruits})` }} />
        </div>
      </div>
    </div>
  );
}
