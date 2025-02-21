import React from "react";

React;
function Child({ handleClick }) {
  console.log("Child Component re-rendered");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default React.memo(Child);
