import React from 'react'

const Cpapmachines = ({machines}) => {
  return (

      <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-self-center gap-5 my-10'>
        {
            machines.map((items) => (
                
                <div  key={items.id} className='lg:w-[210px]  md:w-[210px] w-[150px] h-[224px] text-center border-[grey] border-2 rounded-3xl'>
                    <div className='grid justify-center items-center '><img src={items.img} alt="show me" className='w-[138.85px] h-[138.92px]' /></div>
                    <div className='py-10 font-bold'>{items.text}</div>

                </div>
                
             
            ))
        }
        
      </div>

  )
}

export default Cpapmachines
