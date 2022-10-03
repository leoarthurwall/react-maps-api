import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ title, listItems, state, setState }) => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [type, setType] = useState('Resturants')


  const handleClick = (e) => {
    e.preventDefault()
    setType(e.target.getAttribute('value'))
    console.log('e.t', e.target.getAttribute('value'))
    console.log('type',type)
  }

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
            <ul className="select-list" value={type} onClick={handleClick}>
              {listItems.map((listItem, index) => {
                console.log('listItem', listItem)
                return <ol className="select-list-item" key={index} value={listItem.name}>{listItem.name}</ol>;
              })}
            </ul>
          </div>
        )}x
      </div>
    </form>
  );
};

export default Dropdown;
