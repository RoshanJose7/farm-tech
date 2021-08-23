import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import TransparentButton from "../../components/customButton/transparentButton.component";
import CustomCard from "../../components/card/card.component";
import veggies from "../../assets/veggies.jpg";
import shoppingCart from "../../assets/shopping-cart.png";
import farming from "../../assets/farming.jpg";
import fertilizer from "../../assets/veggie-fertilizer.jpg";
import hotelPic from "../../assets/hotel.jpeg";
import machinesPic from "../../assets/machines.jpg";
import slide1Pic from "../../assets/farm-field.jpg";
import slide2Pic from "../../assets/slide-2.jpg";
import slide3Pic from "../../assets/slide-3.jpeg";
import "./homePage.styles.css";

function HomePage() {
  return (
    <div>
      <div id="home">
        <Carousel className="bg-dark">
          <Carousel.Item interval={10000000}>
            <img
              className="img d-block w-100"
              style={{
                backgroundColor: "#1a6c7a",
                opacity: "0.7",
              }}
              src={slide1Pic}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>"JAI JAWAN JAI KISSAN"</h3>
              <h5>WELCOME to Krishi-Tech</h5>
              <h5>
                Farmer are the backbone of our country,our work is to give
                support to farmer in this technology era.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000000000}>
            <img
              className="img d-block w-100"
              style={{
                backgroundColor: "#1a6c7a",
                opacity: "0.7",
              }}
              src={slide2Pic}
              alt="Second slide"
            />

            <Carousel.Caption className="slide-2-caption">
              <h2>Small Farmers - Small Retailers</h2>
              <h2>BIG BUISNESS</h2>
              <h4>To Find more Retailers:</h4>
              <TransparentButton title="Click Here" link="/contact" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000000000}>
            <img
              className="img d-block w-100"
              src={slide3Pic}
              alt="Third slide"
            />
            <Carousel.Caption
              className="slide-3-caption"
              style={{
                color: "black",
              }}
            >
              <h2>One Stop Farm</h2>
              <h2>We Farm, We Deliver, You Relax.</h2>
              <div className="button" id="solid-button">
                <Link to="/consumer">Order Now</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="announcements">
        <div id="announcement-cards">
          <CustomCard
            title="Fruits and Vegetable's updated prices of APMC"
            imgLink={veggies}
            link="/commodities"
          />
          <CustomCard
            title="Sell yours fresh vegetables to us"
            imgLink={shoppingCart}
            link="/services"
          />
          <CustomCard
            title="Get money by giving your dryland for rent"
            imgLink={farming}
            link="/land"
          />
          <CustomCard
            title="Learn about the Damage cause by chemical fertilizers"
            imgLink={fertilizer}
            link="/fertilizer"
          />
          <CustomCard
            title="Learn how you can get Fresh Vegetables for your Restraunts"
            imgLink={hotelPic}
            link="/hotel"
          />
          <CustomCard
            title="Smart and Cost-Effective Machines"
            imgLink={machinesPic}
            link="/machines"
          />
        </div>
        <div id="announcement-content">
          <h3>Amazing Things for You</h3>
          <div className="para">
            <p>
              This website is to give benefits and good services to the
              farmers.Here you can get the updated rate of the vegetable and
              fruits and also he can sell his vegetables and fruits to us.
            </p>
            <p>
              If in case the farmers have a land which is not sutiable for
              farming then please find your solution here.
            </p>
            <div>
              <TransparentButton title="Our History" link="/about" />
            </div>
          </div>
        </div>
      </div>
      <div id="home-contact">
        <div id="home-contact-content" />
        <h1>CONTACT US</h1>
        <p>
          <span>Contact us on +91-7338095085</span>
          <span>mail us on krishitech@gmail.com</span>
        </p>
        <div className="button-holder">
          <TransparentButton title="Contact" link="/contact" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
