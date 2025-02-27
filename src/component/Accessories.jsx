import React from 'react'

const Accessories = ({equipment}) => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols- gap-5 mx-10 my-5 justify-self-center'>
      {
        equipment.map((items) => (
          <div key={items.id}  >
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
