import React from 'react'

const Cpapforsleep = () => {
  return (
    <div>
      <div className='bg:[#F3F4F8] flex'>
        <div className='mx-20 my-20 w-1/2'>
            <div className='flex text-[22px] gap-2 '>
             <h3 className='text-[#1473AC] '>Home </h3>
             <h3 className=''> /Cpap Machines</h3>
            </div>
            <h3 className='text-[36px] my-10'>CPAP Machines for Sleep Apnea</h3>
             <p className='text-[22px]'>Search all of our available machine types as well as machine accessories and replacement Parts below</p>
        </div>
        <div className='w-1/2'>
        <img className="w-[500px] h-[400px] my-[120px] " src={require("../assets/Imagessix.png")} alt=""  />
        </div>



      </div>
      <div></div>



    </div>
  )
}

export default Cpapforsleep
