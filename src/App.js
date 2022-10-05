import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import List from "./components/List/List";
import { getPlacesData } from './api'


function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  

  useEffect(() => {
    getPlacesData();
  }, [])
  return (
    <>
      <div className="App">
        <Header isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
        { isMenuClicked && ( <List /> )}
        {/* <Map /> */}
      </div>
    </>
  );
}

export default App;
