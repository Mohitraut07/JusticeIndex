import React from 'react'

function Dashboard() {
  return (

<div class="bg-cover bg-center bg-fixed bg-no-repeat" >
   {/* <div class="navbar bg-gray-100 rounded-b-3xl p-6">
      <div class="logo text-xl font-semibold text-red-600">
         JusticeIndex
      </div>
      <div class="logout">
         <a href="" class="text-lg font-semibold text-red-600">Log Out</a>
      </div>
   </div> */}
   <div class="container py-10 px-20 md:px-40 lg:px-150 mt-8 mb-4 rounded-lg bg-slate-950 bg-opacity-75 flex flex-col items-center">
      <div class="addData text-2xl font-semibold pb-5">
         Add Data
      </div>
      <form action="" method="post" class="flex flex-col items-center gap-5">
         <div class="detailContainer flex flex-col md:flex-row gap-10 py-5">
            <div class="Details flex flex-col items-center gap-6">
               <div class="heading font-semibold text-lg">
                  Criminal Details
               </div>
               <div class="info flex flex-col items-center">
                  <label for="criminalName" class="text-base font-semibold">Criminal Name</label>
                  <input type="text" name="Criminalname" id="criminalName" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="criminalAge" class="text-base font-semibold">Criminal Age</label>
                  <input type="number" name="Criminalage" id="criminalAge" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="criminalGender" class="text-base font-semibold">Criminal Gender</label>
                  <div class="flex">
                     <input type="radio" name="Gender" id="criminalGenderM" required class="mr-1"/>
                     <label for="criminalGenderM" class="text-base font-normal">Male</label>
                     <input type="radio" name="Gender" id="criminalGenderF" class="ml-4"/>
                     <label for="criminalGenderF" class="text-base font-normal">Female</label>
                  </div>
               </div>
            </div>
            <div class="Details flex flex-col items-center gap-6">
               <div class="heading font-semibold text-lg">
                  Crime Details
               </div>
               <div class="info flex flex-col items-center">
                  <label for="type" class="text-base font-semibold">Crime Type</label>
                  <input type="text" name="cType" id="type" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="location" class="text-base font-semibold">Location</label>
                  <input type="text" name="city" id="city" required placeholder="City" class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
                  <input type="text" name="country" id="country" required placeholder="Country" class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none mt-2"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="date" class="text-base font-semibold">Date</label>
                  <input type="date" name="Date" id="date" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="reportedTo" class="text-base font-semibold">Reported to</label>
                  <input type="text" name="Reportedto" id="reportedTo" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
            </div>
            <div class="Details flex flex-col items-center gap-6">
               <div class="heading font-semibold text-lg">
                  Victim Details
               </div>
               <div class="info flex flex-col items-center">
                  <label for="victimNumber" class="text-base font-semibold">Number of Victims</label>
                  <input type="number" name="Victimnumber" id="victimNumber" required class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="victimAge" class="text-base font-semibold">Victim Age</label>
                  <input type="number" name="Victimage" id="victimAge" class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"/>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="victimGender" class="text-base font-semibold">Victim Gender</label>
                  <div class="flex">
                     <input type="radio" name="Gender" id="victimGenderM" class="mr-1"/>
                     <label for="victimGenderM" class="text-base font-normal">Male</label>
                     <input type="radio" name="Gender" id="victimGenderF" class="ml-4"/>
                     <label for="victimGenderF" class="text-base font-normal">Female</label>
                  </div>
               </div>
               <div class="info flex flex-col items-center">
                  <label for="murder" class="text-base font-semibold">Murder Flag</label>
                  <div class="flex">
                     <input type="radio" name="murder" id="murderY" class="mr-1"/>
                     <label for="murderY" class="text-base font-normal">Yes</label>
                     <input type="radio" name="murder" id="murderN" class="ml-4"/>
                     <label for="murderN" class="text-base font-normal">No</label>
                  </div>
               </div>
            </div>
         </div>
         <div class="submit">
            <input type="submit" value="Add Incident" class="w-full md:w-auto h-12 px-8 bg-red-200 hover:bg-red-600 hover:text-white active:bg-red-900 text-lg font-semibold rounded-md cursor-pointer"/>
         </div>
      </form>
   </div>
</div>

  )
}

export default Dashboard