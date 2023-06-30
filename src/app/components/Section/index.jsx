import React from "react";

function Section() {
  return (
    <>
      <div className="relative">
        <img src="/back1.png" alt="Police image" className="w-full h-96" />
        <div className="absolute overflow-hidden top-0 left-0 bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)] object-cover rounded-t-md  w-full h-full " />
        <div className="absolute top-0 left-0 text flex w-full h-96 items-center">
          <div className="w-1/3"></div>
          <div className="flex items-center">
            <div className=" h-48 w-[2px] top-5 left-1/2 bg-white"></div>
            <div className="ml-10 h-80 top-40 right-20 flex items-center justify-center text-center text-white text-xl">
              Every 24 hr around 2,322 crimes occurs in the city of NewYork .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
