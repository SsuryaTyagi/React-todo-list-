import React, { useRef } from "react";
import { GiAssassinPocket } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";

export default function List(props) {

    const buttonClick = (e)=>{
    
      if (e.target.id ==="del") {
        // console.log(delRef.current)  
             props.onDel({
        title: props.title,
        text: props.text
      });
      }
      if (e.target.id === "inp") {
        // console.log("inp")
        props.onInp(
          { title: props.title,
         text: props.text}
        )
      }
    }

  return (
    <div >
     <div className={`bg-white border  border-gray-200 shadow-lg shadow-gray-300/50 mt-3 min-h-20 w-[120px] lg:w-[320px] text-black rounded-2xl transition-all duration-200 hover:shadow-xl`}>
        <div className=" w-[120px] lg:w-[320px] font-bold  whitespace-pre-wrap  break-words p-2">
          <h2>{props.title}</h2>
        </div>
        <div className="h-auto  w-[120px] lg:w-[320px]  whitespace-pre-wrap  p-2">
          {props.text}
        </div>
        <div className="flex justify-end gap-1" onClick={buttonClick}>
          <div  className=" cursor-pointer w-15 rounded-4xl align-middle p-2"><MdOutlineDelete id="del" fontSize={30} /></div>
          <div  className=" cursor-pointer w-15 rounded-4xl align-middle p-2"><GiAssassinPocket id="inp" fontSize={30} /></div>
        </div>
      </div>
    </div>
  );
}
