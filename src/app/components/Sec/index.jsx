import React from "react";

function Sec() {
  return (
    <div className="bg-[#404040]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:h-96 min-[320px]:h-[500px]">
          <div className="flex items-center justify-center ">
            <div className="w-px h-48 bg-white"></div>
            <div className="text-white ml-5">
              <h1 className="font-semibold text-xl text-[#A04646]">
                Quick Response
              </h1>
              <div className="font-semibold text-xl">
                24 hours
                <br />
                An INTERPOL Incident Response Team
                <br />
                can be briefed,
                <br />
                equipped and deployed anywhere in the
                <br />
                world within 12 to 24 hours.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="w-px h-48 bg-white"></div>
            <div className="text-white ml-5">
              <h1 className="font-semibold text-xl text-[#A04646]">
                Did you know?
              </h1>
              <div className="font-semibold text-xl">
                19
                <br />
                We manage 19 police databases
                <br />
                with information on crimes and criminals,
                <br />
                accessible in real-time to countries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec;
