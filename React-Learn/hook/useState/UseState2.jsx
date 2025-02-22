import { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <br />
      <button onClick={() => setCount((c) => c - 1)}>decrement</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default UseState;
