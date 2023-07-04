import React from "react";
// import { AiOutlineLike } from "react-icons/ai";
import Button from "../Button";

function Card({data}) {
  console.log(data);
  return (
    <div>
      <div className="m-10 max-w-xs max-h-96 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="image ">
          <img src="/criminal.jpg" alt="Avatar" class="w-80 h-40" />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-gray-600 font-bold mb-2">
            {
              data.criminalName
            }
            </h2>
          <p className="text-gray-600">{data.crimeType}</p>
        </div>
        <Button text={"View Profile"} />
      </div>
    </div>
  );
}

export default Card;
