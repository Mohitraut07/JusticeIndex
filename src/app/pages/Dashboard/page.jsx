"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { VerifiedContext } from "@/app/layout";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const { isVerify, setIsVerify } = useContext(VerifiedContext);
  const [formData, setFormData] = React.useState({
    criminalName: "",
    criminalAge: "",
    crimeType: "",
    date: "",
    crimeReportedTo: "",
    victimNumber: "",
    victimAge: "",
    murderFlag: "",
    criminalGender: "",
    victimGender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const array = [city, country];
    formData.location = array;

    fetch("https://justice-index.vercel.app/addCriminal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("Data Added Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setFormData({
            criminalName: "",
            criminalAge: "",
            crimeType: "",
            date: "",
            crimeReportedTo: "",
            victimNumber: "",
            victimAge: "",
            murderFlag: "",
            criminalGender: "",
            victimGender: "",
          });
          setCity("");
          setCountry("");
        } else {
          toast.error("Error in adding data", {
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

  if (!isVerify) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-red-600">Access Denied</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-xl">
        <div className="text-center text-3xl font-semibold text-white">
          Add Criminal Incident Data
        </div>
        <form
          method="post"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Criminal Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="heading text-xl font-bold text-white mb-4">
              Criminal Details
            </div>
            <div className="space-y-4">
              <div className="info">
                <label htmlFor="criminalName" className="block text-white">
                  Criminal Name
                </label>
                <input
                  type="text"
                  name="Criminalname"
                  id="criminalName"
                  value={formData.criminalName}
                  onChange={(e) =>
                    setFormData({ ...formData, criminalName: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="criminalAge" className="block text-white">
                  Criminal Age
                </label>
                <input
                  type="number"
                  name="Criminalage"
                  id="criminalAge"
                  value={formData.criminalAge}
                  onChange={(e) =>
                    setFormData({ ...formData, criminalAge: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="criminalGender" className="block text-white">
                  Criminal Gender
                </label>
                <div className="flex items-center space-x-4">
                  <label className="text-white">
                    <input
                      type="radio"
                      name="Gender"
                      value="Male"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          criminalGender: e.target.value,
                        })
                      }
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      name="Gender"
                      value="Female"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          criminalGender: e.target.value,
                        })
                      }
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Crime Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="heading text-xl font-bold text-white mb-4">
              Crime Details
            </div>
            <div className="space-y-4">
              <div className="info">
                <label htmlFor="crimeType" className="block text-white">
                  Crime Type
                </label>
                <input
                  type="text"
                  name="cType"
                  id="crimeType"
                  value={formData.crimeType}
                  onChange={(e) =>
                    setFormData({ ...formData, crimeType: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="location" className="block text-white">
                  Location
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="City"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  placeholder="Country"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="date" className="block text-white">
                  Date
                </label>
                <input
                  type="date"
                  name="Date"
                  id="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="reportedTo" className="block text-white">
                  Reported To
                </label>
                <input
                  type="text"
                  name="Reportedto"
                  id="reportedTo"
                  value={formData.crimeReportedTo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      crimeReportedTo: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Victim Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="heading text-xl font-bold text-white mb-4">
              Victim Details
            </div>
            <div className="space-y-4">
              <div className="info">
                <label htmlFor="victimNumber" className="block text-white">
                  Number of Victims
                </label>
                <input
                  type="number"
                  name="Victimnumber"
                  id="victimNumber"
                  value={formData.victimNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, victimNumber: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="victimAge" className="block text-white">
                  Victim Age
                </label>
                <input
                  type="number"
                  name="Victimage"
                  id="victimAge"
                  value={formData.victimAge}
                  onChange={(e) =>
                    setFormData({ ...formData, victimAge: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="info">
                <label htmlFor="victimGender" className="block text-white">
                  Victim Gender
                </label>
                <div className="flex items-center space-x-4">
                  <label className="text-white">
                    <input
                      type="radio"
                      name="Gender"
                      value="Male"
                      onChange={(e) =>
                        setFormData({ ...formData, victimGender: e.target.value })
                      }
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      name="Gender"
                      value="Female"
                      onChange={(e) =>
                        setFormData({ ...formData, victimGender: e.target.value })
                      }
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="info">
                <label htmlFor="murderFlag" className="block text-white">
                  Murder Flag
                </label>
                <div className="flex items-center space-x-4">
                  <label className="text-white">
                    <input
                      type="radio"
                      name="murder"
                      value="Yes"
                      onChange={(e) =>
                        setFormData({ ...formData, murderFlag: e.target.value })
                      }
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      name="murder"
                      value="No"
                      onChange={(e) =>
                        setFormData({ ...formData, murderFlag: e.target.value })
                      }
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-3 text-center">
            <button
              type="submit"
              className="w-full md:w-1/2 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
            >
              Add Incident
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
