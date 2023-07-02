import React from 'react';
import Card from '../Card';

function Records() {
  return (
    <div className="container overflow-hidden flex justify-center align-middle bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)]">
        <div className="heading h-[900px] w-10/12 bg-white text-black rounded-xl m-5">
          <h1 className="font-semibold text-3xl text-[#A04646] my-4 px-5">
            Records
          </h1>
          <div className="flex flex-wrap justify-evenly items-stretch ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
  )
}

export default Records