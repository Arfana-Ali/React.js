import { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount((c) => c + 1);
  }
  function handleDec() {
    setCount((c) => c - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleAdd}>increment</button>
      <br />
      <button onClick={handleDec}>decrement</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default UseState;
