import React, { useState } from "react";

import { NavLink,Link } from 'react-router-dom';
import Home from "./Home";

const Navbar = () => {
  const [open ,setopen] =useState("true");
    
  return (
    <div className="flex flex-row flex-wrap  space-x-[374px]  pt-[24px] pl-[80px] pr-[88px] bg-[#57A35B]">
      <p className="text-[30px]">KrishiUrjaa</p>
      
      
      <div className="flex flex-row flex-wrap space-x-[50px] pt-[10px] text-[16px]">
      <NavLink className=" " to="/" >Home</NavLink>
<NavLink to="/fertilizerPage"   >Fertilizer</NavLink>
<NavLink to="/cropPage" >Crop</NavLink>
<NavLink to="/govtschePage" >Government Schemes</NavLink>
<NavLink to="/faqPage" >FAQ</NavLink>
<NavLink to="/aboutusPage" >ABout us</NavLink>
<NavLink to="/login" >Login</NavLink>

        {/* <button className="text-white" >Home</button>
        <button className="text-white" >Fertilizer</button>
        <button className="text-white" >Crop</button>
        <button className="text-white" >Government schemes</button>
        <button className="text-white" >FAQ</button>
        <button className="text-white" >About us  </button>
        <button className="text-white"  >Login  </button> */}

      </div>
     
     
    </div>
  );
};
export default Navbar;
