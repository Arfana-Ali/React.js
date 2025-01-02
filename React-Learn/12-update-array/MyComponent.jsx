
import { useState } from "react";
function MyComponent() {
  const [foods, setFoods] = useState(["apple", "mango", "banana"]);
  function handleAddFood() {
    const addFood = document.getElementById("addFood").value;
    document.getElementById("addFood").value = "";
    setFoods((f) => [...f, addFood]);
  }
  function handleRemoveFood() {
    const removeFood = document.getElementById("removeFood").value;
    document.getElementById("removeFood").value = "";
    const foodAfterRemove = foods.filter((ele) => ele !== removeFood);
    setFoods(foodAfterRemove);
  }
  function handleRemoveItem(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>Hello In our Restaurent</h1>
      <h2>Food Item List</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveItem(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="addFood" placeholder="Enter Food Item" />
      <button onClick={handleAddFood}>Add Food</button>
      <br />
      <input type="text" id="removeFood" placeholder="Remove Food Item" />
      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  );
}
export default MyComponent;
