import React from "react";
import "./SearchAreaButton.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchAreaButton = () => {
  return (
    <button className="search-area-button">
      <MagnifyingGlassIcon className="search-area-icon"/>
      <p className="search-area-text">Search This Area</p>
    </button>
  );
};

export default SearchAreaButton;
