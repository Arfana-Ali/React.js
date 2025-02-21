To give a reference to DOM elements

import { useRef } from "react";
function UseRef() {
  const inputRef = useRef();
  function handleSubmit() {
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Enter Somthing</h1>
      <input ref={inputRef} type="text " placeholder="Enter here" />
      <button onClick={handleSubmit}>focus button</button>
    </div>
  );
}
export default UseRef;
