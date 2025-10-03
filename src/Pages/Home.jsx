import React, { useEffect, useRef, useState } from "react";
import SideBar from "../Components/SideBar";
import List from "../Components/list";

export default function Home() {
  const inputRef = useRef();
  const textRef = useRef();
  const [show, setShow] = useState(true);
  const [task, setTask] = useState([]);

  const handleClick = (e) => {
    console.log(e.target.tagName);
    if (e.target.id === "button" || e.target.id ==="box_1" ) {
      console.log(inputRef.value);
      const value = inputRef.current.value.trim();
      const value2= textRef.current.value.trim();
      console.log(value2)
      setShow(true);
      if (value === "" && value2 ==="") return;

      const updatedTasks = [...task,{title:value, text:value2}];
      setTask(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ updated state save

      // console.log(task);
      inputRef.current.value="";
      textRef.current.value="";
    }
    if (e.target.tagName === "INPUT") {
      setShow(false);
      localStorage.clear();
    }
    
  };

  useEffect(() =>{
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(savedTasks);
  }, []);
  console.log(task);

    // const moveTask = (index, type) => {
    //   const deletedTask = task.splice(index ,1)||[];
    //   localStorage.JSON.parse(localStorage.getItem("deletedTask"))

    // }
  return (
    <>
      <div className="bg-gray-900 h-scregen  w-screen overflow-hidden flex">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col ">
          <div
          id="box_1"
            onClick={(e) => handleClick(e)}
            className="text-white bg-black flex justify-center py-10 h-[50px] md:h-[100px] lg:h-[150px] w-[1650px] relative z-10"
          >
            <div
              className={` bg-amber-300 border-1  shadow-md shadow-gray-400 ${
                show ? "h-[32px] lg:h-[52px]" : "h-[110px] lg:h-[226px]"
              }`}
            >
              <input
                ref={inputRef}
                className="  bg-[#202124] outline-none text-white w-[200px] lg:w-[516px] placeholder:text-[#fff9] placeholder:font-bold pl-5 h-[30px] lg:h-[50px] "
                placeholder="Title"
                type="text"
              />
              <div
                id="input_box2"
                className={`bg-[#202124] relative  ${
                  show ? "hidden" : "block"
                } `}
              >
                <textarea
                  name=""
                  ref={textRef}
                  rows={7}
                  cols={66}
                  // cols={20}
                  placeholder="Take a note..."
                  className="placeholder:text-[#fff9] pl-4 outline-none text-white"
                ></textarea>
                <button
                  id="button"
                  className="font-bold px-3 py-1 rounded absolute bottom-0 right-0 h-[48px]"
                >
                  Add task
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:pl-4 pl-10 w-[300px] lg:w-[1670px]">
            {task.map((data, index) => {  
              return <List {...data} key={index}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
}
