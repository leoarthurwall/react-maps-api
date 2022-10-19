import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import "./MapCard.css";

const MapCard = ({ place }) => {
  return (
    <>
      {place.name ? (
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
            <p className="place-rating">({place.num_reviews})</p>
          </div>
          {/* <MapPinIcon className="map-pin-icon"/> */}
        </>
      ) : null}
    </>
  );
};

export default MapCard;
