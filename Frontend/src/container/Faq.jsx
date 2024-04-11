import React from 'react'
import FaqQues from './FaqQues';

const Faq = () => {
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
    <div className='px-[220px] pt-[39px] bg-[#ACD2AD] pb-[140px]  '>
<style>{style2}</style>
        <p className='pp10 text-center mb-[33px] '>FAQs</p>
        <div className='flex flex-col space-y-[30px] pt-[40px]'>
        <FaqQues val= "How can I access the agriculture advisory services?" ans="Users can access the agriculture advisory services by logging into the platform using their credentials or creating a new account."/>
        <FaqQues  val= "What information do I need to provide to get personalized advice for my farm?" ans="Users might need to provide details such as their region, land size, types of crops cultivated, and current agricultural practices."/>
        <FaqQues  val="Is the advisory information specific to my region and climate?" ans="Yes, the advisory information is tailored to specific regions, taking into account climate, soil conditions, and other factors affecting agriculture in that area."/>

        </div>
        
    </div>
  )
}

export default Faq