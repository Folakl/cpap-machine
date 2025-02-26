import React from 'react'

const Topmostpopular = () => {
  return (
    <div className="bg-[#F3F4F8] w-full h-[648px] flex">
       <div className='my-[120px] w-[490px] h-[370px]  mx-[100px] '> 
        <h3 className='text-[36px] font-bold'>Top Ten Most Popular CPAP Masks in 2023</h3>
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
       <img className="w-[645px] h-[443px] my-[120px] " src={require("../assets/image 116.png")} alt=""  />
       </div>
    </div>
  )
}

export default Topmostpopular
