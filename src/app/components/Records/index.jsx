"use client";
import React, { useRef, useEffect } from "react";
import Card from "../Card";

function Records() {
  const [crimeData, setCrimeData] = React.useState([]);
  
  const [isRender,setIsRender] = React.useState(false);
  useEffect(() => {
    const getData = async () => {
      fetch("https://justice-index.vercel.app/criminals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setCrimeData(data.crimeData);
          } else {
            console.log("error");
          }
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      };
      if(!isRender)
        getData();
      else 
        setIsRender(true);
  }, []);
  return (
    <div className="container overflow-hidden flex justify-center align-middle bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)]">
      <div className="heading h-[900px] w-10/12 bg-white text-black rounded-xl m-5">
        <h1 className="font-semibold text-3xl text-[#A04646] my-4 px-5">
          Records
        </h1>
        <div className="flex flex-wrap justify-evenly items-stretch ">
          {crimeData && crimeData.map((e) => <Card key = {e._id} data={e} />)}
        </div>
      </div>
    </div>
  );
}

export default Records;
