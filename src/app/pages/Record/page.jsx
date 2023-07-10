"use client";
import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer/footer";
import { ToastContainer, toast } from "react-toastify";

function records() {
  const [crimeData, setCrimeData] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch("https://justice-index.vercel.app/topCriminals", {
        method: "GET",
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
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container  flex justify-center align-middle bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)]">
        <div className="heading sm:h-full sm:w-[80%] bg-white text-black rounded-xl m-5 ">
          <h1 className="font-semibold text-3xl text-[#A04646] my-4 px-5">
            Records
          </h1>
          <div className="flex flex-wrap justify-evenly items-stretch ">
            {crimeData &&
              crimeData.map((e, index) => (
                <Card data={e} i={index} homePage={false} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default records;
