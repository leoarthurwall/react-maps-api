import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SearchAreaButton from "../SearchAreaButton/SearchAreaButton";
import "./Header.css";


const Header = ({isMenuClicked, setIsMenuClicked}) => {

  const handleClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header-container">
      <div className="menu-title-container">
        {isMenuClicked ? (
          <XMarkIcon onClick={handleClick} className="menu-icon" />
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
      <SearchAreaButton />
    </div>
  );
};

export default Header;
