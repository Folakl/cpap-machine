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
        <div className="lg:px-16 md:px-10 px-2 flex justify-between items-center my-5 ">
           <Link  to="/" >
            <img className="lg:w-[261px] md:w-[261px] w-[241px]  h-[56px] " src={require("../assets/Group 2491 (1).png")} alt="na me" />
            </Link>
         <div className="lg:flex md:flex  hidden" >
            <input type="text" name="" id="" placeholder="Search" className="lg:w-[495px] md:w-[200px]  h-[45px] border-2 border-black rounded-2xl  mx-10 px-5  "  />
            <img className="w-[17px] h-[17px] bg-white relative right-[70px] my-4  " src={require("../assets/Frame 88.png")} alt=""/>
         </div>
      
         <div className="    gap-5 lg:flex md:flex hidden ">
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
         <div className="cursor-pointer lg:hidden md:hidden hidden " onClick={toggleMenu}>
           <RxHamburgerMenu size={25}/>
         </div>
         {
            isMenuOpen && (
            // <div className="">
            //    <div className="  grid gap-2 my-4 absolute  bg-[blue]  text-white font-bold ">
            //        <img className="w-[35px] h-[25px] " src={require("../assets/Frame 38 (1).png")} alt=""/>
            //        <p>Blog</p>
            //        <img className="w-[35px] h-[25px] " src={require("../assets/Frame 37 (1).png")} alt=""  />
            //        <p>Account</p>
            //        <img className="w-[35px] h-[25px] " src={require("../assets/Frame 36 (1).png")} alt=""  />
            //        <p>Cart(10)</p>
            //    </div>
            //    <div className="flex lg:hidden md:hidden absolute mt-[200px] " >
            //        <input type="text" name="" id="" placeholder="Search" className="w-[300px] h-[45px] border-2 relative border-black rounded-2xl   px-5  "  />
            //        <img className="w-[17px] h-[17px] absolute bg-white mx-[260px] my-4   " src={require("../assets/Frame 88.png")} alt=""/>
            //   </div>
                 
         
            // </div>
            <div>
               <select name="" id="">
                  <option value="">Account</option>
                  <option value="">Blog</option>
                  <option value="">cpap</option>
                  <option value="">accesories</option>
               </select>
            </div>
               
               
            )
         }
        </div>
       
      
           <div className="lg:w-full md:w-full w-full">
        <ul className='bg-[#615C99] flex  lg:gap-10 md:gap-10 gap-5  px-5 text-white h-[50px] py-4  font-bold'>
           <Link to="/"  className="cursor-ponter lg:text-[19px] md:text-[19px] text-[9px] ">MACHINES</Link>
           <Link to="/Cpap_masks"  className="cursor-ponter lg:text-[19px] md:text-[19px] text-[9px] ">MASKS</Link>  
           <Link to="/Cpap_machines"  className="cursor-ponter lg:text-[19px] md:text-[19px] text-[9px] ">CPAP SUPPLIES</Link>  
            <Link  to='/disorder'><li  className="cursor-pointer lg:text-[19px] md:text-[19px] text-[9px] ">HUMIDIFIERS</li></Link>
             <Link to='/stayintouch '>    <li  className="cursor-pointer lg:text-[19px] md:text-[19px] text-[9px] ">  MORE....</li></Link>
        </ul>
        </div>
        </nav>
        
      
        
      

     </header>
    )
}
export default Navbar 
