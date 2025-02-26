import React from 'react'

const Stayintouch = () => {
  return (
    <div className=' grid justify-center items-center mt-20'>
      <h3 className='text-[36px] font-bold'>Stay in touch with CPAP Market</h3>
      <h3 className='text-center my-5'>Be the first to know about our News and Great Deals</h3>
      <div className='flex my-8 '>
            <input type="email" placeholder='Enter email'className='border-2 border-[grey] px-4 w-[320px] relative h-[45px] rounded-3xl' />
            <button className="text-white w-[150px] h-[45px] bg-[#F0592A]  rounded-3xl  absolute mx-60">Sign up</button>
       </div>
    </div>
  )
}

export default Stayintouch
