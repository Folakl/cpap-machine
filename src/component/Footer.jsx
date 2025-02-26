import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' grid grid-cols-4 ml-10 mr-10'>
        <div className='w-[300px] h-[216px] text-center'>
            <h3 className='py-4 font-bold'>Company</h3>
            <h3>About Us</h3>
            <h3>FAQ</h3>
            <h3>Resources</h3>
            <h3>Contact Us</h3>
            <h3>Site Map</h3>
        </div>
        <div className='w-[300px] h-[216px] text-center'>
            <h3 className='py-4 font-bold'>Shop</h3>
            <h3>Shipping</h3>
            <h3>Prescription</h3>
            <h3>Warranty & Returns</h3>
            <h3>Mask Assurance</h3>
            <h3>Manufacturers</h3>
        </div>
        <div className='w-[300px] h-[216px] text-center'>
            <h3 className='py-4 font-bold'>Get Help</h3>
            <h3>Reward Points</h3>
            <h3>No Prescription?</h3>
            <h3>CPAP Rental</h3>
            <h3>New To CPAP</h3>
            <h3>Privacy Policy</h3>
        </div>
        <div className='w-[300px] h-[216px] text-center'>
            <h3 className='py-4 font-bold'>Sign Up for Our Newsletter</h3>
            <h3>Be the first to know about our News and Great Deals!</h3>
            <div className='flex my-8 '>
            <input type="email" placeholder='Enter email'className='border-2 border-[grey] px-4 w-[320px] relative h-[45px] rounded-3xl' />
            <button className="text-white w-[150px] h-[45px] bg-[#F0592A]  rounded-3xl  absolute mx-40">Sign up</button>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-5 mx-[600px] w-[169px] h-[26px] my-5'>
      <img className="w-[10.11px] h-[19.1px] " src={require("../assets/Vectorfb.png")} alt=""  />
      <img className="w-[18.42px] h-[15.1px] " src={require("../assets/VectorX.png")} alt=""  />
      <img className="w-[19.5px] h-[13px] " src={require("../assets/Vectoryoutube.png")} alt=""  />
      <img className="w-[17.33px] h-[17.33px] " src={require("../assets/VectorIg.png")} alt=""  />
      <img className="w-[17.33px] h-[17.33px]" src={require("../assets/VectorPinterest.png")} alt=""  />
      </div>
      <div className='text-center'>
        <h3>© 2023 CPAP Market - Cheapest CPAP Machines & Supplies</h3>
        <h3>* Subject to the manufacturer's minimum internet retail pricing and may therefore not qualify under these programs.</h3>
        <h3>** All ResMed products are for sale only to patients with in the United States and not to other third parties or businesses.</h3>
        <h3>** Except weekends and holidays. There may be Customs delays.</h3>
      </div>
      <div className=' grid grid-cols-4 my-20 mx-60 '>
      <img className="w-[80px] h-[39px]" src={require("../assets/image 45paypal.png")} alt=""  />
      <img className="w-[47px] h-[48px]" src={require("../assets/image 46ups.png")} alt=""  />
      <img className="w-[72px] h-[58px]" src={require("../assets/image 47Auto.png")} alt=""  />
      <img className="w-[243px] h-[68px]" src={require("../assets/image 48internet.png")} alt=""  />
      </div>
    </div>
  )
}

export default Footer

