import React, { useState, useEffect } from 'react';
import axios from 'axios';
import workInProgress from "../assets/workInProgress.jpg";

const FertilizerPage = () => {
  const [fertilizers, setFertilizers] = useState([{ name: 'Dummy Fertilizer 1',
  description: 'Description of Dummy Fertilizer 1',
  recommended_crops: ['Crop A', 'Crop B'],
  application_rate: '50 kg/acre',
  frequency: 'Once a month',}]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        const response = await axios.get('/api/fertilizers');
        setFertilizers(response.data);
      } catch (error) {
        console.error('Error fetching fertilizers:', error);
      }
    };

    fetchFertilizers();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl mt-8 font-semibold">Fertilizers</h1>
      <div>
        {fertilizers.map(fertilizer => (
          <div key={fertilizer._id}             className="flex flex-row justify-around px-[10%] space-x-10 mt-16 shadow-lg py-4 w-[90vw] mx-auto shadow-slate-500"
          >
             <img src={workInProgress} className="w-[300px]  h-[300px] rounded-3xl" alt="" />
             <div className="flex flex-col ">
            <h2  className="text-4xl mb-4">{fertilizer.name}</h2>
            <p><strong>Description:</strong> {fertilizer.description} {showMore == false ? (
                  <span
                    onClick={() => {
                      setShowMore(true);
                    }}
                    className="hover:cursor-pointer"
                  >
                    Read More
                  </span>
                ) : null}</p>
        
        
        {showMore == true ? (  <>
            <p><strong>Recommended Crops:</strong> {fertilizer.recommended_crops.join(', ')}</p>
            <p><strong>Application Rate:</strong> {fertilizer.application_rate}</p>
            <p><strong>Frequency:</strong> {fertilizer.frequency} <span
                      onClick={() => {
                        setShowMore(false);
                      }}
                      className="hover:cursor-pointer"
                    >
                      Read less
                    </span></p>
            </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default FertilizerPage;
