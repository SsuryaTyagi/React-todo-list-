import React, { useEffect, useState } from "react";
import List from "../Components/list";
import { MdDeleteForever } from "react-icons/md";

export default function DeletedTask({ delValue, onDel }) {
  const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("deletedTasks")) || [];
    setDeleted(stored);
  }, []);

  const handlePermanentDelete = (task) => {
    const updated = deleted.filter(
      (t) => !(t.title === task.title && t.text === task.text)
    );
    setDeleted(updated);
    localStorage.setItem("deletedTasks", JSON.stringify(updated));
    onDel(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold pl-10 py-4">Deleted Tasks</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:pl-4 pl-10 w-[300px] lg:w-[1670px]">
        {deleted.length > 0 ? (
          deleted.map((task, index) => (
            <div key={index} className="relative bg-gray-100 p-3 rounded shadow">
              <List title={task.title} text={task.text} />
              <button
                onClick={() => handlePermanentDelete(task)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <MdDeleteForever size={22} />
              </button>
            </div>
          ))
        ) : (
          <p className="font-bold">No deleted tasks yet.</p>
        )}
      </div>
    </div>
  );
}
