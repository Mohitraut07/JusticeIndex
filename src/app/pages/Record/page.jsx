"use client";
import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar/navbar";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer/footer";

function records() {
  const [crimeData, setCrimeData] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch("http://localhost:5000/criminals", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setCrimeData(data.crimeData);
          }
          // console.log(data);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container  flex justify-center align-middle bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)]">
        <div className="heading h-[900px] w-10/12 bg-white text-black rounded-xl m-5">
          <h1 className="font-semibold text-3xl text-[#A04646] my-4 px-5">
            Records
          </h1>
          <div className="flex flex-wrap justify-evenly items-stretch ">
           

            {
              crimeData && crimeData.map((e)=><Card data ={e} />) 
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default records;
