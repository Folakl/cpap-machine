import React from 'react'
import One from "../assets/image 105.png"
import Two from "../assets/image 106.png"
import Three from "../assets/Images 2(2).png"
import Four from "../assets/Imagesimages 3.png"
import Five from "../assets/Imagesfive.png"
import Six from "../assets/Imagessix.png"
import Seven  from "../assets/Imagessix.png"


const Manual = () => {
    const machines = [
        {
            id: 1,
            img: One,
            text: "Manual"
        },
        {
            id: 2,
            img: Two,
            text: "Auto/APAP "
        },
        {
            id: 3,
            img: Three,
            text: "BiPAP/VPAP/BiLevel "
        },
        {
            id: 4,
            img: Four,
            text: "BiPAP/VPAP  ST"
        },
        {
            id: 5,
            img: Five,
            text: "Travel $ Light"
        },
        {
            id: 6,
            img: Six,
            text: "Rental"
        },
        {
            id: 6,
            img: Seven,
            text: "Machine Parts "
        },
          ]
    return (    
    <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 my-5 justify-self-center'>
    {
        machines.map((items) => (
            
            <div  key={items.id} className='w-[203px] h-[224px] text-center border-[grey] border-2 rounded-lg'>
                <div className='grid justify-center items-center '><img src={items.img} alt="show me" className='w-[138.85px] h-[138.92px]' /></div>
                <div className='py-10 font-bold'>{items.text}</div>

            </div>
            
         
        ))
    }
    
  </div>
  )
}

export default Manual
