import React from 'react'

const Buttons = () => {
  return (
    <div>
        <nav className="text-[#1473AC] mx-[150px] my-[70px] flex justify-between">
         <button className="w-[197px] h-[50px] rounded-3xl  border-[grey] border-2 hover:bg-blue-900 hover:text-white">Products</button>
         <button className="w-[197px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Brands</button>
         <button className="w-[197px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Sales</button>
         <button className="w-[197px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Services</button>
         <button className="w-[197px] h-[50px] rounded-3xl  border-[grey] border-2  hover:bg-blue-900 hover:text-white">Resources</button>
        </nav>
    </div>
  )
}

export default Buttons
