import React from "react";
import "../List/List.css";

const PlaceDetails = ({ place }) => {
  console.log("place:", place);
  return (
    <div className="place-container">
      <h3 className="card-header">{place.name}</h3>
      <p>{place.address}</p>
      <p>{place.rating} ({place.num_reviews})</p>
      <p>{place.open_now_text}</p>
      <p>{place.phone}</p>
      <p>{place.price_level}</p>
      <p>{place.web_url}</p>
      <p>{place.website}</p>

      <img className="card-image" src={place.photo ? place.photo.images.small.url : "http://www.resto.be/across/resources/static/site/images/placeholder-detail-resto.jpg"} alt="place" />
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
