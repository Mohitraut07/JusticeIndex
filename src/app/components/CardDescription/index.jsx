import React from "react";
import Button from "../Button";

function CardDescription() {
  return (
    <>
    <div class="container py-10 px-20 md:px-40 lg:px-150 mt-8 mb-4 rounded-lg bg-slate-950 bg-opacity-75">
   <div class="flex flex-col items-center">
      <div class="text-2xl font-semibold pb-5">
         Criminal Data
      </div>
      <div class="flex flex-col md:flex-row gap-10 py-5">
         <div class="w-full md:w-1/3">
            <div class="font-semibold text-lg pb-2">
               Criminal Details
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Criminal Name:</span> John Doe
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Criminal Age:</span> 30
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Criminal Gender:</span> Male
            </div>
         </div>
         <div class="w-full md:w-1/3">
            <div class="font-semibold text-lg pb-2">
               Crime Details
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Crime Type:</span> Robbery
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Location:</span> City: New York, Country: USA
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Date:</span> 2023-06-30
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Reported to:</span> Police Department
            </div>
         </div>
         <div class="w-full md:w-1/3">
            <div class="font-semibold text-lg pb-2">
               Victim Details
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Number of Victims:</span> 2
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Victim Age:</span> 25
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Victim Gender:</span> Female
            </div>
            <div class="px-4 py-2">
               <span class="text-base font-semibold">Murder Flag:</span> No
            </div>
         </div>
      </div>
      <div class="w-40 h-40 rounded-full overflow-hidden">
         <img src="/person.jpg" alt="Criminal Photo" class="w-full h-full object-cover"/>
      </div>
   </div>
</div>

    </>
  );
}

export default CardDescription;
