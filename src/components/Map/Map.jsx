import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import MapCard from "./MapCard/MapCard";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
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
        onClick={(child) => {
        setChildClicked(child)}}
        //    onChildMouseEnter={this.onChildMouseEnter}
        //    onChildMouseLeave={this.onChildMouseLeave}
      >
        {places?.map((place, index) => (
          <div
            className="marker-container"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            <MapCard place={place} />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
