import CreateArea from "./Components/CreateArea";
// import Task from "./Components/Task";
import "./style.css";
import TaskContext from "./Context/TaskContext";
import Tasks from "./Components/Tasks";
import { useContext } from "react";

function App() {
  const ctx = useContext(TaskContext);
  return (
    <div className="App">
      <header>
        <h1>Keeper App</h1>
      </header>
      <div className="detail">
        <CreateArea onAdd={ctx.addtaskhandler} />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
