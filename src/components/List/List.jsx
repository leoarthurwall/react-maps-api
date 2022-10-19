import Dropdown from "./Dropdown/Dropdown";
import { useState, useEffect, useRef, createRef } from "react";
import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, childClicked, type, setType, rating, setRating }) => {
  //state contains all the references
  const [elementRefs, setElementRefs] = useState([]);

  // this runs everytime the places[] state changes. it makes a new array using the paces.length and then maps over it and returns an element ref or creats a new ref.
  useEffect(() => {
    const refs = Array(places?.length) // array constructor of places.length
      .fill() // fills the array
      .map((_, i) => elementRefs[i] || createRef()); // map over the array. _ neans this paramater isn't needed, only the index in this case. => then return elementRefs[i] or create a ref

    setElementRefs(refs);
  }, [places]);

  console.log({ childClicked });
  console.log({ elementRefs });

  const typeList = [
    { name: "Hotels" },
    { name: "Resturants" },
    { name: "Attractions" },
  ];
  const ratingList = [
    { name: "All" },
    { name: "Above 3.0" },
    { name: "Above 3.5" },
    { name: "Above 4.0" },
    { name: "Above 4.5" },
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
          {places?.map((place, index) => (
            <div className="card-component" key={index}>
              <PlaceDetails
                place={place}
                selected={Number(childClicked) === index}
                refProp={elementRefs[index]}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="list-overlay"></div> */}
    </>
  );
};

export default List;
