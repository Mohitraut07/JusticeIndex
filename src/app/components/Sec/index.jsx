import React from "react";

function Sec() {
  return (
  //   <div className="relative">
  //     <div className="w-full h-96 bg-[#404040]">
  //       <div className="absolute overflow-hidden top-0 left-0 bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)] object-cover rounded-t-md  w-full h-full " />
  //       <div className="container w-full h-96 relative z-30 flex ">
  //         <div className="con1 w-1/2 h-full flex items-center justify-center">
  //           <div className=" h-48 w-[2px] top-5 left-1/2 bg-white"></div>
  //           <div className="content">
  //             <h1 className="font-semibold text-xl text-[#A04646] ml-5 ">
  //               Quick Response
  //             </h1>
  //             <div className="font-semibold text-xl ml-5 text-white ">
  //               24 hours <br />
  //               An INTERPOL Incident Response Team <br />
  //               can be briefed, <br />
  //               equipped and deployed anywhere in the <br />
  //               world within 12 to 24 hours.
  //             </div>
  //           </div>
  //         </div>
  //         <div className="con2 w-1/2  flex items-center justify-center">
  //           <div className=" h-48 w-[2px] top-5 left-1/2 bg-white"></div>
  //           <div className="content">
  //             <h1 className="font-semibold text-xl text-[#A04646] ml-5">
  //               Did you know?
  //             </h1>
  //             <div className="font-semibold text-xl text-white ml-5">
  //               19 <br />
  //               We manage 19 police databases <br />
  //               with information on crimes and criminals,
  //               <br /> accessible in real-time to countries.
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
 
 
 

<div className="bg-[#404040]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:h-96 min-[320px]:h-[500px]">
      <div className="flex items-center justify-center ">
        <div className="w-px h-48 bg-white"></div>
        <div className="text-white ml-5">
          <h1 className="font-semibold text-xl text-[#A04646]">Quick Response</h1>
          <div className="font-semibold text-xl">
            24 hours<br />
            An INTERPOL Incident Response Team<br />
            can be briefed,<br />
            equipped and deployed anywhere in the<br />
            world within 12 to 24 hours.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-px h-48 bg-white"></div>
        <div className="text-white ml-5">
          <h1 className="font-semibold text-xl text-[#A04646]">Did you know?</h1>
          <div className="font-semibold text-xl">
            19<br />
            We manage 19 police databases<br />
            with information on crimes and criminals,<br />
            accessible in real-time to countries.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Sec;
