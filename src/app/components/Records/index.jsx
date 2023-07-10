"use client";
import React, { useRef, useEffect } from "react";
import Card from "../Card";
import { ToastContainer, toast } from "react-toastify";

function Records() {
  const [crimeData, setCrimeData] = React.useState([]);

  const [isRender, setIsRender] = React.useState(false);
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
            toast.error("Error in fetching data", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        })
        .catch((err) => {
          toast.error("Server Error", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    };
    if (!isRender) getData();
    else setIsRender(true);
  }, []);
  return (
    <div className="container flex justify-center align-middle bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)]">
      <div className="heading  sm:h-full sm:w-[80%]  bg-white text-black rounded-xl m-5">
        <h1 className="font-semibold text-3xl text-[#A04646] my-4 px-2">
          Records
        </h1>
        <div className="flex flex-wrap justify-evenly items-stretch ">
          {crimeData && crimeData.map((e) => <Card key={e._id} data={e} />)}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Records;
