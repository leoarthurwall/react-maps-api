import React from "react";
import "../List/List.css";
import "./PlaceDetails.css";
import { StarIcon } from "@heroicons/react/24/solid";

const PlaceDetails = ({ place }) => {
  console.log("place:", place);
  return (
    <div className="place-container">
      <div className="place-left">
        <a className="place-url" href={place.web_url} target="blank">
          <h3 className="place-header">{place.name}</h3>
        </a>
        <div className="place-rating-price-container">
          <p className="place-rating-bold">{place.rating}</p>
          <StarIcon className="place-rating-icon" />
          <p className="place-rating">({place.num_reviews})</p>
          <p className="place-rating"> · </p>
          <p className="place-price">{place.price_level}</p>
        </div>
        <p className="place-address">
          {place.parent_display_name} · {place.ranking_category}
        </p>

        <p className="place-open">{place.open_now_text}</p>
        <p className="place-phone">{place.phone}</p>
        <a className="place-url" href={place.web_url} target="blank">
          <p className="place-web">Website</p>
        </a>
        <a className="place-url" href={place.website} target="blank">
        <p className="place-tripadv">Trip Advisor</p>
      </a>
      </div>
      <div className="place-right">
        <a className="place-url" href={place.web_url} target="blank">
          <img
            className="place-image"
            src={
              place.photo
                ? place.photo.images.small.url
                : "http://www.resto.be/across/resources/static/site/images/placeholder-detail-resto.jpg"
            }
            alt="place"
          />
        </a>
      </div>
    </div>
  );
};

export default PlaceDetails;

/*
Inclide in the card
- Title DONE
- Rating (score and number of reviews) DONE
- Price range DONE
- type (resturant, takeaway)
- open/closed
- image
- website 
- tripadvisor
*/
