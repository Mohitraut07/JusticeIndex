import React from 'react'

function Dashboard() {
  return (

<div className="bg-cover bg-center bg-fixed bg-no-repeat" >
 
   <div className="container py-10 px-20 md:px-40 lg:px-150 mt-8 mb-4 rounded-lg bg-slate-950 bg-opacity-75 flex flex-col items-center">
      <div className="addData text-2xl font-semibold pb-5">
         Add Data
      </div>
      <form action="" method="post" className="flex flex-col items-center gap-5">
         <div className="detailContainer flex flex-col md:flex-row gap-10 py-5">
            <div className="Details flex flex-col items-center gap-6">
               <div className="heading font-semibold text-lg">
                  Criminal Details
               </div>
               <div className="info flex flex-col items-center">
                  <label for="criminalName" className="text-base font-semibold">Criminal Name</label>
                  <input type="text" name="Criminalname" id="criminalName" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="criminalAge" className="text-base font-semibold">Criminal Age</label>
                  <input type="number" name="Criminalage" id="criminalAge" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="criminalGender" className="text-base font-semibold">Criminal Gender</label>
                  <div className="flex">
                     <input type="radio" name="Gender" id="criminalGenderM" required className="mr-1"/>
                     <label for="criminalGenderM" className="text-base font-normal">Male</label>
                     <input type="radio" name="Gender" id="criminalGenderF" className="ml-4"/>
                     <label for="criminalGenderF" className="text-base font-normal">Female</label>
                  </div>
               </div>
            </div>
            <div className="Details flex flex-col items-center gap-6">
               <div className="heading font-semibold text-lg">
                  Crime Details
               </div>
               <div className="info flex flex-col items-center">
                  <label for="type" className="text-base font-semibold">Crime Type</label>
                  <input type="text" name="cType" id="type" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="location" className="text-base font-semibold">Location</label>
                  <input type="text" name="city" id="city" required placeholder="City" className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
                  <input type="text" name="country" id="country" required placeholder="Country" className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none mt-2"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="date" className="text-base font-semibold">Date</label>
                  <input type="date" name="Date" id="date" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="reportedTo" className="text-base font-semibold">Reported to</label>
                  <input type="text" name="Reportedto" id="reportedTo" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
            </div>
            <div className="Details flex flex-col items-center gap-6">
               <div className="heading font-semibold text-lg">
                  Victim Details
               </div>
               <div className="info flex flex-col items-center">
                  <label for="victimNumber" className="text-base font-semibold">Number of Victims</label>
                  <input type="number" name="Victimnumber" id="victimNumber" required className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="victimAge" className="text-base font-semibold">Victim Age</label>
                  <input type="number" name="Victimage" id="victimAge" className="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="victimGender" className="text-base font-semibold">Victim Gender</label>
                  <div className="flex">
                     <input type="radio" name="Gender" id="victimGenderM" className="mr-1"/>
                     <label for="victimGenderM" className="text-base font-normal">Male</label>
                     <input type="radio" name="Gender" id="victimGenderF" className="ml-4"/>
                     <label for="victimGenderF" className="text-base font-normal">Female</label>
                  </div>
               </div>
               <div className="info flex flex-col items-center">
                  <label for="murder" className="text-base font-semibold">Murder Flag</label>
                  <div className="flex">
                     <input type="radio" name="murder" id="murderY" className="mr-1"/>
                     <label for="murderY" className="text-base font-normal">Yes</label>
                     <input type="radio" name="murder" id="murderN" className="ml-4"/>
                     <label for="murderN" className="text-base font-normal">No</label>
                  </div>
               </div>
            </div>
         </div>
         <div className="submit">
            <input type="submit" value="Add Incident" className="w-full md:w-auto h-12 px-8 bg-red-200 hover:bg-red-600 hover:text-white active:bg-red-900 text-lg font-semibold rounded-md cursor-pointer"/>
         </div>
      </form>
   </div>
</div>

  )
}

export default Dashboard