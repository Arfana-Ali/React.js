// Child will not re render on onClick

import { useState, useCallback } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked me!");
  }, []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
export default App;
