import React from "react";
import Button from "../Button";
import CardDescription from "../CardDescription";

function Card({data}) {
  console.log(data);
  const [isOpened, setIsOpened] = React.useState(false);

  
  return (
    <div>
      {isOpened ? <CardDescription isOpened={isOpened} data={data} setIsOpened={setIsOpened}/>:null}
      <div className="m-10 max-w-xs max-h-96 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="image ">
          <img src="/logo.jpg" alt="Avatar" className="w-80 h-40 object-contain" />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-gray-600 font-bold mb-2 truncate">
            {
              data.criminalName
            }
            </h2>
          <p className="text-gray-600">{data.crimeType}</p>
        </div>
        <Button text={"View Profile"} func={()=>setIsOpened(true)} />
      </div>
    </div>
  );
}

export default Card;
