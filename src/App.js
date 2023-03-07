import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import { VisivilityControl } from "./components/VisivilityControl";

function App() {
  const [taskItems, setTaskItem] = useState([]);
  const [showComple, setShowComple] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItem([...taskItems, { name: taskName, done: false }]);
    }
  }

  function cleanTask() {
    setTaskItem(taskItems.filter((task) => !task.done));
    setShowComple(false);
  }

  function toggleTask(task) {
    setTaskItem(
      // { ...t, done: !t.done } -< lo clonas y la propiedaad done la pones en su contrario
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <div class="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable task={taskItems} toggleTask={toggleTask} />
        <VisivilityControl
          isCheked={setShowComple}
          setShowComple={(checled) => setShowComple(checled)}
          cleanTask={cleanTask}
        />
        {showComple === true && (
          <TaskTable
            task={taskItems}
            toggleTask={toggleTask}
            showCompleted={showComple}
          />
        )}
      </div>
    </main>
  );
}

export default App