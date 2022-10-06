import React from "react";
import "../List/List.css";
import "./PlaceDetails.css";

const PlaceDetails = ({ place }) => {
  console.log("place:", place);
  return (
    <div className="place-container">
      <div className="place-left">
        <h3 className="card-header">{place.name}</h3>
        <p>{place.address}</p>
        <p>
          {place.rating} ({place.num_reviews})
        </p>
        <p>{place.open_now_text}</p>
        <p>{place.phone}</p>
        <p>{place.price_level}</p>
        <p>{place.web_url}</p>
        <p>{place.website}</p>
      </div>
      <div className="place-right">
        <img
          className="card-image"
          src={
            place.photo
              ? place.photo.images.small.url
              : "http://www.resto.be/across/resources/static/site/images/placeholder-detail-resto.jpg"
          }
          alt="place"
        />
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
