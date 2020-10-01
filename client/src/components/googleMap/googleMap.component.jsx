import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => (
  <div>
    <i style={{ color: "red" }} className="fas fa-map-pin"></i>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 12.9716,
      lng: 77.5946,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", margin: "20px 10px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAdq9aUH_8hrQ6W0qaIa_BScv5YBp8cjKE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={12.9716} lng={77.5946} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
