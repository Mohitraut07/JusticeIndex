"use client";
// import React, { useState } from "react";
// import Button from "../Button";
// import { AiOutlineClose } from "react-icons/ai";

// function CardDescription({ isOpened, data, setIsOpened }) {
//   // const [cardDescription, setcardDescription] = useState(isOpened);
//   console.log(data);
//   return (
//     <>
//       {/* <div className="container py-10 px-20 md:px-40 lg:px-150 mt-8 mb-4 rounded-lg bg-slate-950 bg-opacity-75">
//    <div className="flex flex-col items-center">
//       <div className="text-2xl font-semibold pb-5">
//          Criminal Data
//       </div> */}
//       {isOpened && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 inset-5 text-white">
//           <div className="max-w-xl w-full p-6 rounded-lg bg-slate-950">
//             <div className="text-2xl font-semibold pb-5">Criminal Data</div>
//             <AiOutlineClose
//               className="absolute top-[11%] right-[32%] text-2xl cursor-pointer"
//               onClick={() => setIsOpened(!isOpened)}
//             />

//             <div className="flex flex-col md:flex-row gap-10 py-5">
//               <div className="w-full md:w-1/3">
//                 <div className="font-semibold tāext-lg pb-2">Criminal Details</div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Criminal Name:</span>{" "}
//                   {data?.criminalName}
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Criminal Age:</span> {data?.criminalAge}
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Criminal Gender:</span>{" "}
//                   {data?.criminalGender}
//                 </div>
//               </div>
//               <div className="w-full md:w-1/3">
//                 <div className="font-semibold text-lg pb-2">Crime Details</div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Crime Type:</span>{" "}
//                   {data?.criminalType}
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Location:</span> City:
//                   {data?.crimeReportedTo}
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Date:</span> {data?.date}
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base fon t-semibold">Reported to:</span>{" "}
//                   Police Department
//                 </div>
//               </div>
//               <div className="w-full md:w-1/3">
//                 <div className="font-semibold text-lg pb-2">Victim Details</div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">
//                     Number of Victims:
//                   </span>{" "}
//                   2
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Victim Age:</span> 25
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Victim Gender:</span>{" "}
//                   Female
//                 </div>
//                 <div className="px-4 py-2">
//                   <span className="text-base font-semibold">Murder Flag:</span> No
//                 </div>
//               </div>
//             </div>
//             <div className="w-40 h-40 rounded-full overflow-hidden">
//               <img
//                 src="/person.jpg"
//                 alt="Criminal Photo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CardDescription;

import React, { useState } from "react";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";

function CardDescription({ isOpened, data, setIsOpened }) {
  console.log(data);

  return (
    <>
      {isOpened && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 inset-5 text-white capitalize">
          <div className="max-w-xl w-full p-6 rounded-lg bg-slate-950 md:w-auto md:p-10">
            <div className="text-2xl font-semibold pb-5">Criminal Data</div>
            <AiOutlineClose
              className="absolute top-5 right-5 text-5xl cursor-pointer border-white rounded-full p-1 "
              onClick={() => setIsOpened(!isOpened)}
            />

            <div className="grid gap-10 md:grid-cols-3 py-5">
              <div className="flex flex-col">
                <div className="font-semibold text-lg pb-2">
                  Criminal Details
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">
                    Criminal Name:
                  </span>{" "}
                  {data?.criminalName}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Criminal Age:</span>{" "}
                  30
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">
                    Criminal Gender:
                  </span>{" "}
                  {data?.criminalGender}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-lg pb-2">Crime Details</div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Crime Type:</span>{" "}
                  {data?.crimeType}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Location:</span>{" "}
                  City: {data.location[0]}, Country: {data.location[1]}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Date:</span>{" "}
                  {data?.date}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Reported to:</span>{" "}
                  {data?.crimeReportedTo}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-lg pb-2">Victim Details</div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">
                    Number of Victims:
                  </span>{" "}
                  {data?.victimNumber}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Victim Age:</span>{" "}
                  {data?.victimAge}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">
                    Victim Gender:
                  </span>{" "}
                  {data?.victimGender}
                </div>
                <div className="px-4 py-2">
                  <span className="text-base font-semibold">Murder Flag:</span>{" "}
                  {data?.murderFlag ? <p>true</p> : <p>false</p>}
                </div>
              </div>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Criminal Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardDescription;
