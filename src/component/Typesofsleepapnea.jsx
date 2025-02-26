import React from 'react'
import Return from "../assets/Frame 44.png"
import Return2 from "../assets/Frame 47.png"
import Return3 from "../assets/Frame 44 (1).png"
import Return4 from "../assets/Frame 46.png"




const Typesofsleepapnea = () => {
    const equipment = [
        {id: 1,
        img: Return,
        text: "Manual",
        text2: "They are also called fixed pressure CPAPS,They let you set your pressure responses to match your own needs,They  are traditionally the least expensive"
      },
        {id: 2,
        img: Return2,
        text: "BIPAP/VPAP/BILEVEL ST machines ",
        text2: "BIPAP/VPAP, and BiLevel can effectively treats central sleep apnea"
      },
        {id: 3,
        img: Return3,
        text: "BIPAP/VPAP",
        text2: "BIPAP/VPAP switch between two pressure settings,one for inhalation and the other for  exhalation.The exhalation pressure is always lower (still positive ), and thus user notice less air  pushout when they exhale , They utilize the latest innovation to maximize your apnea therapy satisfaction. ",
      },
        {id: 4,
        img: Return4,
        text: "Auto",
        text2: "BIPAP/VPAP switch between two pressure settings,one for inhalation and the other for  exhalation.The exhalation pressure is always lower (still positive ), and thus user notice less air  pushout when they exhale , They utilize the latest innovation to maximize your apnea therapy satisfaction. "
    
      }
      ]
  return (
    <div>
        <div className='my-20'>
          <h3 className='text-center text-[36px]'>Different Types of Sleep Apnea Machines </h3>
          <h3 className='text-center mx-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, quia? Animi nemo earum exercitationem, expedita dignissimos modi pariatur maiores illo numquam inventore harum tenetur repellat officia quisquam doloribus laborum beatae asperiores quod eveniet distinctio, repellendus, quos fuga rerum. Esse asperiores, similique inventore omnis in, eligendi fuga praesentium reprehenderit natus nostrum laudantium, eveniet totam. Cupiditate unde enim explicabo, dolore temporibus velit ad cum possimus quisquam impedit suscipit neque molestiae totam eaque ratione nam amet, consectetur laborum dolor inventore quas placeat illo.</h3>  
        </div>
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
    </div>
  )
}

export default Typesofsleepapnea

