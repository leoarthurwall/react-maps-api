import React from "react";
import "./SearchAreaButton.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchAreaButton = ({handleSearchAreaClick}) => {
  return (
    <button className="search-area-button" onClick={handleSearchAreaClick}>
      <MagnifyingGlassIcon className="search-area-icon"/>
      <p className="search-area-text">Search This Area</p>
    </button>
  );
};

export default SearchAreaButton;
