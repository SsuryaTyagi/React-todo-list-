import React from "react";
import List from "../Components/list";

export default function DeletedTask({ delValue }) {
  console.log(delValue);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:pl-4 pl-10 w-[300px] lg:w-[1670px]">
        {delValue.length > 0 ? (
          delValue.map((task, index) => (
            <List key={index} title={task.title} text={task.text} />
          ))
        ) : (
          <p className=" font-bold">No deleted tasks yet.</p>
        )}
      </div>
    </div>
  );
}
