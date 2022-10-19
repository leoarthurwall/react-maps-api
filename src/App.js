import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import List from "./components/List/List";
import { getPlacesData } from "./api";

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState(5);

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
  //   });
  // }, [type, coordinates, bounds]);

  const handleSearchAreaClick = () => {
    console.log("coordinates:", coordinates, "bounds:", bounds);
    console.log("type:", type);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  };

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
            places={places}
          />
        )}
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
        />
      </div>
    </>
  );
}

export default App;
