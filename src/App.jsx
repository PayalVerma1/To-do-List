import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Eat breakfast", "Go to gym", "Learn React"]);
  const [add, setAdd] = useState("");

  function addTask() {
    if (add.trim()) {
      setTasks([...tasks, add]);
      setAdd("");
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-red-300 h-screen w-screen flex flex-col items-center p-32">
      <h1 className="text-4xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-3">
        <input
          type="text"
          placeholder="Enter the task"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          className="px-10 py-2"
        />
        <button
          onClick={addTask}
          className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Task
        </button>
      </div>
      <ol className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-10 py-2 bg-white rounded shadow"
          >
            {task}
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-700 px-8 "
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
