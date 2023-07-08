import React from "react";

const Button = ({ text, func }) => {
  return (
    <>
      <button
        onClick={func}
        className="right-full px-4 my-2 mx-2 text-[#A04646] font-semibold  rounded-lg  w-32 h-10 transition-transform active:scale-95  duration-300"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
