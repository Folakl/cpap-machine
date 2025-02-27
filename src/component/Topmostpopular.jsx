import React from 'react'

const Topmostpopular = () => {
  return (
    <div className="bg-[#F3F4F8] lg:flex md:flex block w-full h-fit ">
       <div className='my-20  mx-10 '> 
        <h3 className='text-[30px] pt-5 font-bold'>Top Ten Most Popular CPAP Masks in 2023</h3>
        <ul className='text-[#1473AC] list-disc my-10 text-[22px] mx-5 '>
            <li>ComfortGel Blue Nasal Mask</li>
            <li>Dreamwear Nasal Mask</li>
            <li>N30i Nasal Mask</li>
            <li>P10 Nasal Pillow Mask</li>
            <li>Wisp Nasal Mask</li>
            <li>Nuance Pro CPAP Mask</li>
        </ul>
       </div>
       <div>
       <img className="w-[545px] h-[400px] my-[120px] " src={require("../assets/image 116.png")} alt=""  />
       </div>
    </div>
  )
}

export default Topmostpopular
