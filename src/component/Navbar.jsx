import React, { useState } from "react";
import {Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

 const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = ()=>{
      setIsMenuOpen(!isMenuOpen);
   };
    return (
     <header className="">
      <nav className=" grid" >
        <div className="lg:px-16 md:px-10 px-8 flex justify-between items-center my-5 ">
           <Link  to="/" >
            <img className="lg:w-[261px] md:w-[261px] w-[241px]  h-[56px] " src={require("../assets/Group 2491 (1).png")} alt="" />
            </Link>
         <div className="lg:flex md:flex  hidden" >
            <input type="text" name="" id="" placeholder="Search" className="lg:w-[495px] md:w-[200px]  h-[45px] border-2 border-black rounded-2xl  mx-10 px-5  "  />
            <img className="w-[17px] h-[17px] bg-white relative right-[70px] my-4  " src={require("../assets/Frame 88.png")} alt=""/>
         </div>
      
         <div className="    gap-5 lg:flex md:flex ">
            <div className=" flex items-center gap-2">
                  <img className="w-[30px] h-[25px] " src={require("../assets/Frame 38 (1).png")} alt=""/>
            <p>Blog</p>
            </div>

            <div className=" flex items-center gap-2">
            <img className="w-[30px] h-[25px] " src={require("../assets/Frame 37 (1).png")} alt=""  />
            <p>Account</p>
            </div>

            <div className=" flex items-center gap-2">
                <img className="w-[30px] h-[25px] " src={require("../assets/Frame 36 (1).png")} alt=""  />
            <p>Cart(10)</p>
            </div>
         
            
           
         </div>
           {/* mobile screen */}
         <div className="cursor-pointer lg:hidden md:hidden block " onClick={toggleMenu}>
           <RxHamburgerMenu size={25}/>
         </div>
         {
            isMenuOpen && (
            <div>
               <div className="  grid gap-2 my-4 absolute  bg-white w-[150px] ">
                   <img className="w-[35px] h-[25px] " src={require("../assets/Frame 38 (1).png")} alt=""/>
                   <p>Blog</p>
                   <img className="w-[35px] h-[25px] " src={require("../assets/Frame 37 (1).png")} alt=""  />
                   <p>Account</p>
                   <img className="w-[35px] h-[25px] " src={require("../assets/Frame 36 (1).png")} alt=""  />
                   <p>Cart(10)</p>
               </div>
               <div className="flex lg:hidden md:hidden absolute top-60 left-5" >
                   <input type="text" name="" id="" placeholder="Search" className="w-[300px] h-[45px] border-2 relative border-black rounded-2xl   px-5  "  />
                   <img className="w-[17px] h-[17px] absolute bg-white mx-[260px] my-4   " src={require("../assets/Frame 88.png")} alt=""/>
              </div>
                 
         
            </div>
               
               
            )
         }
        </div>
       
      
           <div className="lg:w-full md:w-full w-full">
        <ul className='bg-[#615C99] flex  lg:gap-20 md:gap-20 gap-5 lg:px-[65px] md:px-[65px] px-5 text-white h-[50px] py-4  font-bold'>
           <Link to="/Cpap_machines"  className="cursor-ponter text-[10px] lg:text-[16px] md-[16px]">MACHINES</Link>
            <Link to="/Cpap_masks"  className="cursor-pointer text-[10px] lg:text-[16px] md-[16px]">MASKS</Link>
            <li  className="cursor-pointer text-[10px] lg:text-[16px] md-[16px]">CPAP SUPPLIES</li>
            <li  className="cursor-pointer text-[10px] lg:text-[16px] md-[16px]">HUMIDIFIERS</li>
            <li  className="cursor-pointer text-[10px] lg:text-[16px] md-[16px]">  MORE....</li>
        </ul>
        </div>
        </nav>
        
      
        
      

     </header>
    )
}
export default Navbar 
