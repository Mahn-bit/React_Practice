import React from "react";
import { useCountStore } from "../../store/countStore";

function Count() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  return (
    <>
      <h1>Count</h1>
      <button onClick={decrement}>-</button>
      <h3 style={{ display: "inline-block" }}>{count}</h3>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Count;
