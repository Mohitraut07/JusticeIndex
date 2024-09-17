"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { VerifiedContext } from "@/app/layout";

function Login({ setVerify }) {
  const router = useRouter();
  const [formData, setFormData] = React.useState({ username: "", password: "" });
  const { isVerify, setIsVerify } = useContext(VerifiedContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://justice-index.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setIsVerify(true);
          router.push("/pages/Dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center">
        <div className="login_window bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="pb-5 text-3xl font-bold text-white text-center">
            Login to Access Database
          </h2>
          <form method="get" className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
