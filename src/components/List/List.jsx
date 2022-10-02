import { ChevronDownIcon } from "@heroicons/react/24/solid";
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
          {/* <select name="type" className="type-dropdown">
            <option value="hotels" disabled selected hidden>Type</option>
            <option value="hotels">Hotels</option>
            <option value="resturants">Resturants</option>
            <option value="attractions">Attractions</option>
          </select> */}
          <div className="select-container">
            <p className="select-header">Type</p>
            <ChevronDownIcon className="select-arrow" />

          </div>
        </form>

      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
