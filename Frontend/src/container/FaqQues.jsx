//import { set } from "lodash-es";
import React, { useState } from "react";
import {up} from "../assets/up.png"
// import Ellipse from '../assets/Ellipse.png'
import uparrow from "../assets/up-arrow.png"
const FaqQues = ({ val, ans }) => {
  const [open, setopen] = useState(1);
  const style = `.pp11{
        width: 1001.195px;

flex-shrink: 0;
border-radius: 14px;
border: 2px solid #006B7F;
background: var(--neutral-100, #FFF);
box-shadow: 0px 6px 16px 0px rgba(0, 107, 127, 0.19);
    }
    .pp12{
        color: var(--neutral-800, #170F49);
font-feature-settings: 'clig' off, 'liga' off;
font-family: DM Sans;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 127.273% */
    }`;
  return (
    <div className=" border-b-2 border-black pl-[43px] ">
      <style>{style}</style>

      <div className="flex flex-row justify-between pt-[51px] pb-[20px] align-top pr-10">
        <p className="pp12 flex-1 ">
          {val}
        </p>
       
       {open ==1? <img src={uparrow} alt="" srcset="" className="w-6 h-6" onClick={()=>{setopen(0)}} /> : <img src={uparrow} alt="" srcset="" className="w-6 h-6 rotate-180" onClick={()=>{setopen(1)}} />}

         
      </div>
      {open == 0 ? <p className="mb-3">{ans}</p> : <></>}
    </div>
  );
};

export default FaqQues;
