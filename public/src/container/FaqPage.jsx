import React from 'react'
import workInProgress from "../assets/workInProgress.jpg"
import { faqq } from './Data'
import FaqQues from './FaqQues'
const FaqPage = () => {
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
    <div className='flex flex-col space-y-8 px-[220px] bg-[#ACD2AD]'>
      <style>{style2}</style>
     <p className='pp10 text-center mb-[33px]  '>FAQs</p>
   {  faqq.map((val)=>{
    return(<FaqQues val={val.question} ans={val.answer}/>)


     })}
     </div>
  )
}

export default FaqPage