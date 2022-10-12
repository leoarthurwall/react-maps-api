import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  return (
    <div className="map-container">
      <GoogleMapReact
      className="map-google"
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
          //  margin={[50, 50, 50, 50]}
        //    options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //    onChildClick={''}
        //    onChildMouseEnter={this.onChildMouseEnter}
        //    onChildMouseLeave={this.onChildMouseLeave}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
