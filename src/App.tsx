import React from "react";
import CatBox from "./Components/STP/CatBox";
import CatControler from "./Components/STP/CatControler";
import FoodBox from "./Components/STP/FoodBox";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <h2>Zustand</h2>
      <div>
        <CatBox />
      </div>
      <div>
        <CatControler />
      </div>
      <div>
        <FoodBox />
      </div>
    </div>
  );
}

export default App;
