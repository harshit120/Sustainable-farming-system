import React, { useState, useEffect } from 'react';

import Fertilizerpage2 from './Fertilizerpage2';

const FertilizerPage = () => {
  const [fertilizers, setFertilizers] = useState([]);

  const fetchFertilizers = async () => {
    console.log("log");
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/fertilizers`);
      const data = await response.json();
      console.log(data);
      setFertilizers(data.data.fertilizers);
    } catch (error) {
      console.error('Error fetching fertilizers:', error);
    }
  };
  
  useEffect(() => {
    fetchFertilizers();
  }, []);

  return (
    <div className='bg-[#ACD2AD]'>
      <h1 className="text-center text-4xl pt-4 ">Fertilizers</h1>
      <div>
        {fertilizers.map((fertilizer) => {return (
         <Fertilizerpage2 key={fertilizer._id} fertilizer={fertilizer} />
)})}
      </div>
     
    </div>
  );
}

export default FertilizerPage;