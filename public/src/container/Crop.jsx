import React from "react";
import crop from "../assets/crop.jpg";

import { NavLink, Link } from "react-router-dom";

const Crop = () => {
  const style2 = `
    .pp10{
        
        color: #000;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
    }
    `;
  return (
    <div className="bg-[#ACD2AD] pt-[60px] px-[60px]">
      <p className="pp10 text-center ">Crop </p>
      <p className="text-center pb-[50px] text-[19px] font-serif ">
        Harvesting Nature's Bounty, Crop by Crop!
      </p>
      <div className="flex flex-row ">
        <div className="flex-1">
          <img src={crop} alt="" srcset="" className="w-[500px] mb-[120px] rounded-2xl " />
        </div>
        <div className="flex-1 pt-[60px]">
          <p className="text-[19px] text-justify">
            Crop diversity stands as the cornerstone of agricultural resilience
            and sustainability. Beyond just ensuring food security, diverse
            crops bolster ecosystems, fortify against pests and diseases, and
            promote soil health. Embracing a rich variety of crops not only
            secures a diverse diet for communities but also mitigates risks
            associated with climate change. By fostering diverse agricultural
            landscapes, we safeguard heritage varieties, preserve cultural
            practices, and empower farmers with adaptable solutions. Each crop,
            with its unique traits and adaptations, contributes to the intricate
            web of life that sustains our planet, paving the way for a more
            resilient and fruitful future in agriculture.{" "}<NavLink to="/croppage" className="text-[16px] relative top-[2px] text-blue-700">Read More...</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crop;
