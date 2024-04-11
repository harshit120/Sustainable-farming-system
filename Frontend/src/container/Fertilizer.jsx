import React from 'react'
import image1 from "../assets/fertilizer.jpg"
import { NavLink } from 'react-router-dom';
const Fertilizer = () => {
    const style2=`
    .pp10{
        
        color: #000;
font-family: Kreon;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
    }
    `;
  return (
    <div className='bg-[#fff] pt-[60px] px-[60px]'>
       <p className='pp10 text-center  '>Fertilizer </p>
       <p className='text-center pb-[50px] text-[19px] font-serif '>Grow Beyond Limits with Nutrient-Rich Fertilizers!</p>
    <div className='flex flex-row space-x-16 '>
     
        <div className='flex-1 pt-[50px]'>
        <p  className='text-[19px] text-justify'> Cultivate success with our scientifically formulated fertilizers, designed to enhance soil fertility and promote robust plant growth. Elevate your agricultural practices with confidence, 
  knowing you have the right nutrients for a bountiful harvest. </p>
<p className='text-[19px] text-justify mt-1'>
Fertilizer is a substance or mixture of substances applied to soil or plants to supply essential 
nutrients that promote plant growth. These nutrients are crucial for the development and well-being
 of plants, aiding in processes such as photosynthesis, root development, and overall plant metabolism.
 
 There are three primary nutrients that plants require in relatively large amounts, known as macronutrients.
  These are:Nitrogen (N)   Phosphorus (P)   Potassium (K). <NavLink to="/fertilizerpage" className="text-[16px] relative top-[2px] text-blue-800"   >Read More...</NavLink></p>


        </div>
        <div className='pr-[40px]'>
          <img src={image1} alt="" srcset="" className='w-[500px] mb-[80px] h-[500px] rounded-3xl' />
        </div>
    </div>
    </div>
  )
}

export default Fertilizer