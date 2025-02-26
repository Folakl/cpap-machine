import React from 'react'

const Learnmore = ({treatment}) => {
  return (
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 mx-10'>
      {
        treatment.map((items) => (
          <div key={items.id} className='w-[393px] h-[279px]'>
            <img src={items.img} alt="" className='grid justify-center items-center mx-[50px] w-[493px] h-[277px]' />
            <div className='font-bold w-full mx-10 text-[18px] my-5'>{items.text}</div>
            <div className='lg:mx-10 md:mx-5 mx-2'>{items.text2}</div>
            <div className='text-[#1473AC] mx-10 underline py-3'>{items.text3}</div>
          
          </div>  
        ))
      }
    </div>
    </div>
  )
}

export default Learnmore
