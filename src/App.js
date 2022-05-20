import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import "./index.css"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      text: "Doctors appointment",
      day: "Feb 15",
      reminder: true,
   },
   { 
     id: 2,
     text: "Meeting at school",
     day: "Feb 3",
     reminder: true,
  },
  { 
     id: 3,
     text: "food shopping",
     day: "March 15",
     reminder: false,
  },
 ])
 const Addtask = (task) => {
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
 }

 const DeleteTask = (id) =>{
   setTasks(tasks.filter((task) => task.id !== id))
}

const ToggleTask = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header tittle='Task Manager' onAddbutton={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={Addtask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleTask}/> : "No task remaining!"}
    </div>
  );
}

export default App;
