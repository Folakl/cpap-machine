import React from 'react'

const Buttons = () => {
  return (
    <div>
        <nav className="text-[#1473AC]  my-5 justify-self-center   justify-between  gap-2 lg:gap-20 md:gap-5 mx-5 grid  lg:grid-cols-5 md:grid-cols-5 grid-cols-2">
         <button className="w-[150px] h-[50px] rounded-3xl  border-[grey] border-2 hover:bg-blue-900 hover:text-white">Products</button>
         <button className="w-[150px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Brands</button>
         <button className="w-[150px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Sales</button>
         <button className="w-[150px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Services</button>
         <button className="w-[150px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Resources</button>
        </nav>
    </div>
  )
}

export default Buttons
