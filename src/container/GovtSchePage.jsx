import React, { useState, useEffect } from 'react';
import axios from 'axios';
import workInProgress from "../assets/workInProgress.jpg";

const GovtSchePage = () => {
  const [policies, setPolicies] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('/api/policies');
        setPolicies(response.data);
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl mt-4">Government Schemes</h1>
      <div>
        {policies.map(policy => (
          <div key={policy._id}             className="flex flex-row justify-around px-[10%] space-x-10 mt-16 shadow-lg py-4 w-[90vw] mx-auto shadow-slate-500"
          >
             <img
              src={workInProgress}
              className="w-[300px] h-[300px]  rounded-3xl "
              alt=""
              srcset=""
            />
            <div className="flex flex-col  ">
            <h2 className="text-4xl mb-4">{policy.policy_name}</h2>
            <p><strong>Description:</strong> {policy.description}   {showMore == false ? (
                  <span
                    onClick={() => {
                      setShowMore(true);
                    }}
                    className="hover:cursor-pointer"
                  >
                    Read More
                  </span>
                ) : null}</p>
          
          {showMore == true ? (
                <>
            <p><strong>Applicable Crops:</strong> {policy.applicable_crops.join(', ')}</p>
            <p><strong>Eligibility Criteria:</strong> {policy.eligibility_criteria}</p>
            <p><strong>Benefits:</strong> {policy.benefits}</p>
            <p><strong>Application Process:</strong> {policy.application_process}   <span
                      onClick={() => {
                        setShowMore(false);
                      }}
                      className="hover:cursor-pointer"
                    >
                      Read less
                    </span></p>
            </>
              ) : null}  </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovtSchePage;
