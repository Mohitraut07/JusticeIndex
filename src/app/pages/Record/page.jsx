"use client";
import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styling for the toast

function Records() {
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
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[30vh] bg-cover bg-center bg-[url('/path-to-your-background-image.jpg')] flex justify-center items-center">
        <h1 className="text-5xl text-white font-bold drop-shadow-lg">
          Crime Records
        </h1>
      </div>

      {/* Records Section */}
      <div className="container mx-auto py-10">
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6">
          <h2 className="text-3xl text-center text-gray-800 font-semibold mb-8">
            Top Criminal Records
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {crimeData.length > 0 ? (
              crimeData.map((e, index) => (
                <Card key={index} data={e} i={index} homePage={false} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No records found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Records;
