import React from 'react'

const Whatdoyouneed = () => {
  return (
    <div className='flex'>
      
     
      <div className='w-1/2 mt-20 mx-60'>
      <h3 className='text-[32px] font-bold my-10'>What can we offer you?</h3>
      <h3> CPAP Market has a variety of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, similique et eos adipisci ducimus eveniet, quasi voluptas iure sed laboriosam dolorem nemo q
        uos cum inventore nisi. Blanditiis eius pariatur exercitationem.</h3>
        <button className='w-[200px] h-[50px] bg-[#F0592A] rounded-3xl text-white mt-10'>Choose a Device</button>
      </div>
      <div className='w-1/2 mx-20' >
      <img className="w-[683.74px] h-[409.53px] mt-20 " src={require("../assets/Sleep Apnea Mouth Devices_ Mouth Guards, MAD, and More.jpg")} alt=""  />
      </div>
    </div>
  )
}

export default Whatdoyouneed
