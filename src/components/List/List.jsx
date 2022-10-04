import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import "./List.css";

const List = () => {
  const [type, setType] = useState("Resturants");
  const [rating, setRating] = useState(5);

  const typeList = [
    { name: "Hotels" },
    { name: "Resturants" },
    { name: "Attractions" },
  ];
  const ratingList = [
    { name: "All" },
    { name: "about 3.0" },
    { name: "about 3.5" },
    { name: "about 4.0" },
    { name: "about 4.5" },
  ];

  const Places = [
    { name: "Place 1" },
    { name: "Place 2" },
    { name: "Place 3" },
    { name: "Place 4" },
    { name: "Place 5" },
  ];

  console.log("type:", type);
  console.log("rating:", rating);
  return (
    <>
      <div className="list-container">
        <h4 className="list-header">
          Resturants, Hotels & Attractions around you
        </h4>
        <div className="dropdown-container">
          <Dropdown
            title={"Type"}
            listItems={typeList}
            state={type}
            setState={setType}
          />

          <Dropdown
            title={"Rating"}
            listItems={ratingList}
            state={rating}
            setState={setRating}
          />
        </div>
        <div className="card-section-container">
          {Places?.map((place, index) => (
            <div className="card-component">
              <h3 className="card-header">{place.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
