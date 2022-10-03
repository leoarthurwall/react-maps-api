import Dropdown from "./Dropdown/Dropdown";
import "./List.css";

const List = () => {
  return (
    <>
      <div className="list-container">
        <h4 className="list-header">
          Resturants, Hotels & Attractions around you
        </h4>
        <div className="dropdown-container">
          <Dropdown />
          <Dropdown />
        </div>
      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
