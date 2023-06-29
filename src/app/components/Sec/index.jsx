import React from 'react'

function Sec() {
  return (
    <div className="relative">
        <div className="w-full h-96 bg-[#404040]">
        <div className="absolute overflow-hidden top-0 left-0 bg-gradient-to-r from-[rgb(0,0,0,.8)] to-[rgb(255,255,255,.3)] object-cover rounded-t-md  w-full h-full " />

        <div className="absolute h-80 w-[1px] top-5 left-40 bg-white"></div> 
        <h1 className='font-semibold text-xl text-[#A04646] my-4 absolute  top-5 left-48'>Quick Response</h1>
        <div className='font-semibold text-xl text-white my-4 absolute  top-12 left-48'>24 hours <br />
        An INTERPOL Incident Response Team <br />can be briefed, <br />
         equipped and deployed anywhere in the <br />
         world within 12 to 24 hours.</div>
        <div className="absolute h-80 w-[2px] top-5 right-[700px] bg-white"></div>
        <h1 className='font-semibold text-xl text-[#A04646] my-4 absolute  top-5 right-[500px]'>Did you know?</h1>
        <div className='font-semibold text-xl text-white my-4 absolute top-12 left-[878px]'>
        19 <br />
        We manage 19 police databases <br />with information on crimes and criminals,<br /> accessible in real-time to countries.
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Sec