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
  // const [bounds, setBounds] = useState(null); //original state, doesn't work - possible because wifi conmnection is so slow

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log("coordinates:", coordinates, "bounds:", bounds);

    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <div className="App">
        <Header
          isMenuClicked={isMenuClicked}
          setIsMenuClicked={setIsMenuClicked}
        />
        {isMenuClicked && <List places={places} />}
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
