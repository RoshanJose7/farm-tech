import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./gTranslate";
import "./index.css";
import "./responsive.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = lazy(() => import("./pages/homePage/homePage.pages"));
const NavBar = lazy(() => import("./components/navBar/navBar.component"));
const AboutPage = lazy(() => import("./pages/aboutPage/aboutPage.pages"));
const HotelPage = lazy(() => import("./pages/hotelPage/hotelPage.pages"));
const ContactPage = lazy(() => import("./pages/contactPage/contactPage.pages"));
const ServicesPage = lazy(
  () => import("./pages/servicesPage/servicesPage.pages")
);
const CommoditiesPage = lazy(
  () => import("./pages/commoditiesPage/commodities.pages")
);
const LandPage = lazy(() => import("./pages/landPage/landPage.pages"));
const FertilizerPage = lazy(
  () => import("./pages/FertilizerPage/FertilizerPage.pages")
);
const ConsumerPage = lazy(() => import("./pages/consumerPage/Consumer.Pages"));
const MachinesPage = lazy(
  () => import("./pages/machinesPage/machinesPage.pages")
);
const Footer = lazy(() => import("./components/footer/footer.component"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>
        <div id="google_translate_element"></div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/commodities" component={CommoditiesPage} />
            <Route path="/land" component={LandPage} />
            <Route path="/hotel" component={HotelPage} />
            <Route path="/fertilizer" component={FertilizerPage} />
            <Route path="/consumer" component={ConsumerPage} />
            <Route path="/machines" component={MachinesPage} />
            <Route path="/*" component={CommoditiesPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
