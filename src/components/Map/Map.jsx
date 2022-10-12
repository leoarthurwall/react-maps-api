import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
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
      >
        {places?.map((place, i) => (
          <div
            className="marker-container"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <h4 className="place-title-marker">{place.name}</h4>
            <img
              className="place-image-marker"
              src={
                place.photo
                  ? place.photo.images.small.url
                  : "http://www.resto.be/across/resources/static/site/images/placeholder-detail-resto.jpg"
              }
              alt="place"
            />
            <div className="reviews-container-marker">
              <p className="place-rating-bold">{place.rating}</p>
              <StarIcon className="place-rating-icon" />
            </div>
            {/* <MapPinIcon className="map-pin-icon"/> */}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
