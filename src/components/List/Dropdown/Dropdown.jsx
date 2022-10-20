import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ title, listItems, state, setState, handleRatingClick }) => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setState(e.target.getAttribute("value"));
  };

  const handleDropdown = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };
  return (
    <form className="type-form">
      <div className="select-container-wrapper">
        <div className="select-container" onClick={handleDropdown}>
          <p className="select-header-text">{title}</p>
          {isDropdownClicked ? (
            <ChevronUpIcon className="select-arrow" />
          ) : (
            <ChevronDownIcon className="select-arrow" />
          )}
        </div>
        {isDropdownClicked && (
          <div className="select-list-container">
            <ul className="select-list" value={state} onClick={handleClick} handleRatingClick={handleRatingClick}>
              {listItems.map((listItem, index) => {
                return (
                  <ol
                    className="select-list-item"
                    key={index}
                    value={listItem.name}
                  >
                    {listItem.name}
                  </ol>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default Dropdown;
