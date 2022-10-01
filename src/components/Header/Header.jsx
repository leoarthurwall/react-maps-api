import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import "./Header.css";
import List from "../List/List";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="header-container">
      <div className="menu-title-container">
        {isClicked ? (
          <div className="list-menu-wrapper">
            <XMarkIcon onClick={handleClick} className="menu-icon" />
            <List />
          </div>
        ) : (
          <Bars3Icon onClick={handleClick} className="menu-icon" />
        )}

        <h1 className="header-title">Travel Advisor</h1>
      </div>
      <div className="search-container">
        <h3 className="search-title">Expore new Places</h3>
        <form className="input-form">
          <input className="input-box" type="input" placeholder="Search" />
          <MagnifyingGlassIcon className="search-icon" />
        </form>
      </div>
    </div>
  );
};

export default Header;
