import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import './Dropdown.css'

const Dropdown = () => {
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const handleDropdown = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };
  return (
    <form className="type-form">
          <div className="select-container-wrapper">
            <div className="select-container" onClick={handleDropdown}>
              <p className="select-header-text">Type</p>
              {isDropdownClicked ? (
                <ChevronUpIcon className="select-arrow" />
              ) : (
                <ChevronDownIcon className="select-arrow" />
              )}
            </div>
            {isDropdownClicked && (
              <div className="select-list-container">
                <ul className="select-list">
                  <ol className="select-list-item">Resturants</ol>
                  <ol className="select-list-item">Hotels</ol>
                  <ol className="select-list-item">Amusements</ol>
                </ul>
              </div>
            )}
          </div>
        </form>
  )
}

export default Dropdown