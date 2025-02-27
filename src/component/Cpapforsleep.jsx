import React from 'react'

const Cpapforsleep = () => {
  return (
    <div>
      <div className='bg:[#F3F4F8] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
        <div className=' justify-self-center mx-5'>
            <div className='flex text-[22px] gap-2 '>
             <h3 className='text-[#1473AC] '>Home </h3>
             <h3 className=''> /Cpap Machines</h3>
            </div>
            <h3 className='text-[36px] my-5'>CPAP Machines for Sleep Apnea</h3>
             <p className='text-[22px]'>Search all of our available machine types as well as machine accessories and replacement Parts below</p>
        </div>
        <div className=''>
        <img className="w-[350px] h-[350px] my-5   " src={require("../assets/Imagessix.png")} alt=""  />
        </div>



      </div>
      <div></div>



    </div>
  )
}

export default Cpapforsleep
