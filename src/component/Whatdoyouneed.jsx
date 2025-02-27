import React from 'react'

const Whatdoyouneed = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
      
     
      <div className='mt-20 pl-5'>
      <h3 className='text-[32px] font-bold  '>What can we offer you?</h3>
      <h3> CPAP Market has a variety of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, similique et eos adipisci ducimus eveniet, quasi voluptas iure sed laboriosam dolorem nemo q
        uos cum inventore nisi. Blanditiis eius pariatur exercitationem.</h3>
        <button className='w-[200px] h-[50px] bg-[#F0592A] rounded-3xl text-white mt-10'>Choose a Device</button>
      </div>
      <div className='' >
      <img className="w-[683.74px] h-[409.53px] mt-20 " src={require("../assets/Sleep Apnea Mouth Devices_ Mouth Guards, MAD, and More.jpg")} alt=""  />
      </div>
    </div>
  )
}

export default Whatdoyouneed
