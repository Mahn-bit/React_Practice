import React from "react";
import { useBearStore } from "../../store/bearStore";

function BearBox() {
  //distructure State selector
  const { bears, increasePopulation, removeBears } = useBearStore();
  return (
    <>
      <h1>Bear Box</h1>
      <p>Bears: {bears}</p>
      <button onClick={increasePopulation}>Increase Population</button>
      <button onClick={removeBears}>Remove Bear</button>
    </>
  );
}

export default BearBox;
