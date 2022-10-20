import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import List from "./components/List/List";
import { getPlacesData } from "./api";

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState(5);

  // sets the current position for google maps api
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   console.log("coordinates:", coordinates, "bounds:", bounds);

  //   getPlacesData(bounds.sw, bounds.ne).then((data) => {
  //     console.log(data);
  //     setPlaces(data);
  //     setFilteredPlaces([])

  
  //   });
  // }, [type, coordinates, bounds]);

  
  // gets the places data from the travel advisor api based on the current bounds - actioned upon button click
  const handleSearchAreaClick = () => {
    console.log("coordinates:", coordinates, "bounds:", bounds);
    console.log("type:", type);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      // setFilteredPlaces([])
    });
  };

  
  // filters through the places and returns the place if it's rating is greater than the selected rating. Updates the filteredplaces state.
  // useEffect(() => {
  //   const filteredPlaces = places.filter((place) => place.rating > rating)

  //   setFilteredPlaces(filteredPlaces)
  // }, [rating])



  const handleRatingClick = () => {
    const filteredPlaces = places.filter((place) => place.rating > rating)

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setFilteredPlaces(filteredPlaces)
      console.log(filteredPlaces)
      console.log("rating clicked")
    });  }
    
 

  return (
    <>
      <div className="App">
        <Header
          handleSearchAreaClick={handleSearchAreaClick}
          isMenuClicked={isMenuClicked}
          setIsMenuClicked={setIsMenuClicked}
        />
        {isMenuClicked && (
          <List
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            places={filteredPlaces.length ? (filteredPlaces) : (places)}
            handleRatingClick={handleRatingClick}
          />
        )}
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? (filteredPlaces) : (places)}
        />
      </div>
    </>
  );
}

export default App;
