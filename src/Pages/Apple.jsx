import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Heading from "../Components/Heading";

export default function Apple() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { Name: "Store" },
    { Name: "Mac" },
    { Name: "iPad" },
    { Name: "iPhone" },
    { Name: "Watch" },
    { Name: "AirPods" },
    { Name: "TV & Home" },
    { Name: "Entertainment" },
    { Name: "Accessories" },
    { Name: "Support" },
  ];
  const imag = [
    { image: "/promo_iphone_17__bhofuohbsu3m_medium_2x.jpg" },
    { image: "/promo_airpodspro_3__f6xmza7bglei_medium_2x.jpg" },
    { image: "/promo_apple_watch_se_3__fz5y29qx5mmy_medium_2x.jpg" },
    { image: "/promo_apple_watch_ultra3__bwvslhbxx99e_medium_2x.jpg" },
    // {image:"public/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"},
  ];
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden ">
        {/* Navbar */}
        <div className="fixed top-0 w-screen h-16 flex justify-center backdrop-blur-sm bg-white/20 z-50">
          <div className=" h-full w-[110vh] bg-transparent flex justify-between items-center ">
            <FaApple fontSize={20} />
            {nav.map((data, index) => {
              return <dir key={index}> {data.Name}</dir>;
            })}
          </div>
        </div>
        <div className="h-[700px] w-screen  relative top-10 flex flex-col justify-center ">
          <video
            autoPlay
            muted
            src="/medium_2x.mp4"
            className="w-full h-full  object-contain "
          ></video>
          <div className=" absolute bg-transparent z-0 left-[30%] bottom-[10%] flex justify-center items-center gap-3 flex-col ">
            <h1 className="text-6xl font-bold">Gifts full of joy.</h1>
            <p className=" text-3xl text-center">
              Enjoy up to $1000 instant cashback on your favourite products{" "}
              <br /> plus up to 12 months of No Cost EMI. with eligible cards.
            </p>
            <button className=" rounded-full w-[90px] text-blue-500 font-bold border-blue-500 border-1 p-2">
              Shop
            </button>
          </div>
        </div>
        <div className="  relative z-20 w-screen h-[800px] bg-black flex flex-col justify-start items-start overflow-y-hidden">
          <Heading
            head1={"iPhone 17 Pro"}
            color={"text-white"}
            head2={"All out Pro."}
          />
          <div className=" absolute bottom-0 z-2">
            <img
              src="/hero_iphone_17_pro__bknyzxfk2agi_mediumtall_2x.jpg"
              alt=""
              className=" object-cover h-full w-[1800px]"
            />
          </div>
        </div>
        <div className="h-[700px] w-screen bg-amber-200 overflow-y-hidden relative mt-3  ">
          <Heading
            head1={"iPhone Air"}
            color={"text-black"}
            head2={"The thinnest iPPhone ever. With the power of pro inside."}
          />
          <img
            src="hero_iphone_air__0gxyavihpiqu_mediumtall_2x.jpg"
            alt=""
            className=" object-center absolute -top-65"
          />
        </div>
        <div className=" grid grid-rows-2 grid-cols-2">
          {imag.map((data, index) => {
            return (
              <div key={index}>
                
                <img
                  src={data.image}
                  alt=""
                  className=" h-[600px] w-[940px] mt-3 mr-3 ml-3"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
