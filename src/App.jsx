import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Eat breakfast", "Go to gym", "Learn React"]);
  const [add, setAdd] = useState("");

  function addTask() {
   
      setTasks([...tasks, add]);
      setAdd(""); 
    
  }
  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
