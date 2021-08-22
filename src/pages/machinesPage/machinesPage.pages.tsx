import SolidButton from "../../components/customButton/solidButton.component";
import "./machinesPage.styles.css";

function machinesPage() {
  return (
    <div id="machines">
      <div id="machines-head">
        <h1>Go Cost-Effective</h1>
        <div id="machines-back" />
      </div>

      <div id="machines-content">
        <div id="machines-text">
          <p>
            We are sincerely focusing on the “ATMANIBHAR BHARTH” and mainly on
            “ATMANIBHAR KRISHI” which as announced by our Honorable Prime
            minister shri Narendra Modi, which mainly focus on farmers and new
            way to boost agriculture in the country and reduce loss in farming
            and also for MAKE IN INDIA SCHEME. As we know Farming Equipments
            places important role while cultivating any type of crops, but the
            use of this Equipments in agriculture is comparatively less by
            Indian farmers due to high equipment cost and difficulties in
            operating them and so on. So it is very important to manufacture the
            equipment in economical cost and easy to operate with minimum
            variables.
          </p>
        </div>
      </div>

      <div id="end-contact">
        <p>For furthur enquires you can contact us.</p>
        <SolidButton title="Contact" link="/contact" />
      </div>
    </div>
  );
}

export default machinesPage;
