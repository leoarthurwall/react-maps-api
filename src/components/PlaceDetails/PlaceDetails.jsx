import React from "react";
import "../List/List.css";

const PlaceDetails = ({place}) => {
  return (
        <h3 className="card-header">{place.name}</h3>
  );
};

export default PlaceDetails;
