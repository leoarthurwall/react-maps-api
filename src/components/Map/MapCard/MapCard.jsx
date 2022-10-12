import React from "react";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import './MapCard.css'

const MapCard = ({ place }) => {
  return (
    <>
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
    </>
  );
};

export default MapCard;
