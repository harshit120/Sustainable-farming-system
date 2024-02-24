import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import image1 from "../assets/government.jpg"

const GovtSche = () => {
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
    <div className='bg-[#A2CFA4] px-[60px]'>
       <p className='pp10 text-center pt-[50px]'>Government scheme </p>
       <p className='text-center pb-[50px] text-[19px] font-serif '>Policies for a Better Tomorrow!</p>
    <div className='flex flex-row space-x-16'>
     
        <div className='flex-1 pt-[60px]'>
<p className='text-[22px]'>
government policies aim to provide a structured framework for the agricultural sector, ensuring sustainable growth, economic stability, and the well-being of farmers. Government policies in agriculture can be diverse and may cover a range of areas.</p>
<p className='text-[22px]'>
Here are some common types and their potential benefits for farmers</p>
<p className='text-[22px]'> Crop Insurance</p>
<p className='text-[22px]'>
Subsidies and Support Programs
</p>
<p className='text-[22px]'>
Price Support Mechanisms <NavLink to="/govtschepage" className="text-[16px] relative top-[2px] text-gray-100" > Read More...</NavLink>
</p>



        </div>
        <div className='pr-[40px]'>
        <img src={image1} alt="" srcset="" className='w-[500px] mb-[120px] rounded-3xl' />
        </div>
    </div>
    </div>
  )
}

export default GovtSche