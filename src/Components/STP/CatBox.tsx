import { useEffect, useState } from "react";
import { useCatStore } from "../../store/catStore";
import { useFishStore } from "../../store/foodStore";

function CatBox() {
  //Single State selector
  const cats = useCatStore((state) => state.cats);
  const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);
  const increaseBigCats = useCatStore((state) => state.increaseBigcats);
  const fish = useFishStore((state) => state.fish);

  // const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink">(
  //   "lightpink"
  // );

  useEffect(() => {
    const unsub = useFishStore.subscribe((state, prevState) => {
      console.log(state, prevState);
    });
    return unsub;
  }, []);
  return (
    <div>
      <h1>CatBox</h1>
      <p>{Math.random()}</p>
      <p>Small Cat: {cats.smallCats}</p>
      <p>Big Cat: {cats.bigCats}</p>
      <button onClick={increaseSmallCats}>Increase Small Cat</button>
      <button onClick={increaseBigCats}>Incease Big Cat</button>
    </div>
  );
}

export default CatBox;
