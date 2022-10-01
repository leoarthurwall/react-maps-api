import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useState } from "react";
import List from "./components/List/List";


function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
