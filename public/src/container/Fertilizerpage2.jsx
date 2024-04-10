import React, { useState, useEffect } from 'react';
import workInProgress from "../assets/workInProgress.jpg"


const Fertilizerpage2 = ({key,fertilizer}) => {
    const [showMore, setShowMore] = useState(false);

  return (
    <div key={key}             className="flex flex-row items-center px-[6%] space-x-[100px] bg-white rounded-[20px] mt-16 shadow-lg py-4 w-[70vw] mx-auto shadow-slate-500"
    >
       <img src={workInProgress} className="w-[300px]  h-[300px] rounded-3xl" alt="" />
       <div className="flex flex-col ">
      <h2  className="text-[25px] mb-4">{fertilizer.name}</h2>
      <p  className='mb-3'>{fertilizer.description} {showMore == false ? (
            <span
              onClick={() => {
                setShowMore(true);
              }}
              className="hover:cursor-pointer text-blue-800"
            >
              Read More
            </span>
          ) : null}</p>
  
  
  {showMore == true ? (  <>
      <p className='mb-3'><strong>Recommended Crops:</strong> {fertilizer.recommended_crops.join(', ')}</p>
      <p  className='mb-3'><strong>Application Rate:</strong> {fertilizer.application_rate}</p>
      <p  className='mb-3'><strong>Frequency:</strong> {fertilizer.frequency} </p>
      <span
                onClick={() => {
                  setShowMore(false);
                }}
                className="hover:cursor-pointer text-blue-800 text-[18px] mt-4"
              >
                Read less
              </span>
      </>
        ) : null}
      </div>
    </div>
  );
};

export default Fertilizerpage2;
