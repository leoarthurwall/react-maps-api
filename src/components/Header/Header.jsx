import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import './Header.css'
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Travel Advisor</h1>
      <div className="search-container">
        <h3 className="search-title">Expore new Places</h3>
        <form className="input-form">
          <input className="input-box" type="input" placeholder="Search" />
          <MagnifyingGlassIcon className="search-icon"/>
        </form>
      </div>
    </div>
  );
};

export default Header;
