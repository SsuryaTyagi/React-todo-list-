import React from "react";

export default function List(data) {

    const buttonClick = (e)=>{
        
    }

  return (
    <div >
      <div className="bg-[#202124] border-1  mt-3 min-h-20  w-[120px] lg:w-[320px] text-white rounded">
        <div className=" w-[120px] lg:w-[320px] font-bold  whitespace-pre-wrap  break-words p-2">
          <h2>{data.title}</h2>
        </div>
        <div className="h-auto  w-[120px] lg:w-[320px]  whitespace-pre-wrap  p-2">
          {data.text}
        </div>
        <div className="flex justify-end gap-1" onClick={(e)=>buttonClick(e)}>
          <div className="bg-red-600 w-10 rounded-4xl align-middle p-2">del.</div>
          <div className="bg-amber-300 w-15 rounded-4xl align-middle p-2">inpor.</div>
        </div>
      </div>
    </div>
  );
}
