import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState } from "react";


function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <div className="App">
        <Header isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
        <Map />
      </div>
    </>
  );
}

export default App;
