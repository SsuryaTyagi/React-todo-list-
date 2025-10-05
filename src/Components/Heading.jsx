import React from "react";

export default function Heading(props) {
  return (
    <div>
      <div className={`w-screen absolute z-10  ${ props.color} flex flex-col justify-center items-center gap-4 mt-[7vh]`}>
        <p className="text-6xl font-bold">{props.head1} </p>
        <span className="text-3xl">{props.head2}</span>
        <div className="flex gap-2">
          <button className=" rounded-full w-[120px] text-white  bg-blue-500 border-blue-500 border-1 p-2">
            Learn more
          </button>
          <button className=" rounded-full hover:bg-blue-500 hover:text-white w-[90px] text-blue-500  border-blue-500 border-1 p-2">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
