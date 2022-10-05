import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import List from "./components/List/List";
import { getPlacesData } from "./api";

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    console.log(coordinates, bounds)

    getPlacesData().then((data) => {
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
        {isMenuClicked && <List />}
        <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </>
  );
}

export default App;
