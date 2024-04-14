import { shallow } from "zustand/shallow";
import { useCatStore } from "../../store/catStore";

function CatControler() {
  //Single State selector

  const { increaseSmallCats, increaseBigCats } = useCatStore(
    (state) => ({
      increaseSmallCats: state.increaseSmallCats,
      increaseBigCats: state.increaseBigcats,
    }),
    shallow
  );

  return (
    <>
      <h1>CatBox</h1>
      {/* <p>Small Cat: {cats.smallCats}</p>
      <p>Big Cat: {cats.bigCats}</p> */}

      <p>{Math.random()}</p>
      <button onClick={increaseSmallCats}>Increase Small Cat</button>
      <button onClick={increaseBigCats}>Incease Big Cat</button>
    </>
  );
}

export default CatControler;
