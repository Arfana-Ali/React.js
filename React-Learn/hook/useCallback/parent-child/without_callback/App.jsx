// child will re render on onClick
import { useState } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Clicked me!");
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
export default App;


