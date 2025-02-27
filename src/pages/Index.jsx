import React from "react";
import { Link } from "react-router-dom";
import Hro from "../assets/medical2.jpg"
import One from "../assets/image 105.png"
import Cpapmachines from "../component/Cpapmachines"
import Buttons from "../component/Buttons";
import Two from "../assets/image 106.png"
import Three from "../assets/Images 2(2).png"
import Four from "../assets/Imagesimages 3.png"
import Five from "../assets/Imagesfive.png"
import Six from "../assets/Imagessix.png"
import Return from "../assets/Frame 44.png"
import Accessories from "../component/Accessories";
import Return2 from "../assets/Frame 47.png"
import Return3 from "../assets/Frame 44 (1).png"
import Return4 from "../assets/Frame 46.png"
import Return5 from "../assets/Frame 48.png"
import Return6 from "../assets/Frame 44 (3).png"
import Return7 from "../assets/Frame 44 (4).png"
import Return8 from "../assets/Frame 45 (3).png"
import Marketfaq from "../component/Marketfaq";
import Topmostpopular from "../component/Topmostpopular";
import Replacement from "../component/Replacement";
import Lookingforcpap from "../component/Lookingforcpap";
import lone from "../assets/Rectangle 127one.png"
import lone2 from "../assets/Rectangle 1012.png"
import lone3 from "../assets/Rectangle 1013.png"
import Learnmore from "../component/Learnmore";
import Resmed from "../component/Resmed";
import Footer from "../component/Footer";


const PageOne = () => {
  const machines = [
{
    id: 1,
    img: One,
    text: "CPAP Machines"
},
{
    id: 2,
    img: Two,
    text: "CPAP Masks"
},
{
    id: 3,
    img: Three,
    text: "CPAP Supplies"
},
{
    id: 4,
    img: Four,
    text: "Humidifiers & Parts"
},
{
    id: 5,
    img: Five,
    text: "Oxygen & Supplies"
},
{
    id: 6,
    img: Six,
    text: "Category Link"
}
  ];
  const equipment = [
    {id: 1,
    img: Return,
    text: "Return Mask if You don't Like It!",
    text2: "If you cannot sleep well because of the mask, return it in 30 days!"
  },
    {id: 2,
    img: Return2,
    text: "Financing Available",
    text2: "You may qualify for no downpayment, 0% interest rate for 12 months!"
  },
    {id: 3,
    img: Return3,
    text: "Fast Worldwide Shipping **",
    text2: "All packages shipped in 24hrs. You may receive it in 1-6 business days no matter where you are",
  },
    {id: 4,
    img: Return4,
    text: "Free Shipping for Orders $49 or Above",
    text2: "Ground shipping to 48 contiguous US states only"

  },
    {id: 5,
    img: Return5,
    text: "Price Match",
    text2: "We match any licensed US CPAP dealers' prices"
  },
    {id: 6,
    img: Return6,
    text: "Home Sleep Apnea Testing only $349",
    text2: "Have your Sleep Apnea Test at your home for only $349, and have 5% discount if you need CPAP supplies"
  },
    {id: 7,
    img: Return7,
    text: "Reward Points",
    text2: "Earn more with our Reward Points Program"
  },
    {id: 8,
    img: Return8,
    text: "CPAP Rental",
    text2: "Rent a CPAP machine if you are not sure you like it, or just for temporary back up"
  }
  ]
  const treatment = [
    {
      id:1,
      img:lone,
      text:"Spring cleaning tips for CPAP users",
      text2: "You know that feeling when your room is tidy, your bed is made and your sheets are fresh? Do you relish the sense of calm when everything is in it...",
      text3: "Read more"
    },
    {
      id:2,
      img:lone2,
      text:"CPAP therapy: Your key to anti-aging?",
      text2: "By Marygrace Taylor Talk about beauty rest: For sleep apnea patients, using continuous positive airway pressure (CPAP) can do more than help you...",
      text3: "Read more"
    },
    {
      id:3,
      img:lone3,
      text:"Activated oxygen: A scientifically proven way to clean your CPAP",
      text2: "For a continuous positive airway pressure (CPAP) machine to be effective, it needs two things from you: — Use your CPAP machine consistently, as p...",
      text3: "Read more"
    },
  ]
return(
            <div >
               {/* New 72 */}
                <div className="lg:px-[500px] md:px-[250px] px-5 bg-no-repeat bg-cover py-40 text-white h-[670px]  "
                
                style={{
                    backgroundImage: `url(${Hro})`,          
                  }}
                  >
                   <p>You’ll Sleep Like a Baby Abroad!</p>
                   <h3 className="text-[36px]">New Z2 Auto </h3>
                   <h3 className="text-[36px]">Travel CPAP </h3>
                   <h3>With a new motor 29% quieter than the Z1, the Z2 is designed to minimize the  pitch of the motor for optimal comfort.</h3>
                    <Link to='/accesories'><button className="text-white w-[200px] h-[50px] bg-[#F0592A] rounded-2xl my-10">Buy Now</button></Link>
                </div>
                {/* buttons */}
            <div>
              <Buttons/>
            </div>
            {/* cpap machines */}
            <div className="lg:px-16 md:px-10 px-8" >
              <div className="grid justify-center">
                <h2 className="font-bold text-center my-5 text-[36px] ">CPAP Machines, Masks & Resources</h2>
                <Cpapmachines machines = {machines}/>
                </div>
            </div>
            {/* best place online */}
            <div className="bg-[#F3F4F8] w-screen  h-fit py-5 "> 
              <h3 className="text-center font-bold text-[36px] py-5">The Best Place Online for CPAP Machines, <br />Accessories, and Equipment</h3>
              <Accessories  equipment={equipment}/>
            </div>
            {/* CPAP market faq */}
               <Marketfaq/>
            {/* top ten most popular  cpap Masks */}
            <div>
              <Topmostpopular/>
            </div>
            <div>
              <Replacement/>
            </div>
            <div>
              <Lookingforcpap/>
            </div>
            <div>
              <Learnmore treatment = {treatment}/>
            </div>
            <div className="my-10 ">
              <Resmed/>
            </div>
            <div>
              <Footer/>
            </div>
            </div>
        )
} 
export default PageOne