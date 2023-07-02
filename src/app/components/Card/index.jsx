import React from "react";
// import { AiOutlineLike } from "react-icons/ai";
import Button from "../Button";

function Card() {
  return (
    <div>
      <div class="m-10 max-w-xs max-h-96 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="image ">
          <img src="/criminal.jpg" alt="Avatar" class="w-80 h-40" />
        </div>
        <div class="p-4">
          <h2 class="text-xl text-gray-600 font-bold mb-2">John Doe</h2>
          <p class="text-gray-600">Architect & Engineer</p>
        </div>
        <Button text={"View Profile"} />
      </div>
    </div>
  );
}

export default Card;
