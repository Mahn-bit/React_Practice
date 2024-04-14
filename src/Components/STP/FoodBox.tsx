import { useFishStore } from "../../store/foodStore";

function FoodBox() {
  const { fish, addOneFish, removeOnefish, removeAllFish } = useFishStore();
  return (
    <>
      <h2>Food Box</h2>
      <p>Fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>Add One Fish</button>
        <button onClick={removeOnefish}>Remove One Fish</button>
        <button
          onClick={() => {
            removeAllFish();
            useFishStore.persist.clearStorage();
          }}
        >
          Remove All Fish
        </button>
      </div>
    </>
  );
}

export default FoodBox;
