import React from "react";
import "./List.css";

const List = () => {
  return (
    <>
      <div className="list-container">
        <h4 className="list-header">
          Resturants, Hotels & Attractions around you
        </h4>
        <form className="type-form">
          <select name="type" className="type-dropdown">
            <option value="hotels" disabled selected hidden>Type</option>
            <option value="hotels">Hotels</option>
            <option value="resturants">Resturants</option>
            <option value="attractions">Attractions</option>
          </select>
        </form>
      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
