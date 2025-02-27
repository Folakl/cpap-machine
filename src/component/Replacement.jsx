import React from 'react'

const Replacement = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  my-10 '>
      <div >
      <img className="w-[500px] h-[400px]  " src={require("../assets/image 118.png")} alt=""  />
      </div>
      <div className=' lg:my-0 md:my-0 my-5 mx-10     '>
        <h3>YOU NEED TO KNOW!</h3>
        <h3 className='font-bold text-[30px]'>Replacement Schedule</h3>
        <ul className='list-disc py-2'>
            <li className='py-2'> Mask – every 6 months</li>
            <li className='py-2'>Machine filters – every 3 - 6 weeks</li>
            <li className='py-2'>Tubing – every 3 months</li>
            <li className='py-2'> Water tub – every 6 - 12 months</li>
        </ul>
        <button className="text-white w-[200px] h-[50px] bg-[#F0592A] rounded-2xl mx-5 my-10">Read More</button>

      </div>
    </div>
  )
}

export default Replacement
