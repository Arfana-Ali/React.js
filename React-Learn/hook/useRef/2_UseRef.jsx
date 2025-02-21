
To store a value without re-rendering the component ("If we need to store a value that does not change when the component re-renders.")

import { useRef, useState } from "react";

function UseRef() {
  const useref = useRef(0);
  const [count, setCount] = useState(0);
  function handleInput() {
    setCount((c) => c + 1);
  }
  function handleRef() {
    useref.current += 1;
    console.log(useref.current);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleInput}>increment state</button>
      <button onClick={handleRef}>increment ref</button>
    </div>
  );
}
export default UseRef;
