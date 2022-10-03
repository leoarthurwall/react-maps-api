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

  console.log('type:', type)
  console.log('rating:', rating)
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
      </div>
      <div className="list-overlay"></div>
    </>
  );
};

export default List;
