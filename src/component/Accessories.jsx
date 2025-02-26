import React from 'react'

const Accessories = ({equipment}) => {
  return (
    <div className='grid grid-cols-4 gap-5 my-10 mx-10'>
      {
        equipment.map((items) => (
          <div key={items.id} className='w-[241px] h-[279px]'>
            <img src={items.img} alt="" className='grid justify-center items-center mx-[50px] w-[120px] h-[120px]' />
            <div className='font-bold w-[191px] text-center text-[18px] my-5'>{items.text}</div>
            <div>{items.text2}</div>
          </div>  
        ))
      }
    </div>
  )
}

export default Accessories
