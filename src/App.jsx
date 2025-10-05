import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import DeletedTask from "./Pages/DeletedTask";
import ImportantTask from "./Pages/ImportantTask";
import Home from "./Pages/Home";

export default function App() {
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [inportantTasks, setInportantTasks] = useState([]);


  const handleDel = (task) => {
    setDeletedTasks((prev) => [...prev, task]);
  };
  console.log(deletedTasks);
  const handelInp =(task)=>{
    setInportantTasks((prev)=>[...prev,task])
  };

  return (
    <div className="flex"> 
      <SideBar />          
      
      <div className="  ">
        {/* ✅ Main content area */}
        <Routes>
          <Route path="/" element={<Home onDel={handleDel} delValue={deletedTasks} onInp={handelInp} />} />
          <Route path="/deletedTask" element={<DeletedTask delValue={deletedTasks} />} />
          <Route path="/importantTask" element={<ImportantTask  inpValue={inportantTasks}/>} />
        </Routes>
      </div>
    </div>
  );
}
