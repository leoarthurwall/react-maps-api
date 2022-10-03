import Dropdown from "./Dropdown/Dropdown";
import "./List.css";

const List = () => {
  const typeList = ["Hotels", "Resturants", "Attractions"];
  const ratingList = ["3 Stars or less", "3.5 Stars", "4 Stars", "4.5 Stars"];
  return (
    <>
      <div className="list-container">
        <h4 className="list-header">
          Resturants, Hotels & Attractions around you
        </h4>
        <div className="dropdown-container">
          <Dropdown title={"Type"} listItems={typeList} />
          <Dropdown title={"Rating"} listItems={ratingList} />
        </div>
      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
