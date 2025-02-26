import React from 'react'

const Lookingforcpap = () => {
  return (
    <div>
       <div className="bg-[#F3F4F8] w-full h-[648px] flex">
       <div className='my-[120px] w-[490px] h-[370px]  mx-[100px] '>

        <h3>What we offer</h3> 
        <h3 className='text-[36px] font-bold my-10'>Looking for CPAP mask parts?</h3>
        <h3 className='py-5'>CPAP Market has all CPAP mask accessories, including headgear, cushion/pillows, clips, frames, tubes, elbows, and more ready to ship today.</h3>
        <div className='font-bold'>
            <button className='w-[145px] h-[43px] rounded-3xl text-[#1473AC] border-2 bg-white border-[grey]'>Clips</button>
            <button className='w-[145px] h-[43px] rounded-3xl text-[#1473AC] border-2 bg-white border-[grey]'>Frames</button>
            <button className='w-[145px] h-[43px] rounded-3xl text-[#1473AC] border-2 bg-white border-[grey]'>Tubes</button>
            <button className=' my-5 w-[145px] h-[43px] rounded-3xl text-[#1473AC] border-2 bg-white border-[grey]'>Elbows</button>
            <button className=' my-5 w-[145px] h-[43px] rounded-3xl text-[#1473AC] border-2 bg-white border-[grey]'>Search all</button>
        </div>
       </div>
       <div>
       <img className="w-[645px] h-[443px] my-[120px] " src={require("../assets/image 117dd.png")} alt=""  />
       </div>
    </div>
    </div>
  )
}

export default Lookingforcpap
