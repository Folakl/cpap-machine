import React from 'react'

const Replacement = () => {
  return (
    <div className='flex'>
      <div className='w-[945px] h-[610px]'>
      <img className="w-[645px] h-[443px] my-[120px] " src={require("../assets/image 118.png")} alt=""  />
      </div>
      <div className='w-[505px] h-[400px] my-[150px] '>
        <h3>YOU NEED TO KNOW!</h3>
        <h3 className='font-bold text-[36px]'>Replacement Schedule</h3>
        <ul className='list-disc py-2'>
            <li className='py-2'> Mask – every 6 months</li>
            <li className='py-2'>Machine filters – every 3 - 6 weeks</li>
            <li className='py-2'>Tubing – every 3 months</li>
            <li className='py-2'> Water tub – every 6 - 12 months</li>
        </ul>
        <button className="text-white w-[200px] h-[50px] bg-[#F0592A] rounded-2xl my-10">Read More</button>

      </div>
    </div>
  )
}

export default Replacement
