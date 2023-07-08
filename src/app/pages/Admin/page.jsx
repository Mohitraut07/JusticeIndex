"use client"
import React from "react";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({username:'',password:''});
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://justice-index.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(formData),
    }).then((res) => res.json())
    .then((data) => {console.log(data);
      if(data.status ){
        router.push("/pages/Dashboard");
      }})
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <Navbar />
      <div className="bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="login_window bg-slate-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 rounded-md text-black">
          <span className="pb-5 text-2xl font-bold text-white">
            Login to Access Database
          </span>
          <form  method="get" className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => {setFormData({...formData,username:e.target.value}); 

            } }
              required
              className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"
            />
            <input
              type="password"
              name="adminPassword"
              id="password"
              placeholder="Password"
              onChange={(e) => setFormData({...formData,password:e.target.value})}
              required
              className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"
            />
            <button 
            onClick={handleSubmit}
              className="px-4 py-2 border-2 border-gray-900 rounded-md cursor-pointer bg-red-200 hover:bg-red-600 hover:text-white active:bg-red-900"
            >LogIn</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
