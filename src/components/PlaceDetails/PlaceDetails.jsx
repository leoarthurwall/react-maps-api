import React from "react";
import "../List/List.css";
import "./PlaceDetails.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const PlaceDetails = ({ place }) => {
  console.log("place:", place);

  return (
    <>
      {place.name ? (
        <div className="place-container">
          <div className="place-left">
            <a className="place-url" href={place.website} target="blank">
              <h3 className="place-header">{place.name}</h3>
            </a>
            <div className="place-rating-price-container">
              <p className="place-rating-bold">{place.rating}</p>
              <StarIcon className="place-rating-icon" />
              <p className="place-rating">({place.num_reviews})</p>
              <a className="place-url-icon" href={place.web_url} target="blank">
                <InformationCircleIcon className="place-info-icon" />
              </a>
              <p className="place-rating"> · </p>
              <p className="place-price">{place.price_level}</p>
            </div>
            <p className="place-address">
              {place.parent_display_name} · {place.ranking_category}
            </p>
            <p className="place-phone">{place.phone}</p>
            <p
              className="place-open"
              style={
                place.open_now_text === "Open Now"
                  ? { color: "green" }
                  : place.open_now_text === "Closed Now"
                  ? { color: "red" }
                  : { color: "#717579" }
              }
            >
              {place.open_now_text}
            </p>
          </div>
          <div className="place-right">
            <a className="place-url" href={place.website} target="blank">
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
      ) : null}
    </>
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
