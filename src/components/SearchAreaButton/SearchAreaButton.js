import React from "react";
import "./SearchAreaButton.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchAreaButton = () => {
  return (
    <button>
      <MagnifyingGlassIcon />
      <p>Search This Area...</p>
    </button>
  );
};

export default SearchAreaButton;
