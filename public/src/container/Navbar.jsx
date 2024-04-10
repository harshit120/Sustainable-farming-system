import React, { useState } from "react";

import { NavLink,Link } from 'react-router-dom';
import Home from "./Home";

const Navbar = () => {
  const [open ,setopen] =useState("true");
    
  return (
    <div className="flex flex-row flex-wrap items-center space-x-[374px]  py-3 pl-[80px] pr-[88px] bg-[#57A35B]">
            <NavLink className="text-[30px]" to="/" >KrishiUrjaa</NavLink>

    
      
      
      <div className="flex flex-row flex-wrap space-x-[50px]  text-[16px]">
      <NavLink className="hover:scale-150 " to="/" >Home</NavLink>
<NavLink className="hover:scale-150 " to="/fertilizerPage"   >Fertilizer</NavLink>
<NavLink className="hover:scale-150 " to="/cropPage" >Crop</NavLink>
<NavLink className="hover:scale-150 " to="/govtschePage" >Government Schemes</NavLink>
<NavLink className="hover:scale-150 " to="/faqPage" >FAQ</NavLink>
<NavLink className="hover:scale-150 " to="/aboutusPage" >About us</NavLink>
<NavLink className="hover:scale-150 " to="/login" >Sign in </NavLink>

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
