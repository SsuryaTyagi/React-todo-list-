import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-[#F7F7F7] text-black  font-medium h-screen 
                    w-[80px] lg:w-[300px] border-r border-white flex flex-col gap-1">

      <Link to="/">
        <div className="flex items-center w-[80px] lg:w-[300px] 
                        h-[40px] lg:h-[50px] text-[14px] lg:text-2xl 
                        pl-4 lg:pl-10 hover:bg-[#DCDCDC] rounded-r-full">
          Task
        </div>
      </Link>

      <Link to="/deletedTask">
        <div className="flex items-center w-[80px] lg:w-[300px] 
                        h-[40px] lg:h-[50px] text-[14px] lg:text-2xl 
                        pl-4 lg:pl-10 hover:bg-[#DCDCDC] rounded-r-full">
          Deleted Task
        </div>
      </Link>

      <Link to="/importantTask">
        <div className="flex items-center w-[80px] lg:w-[300px] 
                        h-[40px] lg:h-[50px] text-[14px] lg:text-2xl 
                        pl-4 lg:pl-10 hover:bg-[#DCDCDC]  rounded-r-full">
          Important Task
        </div>
      </Link>

    </div>
  );
}
