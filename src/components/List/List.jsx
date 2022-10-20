import Dropdown from "./Dropdown/Dropdown";
import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, type, setType, rating, setRating, handleRatingClick }) => {


  const typeList = [
    { name: "Hotels", value: "Hotels"  },
    { name: "Restaurants", value: "Restaurants" },
    { name: "Attractions", value: "Attractions" },
  ];
  const ratingList = [
    { name: "All", value: "0" },
    { name: "Above 3.0", value: "3" },
    { name: "Above 3.5", value: "3.5" },
    { name: "Above 4.0", value: "4"  },
    { name: "Above 4.5", value: "4.5"  },
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
            handleRatingClick={handleRatingClick}
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
