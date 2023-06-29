import React from "react";

function Section() {
  return (
    <>
      <div className="relative">
        <img src="/back1.png" alt="Police image" className="w-full h-96"/>
        <div className="absolute overflow-hidden top-0 left-0 bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)] object-cover rounded-t-md  w-full h-full " />

        <div className="absolute h-80 w-[2px] top-5 left-1/2 bg-white"></div>
        <div className="text absolute h-80 top-40 right-20 text-white text-xl">Every 24 hr around 2,322 crimes occurs in the city of NewYork .</div>
      </div>
    </>
  );
}

export default Section;
