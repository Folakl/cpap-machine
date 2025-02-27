import React from 'react'

const Disorder = () => {
  return (
    <div>
        <div className='bg-[#F3F4F8] grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1'>
      <div className='text-[22px] px-5'>
        <h3>Sleep Apnea is a potentially serious disorder</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore laboriosam voluptatem asperiores recusandae quidem unde vero aut, non nesciunt, repellat optio illum nulla expedita adipisci nemo corporis. Quia inventore ipsa molestiae repellendus officiis recusandae possimus necessitatibus eligendi adipisci, doloribus quos facilis alias nemo tempora facere. Neque voluptatibus adipisci sint.</h3>

      </div>
      <div className=''>
      <img className="w-[500px] h-[300px] " src={require("../assets/Inspire Sleep Apnea Innovation - Obstructive Sleep Apnea Treatment.jpg")} alt=""  />

      </div>
    </div>
    </div>
  )
}

export default Disorder
