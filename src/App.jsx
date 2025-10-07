import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import DeletedTask from "./Pages/DeletedTask";
import Home from "./Pages/Home";
import ImportantTask from "./Pages/ImportantTask";

export default function App() {
  const [deletedTasks, setDeletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("deletedTasks")) || [];
  });
  const [importantTasks, setImportantTasks] = useState([]);

  const handleDel = (updatedDeleted) => {
    setDeletedTasks(updatedDeleted);
    localStorage.setItem("deletedTasks", JSON.stringify(updatedDeleted));
  };

  const handleImportant = (task) => {
    setImportantTasks((prev) => [...prev, task]);
  };

  return (
    <div className="flex">
      <SideBar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onDel={handleDel}
                delValue={deletedTasks}
                onInp={handleImportant}
              />
            }
          />
          <Route
            path="/deletedTask"
            element={<DeletedTask delValue={deletedTasks} onDel={handleDel} />}
          />
          <Route
            path="/importantTask"
            element={<ImportantTask inpValue={importantTasks} />}
          />
        </Routes>
      </div>
    </div>
  );
}
