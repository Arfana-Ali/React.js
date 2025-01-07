import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((ts) => [...ts, newTask]);
      setNewTask("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please Enter a task!");
    }
  }
  function handleRemoveTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function handleUpTheTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleDownTheTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
        {errorMessage && <p className="errormsg">{errorMessage}</p>}
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text"> {task}</span>
            <button
              className="delete-button"
              onClick={() => handleRemoveTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => handleUpTheTask(index)}
            >
              👆
            </button>
            <button
              className="move-button"
              onClick={() => handleDownTheTask(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
